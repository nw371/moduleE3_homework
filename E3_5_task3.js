function first_function(number1) {

  return function(number2)
  {
    console.log(`Сумма чисел равна: ${number1+number2}`);
  }

}
const resultFunc = first_function(7);

resultFunc(5);
