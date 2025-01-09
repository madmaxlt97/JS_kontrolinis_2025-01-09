// 1 Taškas

/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

console.log(Object.keys(audi));
//lyg tai "key" reikejo, bet jei ne taip supratau, galima taip:
console.log(Object.values(audi));
