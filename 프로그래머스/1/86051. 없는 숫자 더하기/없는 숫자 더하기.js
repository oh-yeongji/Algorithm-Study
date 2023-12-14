const solution = (numbers) => {
    let number = [ 0,1,2,3,4,5,6,7,8,9];
    //let number = [...Array(10)];
    let result = 0;
    number.forEach((i)=>{
        if(numbers.includes(i)===false){
        result += i
        }
    })
    return result;
      
}