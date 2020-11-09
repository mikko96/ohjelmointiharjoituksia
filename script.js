//alert('Täällä ollaan')

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