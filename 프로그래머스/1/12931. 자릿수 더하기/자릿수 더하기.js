const solution = (n) => {
  
    //문자열로 변환
    let nn = String(n);
    let arr = 0;

    for( i = 0 ; i < nn.length ; i++) {
       arr += parseInt(nn[i]); 
}
   return arr;
}