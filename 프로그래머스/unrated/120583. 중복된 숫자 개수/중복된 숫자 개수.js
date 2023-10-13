const solution = (array, n) => {
  const newArray = [];
    for(i=0; i<array.length; i++) {
        if(array[i]===n) {
            newArray.push(array[i]); 
            
        }

    }

    return newArray.length;
}