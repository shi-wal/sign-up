// var fname=document.getElementById("firstname");
// var lname=document.getElementById("lastname");
function validateform() {
    var firstname = document.myform.firstname.value;
    var lastname = document.myform.lastname.value;
    var email= document.myform.email.value;
    var age= document.myform.age.value;
    var mobile = document.myform.mobile.value;
    var dob = document.myform.dob.value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (firstname.length < 6 || firstname > 19) {
        document.getElementById("fname_error").innerHTML="First name must be greater than 5 letters and less than 20 letters.";
        return false;
    }
    document.getElementById("fname_error").innerHTML="";

    if (lastname.length < 6 || lastname > 19) {
        document.getElementById("lname_error").innerHTML="Last name must be greater than 5 letters and less than 20 letters.";
        return false;
    }
    document.getElementById("lname_error").innerHTML="";    

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        document.getElementById("email_error").innerHTML="Please enter a valid e-mail address. For e.g.- example@mail.com";
        return false;
    }
    document.getElementById("email_error").innerHTML="";
        
    var myBirthday = new Date(dob);
    // set current day on 01:00:00 hours GMT+0100 (CET)
    var currentDate = new Date().toJSON().slice(0, 10) + ' 01:00:00';
    // calculate age comparing current date and borthday
    var myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));

    if (myAge < 18) {
        document.getElementById("dob_error").innerHTML="DOB should be atleast 18 years back.";
        
    if(age!=myAge){
        document.getElementById("age_error").innerHTML="Your entered age is not getting matched with DOB.";
        return false;
    }
    }
    document.getElementById("age_error").innerHTML="";
    document.getElementById("dob_error").innerHTML="";
    if(age!=myAge){
        document.getElementById("age_error").innerHTML="Your entered age is not getting matched with DOB.";
        return false;
    }
    document.getElementById("age_error").innerHTML="";

    if (mobile.length != 10) {
        document.getElementById("mobile_error").innerHTML+="Mobile no. should be of 10 digits. ";
        return false;
    }
      document.getElementById("mobile_error").innerHTML="";

    
    if (isNaN(mobile)){  
        document.getElementById("mobile_error").innerHTML+="Enter numeric digits only. ";
        return false;  
      }


    else {
        document.getElementById("mobile_error").innerHTML="";
        return true;
    }
}
