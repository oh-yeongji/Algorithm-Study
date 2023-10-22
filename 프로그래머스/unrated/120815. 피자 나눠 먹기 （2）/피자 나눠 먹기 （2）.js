const solution = (n) => {
    // i 는 피자판 수
    for( i=1; i <= n; i++ ) {
  // 6 * 피자판 % n 했을때 나머지가 0이면 그 피자판수를  return해라.
        if( 6 * i % n === 0){
            return i;
        }
    }
 
}