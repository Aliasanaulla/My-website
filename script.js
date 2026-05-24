function openDashboard(){

let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(username===""||email===""||password===""){
alert("Please fill all fields");
return;
}

document.getElementById("signupPage").classList.add("hidden");
document.getElementById("dashboardPage").classList.remove("hidden");

document.getElementById("welcomeUser").innerHTML =
"Welcome, " + username;

setReferralLink();
}

/* REF LINK */
function setReferralLink(){
document.getElementById("refLink").value =
"https://Futuretrusure.org?reference=7893654";
}

function copyLink(){
let link = document.getElementById("refLink");
link.select();
document.execCommand("copy");
alert("Referral link copied!");
}

/* WITHDRAW */
function withdrawJazzcash(){

let n = document.getElementById("jazzNumber").value;
let name = document.getElementById("jazzName").value;

if(n===""||name===""){
alert("Fill all JazzCash details");
return;
}

alert("JazzCash Withdraw Request Sent\nName: "+name+"\nNumber: "+n);
}

function withdrawEasypaisa(){

let n = document.getElementById("easyNumber").value;
let name = document.getElementById("easyName").value;

if(n===""||name===""){
alert("Fill all EasyPaisa details");
return;
}

alert("EasyPaisa Withdraw Request Sent\nName: "+name+"\nNumber: "+n);
}