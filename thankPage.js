let mail = JSON.parse(localStorage.getItem("Email"));
let num = JSON.parse(localStorage.getItem("Phone"));
let code = JSON.parse(localStorage.getItem("Code"));

document.getElementById("Details").innerText = `
Email Address:  ${mail} Contact: ${code} ${num}`;

const redirect = () => {
  window.location.href = "./index.html";
};