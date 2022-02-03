const power = (x, n) => {
  let xx = 1
  if (x%1 !== 0 || n%1 !== 0 || x < 0 || n < 0){
    return console.log("only natural numerbers accepted");
  }
  for (let xn = 0; xn < n; xn++){
    xx = xx*x
  }
  console.log(xx)
}
power(2,8)
