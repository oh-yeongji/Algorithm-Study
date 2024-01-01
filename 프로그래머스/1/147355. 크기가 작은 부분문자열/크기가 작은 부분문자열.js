const solution = (t,p) => {
    let count = 0;
   
    for(i = 0; i < t.length - p.length + 1; i++) {
      let result = t.slice( i , i + p.length );
        if(result <= p){
            count += 1;
        }
    }
    return count;
}