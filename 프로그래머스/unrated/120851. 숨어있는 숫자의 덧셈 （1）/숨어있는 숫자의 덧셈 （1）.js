const solution = (my_string) => {
    
    const newArray = my_string.split("");
    let result = 0;
    
    for( i = 0 ; i < newArray.length ; i++ ) {
        if(Number(newArray[i])) {
            result += Number(newArray[i]);
        }
            
    }
    return result;
}