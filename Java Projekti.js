function perheenIat(ekanumero,tokanumero,kolmasnumero,neljasnumero){
  return (ekanumero + tokanumero + kolmasnumero + neljasnumero)
}

const etunimi='Mikko'; 
const sukunimi='Ämmälahti';
const ika= 24;
const opiskelija=true;

console.log(etunimi,ika);

if ('opiskelija'){
  console.log('kyllä');
}else{
  console.log('ei');
}

console.log(`Hei sivuilleni surffaaja, olen ${etunimi} ${sukunimi}  ${ika} vuotias opiskelija`);

const ystavat = ['Ville Mansikkaniemi', 'Jimi Lankinen', 'Aleksi Viitanen', 'Anssi Inkeroinen'];

console.log(ystavat);

console.log('Ystäväni Ville Mansikkaniemi');
console.log('Ystäväni Jimi Lankinen');
console.log('Ystäväni Aleksi Viitanen');
console.log('Ystäväni Anssi Inkeroinen');

const perhe = [
  {
    id: 0,
    etunimi: 'Sari',
    ika: 52,
    taysikaisyys: true 
  },
    {
    id: 1,
    etunimi: 'Teemu',
    ika: 26,
    taysikaisyys: true
  },
    {
    id: 2,
    etunimi: 'Minna',
    ika: 27,
    taysikaisyys: true 
  },
    {
    id: 3,
    etunimi: 'Tekaistu',
    ika: 7,
    taysikaisyys: false 
  }
];

console.log(perhe);

  const perheobjekti = perhe.filter(function(perhe){
    return perhe.taysikaisyys === true;
  }).map(function(perhe){
  return perhe.taysikaisyys;
});

console.log(perheobjekti);

  const perheobjekti2 = perhe.filter(function(perhe){
    return perhe.taysikaisyys === false;
  }).map(function(perhe){
  return perhe.taysikaisyys;
});

console.log(perheobjekti2);

console.log(perheenIat(52,26,27,7));


/////////////////////////////////////////////////////////////////////////////////
