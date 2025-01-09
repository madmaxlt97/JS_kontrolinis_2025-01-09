// 1 Taškas

/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.getElementById("submit-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const kg = parseFloat(document.getElementById("search").value);

  const lbs = kg * 2.2046;
  const gr = kg / 0.001;
  const oz = kg * 35.274;

  document.getElementById("output").innerHTML = `<h3> ${kg} is equal:</h3> 
  <p>${lbs} lbs</p> 
  <p> ${gr} gr</p> 
  <p>${oz} oz</p>`;
});
