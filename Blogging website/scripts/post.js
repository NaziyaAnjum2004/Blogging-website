document.getElementById("main-heading").innerHTML = sessionStorage.getItem("title");
document.getElementById("main-para").innerHTML = sessionStorage.getItem("content");

/*Sign up modal functionality code.*/

var signupModal = document.getElementById("signupModal");
var signupBtn = document.getElementById("signupButton");
var signupClose = document.getElementsByClassName("close")[0];
var signupAnchor = document.getElementById("signup-anchor");

signupAnchor.onclick = function(){
    signinModal.style.display = "none";
    signupModal.style.display = "block"
}

signupBtn.onclick = function() {
    signupModal.style.display = "block";
}


signupClose.onclick = function(){
    signupModal.style.display = "none";
}

/*Sign in modal functionality code.*/

var signinModal = document.getElementById("signinModal");
var signinBtn = document.getElementById("signinButton"); 
var signinClose = document.getElementsByClassName("close")[1];

signinBtn.onclick = function(){
    signinModal.style.display = "block";
}

signinClose.onclick = function(){
    signinModal.style.display = "none";
}

/*Little experiment feature which closes the modal when the part of the window outside the modal is clicked. Only created this for sign in modal */
window.onclick = function(){
    if(event.target === signinModal){
        signinModal.style.display = "none";
    }
}


/*function to make the heading and content editable on clicking edit button USING "CONTENTEDITABLE"*/  
var editsaveBtn = document.getElementById("edit-btn");

editsaveBtn.onclick = function(){
    if (editsaveBtn.innerHTML === "Edit"){
        document.getElementById("main-para").contentEditable = "true";          /*contenteditable set to true turns test into editable mode*/ 
        document.getElementById("main-para").style.border = "2px solid red";       /*changed borderes to match the sample page*/ 
        document.getElementById("main-heading").contentEditable = "true";
        document.getElementById("author").contentEditable = "true";                /*contenteditable set to true turns test into editable mode*/ 
        document.getElementById("main-heading").style.border = "2px solid red";
        document.getElementById("author").style.border = "2px solid red";      /*changed borderes to match the sample page*/ 
        editsaveBtn.innerHTML = "Save";                                             /*CHanged the text inside the button to save */
    } else {
        document.getElementById("main-para").contentEditable = "false";         /*contenteditable set to false reverts editable mode to normal*/ 
        document.getElementById("main-para").style.border = 0;                  /*remove borders after editable mode is gone */
        document.getElementById("main-heading").contentEditable = "false";
        document.getElementById("main-heading").style.border = 0;
        document.getElementById("author").contentEditable = "false";
        document.getElementById("author").style.border = 0;
        editsaveBtn.innerHTML = "Edit";                                         /*CHanged the text inside the button to Edit */
    }
}


/*function counts the likes and displays. Updates the likes whenever clicked*/
var likeBtn = document.getElementById("like-btn");
var likePara = document.getElementById("like-para")

let likeCount = 0;
/*When clicked for the first time. shows 1 person likes this and button text is changed to liked and stays that way */

likeBtn.onclick = function(){
    if (likeBtn.innerHTML === "Like"){
        likeBtn.innerHTML = "Liked!";
        likeCount ++;
        likePara.innerHTML = "1 person likes this!" 
    } else {
        likeCount++;
        likePara.innerHTML = `${likeCount} people like this!`;
        /*When clicked after first time changes the text below button to n people like this which increments everytime like button is clicked*/ 
    }
}



/*Functon which adds comment in the commentSection div */
if(document.getElementById("commentSection").innerHTML === ""){
    document.getElementById("commentSection").style.border = 0;
}
/*Made sure the most recent comment is added at the top of the comment section and added date display*/
function myFunction() {
    var x = document.getElementById("comment-text").value + Date() ;
    document.getElementById("commentSection").innerHTML = '<p id="para" class = "commentPara">'+x+'</p>' + document.getElementById("commentSection").innerHTML;
}
