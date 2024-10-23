// variables
const inputField = document.querySelector('.main__input');
const warning = document.querySelector('.main__warning');
const btn = document.querySelector('.main__btn');

// functions

// eventlisteners
inputField.addEventListener('keydown', (event) => {
    if (event.key !== '1' && event.key !== '0' && event.key !== 'Delete' && event.key !== 'Backspace') {
        warning.style.display = 'block';
        inputField.disabled = true;
        btn.style.display = 'block';
    }
})

btn.addEventListener('click', () => {
    warning.style.display = '';
    inputField.disabled = false;
    btn.style.display = '';
})


