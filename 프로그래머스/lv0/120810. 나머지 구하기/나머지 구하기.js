const solution = (num1, num2) => {
   const top = Math.floor(num1/num2);
    const answer = num1 - num2 *top;  
    return answer;
}