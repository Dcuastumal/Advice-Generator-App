const api = "https://api.adviceslip.com/advice";

async function loadRandomAdvice() {
    const response = await fetch(api);
    const data = await response.json();

    if (response.status !== 200) {
        spanError.innerHTML = "Hubo un error" + response.status;
    } else {
        const idNumber = document.getElementById('id-number');
        const apiAdvice = document.getElementById('span-random-advices');

        idNumber.innerHTML = data.slip.id;
        apiAdvice.innerHTML = data.slip.advice;
    }
}

loadRandomAdvice();


