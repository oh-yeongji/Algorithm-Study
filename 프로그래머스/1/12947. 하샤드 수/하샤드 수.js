const solution = (x) => {
    let result = 0;
    
   let arr = String(x).split("").map((e)=>Number(e));
   //console.log(arr);

    for(i = 0; i< arr.length; i++){
        arr.forEach((el)=> result += el);
        console.log(result);
        if(x % result ===0 ) {
            return true;
        }else
            return false;
    }
    
}