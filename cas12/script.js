                      class Prodavnica {
  constructor(naziv, lokacija) {
    this.naziv = naziv;
    this.lokacija = lokacija;
    this.proizvodi = [];
  }

  dodajProizvod(proizvod) {
    this.proizvodi.push(proizvod);
  }

  ukloniProizvod(ime) {
    this.proizvodi = this.proizvodi.filter(proizvod => proizvod.ime !== ime);
  }

  pretraziProizvode(minCena, maxCena) {
    return this.proizvodi.filter(proizvod => proizvod.cena >= minCena && proizvod.cena <= maxCena);
  }

  ukupnaVrednostProizvoda() {
    let ukupnaVrednost = 0;
    for (let proizvod of this.proizvodi) {
      ukupnaVrednost += proizvod.cena * proizvod.kolicina;
    }
    return ukupnaVrednost;
  }
}
let prodavnica = new Prodavnica("Maxi", "London");

prodavnica.dodajProizvod({ ime: "Hleb", cena: 10, kolicina: 2 });
prodavnica.dodajProizvod({ ime: "Jogurt", cena: 15, kolicina: 3 });
prodavnica.dodajProizvod({ ime: "Voda", cena: 5, kolicina: 1 });


prodavnica.ukloniProizvod("Jogurt");


let rezultatPretrage = prodavnica.pretraziProizvode(5, 10);
console.log(rezultatPretrage);


let ukupnaVrednost = prodavnica.ukupnaVrednostProizvoda();
console.log("Ukupna vrednost proizvoda: " + ukupnaVrednost);
