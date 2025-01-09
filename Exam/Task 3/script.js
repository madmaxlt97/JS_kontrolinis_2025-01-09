// 2 Taškai

/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.getElementById("btn").addEventListener("click", () => {
  const output = document.getElementById("output");
  const message = document.getElementById("message");

  fetch(ENDPOINT)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Klaida!");
      }
      return response.json();
    })
    .then((users) => {
      output.innerHTML = "";
      users.forEach((user) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
              <img src="${user.avatar_url}" alt="${user.login} phoot">
              <div>
                <p>${user.login}</p>
              </div>`;
        output.appendChild(card);
      });
    });
});
