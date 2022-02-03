function shownums(num1, num2){
  const intid = setInterval (function(){
      console.log(num1);
      num1 = num1 +1;
      if (num1 > num2){
    clearInterval(intid);
  }
  }, 1000)
}

shownums(3,7)
