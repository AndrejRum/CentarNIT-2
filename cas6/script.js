
// let niz = [1, 2, '21', '1232131', true, false,234324, '123123', 'agaga'];

// for(let i = 0; i < niz.length;i++){
//   if(niz[i] === Number(niz[i])){
//     console.log(`${i}. element je number`);
//   }else if(niz[i] === String(niz[i])){
//     console.log(`${i}. element je string`);
//   }else if(niz[i] === true){
//     console.log(`${i}. element je true`)
//   }else if(niz[i] === false){
//     console.log(`${i}. element je false`)
//   }
//}

let  niz = [];
for(let i = 0; i < 3;i++){
  niz[i] = prompt(`Unesite ${i + 1}. broj`);
  
}

console.log(niz)
