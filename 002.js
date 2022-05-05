//salygos

let skaicius = 444;
let netikrasSkaicius = "444";
let loginis = false;
//visos salygos verciamos i logini kintamaji

console.log(typeof skaicius);

console.log(!!skaicius); //!!pavers i logini kintamaji. Tik 0 yra false, visi kiti skaiciai - true
console.log(!!netikrasSkaicius); // tik tuscias stringas yra false, visi kiti true

if (netikrasSkaicius) {
  //susideda is salygos, automatiskai konvertuoja i boolean arba taip arba ne
  console.log("Yes"); //vykdo jei netikras skaicius yra true, kit atveju nieko nedaro
} else if (skaicius) {
  console.log("Nezinau"); //
} else {
  //neturi salygos, nes atmeta
  console.log("No");
}

if (8 === "8") {
  // === nekonvertuoja (kai turime zinoti is anksto kas yra kas. Svarbi - node, fronte JS), jei nori konvertuoti naudoti ==
}

// || Renkasi pirmiausiai tiesa
console.log(true || true); //true
console.log(false || false); //false (nes nera is ko rinktis, nera true.
console.log(1 || 1); //true

// && renkasi mela - false
console.log(true && true);

/* loginis operatorius verciasi i viena ar kita puse. Pervertimas i neigini
> <===> <=
< <===> >=
== <===> !=
|| <===> &&
skaiciu konvertuoti i stringa paprastuoju budu
console.log('ddd', 7, '' + 7)
*/
//salygos naudoti switch,
let kas = "tas";

switch (kas) {
  case "anas":
    console.log("anas");
    break;
  case "tas":
    console.log("tas");
    break;
  case "antis":
    console.log("Antis");
    break;
  default:
    console.log("Labanakt");
    break;
}
