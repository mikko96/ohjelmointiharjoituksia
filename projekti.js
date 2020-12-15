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

//const infected = document.querySelector('.infected').value;
//const tested = document.querySelector('.tested').value;
//const deaths = document.querySelector('.deaths').value;
//const date = document.querySelector('.date').value;

var getJSON = function(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function() {

        var status = xhr.status;

        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    ;}

     xhr.send(); 
};

getJSON('https://api.apify.com/v2/key-value-stores/jEFt5tgCTMfjJpLD3/records/LATEST?disableRedirect=true', function(err, data) {

    if (err !=null){
        console.error(err);
    } else {
      document.querySelector('.infected').innerHTML=`Tartunnan saaneet: ${data.infected}`;
      
      document.querySelector('.tested').innerHTML=`Testatut: ${data.tested}`;

      document.querySelector('.deaths').innerHTML=`Kuolemat: ${data.deaths}`;

      document.querySelector('.date').innerHTML=`Päivämäärä: ${data.lastUpdatedAtApify}`;
      
    }  
});