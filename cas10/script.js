// // function res(rezultat) {
// //   console.log("res", rezultat);
// // }

// // function suma(a, b, res) {
// //   let rez = a + b;
// //   res(rez);
// // }

// // suma(1, 2, res);

// function funkc1(ime, prezime){
//   console.log(`Korisnik ${ime} ${prezime} se uspesno ulogovao`);
// }

//  function funkc2(){
//   console.log("Pogreso ste uneli podatke!!!!")
// }


// function ispis(ime , prezime , funkc1, funkc2){
//   if(ime === 'Andrej' && prezime === 'Rumenic'){
//     funkc1(ime , prezime )
//   }else{
//     funkc2();
//   }
// }

// let ime = ' Andrej';
// let prezime = ' Rumenic';



// ispis('Andrej', 'Rumenic', funkc1, funkc2)




const arr = [100,12,44,556,121,44,11,7786,123,];

let max1 = arr[0];
for(let i = 1; i < arr.length;i++){
  if(arr[i]>max1){
    max1 = arr[i] - 10;
  }

}

let max2 = arr[0];

for(let i = 0; i < arr.length;i++){
  if(arr[i]< max1 && arr[i] > max2){
    max2 = arr[i];
  }

  console.log(max2);




}
