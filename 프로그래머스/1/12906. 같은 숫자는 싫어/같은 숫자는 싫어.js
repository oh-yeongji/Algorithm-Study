const solution = (arr) => {
    let result = [arr[0]];
    for( i =1; i < arr.length; i++) {
        if( arr[i] !== arr[i-1]) {
            result.push(arr[i]);
        }
    }
    return result;
}
