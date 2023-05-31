// // function neka_funkcija(br1,br2,operacija){
// //   if(br1 === Number(br1) && br2 === Number(br2)){
// //   switch(operacija){
// //     case '+':
// //       console.log(br1+br2);
// //       break;
// //     case '-':
// //     console.log(br1-br2);
// //     break;
// //     case '*':
// //       console.log(br1*br2);
// //       break;
// //     case '+':
// //         console.log(br1/br2);
// //         break;
// //   default: 
// //     console.log("Uneli ste pogresnu operaciju!")
// //   }
// // }else{
// //   console.log('nesto nije u redu!')
// // }
// // }
// // let br1 = Number(prompt('unesite prvi broj'));
// // let br2 = Number(prompt('Unesite drugi broj'));
// // let operacija = prompt('Unesite operaciju');



// // neka_funkcija(br1, br2, operacija)



// function probera(ime , prezime){
//   if(ime === 'Andrej'){
//     console.log('Pravilno ste uneli ime')
//   }else{
//     console.log('Nepravilno uneto ime.')
//   }
//   if(prezime === 'Rumenic'){
//     console.log('Pravilno ste uneli prezime')
//   }else{
//     console.log('')
//   }
// }

// /// ako je deljiv sa 2 i 3 
// // fiz bas

//Domaci


function provera_deljivosti(broj){
  
  if(broj === Number(broj)){

  
  if(broj % 3 === 0 && broj % 5 === 0){
    console.log('FizzBuzz');
    
  }else  if(broj % 3 === 0){
    console.log('Fizz');
  }else if(broj % 5 === 0){
    console.log('Buzz');

  }else{
    console.log('Broj nije deljiv ni sa 3 ni sa 5 :<');
  }
 
}else{
  console.log('Greska pri unosu podatka');
}
}





provera_deljivosti(Number(prompt('unesi broj za proveru')));