// // let ime = 'Pera';
// // let godine = 19;


// // console.log(`Moje ime je ${ime}`);

// // if(godine<18){
// //   console.log(`${ime} je maloletan`);

// // }else{
// //   console.log(`${ime}, je punoletan`);
// // }


// let broj = '7';

// broj = parseInt(broj);

// console.log(typeof(broj));

// if(broj%2 === 0){
//   console.log('Broj je paran');
// }else{
//   console.log('Broj je neparan')
// }

// let number = 18;

// if(broj % 2 === 0 && broj % 3 === 0){
//   console.log('Broj je deljiv sa 2 i 3');
// }else{
//   console,log('Broj nije deljiv sa 2 i 3')
// }

let br1 = prompt("Unesite prvi broj");
let br2 = prompt("Unesite drugi broj");
let op = prompt("Unesite operaciju[+,-,/,*]");

br1 = parseInt(br1);
br2 = parseInt(br2);

if(br1 === Number(br1) && br2 === Number(br2)){
switch(op){
  case '+': 
    console.log(br1 + br2);
    break;  
  case '-':
    console.log(br1 - br2);
    break;
  case '*':
    console.log(br1 * br2);
    break;
  case '/':
    let rezultat = br1 / br2;
    rezultat = rezultat.toFixed(2);
    console.log(rezultat);
    break;
  default:
    console.log("Pogresno uneta operacija!");
    break;
}
}else{
  console.log("Greska pri unosu podataka")
}