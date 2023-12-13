const solution = (arr, divisor) => {
    let newArr = [];
    for(i=0; i < arr.length; i++){
        if( arr[i] % divisor === 0){
            newArr.push(arr[i]);
        }
        }
        if( newArr.length === 0) {
                newArr.push(-1);
        }
    newArr.sort((a,b)=> a-b);
    return newArr;
}