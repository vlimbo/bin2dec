// variables
const inputField = document.querySelector('.main__input');
const warning = document.querySelector('.main__warning');
const answer = document.querySelector('.main__answer');
const decimalAnswer = document.querySelector('.main__decimal'); 
const btn = document.querySelector('.main__btn');
const convertBtn = document.querySelector('.main__convert-btn');

// functions
const convert = () => {
    const decimalArr = [];
    let binPosition = inputField.value.length - 1;

    for (let i = 0; i < inputField.value.length; i++) {
        if (inputField.value[i] === '1') {
            decimalArr.push(2**binPosition);
        }
        binPosition--;
    }
    return decimalArr.reduce((start, current) => start + current); // One function to convert and return value
}

// eventlisteners
inputField.addEventListener('keydown', (event) => {
    if (event.key !== '1' && event.key !== '0' && event.key !== 'Delete' && event.key !== 'Backspace' && event.key !== 'Enter') {
        warning.style.display = 'block';
        inputField.disabled = true;
        btn.style.display = 'block';
        answer.style.display = 'none';
        convertBtn.disabled = true;
    }
});

btn.addEventListener('click', () => {
    warning.style.display = '';
    inputField.disabled = false;
    btn.style.display = '';
    convertBtn.disabled = false;
});

convertBtn.addEventListener('click', () => {
    answer.style.display = 'block';
    decimalAnswer.textContent = convert();
    console.log(convert());
    inputField.value = '';
});

inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        answer.style.display = 'block';
        decimalAnswer.textContent = convert();
        console.log(convert());
        inputField.value = '';
    }
});
