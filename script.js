
//Make Hamburger Menu respond to click
const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbarmenu = document.getElementsByClassName('navbar_menu')[0]
toggleButton.addEventListener('click', () => {
    navbarmenu.classList.toggle('active')
})
var tempname;
function validateName(){
    var pattName= (document.getElementById("name").value).search(/^[A-Za-z ]+$/);
    if ( pattName<0){
        tempname=document.getElementById("name").value;
        (document.getElementById("name").value)="Name should contain only alphabets!";
        document.getElementById("name").style.color="red";
    }
}
function clearName(){
    if ((document.getElementById("name").value)=="Name should contain only alphabets!"){
        (document.getElementById("name").value)=tempname;
    }
    document.getElementById("name").style.color="black";
}
var tempemail;
function validateEmail(){
    var email = document.getElementById("email").value;
    var emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ((emailregex.test(email)) == false) {
        tempemail=document.getElementById("email").value;
        (document.getElementById("email").value)="Please Enter Valid Email Address!";
        document.getElementById("email").style.color="red";
    }
}
function clearEmail(){
    if ((document.getElementById("email").value)=="Please Enter Valid Email Address!"){
        (document.getElementById("email").value)=tempemail;
    }
    document.getElementById("email").style.color="black";
}
var tempphone;
function validatePhone(){
    var phone = document.getElementById("phone").value;
    var phregex = /^\+?(?:977)?[ -]?(?:(?:(?:98|97)-?\d{8})|(?:01-?\d{7}))$/;
    if ((phregex.test(phone)) == false) {
        tempphone=document.getElementById("phone").value;
        (document.getElementById("phone").value)= "Please Enter Valid Phone Number!";
        document.getElementById("phone").style.color="red";
    }
}
function clearPhone(){
    if ((document.getElementById("phone").value) == "Please Enter Valid Phone Number!"){
        (document.getElementById("phone").value)= tempphone;
    }
    document.getElementById("phone").style.color="black";
}
function sendEmail(e){
    alert('We are not taking any queries right now')
    e.preventDefault();
    /*Email.send({
        Host : "smtp.gmail.com",
        Username : "username",
        Password : "password",
        To : 'saurav.lamichhanesaurav@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name:"+ document.getElementById("name").value
                + "<br>Email: " + document.getElementById("email").value
                + "<br>Phone Number: " + document.getElementById("phone").value
                + "<br>Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );*/
}