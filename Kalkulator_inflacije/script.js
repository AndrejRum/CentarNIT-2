function kalkulator(){
  let stopa_inflacije = document.querySelector('#stopaInf');
  let dolari = document.querySelector('#dolari');
  let godine = document.querySelector('#godine');


// parse koristi za pretvaaranje stringa u drugi tip podatka.
if(stopa_inflacije.value && dolari.value && godine.value){
console.log(stopa_inflacije.value)

  stopa_inflacije = parseFloat(stopa_inflacije.value);
  dolari = parseFloat(dolari.value);
  godine = parseFloat(godine.value);


  //formula za izracunavanje inflacije 


  let vrednost = dolari + (dolari * (stopa_inflacije / 100));

 

  for(let i = 0; i < godine; i++){
    vrednost += vrednost * (stopa_inflacije/100);

  }

  
  vrednost = vrednost.toFixed(2);
  
  let newElement = document.createElement('div');
  newElement.className = 'new-value';
  newElement.innerText = 'Danasnjih '+ dolari + '$ vredi isto kao ' + vrednost + '$ za ' + godine + ' godina.';

  document.querySelector('.container').appendChild(newElement);

}else{
  let noviEelement = document.createElement('div');
  noviEelement.innerText = '';
  
  if(!stopa_inflacije.value|| !dolari.value|| !godine.value){
    
    noviEelement.className = 'noviElement';
    noviEelement.innerText = 'Greska pri unosu podataka!';

    document.querySelector('.container').appendChild(noviEelement);
    return;
    
  }

}



}

