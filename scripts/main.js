

let buttonNumbers = document.querySelectorAll('.number');
let buttonOperators = document.querySelectorAll('.operator')
let buttonEqual = document.querySelector('.equal-sign');
let buttonClear = document.querySelector('.clear');
let calculatorScreen = document.querySelector('.calculator-screen');
var calculations= [];
var newCalculations= [];
var finalCalculations= [];
let firstOperator= null;
let firstNumber = null;
let secondNumber = null;

//The Numbers

buttonNumbers.forEach(function(buttonNumbers){
  buttonNumbers.addEventListener('click', function (event) {
    //alert(event.target.textContent);
    calculations.push(event.target.textContent); // Pushing the value of the pushed button to the calculations array
    calculatorScreen.value = event.target.textContent; //displaying the values on the calculator screen
    //console.log(calculatorScreen);

  });})


// The Operators
  buttonOperators.forEach(function(buttonOperators){
    buttonOperators.addEventListener('click', function (event) {
      //alert(event.target.textContent);
      if (firstOperator == null) {
        firstOperator = event.target.textContent
      }
      console.log('before join', calculations); // this is an array
      //calculations = calculations.join(''); // this now is a string

      //let firstNumber = [];
      //firstNumber.push(calculations.join('')); // calculation[0]

      firstNumber =calculations.join('');
      //firstNumber.push(calculations.join(''));

      console.log('aftser join', firstNumber);
      calculations =[];

      newCalculations.push(firstNumber);

      newCalculations.push(firstOperator);
      console.log('newCalculations', newCalculations);

      //calculations.length - 1
      //console.log('before pop', calculations);
      //calculations.pop();




      // console.log('after pop', calculations);



      calculations.push(event.target.textContent);
      calculatorScreen.value = event.target.textContent;
    });})






      //The Clear button

    let clear= function(event) {
      //alert(event.target.textContent);

      calculations=[];

    };

    buttonClear.addEventListener('click', clear);

// End of events





// operations of the calculator

function calc(arr) {

  let result = "";

//  while (result) {
//  alert(buttonEqual);
//}

  console.log('first number', typeof calculations[0]);

  if (newCalculations[1] === '+') {
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



//The equal button

let calculate= function(event) {

  //alert(event.target.textContent,);

        // let secondNumber = [];
        // secondNumber.push(calculations.join('')); // calculation[0]
        // console.log('aftser join', secondNumber);
        //calculations =[];

        console.log('before join2', calculations);
        secondNumber =calculations.join('');
        //secondNumber.push(calculations.join(''));
        calculations =[];
        console.log('aftser join', secondNumber);

        finalCalculation.push(secondNumber);

        //newalculations.push(secondNumber);

        //newCalculations.push(firstOperator);
        console.log('newCalculations2', newCalculations);

        //console.log('newCalculations', newCalculations);

   result = calc();
   //console.log(result);
};

  buttonEqual.addEventListener ('click', calculate);

  //calculatorScreen = event.target.textContent;

















//const numbers = [1, 2, 34, 4, 98, 3];
//numbers.forEach(function(number) {
  //console.log(number);
//});
