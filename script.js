const form = document.querySelector("#form-habits");

const nlwSetup = new NLWSetup(form);

const button = document.querySelector("header button");

button.addEventListener("click", () => {
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5);

    const dayExists = nlwSetup.dayExists(today);

    dayExists ? alert(`⚠️ Atenção: Já existe registro de hoje (${today}) no habits. Tente novamente amanhã.`) : nlwSetup.addDay(today);
});

form.addEventListener("change", save);

/* function add() {
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5);

    const dayExists = nlwSetup.dayExists(today);

    dayExists ? alert(`⚠️ Atenção: Já existe registro de hoje (${today}) no habits. Tente novamente amanhã.`) : nlwSetup.addDay(today);
} */

function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};

/* const data = {
    run: ['06-06', '06-08'],
    water: ['06-04', '06-05', '06-06', '06-07', '06-08', '06-09', '06-10'],
    gym: ['06-05', '06-07', '06-09'],
    sleep: ['06-04', '06-05', '06-06', '06-07', '06-08', '06-09', '06-10'],
    book: ['06-04', '06-07', '06-10'],
    food: ['06-05', '06-06', '06-07', '06-08', '06-09']
} */

nlwSetup.setData(data);

nlwSetup.load();