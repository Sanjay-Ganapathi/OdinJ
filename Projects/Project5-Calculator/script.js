// Caching Dom
const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');


let firstNumber = 0;
let operator = '';
let nextValue = false;

function setDisplay(num){
    
    if(nextValue){
        calculatorDisplay.textContent = num;
        nextValue = false;
    }else{
        if(calculatorDisplay.textContent === '0'){
            calculatorDisplay.textContent = num;
        }else{
            calculatorDisplay.textContent += num;
        }
    }
   
}
    



function calculate(symbol){
   
    const currentValue = Number(calculatorDisplay.textContent);

    if(operator && nextValue) {
        operator = symbol;
        return;
    }

    if(!firstNumber){
        firstNumber = currentValue; 
    }else{
        
        const res = calculateHelper[operator](firstNumber,currentValue);
        calculatorDisplay.textContent = res;
        firstNumber = res;
        
    }
    operator = symbol;
    nextValue = true;
}

const calculateHelper = {
    '/': (firstNumber,secondNumber) => firstNumber / secondNumber,
    '*': (firstNumber,secondNumber) => firstNumber * secondNumber,
    '+': (firstNumber,secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber,secondNumber) => firstNumber - secondNumber,
    '=': (firstNumber,secondNumber) => secondNumber,
};

function setDecimal(){
    if(nextValue) return;
    if(!calculatorDisplay.textContent.includes('.'))
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`
}

function reset(){
    firstNumber = 0;
    operator = '';
    nextValue = false;
    calculatorDisplay.textContent = '0';
}


inputBtns.forEach((inputBtn) => {
    if(!inputBtn.classList.length){
        inputBtn.addEventListener('click',() => setDisplay(inputBtn.value));
    }else if(inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click',() => calculate(inputBtn.value));
    }else if(inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click',() => setDecimal());
    }else if(inputBtn.classList.contains('clear')){
        inputBtn.addEventListener('click',() => reset());
    }
})

