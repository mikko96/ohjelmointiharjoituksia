//alert('Täällä ollaan')

function laskutehtava(ekanumero, tokanumero){
  return (ekanumero + tokanumero)
}

console.log('Täällä ollaan')

//Muuttujat: let tai const

let ika = 24;
ika = ika + 1;

console.log(ika);

const pii=3.14;

console.log('Piin likiarvo:' + pii);

const etunimi='Mikko'; //string
const sukunimi='Ämmälahti'; //string
const syntymavuosi=1996; //integer, eli kokonaisluku
const orimattilalainen=true; //boolean
let maarittelematon; //undefined

console.log("syntymavuoden tyyppi: " + typeof syntymavuosi);
console.log("nimen tyyppi: " + typeof etunimi);
console.log("orimattilalaisuuden tyyppi: " + typeof orimattilalainen);

//template string
console.log('Nimeni on ' + etunimi + ' ' + sukunimi + ' ja syntymavuoteni on ' + syntymavuosi);

const henkilotieto= ` Nimeni on ${etunimi} ${sukunimi} ja syntymavuoteni on ${syntymavuosi}`;

console.log(` Nimeni on ${etunimi} ${sukunimi} ja syntymavuoteni on ${syntymavuosi}`);

console.log(henkilotieto);

console.log(henkilotieto.length);

console.log(`Henkilotiedon pituus on: ${henkilotieto.length}`);

console.log(henkilotieto.toUpperCase());

console.log(henkilotieto.substring(0,9));

console.log(henkilotieto.substring(0,9).toUpperCase());

console.log(henkilotieto.split(' '));

const autoja = ['Hyundai', 'Toyota', 'Volvo',];

autoja[3]= 'BMW';

autoja.push('Saab');

autoja.unshift('Mercedes Benz');

autoja.pop();

console.log(autoja);

const opiskelija = {
  id: 1,
  etunimi: 'Mikko',
  sukunimi: 'Ämmälahti',
  syntymavuosi: '1996',
  koulutus: ['Peruskoulu'],
  osoite: {
    katu: 'Pihlajakaari 28',
    postinumero: 16300,
    kunta: 'Orimattila'
  }
}
console.log(opiskelija.etunimi);

const laksyt = [
  {
    id: 1,
    tehtava: 'Ohjelmointi, HTML',
    tehty: true
  },
   {
    id: 2,
    tehtava: 'Ohjelmointi, CSS',
    tehty: true
  },
   {
    id: 3,
    tehtava: 'Ohjelmointi, JavaScript',
    tehty: false
  }
];


for(let i=0; i <= 10; i++){
  console.log(`For loopin iteraatioluku on: ${i}`);
}

let i = 0;
while(i<=10){
  console.log(`While loopin iteraatioluku on: ${i}`);
  i++;
}

for(let i=0; i<laksyt.length; i++){
  console.log(laksyt[i].tehtava);
}

const laksyTehtava = laksyt.map(function(laksy){

  return laksy.tehtava;
});

  console.log(laksyTehtava);

  console.log('----------------------------------------------------------------------')


  const tehtavaTehty = laksyt.filter(function(laksy){
    return laksy.tehty === false;
  }).map(function(laksy){

  return laksy.tehtava;
});

  console.log (tehtavaTehty);

  const numero = 24;
  const nimi = 'Jorma';


if(numero < 18 || nimi === 'Jorma' ){
  console.log('Olet alaikäinen tai Jorma. Et ole tervetullut.');
}else if(numero ===18){
  console.log('Onnea, olet juuri tullut täysi-ikäiseksi')
}
else{
  console.log('Olet täysi-ikäinen');
}

const access = numero > 18 ? 'granted' : 'denied';

console.log(access);

console.log(laskutehtava(5,2));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

const kurssinOsat = document.querySelectorAll('.sisalto');

kurssinOsat.forEach((osa)=>console.log(osa));

const ul = document.querySelector('.kurssi');
const kurssinappi = document.querySelector('.kurssinappi');
const nimiSisalto = document.querySelector('#nimi');
const asiaSisalto = document.querySelector('#tieto');
const virhe = document.querySelector('.virheilmoitus');
const viesti = document.querySelector('#tiedot');

kurssinappi.addEventListener('click', e =>{


  if(nimiSisalto.value === '' || asiaSisalto.value === ''){
      
      virhe.classList.add('virhe');
      virhe.innerHTML = 'Täytä kaikki kentät';
      kurssinappi.style.background = 'red';
      kurssinappi.value = 'Virhe! En lisännyt tietoa.';
      setTimeout(() => virhe.remove(), 3000);
      setTimeout(() => kurssinappi.style.background ='rgb(51,44,44)', 3000);
      setTimeout(() => kurssinappi.value = 'Lisää tieto', 3000);
  }else{

    const li = document.createElement('li');

    li.appendChild(document.createTextNode(`${nimiSisalto.value}
    : ${asiaSisalto.value} `));

    viesti.appendChild(li);

    nimiSisalto.value = '';
    asiaSisalto.value = '';
  }
});

const merkitseValmiit = document.querySelector('.merkinta');

merkitseValmiit.addEventListener('click', e => {
  e.preventDefault();

  if(document.querySelector('#tehta').checked){
    ul.children[0].innerHTML = '<input type="checkbox" id="tehta" checked>HTML tunnit pidetty';
  }else{
    ul.children[0].innerHTML = '<input type="checkbox" id="tehta">HTML';
  }
  if(document.querySelector('#tehtb').checked){
    ul.children[1].innerHTML = '<input type="checkbox" id="tehtb" checked>CSS tunnit pidetty';
  }else{
    ul.children[1].innerHTML = '<input type="checkbox" id="tehtb">CSS';
  }
  if(document.querySelector('#tehtc').checked){
    ul.children[2].innerHTML = '<input type="checkbox" id="tehtc" checked>JavaScript tunnit pidetty';
  }else{
    ul.children[2].innerHTML = '<input type="checkbox" id="tehtc">JavaScript';
  }
  if(document.querySelector('#tehtd').checked){
    ul.children[3].innerHTML = '<input type="checkbox" id="tehtd" checked>CI/CD tunnit pidetty';
  }else{
    ul.children[3].innerHTML = '<input type="checkbox" id="tehtd">CI/CD';
  }
});