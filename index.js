const calculator = document.querySelector('.calculator');       
const keys = document.querySelector('.keys');                   // 1-3 > dohvacanje elemenata iz html-a 
const result = document.querySelector('.result');



keys.addEventListener('click', function(event){           // 7 > eventListener na buttone
if(!event.target.closest('button')) return                // 8 > !event.target.closest('button') 


const key = event.target                                  // 11 > dohvacanje button
const keyValue = key.textContent                          // 12 > dohvacanje texta u button
const resultValue = result.textContent                    // 13 > dohvacanje diva u koji se ispisuje rezultat
const {type} = key.dataset                                // 14 > u htmlu su zadani data tipovi brojevima preko ovoga ih dohvacamo
const {previousKeyType} = calculator.dataset              // 15 > varijabla preko koje biljezimo zadnji koristeni button > kasnije koristimo


if(type === 'number') {                                   // 18-27 > output tj kada kliknemo button ono ga ispisuje u result div
    if(resultValue === '0'){
        result.textContent = keyValue
      }else if (previousKeyType === 'operator'){
      result.textContent = keyValue
      }else{
        result.textContent = resultValue + keyValue
      }

}

if(type === 'operator'){                                                  // 29-34 > operatori

   calculator.dataset.firstNumber = resultValue
   calculator.dataset.operator = key.dataset.key                              
   result.textContent = keyValue                                          // 33 > linija koja ispisuje operatore u output
}

if (type === 'equal'){                                                    // 36-42 > = 
   const firstNumber = calculator.dataset.firstNumber                     // prvi broj
   const operator = calculator.dataset.operator                           // operator
   const secondNumber = resultValue                                       // drugi broj
   
   result.textContent = calculate(firstNumber, operator, secondNumber)    //linija koja pozijva funkciju 'calculate' 
}


if (type === 'clear') {                          // 45-47 > AC
   result.textContent = '0'
}

if (type === 'predznak'){                        // 49-41 > +/-
   result.textContent *= -1
}



calculator.dataset.previousKeyType = type        // 55 > da po data tipu iz  html-a prepoznaje zadnji tip button koji je koristen
})



function calculate (firstNumber, operator, secondNumber) {                   // 60-72 > operacije 
    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(secondNumber)
   let resultOutput = '';
   if(operator === 'plus') resultOutput = firstNumber + secondNumber
   if(operator === 'minus') resultOutput = firstNumber - secondNumber
   if(operator === 'times') resultOutput = firstNumber * secondNumber
   if(operator === 'divide') resultOutput = firstNumber / secondNumber
   if(operator === 'module') resultOutput = firstNumber % secondNumber


return resultOutput
}

