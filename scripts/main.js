

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

//The Numbers buttons

buttonNumbers.forEach(function(buttonNumbers){
  buttonNumbers.addEventListener('click', function (event) {
    //alert(event.target.textContent);
    calculations.push(event.target.textContent); // Pushing the value of the pushed button to the calculations array
    calculatorScreen.value = event.target.textContent; //displaying the values on the calculator screen

  });})


// The Operators buttons

  buttonOperators.forEach(function(buttonOperators){
    buttonOperators.addEventListener('click', function (event) {
      //alert(event.target.textContent);

        firstOperator = event.target.textContent// Assigning the value of the operator

      console.log('before concatenating first number', calculations); // this is an array
      //calculations = calculations.join(''); // this now is a string

      //let firstNumber = [];
      //firstNumber.push(calculations.join('')); // calculation[0]

      firstNumber =calculations.join(''); //To concatenate the numbers before the operators..
      //firstNumber.push(calculations.join('')); // It wouldn't update calculations
      //.join will not return a mutated or updated array
      //This is a string now

      console.log('after concatenating first number', firstNumber);
      calculations =[]; //Clearning calculations after the join

      newCalculations.push(firstNumber); //pushes the value of the first number after being concatenated

      newCalculations.push(firstOperator); // pushed the value of the operator
      console.log('newCalculations', newCalculations);

      calculatorScreen.value = event.target.textContent;
    });})


      //The Clear button c

    let clear= function(event) {
      //alert(event.target.textConten)t;

      calculations = [];
      newCalculations=[];


      calculatorScreen.value = "0";
    };

    buttonClear.addEventListener('click', clear);


// operations of the calculator

function calc(arr) {

//Converting my elements into a number
let numberCalculation=  newCalculations.map(function(item) {
    return parseInt(item);
});

console.log("numberCalculation",numberCalculation)

  let result = "";


//  console.log('first number', typeof calculations[0]);

  if (newCalculations[1] === '+') {
    result= numberCalculation[0] + numberCalculation[2];

  } else if (newCalculations[1] === '-') {
    result = numberCalculation[0] - numberCalculation[2];

  }else if (newCalculations[1]=== '×') {
    result=  numberCalculation[0] * numberCalculation[2];

  } else if (newCalculations[1] === '÷'){
    result= numberCalculation[0] / numberCalculation[2];
  } else {


    //console.log('not recognized',newCalculations[1]);
  }


  return result;
};



//The equal button

let calculate= function(event) {

  //alert(event.target.textContent,);

        // let secondNumber = [];
        // secondNumber.push(calculations.join('')); // calculation[0]
        // console.log('aftser join', secondNumber);

        console.log('before join2', calculations);

        secondNumber =calculations.join(''); //
        //secondNumber.push(calculations.join(''));
        calculations =[];

        console.log('aftser join2', secondNumber);

        newCalculations.push(secondNumber);

        //newalculations.push(secondNumber);

        //newCalculations.push(firstOperator);
        console.log('newCalculations2', newCalculations);

        //console.log('newCalculations', newCalculations);

        result = calc();
        console.log(result);

   calculatorScreen.value = result;
};

  buttonEqual.addEventListener ('click', calculate);

  //calculatorScreen = event.target.textContent;

















//const numbers = [1, 2, 34, 4, 98, 3];
//numbers.forEach(function(number) {
  //console.log(number);
//});
