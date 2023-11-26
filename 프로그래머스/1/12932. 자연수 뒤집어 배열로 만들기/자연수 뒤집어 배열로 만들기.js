const solution = (n) => {
    const arr = [];
    // 숫자를 문자열로 변환
    const string =  n.toString();
    // 문자열을 자르고 배열에 담아 뒤집기
    const result = string.split("").reverse();
    return result.map(Number)
    // return parseInt(result); 
    
 
}

