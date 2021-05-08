

let buttonNumbers = document.querySelectorAll('.number');
let buttonOperators = document.querySelectorAll('.operator')
let buttonEqual = document.querySelector('.equal-sign');
let buttonClear = document.querySelector('.clear');
let calculatorScreen = document.querySelector('.calculator-screen');
var calculations= [1, '+', 3];

//The Numbers

buttonNumbers.forEach(function(buttonNumbers){
  buttonNumbers.addEventListener('click', function (event) {
    alert(event.target.textContent);
    calculations.push(event.target.textContent);
    calculatorScreen.value = event.target.textContent;
    console.log(calculatorScreen);

  });})


// The Operators
  buttonOperators.forEach(function(buttonOperators){
    buttonOperators.addEventListener('click', function (event) {
      alert(event.target.textContent);
      calculations.push(event.target.textContent);
    });})


    //The equal button

    let calculate= function(event) {

      alert(event.target.textContent);
    };

      buttonEqual.addEventListener ('click', calculate);

    //The Clear button

    let clear= function(event) {


      alert(event.target.textContent);
    };

    buttonClear.addEventListener('click', clear);

// End of events




// operations of the calculator

function calc(arr) {

  let result = "";

  if (calculations[1] === '+') {
    result= calculations[0] + calculations[2];

  } else if (calculations[1] === '-') {
    result = calculations[0] - calculations[2];

  }else if (buttonOperators === '*') {
    result=  calculations[0] * calculations[2];

  } else if (calculations[1] === '/'){
    result= calculations[0] * calculations[2];
  }

  return result;
};


 result = calc();

 console.log(result);















//const numbers = [1, 2, 34, 4, 98, 3];
//numbers.forEach(function(number) {
  //console.log(number);
//});
