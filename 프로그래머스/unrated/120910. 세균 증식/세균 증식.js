function solution(n, t) {
    let result = 0;
    // 1시간 후에는 처음의 2배 이므로 밑이 2 고 지수가 t 여야 함.
    // 2^t * n
    result = Math.pow(2, t) * n ;
        
    return result;
}