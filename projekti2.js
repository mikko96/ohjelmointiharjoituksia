const etunimi = document.querySelector('.etunimi');
const sukunimi = document.querySelector('.sukunimi');
const email = document.querySelector('.email');
const laheta = document.querySelector('.laheta');
const virhe = document.querySelector('.virheilmoitus')
const ilmoitus = document.querySelector('.ilmoitus')

laheta.addEventListener('click', e =>{
  e.preventDefault();
 
if(etunimi.value === '' || sukunimi.value === '' || email.value === ''){
  virhe.classList.add('virhe');
  etunimi.style.border = '1px solid red';
  sukunimi.style.border = '1px solid red';
  email.style.border = '1px solid red';
  virhe.innerHTML = 'Täytä kaikki kentät';
  laheta.style.background = 'red'
  laheta.value = 'Virhe! Täytä kaikki kentät.';
  setTimeout(() => virhe.classList.remove('virhe'), 3000);
  setTimeout(() => virhe.innerHTML='', 3000);
  setTimeout(() => laheta.style.background = 'rgb(51,44,44)', 3000);
  setTimeout(() => laheta.value = 'Lisää tieto', 3000);
  setTimeout(() => etunimi.style.border = '1px solid black', 3000);
  setTimeout(() => sukunimi.style.border = '1px solid black', 3000);
  setTimeout(() => email.style.border = '1px solid black', 3000);
}else{
sendJSON();
ilmoitus.innerHTML = 'Lomake lähetetty, kiitos viestistäsi '+etunimi.value;
  //  etunimi.value = '';
  //  sukunimi.value = '';
  }
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp2?code=PnWhScmEcspN8Fy7eYKnIZA37AFgUZ0fMQ1OpXOJ6dtBPBGNXAMIqQ==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("valmis, yhteys toimii");
    }
  };
  const nimi = document.querySelector('#etunimi').value;
  const sukunimi = document.querySelector('#sukunimi').value;
  const email = document.querySelector('#email').value;
  console.log("nimikentän sisältö: " + nimi);
  const viesti = document.querySelector('#viesti').value;
  console.log("viestikentän sisältö: " + viesti);
  var data = JSON.stringify({
    "EmailMsg": viesti,  //kirjoittaa sähköpostin sisällön
    "EmailTo": "mikko.ammalahti", //oma sähköposti
    "EmailName": nimi //Nimi kentän sisältö
  });
  xhr.send(data);
}