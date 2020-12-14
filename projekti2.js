const etunimi = document.querySelector('.etunimi');
const sukunimi = document.querySelector('.sukunimi');
const email = document.querySelector('.email');
const laheta = document.querySelector('.laheta');
const virhe = document.querySelector('.virheilmoitus')

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

  //  const li = document.createElement('li');

  //  li.appendChild(document.createTextNode(`${etunimi.value} : ${sukunimi.value} `));

  //  viesti.appendChild(li);

  //  etunimi.value = '';
  //  sukunimi.value = '';
  }
});
