//Objektiniai uždaviniai
//Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.
class Stikline {

  constructor(turis) {
    this.turis = turis;
    this.kiekis = 0; //tuscia stikline
  }

  ipilti(kiekis) {
    this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
  }

  ispilti() {
    const kiekIspilta = this.kiekis;
    this.kiekis = 0;
    return kiekIspilta;
  }
  stiklinejeYra() {
    console.log(`Stiklineje ${this.turis} ml yra: ${this.kiekis} pepsio`);
  }
}
const s1 = new Stikline(200);
const s2 = new Stikline(150);
const s3 = new Stikline(100);

s1.ipilti(1000);
s2.ipilti(s1.ispilti());
s3.ipilti(s2.ispilti());

s3.ipilti(s2.ipilti(s1.ispilti(80).ispilti()).ispilti());

s1.stiklinejeYra();
s2.stiklinejeYra();
s3.stiklinejeYra();