if (sessionStorage.getItem('title') !=null){
    window.open('./html/post.html', '_blank')
}

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

/*Create post modal functionality code.*/

var createModal = document.getElementById("createModal");
var createbtn = document.getElementById("createButton");
var createClose = document.getElementsByClassName("close")[2];



function store(){
    var inputTitle= document.getElementById("title");
    sessionStorage.setItem("title", inputTitle.value);

    var inputContent= document.getElementById("content");
    sessionStorage.setItem("content", inputContent.value);
   }

createbtn.onclick = function(){
    createModal.style.display = "block";
}

createClose.onclick = function(){
    createModal.style.display = "none";
}