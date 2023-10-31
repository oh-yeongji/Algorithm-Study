const solution = (n) => {
    let newArray = [];
    for( i = 0 ; i <= n ; i++ ) {
        if( n % i ===0){
     newArray.push(i);
        }
      
}
         return newArray.length;
}