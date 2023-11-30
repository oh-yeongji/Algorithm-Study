const solution = (x, n) => {
    
    let list =[];
        for( i = 1; i <= n ; i++ ) {
             list.push( x * i ) ;
    }
    return list;
}