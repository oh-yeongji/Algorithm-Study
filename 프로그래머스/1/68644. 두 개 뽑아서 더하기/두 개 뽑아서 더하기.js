
const solution = (numbers) =>{
    let array = [];
    for(i = 0; i < numbers.length-1; i++){
        for(j = i + 1; j < numbers.length; j++){
        
       let result = numbers[i] + numbers[j];
            if( array.indexOf(result) == -1) {
                array.push(result);
            }
            
        }
        array.sort((a,b) => { return a - b });
    }
    return array;
}