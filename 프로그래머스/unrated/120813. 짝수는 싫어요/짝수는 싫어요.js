const solution = (n) => {
    
    //새로운 값 담을 배열
    let newArray = [];
    
    // n 보다 작은 홀수 
    for( i=1; i<=n; i++ ){
         if ( i%2 != 0 ) {
       newArray.push(i);
       }
    }
   
    return newArray;
}