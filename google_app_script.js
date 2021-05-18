function onFormSubmit(e) {

    var formResponse = e.response;
    var itemResponses = formResponse.getItemResponses();
    var responderemail = formResponse.getRespondentEmail();

      for (var i=0; i<itemResponses.length; i++) {
        switch (itemResponses[i].getItem().getTitle()) {
          case "CustomerName":
            var name = itemResponses[i].getResponse();
            break;
        }
      }
  
  // Get the value from project properties

  var scriptProperties = PropertiesService.getScriptProperties();
  var scriptData = scriptProperties.getProperties();
  var final_token = scriptData['final_token'];
  var url = scriptData['jira_url'];
    
 // Logger.log(url);

    customer_names = name.split("|");

    for (var info in customer_names) {
        Logger.log(customer_names[info]);
        var data = {
            "options": [
              {
                "cascadingOptions": [],
                "value": customer_names[info]
              }
            ]
          };

        var payload = JSON.stringify(data);

        var headers = {
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization" : " Basic " + final_token
        };

        var options = {
        "method":"POST",
        "contentType" : "application/json",
        "muteHttpExceptions":true,
        "headers": headers,
        "payload" : payload
        };
      
      try {
        var response = UrlFetchApp.fetch(url, options);
        Logger.log(response);
        
      }
      catch(err){
        //
        // Sending Email to DevOps Team
        //
        var subject = '[ALERT] [Google Form] Failed to Send the CustomerName to Jira';
        var message = "ERROR: " + err
    
        MailApp.sendEmail("test@test.com", subject, message);
      }
    }
  
  try{
    //
    // Sending Email to Requested User
    //
    var message = "Requested Customer Name(s) " + name + " has been added to Jira"
    var subject = 'Request For Adding Customer Name to Jira';
    
  
    
    MailApp.sendEmail(responderemail, subject, message);
    
  }catch(err){
    //
    // Sending Email to DevOps Team
    //
    var subject = '[ALERT] [Google Form] Sending Personal Email is Failed';
    var message = "ERROR: " + err
    
    MailApp.sendEmail("test@test.com", subject, message);
  }
  
}


