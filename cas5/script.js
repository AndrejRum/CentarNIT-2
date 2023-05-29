// function neka_funkcija(br1,br2,operacija){
//   if(br1 === Number(br1) && br2 === Number(br2)){
//   switch(operacija){
//     case '+':
//       console.log(br1+br2);
//       break;
//     case '-':
//     console.log(br1-br2);
//     break;
//     case '*':
//       console.log(br1*br2);
//       break;
//     case '+':
//         console.log(br1/br2);
//         break;
//   default: 
//     console.log("Uneli ste pogresnu operaciju!")
//   }
// }else{
//   console.log('nesto nije u redu!')
// }
// }
// let br1 = Number(prompt('unesite prvi broj'));
// let br2 = Number(prompt('Unesite drugi broj'));
// let operacija = prompt('Unesite operaciju');



// neka_funkcija(br1, br2, operacija)



function probera(ime , prezime){
  if(ime === 'Andrej'){
    console.log('Pravilno ste uneli ime')
  }else{
    console.log('Nepravilno uneto ime.')
  }
  if(prezime === 'Rumenic'){
    console.log('Pravilno ste uneli prezime')
  }else{
    console.log('')
  }
}