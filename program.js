// let nekretnine = {
//   stan: '70000',
//   kuca: '150000',
//   plac: '30000'
// };




// racunanje_rate(15,'stan');
// racunanje_rate(10,'kuca');
// racunanje_rate(18,'plac');

// function racunanje_rate(godine, vrsta_nekretnine){

//   meseci = godine * 12;
//   rata =  nekretnine[vrsta_nekretnine] / meseci ;
//   rata = rata.toFixed(2);

//   console.log('Mesecna rata za '+ vrsta_nekretnine + ' iznosi '+ rata + 'eura, na '+ godine+' godina.' )

// }
let marka = document.getElementsByTagName('span');
/*
console.log(marka[0].innerText);
console.log(marka[1].innerText);
console.log(marka[2].innerText);
*/
for(let auto of marka){
  console.log(auto.innerText)
}
console.log('-----------------------');

let model = document.getElementsByClassName('auto_model');
for(let m of model){
  console.log(m.innerText);
}

console.log('-----------------------')

let paragraf = document.getElementById('recenica');
 
        console.log(paragraf.innerText);
    
