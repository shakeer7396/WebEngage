var email = "";
var phoneNumber = "";
var code = "";

/*Funtion to store the email */
const handleEmail = () => {
  email = document.getElementById("email").value;
};

/*Funtion to store the phone number */

const handleNum = () => {
  phoneNumber = document.getElementById("number").value;
};

/*Funtion to store the country code */
const handleCode = () => {
  code = document.getElementById("code").value;
  console.log(code);
};

/*Funtion to store the user details in localstorage*/
const submit = () => {
  if (phoneNumber.length < 10) {
    alert(" You have entered an invalid Mobile number -  It is too short - length sould be equal to 10 numbers ");
  }
   else if (phoneNumber.length > 10) {
    alert(" You have entered an invalid Mobile number -  It is too long - length sould be equal to 10 numbers");
  }
   else if (email.length < 15) {
    alert("You have entered an invalid email address -  It is too short - length sould be equal or more that 5 character excluding @gmail.com ");
  }
   else if (!email.includes("@gmail.com")) {
    alert("You have entered an invalid email address-must have @gmail.com");
  }
   else {
    localStorage.setItem("Email", JSON.stringify(email));

    localStorage.setItem("Phone", JSON.stringify(phoneNumber));

    localStorage.setItem("Code", JSON.stringify(code));

    window.location.href="./thankPage.html";
  }
};