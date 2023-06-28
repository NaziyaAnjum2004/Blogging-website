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

/*Added Delete modal functionality here*/

var deleteModal = document.getElementById("deleteModal");

var revert = document.getElementById("revert-btn");
var deleteBtn1 = document.getElementsByClassName("garbage")[0];
var deleteBtn2= document.getElementsByClassName("garbage")[1];
var deleteBtn3 = document.getElementsByClassName("garbage")[2];
var deleteBtn4 = document.getElementsByClassName("garbage")[3];
var deleteBtn5 = document.getElementsByClassName("garbage")[4];

/*Multiple onclicks so that modal opens up on clicking any of the 5 delelte buttons */
    
deleteBtn1.onclick = function(){
        deleteModal.style.display = "block";
}

deleteBtn2.onclick = function(){
    deleteModal.style.display = "block";
}

deleteBtn3.onclick = function(){
    deleteModal.style.display = "block";
}

deleteBtn4.onclick = function(){
    deleteModal.style.display = "block";
}

deleteBtn5.onclick = function(){
    deleteModal.style.display = "block";
}


revert.onclick = function() {
    deleteModal.style.display = "none";
}


/*This is the function which makes sure only partial string is shown which limits the amount of characters visible in the screen. */
/*Text overflow is also used in the css section which reduces the displayed text further if the text overflows due to change in screen size */
const partial = (string) => {
    if (string.length>120){
        return string.slice(0,120)+ "....";
    } else{
        return string.slice(0,string.length -10);
    }
}

/*Loop which applies the partial string function to all of the 5 blog posts */
for (let i=0; i<5; i++) {
    let str = document.getElementsByClassName("para")[i].innerHTML;
    str = partial(str);
    document.getElementsByClassName("para")[i].innerHTML = str;
}



