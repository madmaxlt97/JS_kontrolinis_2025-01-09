// 2 Taškai

/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

fetch("cars.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Klaida!");
    }
    return response.json();
  })
  .then((data) => {
    const output = document.getElementById("output");
    data.forEach((car) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
            <p>${car.brand}</p>
            <ul class="models">
              ${car.models.map((model) => `<li>${model}</li>`).join("")}
            </ul>
          `;
      output.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
