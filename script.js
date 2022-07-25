/* Variables */
const numberContainer = document.querySelector('.number-container');
const thankYouResult = document.querySelector('.result-number');
const submitButton = document.querySelector('.submit-button');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thankyou-state');

/* Logica */
numberContainer.addEventListener('click', (e)=> {
    let numberSelected = e.target.innerText;
    thankYouResult.innerText = numberSelected;
    if (numberSelected > 0 || numberSelected <= 5) {
        submitButton.addEventListener('click', ()=> {
            ratingState.style.display = 'none';
            thankYouState.style.display = 'flex';
        });
    }
});

