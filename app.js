function hesablaEskinaslar(məbləğ) {
  const eskİnaslar = [500, 200, 100, 50, 20, 10, 5, 1];
  let qalanMəbləğ = məbləğ;
  let netice = {};

  eskİnaslar.forEach((eskİnas) => {
    if (qalanMəbləğ >= eskİnas) {
      let say = Math.floor(qalanMəbləğ / eskİnas);
      qalanMəbləğ -= say * eskİnas;
      netice[eskİnas] = say;
    }
  });

  return netice;
}

document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#money");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let manat = parseInt(form.querySelector('[name="manat"]').value);
    let netice = hesablaEskinaslar(manat);
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    Object.entries(netice).forEach(([eskİnas, say]) => {
      let paper = document.createElement("div");

      let img = document.createElement("img");

      for (i = 1; i <= say; i++) {
        if (eskİnas == 500) {
          img.src = `media/500.jpg`;
        } else if (eskİnas == 200) {
          img.src = `media/200.jpg`;
        } else if (eskİnas == 100) {
          img.src = `media/100.jpg`;
        } else if (eskİnas == 50) {
          img.src = `media/50.jpg`;
        } else if (eskİnas == 20) {
          img.src = `media/20.jpg`;
        } else if (eskİnas == 10) {
          img.src = `media/10.jpg`;
        } else if (eskİnas == 5) {
          img.src = `media/5.jpg`;
        } else {
          img.src = `media/1.jpg`;
        }
      }
      img.alt = `${eskİnas} AZN`;

      let text = document.createElement("p");
      text.textContent = `${eskİnas} AZN: ${say} adet`;

      paper.appendChild(img);
      paper.appendChild(text);
      resultDiv.appendChild(paper);
    });
  });
});
