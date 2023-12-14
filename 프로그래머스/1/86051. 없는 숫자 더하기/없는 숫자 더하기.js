const solution = (numbers) => {
    let result = 0;
      for( i =0 ; i < 10; i++){
          if(numbers.includes(i) === false) {
              result += i;
          }
      }
     return result;  
}