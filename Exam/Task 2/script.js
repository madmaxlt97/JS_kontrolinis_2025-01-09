// 1 Taškas

/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  let clickNum = 0;
  const btnElement = document.getElementById("btn_element");
  const btnState = document.getElementById("btn_state");

  btnElement.addEventListener("click", () => {
    clickNum++;
    btnState.textContent = clickNum;
  });
});
