let niz = [1,12,23,4234,121,3,15,54];

let najveca = niz[0];

//ako je paran uvecavamo za 2 ako je neparan umanjujemo za 1
let noviNiz = niz.map((el) => {
  
  if(el % 2 ===0 ){
    return el + 2;
  }else{
    return el -1 ;
  }
}
)


console.log(noviNiz);






"AI in Everyday Life: How AI Is Shaping Our World"

