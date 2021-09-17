
export NVM_DIR="/Users/tedla/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

alias lt='ls -lrt'
alias gb='git branch'
alias gc='git checkout'
alias gs='git status'
alias gp='git pull --rebase'
alias ga='git add'
alias gcm="git commit -m"
alias S1='ssh -i /Users/tedla/thiru_keys/devops.pem  ec2-user@a.b.c.d'
alias S2='ssh -i /Users/tedla/thiru_keys/devops.pem  ec2-user@a.b.c.d'
alias S3='ssh -i /Users/tedla/thiru_keys/devops.pem  ec2-user@a.b.c.d'
alias ec2='f() { ssh -o "StrictHostKeyChecking no" -i /Users/tedla/thiru_keys/devops.pem  ec2-user@$1 };f'
alias gpo='gpo() { git push origin  HEAD:refs/for/$1 };gpo'
alias fng=' grep -rnw '.' -e '
alias gitreset='git reset --hard && git clean -dfx'
