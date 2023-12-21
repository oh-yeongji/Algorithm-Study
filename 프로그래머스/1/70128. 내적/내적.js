const solution = (a, b) => {
    let result = 0;
    for( i = 0 ; i < a.length ; i++) {
        result += a[i] * b[i];
    }
    return result;
};
   
