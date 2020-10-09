const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.keys');
const result = document.querySelector('.result');



keys.addEventListener('click', function(event){
if(!event.target.closest('button')) return


const key = event.target
const keyValue = key.textContent
const resultValue = result.textContent
const {type} = key.dataset
const {previousKeyType} = calculator.dataset


if(type === 'number') {
    if(resultValue === '0'){
        result.textContent = keyValue
      }else if (previousKeyType === 'operator'){
      result.textContent = keyValue
      }else{
        result.textContent = resultValue + keyValue
      }

}

if(type === 'operator'){

   calculator.dataset.firstNumber = resultValue
   calculator.dataset.operator = key.dataset.key
   result.textContent = keyValue
}

if (type === 'equal'){
   const firstNumber = calculator.dataset.firstNumber
   const operator = calculator.dataset.operator
   const secondNumber = resultValue
   
   result.textContent = calculate(firstNumber, operator, secondNumber)
}


if (type === 'clear') {
   result.textContent = '0'
}

if (type === 'predznak'){
   result.textContent *= -1
}


calculator.dataset.previousKeyType = type
})


function calculate (firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)
   let resultOutput = '';
   if(operator === 'plus') resultOutput = firstNumber + secondNumber
   if(operator === 'minus') resultOutput = firstNumber - secondNumber
   if(operator === 'times') resultOutput = firstNumber * secondNumber
   if(operator === 'divide') resultOutput = firstNumber / secondNumber
   if(operator === 'module') resultOutput = firstNumber % secondNumber


return resultOutput
}

