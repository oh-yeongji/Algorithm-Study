const solution = (number) => {
    let count = 0;
     for( i = 0 ; i < number.length - 2; i++ ){
         for( j = i + 1; j < number.length - 1; j++ ){
             for( k = j + 1; k < number.length; k++ ) {
                if(number[i] + number[j] + number[k] == 0 ) {
                    count += 1;
             }else  0;
             }
         }
        }
    return count;
    
}