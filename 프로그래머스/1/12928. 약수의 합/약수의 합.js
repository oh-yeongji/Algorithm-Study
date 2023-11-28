const solution = (n) => {
    let result = [];
    for( i = 0 ; i <= n ; i++) {
        if( n % i ===0) {
        result.push(i);
        }
    }
  let sum = result.reduce((a,b)=> a + b,0);
    return sum;
}