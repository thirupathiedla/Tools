#Pre-req Need to create ${WORKSPACE}/build.properties 
#Content 'echo SEND_EMAIL=FALSE >${WORKSPACE}/build.properties'

if (build.workspace.isRemote()) {
  channel = build.workspace.channel
}
build_properties_file_content=""
fp = new hudson.FilePath(channel, build.workspace.toString() + "/build.properties")

if (fp != null) {
  build_properties_file_content = fp.readToString()
}
def props = new Properties()
props.load(new StringReader(build_properties_file_content))

if(props["SEND_EMAIL"].equals("FALSE")){
  cancel=true
}
