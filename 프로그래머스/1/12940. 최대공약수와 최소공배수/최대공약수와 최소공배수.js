const solution = (n, m) => {
  let arr = [];
  let arr2 = [];

  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      if (i <= n) {
        arr.push(i);
      }
    }
  }

 let result = Math.max(...arr);
 let result2 = m * n / result;

  return [result, result2];
};