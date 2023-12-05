const solution = (n) => {
    for( x = 0 ; x**2 <= n ; x++) {
        if(x ** 2 ===n) result = (x+1) ** 2;
        else result = -1;
    }
    return result;
}
