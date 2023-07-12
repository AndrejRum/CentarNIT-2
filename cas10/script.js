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

class Osoba {
  constructor(ime, prezime, email, password) {
    this.ime = ime;
    this.prezime = prezime;
    this.email = email;
    this.password = password;
    this.kupljeneKnjige = [];
  }

  kupiKnjigu(knjiga) {
    this.kupljeneKnjige.push(knjiga);
    console.log(`Knjiga '${knjiga}' je dodata u listu kupljenih knjiga.`);
  }

  prikaziKupljeneKnjige() {
    if (this.kupljeneKnjige.length > 0) {
      console.log("Lista kupljenih knjiga:");
      this.kupljeneKnjige.forEach((knjiga) => {
        console.log(`- ${knjiga}`);
      });
    } else {
      console.log("Niste kupili nijednu knjigu.");
    }
  }
}

// Glavni deo programa
const osobe = []; // Niz svih osoba

while (true) {
  console.log("\nOdaberite opciju:");
  console.log("1 - Kreiraj novu osobu");
  console.log("2 - Prikaži kupljene knjige");
  console.log("3 - Kupi knjigu");
  console.log("4 - Izlaz");

  const opcija = prompt("Unesite opciju:");

  if (opcija === "1") {
    const ime = prompt("Unesite ime:");
    const prezime = prompt("Unesite prezime:");
    const email = prompt("Unesite email:");
    const password = prompt("Unesite password:");

    const novaOsoba = new Osoba(ime, prezime, email, password);
    osobe.push(novaOsoba);

    console.log("Nova osoba je kreirana.");
  } else if (opcija === "2") {
    const indeks = prompt("Unesite indeks osobe:");

    if (indeks >= 0 && indeks < osobe.length) {
      const osoba = osobe[indeks];
      osoba.prikaziKupljeneKnjige();
    } else {
      console.log("Neispravan indeks osobe.");
    }
  } else if (opcija === "3") {
    const indeks = prompt("Unesite indeks osobe:");
    const knjiga = prompt("Unesite naziv knjige:");

    if (indeks >= 0 && indeks < osobe.length) {
      const osoba = osobe[indeks];
      osoba.kupiKnjigu(knjiga);
    } else {
      console.log("Neispravan indeks osobe.");
    }
  } else if (opcija === "4") {
    break;
  } else {
    console.log("Nepoznata opcija.");
  }
}




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
