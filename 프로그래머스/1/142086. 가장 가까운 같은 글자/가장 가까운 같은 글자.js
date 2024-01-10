const solution = (s) =>{
    const array = [];
    const result = [];
    
    [...s].forEach((item) => {
        if(!array.includes(item)) {result.push(-1);}
    
        if(array.includes(item)){
            result.push(array.length - array.lastIndexOf(item));
        }
                   
        array.push(item);
    })
    return result;
}