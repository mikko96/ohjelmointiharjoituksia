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


const etunimi = document.querySelector('.etunimi');
const sukunimi = document.querySelector('.sukunimi');
const email = document.querySelector('.email');
const laheta = document.querySelector('.submit');
const virhe = document.querySelector('.virheilmoitus')

laheta.addEventListener('click', e =>{
  e.preventDefault();

if(etunimi.value === '' || sukunimi.value === '' || email.value === ''){
  virhe.classList.add('virhe');
  virhe.innerHTML = 'Täytä kaikki kentät';
  laheta.style.background = 'red'
  laheta.value = 'Virhe! Täytä kaikki kentät.';
  setTimeout(() => virhe.classlist.remove('virhe'), 3000);
  setTimeout(() => virhe.innerHTML, 3000);
  setTimeout(() => laheta.style.background = 'rgb(51,44,44)', 3000);
  setTimeout(() => laheta.value = 'Lisää tieto', 3000);
}else{

    const li = document.createElement('li');

    li.appendChild(document.createTextNode(`${etunimi.value}
    : ${sukunimi.value} `));

    viesti.appendChild(li);

    etunimi.value = '';
    sukunimi.value = '';
  }
});
