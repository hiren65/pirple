///installation og GIT////////////////////
Go to site https://git-scm.com/download/win
Select download for window or whatever OS
In winow installation choose option added git bash along with window shaell editor. 
/////git commands in git bash//////////
create folder for the project.
select folder and right click and choose git bash terminal to start with.
//To iitialize git//
$ git init
//if it is web page project
//create files
$ touch index.html
$ touch style.css
$ touch script.js
//check status 
$ git status
// To add file to git
$ git add <file Name>
// To add all files in the directory
$ git add .
// To add specific extention files
$ git add *.<extention>
//To commit file if any change
$ git commit 
//And editor open up. press "i"  or "a" to enter edit mode. Press ESC button to exit edit mode.
//To Save   press SHIFT + Z SHIFT + Z (i.e. zz with shift before it)
// to check all commits
$ git log
//To commit specific file if you don`t use perameter -m than editor will popup.
$ git commit  <file name> -m "commmited message"
