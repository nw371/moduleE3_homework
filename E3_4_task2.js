function check_number(number) {
  if (+number > 1000)  {
    return console.log (`${number} is too big number`);
  }else if (!Number.isInteger(number)) {
    return console.log (`The ${number} is not integer.`);
  } else if (+number < 2) {
    return console.log (`You entered: ${number}. By prime numbers description 0 and 1 are not prime numbers`);
  }
  for (let i = 2; i < number; i++)
    if (number % i === 0) return console.log (`This number ${number} is not prime`);
    if (number > 1) return console.log (`This number ${number} is prime`);

}
check_number(171);
