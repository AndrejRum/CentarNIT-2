// // const Hotel = {
// //   ime: 'DubaiHotel',
// //   lokacija: 'Dubai',
// //   brojZvezdica: '4',
// //   zaradaHotela: 0,
// //   brojSoba: 100,
// //   cenaSobe: 50
// // };



// // let pitamKorisnika = Number(prompt('Koliko soba zelite iznajmiti'));





// // function promenaStanja(brojSobaa) {
// //   if (brojSobaa > Hotel.brojSobaa) {
// //     console.log('Uneli ste prevelik broj soba.');
// //   } else {
// //     Hotel.brojSoba -= brojSobaa;
// //     Hotel.zaradaHotela = brojSobaa * Hotel.cenaSobe;

    
// //     if (brojSobaa % 5 === 0) {
// //       const brojPopusta = Math.floor(brojSobaa / 5);
// //       const popust = brojPopusta * 100;
// //       Hotel.cenaSobe -= popust;
// //     }
// //   }
// // }


// // promenaStanja(pitamKorisnika);
// // console.log(Hotel.brojSoba);
// // console.log(Hotel.zaradaHotela);



// class kuca{
//   constructor(boja , m2 , adresa ,dvoriste){
//     this.boja =boja;
//     this.m2 = m2;
//     this.adresa = adresa;
    
//   }
//   daLiImaDvoriste(){
//     if(this.dvoriste === true) console.log("Ova kuca ima dvoriste")
//     else console.log("Ova kuca nema dvoriste ");
//   }
//   cenaKuce(){
//     let cena = this.m2 * 1100;
//     console.log(`Cena vase kuce iznosi ${cena} $.`)
//     return cena;
//   }
// }



// const kuca1 = new kuca('Zelena', 46, 'Stevan Nemanje 19', false);

// class Kupac{
//   constructor(IznosNaRacunu){
//     this.IznosNaRacunu = IznosNaRacunu;
//   }

//   KupovinaStana(){
//     if(cenaKuce() < this.IznosNaRacunu) console.log('Kupac ne moze kupi dati stan')
//     else console.log('Kupac moze kupiti stan')
//   }
// }




// kupac1 = new Kupac(500000000) ;


// kupac1.KupovinaStana();




class Osoba {
  constructor(ime, prezime ,godine){
    this.ime = ime;
    this.prezime = prezime;
    this.godina = godine;
  }
  ispisiInfo(){
    console.log(Osoba);
  }
}




class Muskarac extends Osoba{
  constructor(ime,prezime,godine,brada){
    super(ime,prezime,godine)
    this.brada = brada;
  }

daLiImaBradu(){
  if(this.brada === true){
  console.log( `${this.ime} ima bradu`);
  }else{console.log(`${this.ime} nema bradu`)
}

}


}

class Zena extends Osoba{
  constructor(ime,prezime,godine,dugaKosa){
  super(ime,prezime,godine)
  this.dugaKosa = dugaKosa;

  
  
  }

  daLiImaDuguKosu(){  if(this.dugaKosa === true){
    console.log( `${this.ime} ima dugu kosu`)
  }else{
    console.log( `${this.ime} ima kratku kosu`)


  }
  }
}


let x = prompt("Muskarac / Zena ");



if(x === "Muskarac"){
  const osoba1 = new Muskarac("Andrej", "Rumenic", 18, false);
  osoba1.daLiImaBradu();
}

if(x === "Zena"){
 const osoba1 = new Zena("Andrijana", "Petrovic", 18, true);
  osoba1.daLiImaDuguKosu();

}














//Domaci je 