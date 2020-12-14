function showDiv() {
   document.getElementById('welcomeDiv').style.display = "block";
}
document.querySelector('.teema').addEventListener('click', e =>{
e.preventDefault();
const chk = document.querySelector('input[name="gender"]:checked').value;

if (chk=='Vaalea'){
  document.body.style.background="white";
  document.body.style.color="black";
}
else if (chk=='Tumma'){
 document.body.style.background="black";
 document.body.style.color="white";
}
else if (chk=='Sateenkaari'){
 document.body.style.background="pink";
 document.body.style.color="green";
}

});


