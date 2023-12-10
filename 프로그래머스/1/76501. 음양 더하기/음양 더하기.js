const solution = (absolutes, signs) => {
    let result = 0;
    for( i = 0 ; i < signs.length ; i++ ) {
        if( signs[i]===true) {
             result  += absolutes[i] ;
        }
        else {
             result  -= absolutes[i];
        }

    }
    
  return result;
}

