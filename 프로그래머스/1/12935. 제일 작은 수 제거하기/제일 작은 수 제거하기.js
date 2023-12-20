const solution = (arr) => {
    
    let newArr = [Math.min(...arr)];
    
   let temp=  arr.indexOf(Math.min(...arr));
    newArr.splice(temp , 1);
     let result = arr.filter((item)=> item !== Math.min(...arr));
     
    return  arr.length == 1 || arr.length == 0 ? [-1]: result;
   
}