const form = document.querySelector("#form-habits");

const nlwSetup = new NLWSetup(form);

const data = {
    run: ['06-06', '06-08'],
    water: ['06-04', '06-05', '06-06', '06-07', '06-08', '06-09', '06-10'],
    gym: ['06-05', '06-07', '06-09'],
    sleep: ['06-04', '06-05', '06-06', '06-07', '06-08', '06-09', '06-10'],
    book: ['06-04', '06-07', '06-10'],
    food: ['06-05', '06-06', '06-07', '06-08', '06-09']
}

nlwSetup.setData(data);

nlwSetup.load();