
const emailnappi = document.querySelector('.lahetanappi');
console.log(emailnappi);

emailnappi.addEventListener('click', e => {
e.preventDefault();
sendJSON();
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
  const nimi = document.querySelector('#nimi').value;
  const email = document.querySelector('#email').value:
  console.log("nimikentän sisältö: " + nimi);
  const viesti = document.querySelector('#viesti').value;
  console.log("viestikentän sisältö: " + viesti);
  var data = JSON.stringify({
    "EmailMsg": "Tähän tulee postin sisältö",  //kirjoittaa sähköpostin sisällön
    "EmailTo": "mikko.ammalahti", //oma sähköposti
    "EmailName": nimi+" "+email //Nimi kentän sisältö
  });
  xhr.send(data);
}
