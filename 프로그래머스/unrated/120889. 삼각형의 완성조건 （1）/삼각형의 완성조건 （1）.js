const solution = (sides) => {
    // sort로 오름차순
    
    const result  = sides.sort((a,b) =>  a - b );
 

    // 제일 작은거랑 그다음 작은거 더해서 나머지보다 크면 1 크면 2.
    
    if( result[0] + result[1] <= result[2]) {
        return 2
    }
    else {
        return 1
    }
}