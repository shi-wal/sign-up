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
        alert("First name must be greater than 5 letters and less than 20 letters.");
        return false;
    }

    if (lastname.length < 6 || lastname > 19) {
        alert("Last name must be greater than 5 letters and less than 20 letters.");
        return false;
    }    

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        alert("Please enter a valid e-mail address. For e.g.- example@mail.com");
        return false;
    }
        
    var myBirthday = new Date(dob);
    // set current day on 01:00:00 hours GMT+0100 (CET)
    var currentDate = new Date().toJSON().slice(0, 10) + ' 01:00:00';
    // calculate age comparing current date and borthday
    var myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));

    if (myAge < 18) {
        alert("DOB should be atleast 18 years back.");
        return false;
    }

    if(age!=myAge){
        alert("Your entered age is not getting matched with DOB.");
        return false;
    }

  
    if (mobile.length != 10) {
        alert("Mobile no. should be of 10 digits.");
        return false;
    }


    else {
        window.location.href="index.html";
        return true;
    }
}
