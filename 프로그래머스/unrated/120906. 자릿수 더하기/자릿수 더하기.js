const solution = (n) => {
    let result = 0;
    let number = String(n);
   for( i = 0 ; i < number.length ; i++ ) {
      result += Number(number[i]);
   }
  return result;
}