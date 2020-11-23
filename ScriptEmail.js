
const emailnappi = document.querySelector('.lahetanappi');
console.log(emailnappi);

emailnappi.addEventListener('click', e => {
e.preventDefault();
sendJSON();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("valmis, yhteys toimii");
    }
  };
  var data = JSON.stringify({
    "EmailMsg": "Tähän tulee postin sisältö",  //kirjoittaa sähköpostin sisällön
    "EmailAddress": "mira.vorne@salpaus.fi",   //viestin kirjoittajan sähköposti
    "EmailTo": "mikko.ammalahti@edu.salpaus.fi", //oma sähköposti
    "EmailName": "Tyyppi" //Nimi kentän sisältö
  });
  xhr.send(data);
}
