function solution(n, k) {
    const service = Math.floor(n/10);
  const result = n * 12000 + k * 2000 - service*2000;
return result;
}