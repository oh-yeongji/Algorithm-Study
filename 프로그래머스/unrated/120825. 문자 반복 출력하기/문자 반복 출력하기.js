const solution = (my_string, n) => {
         const result = [...my_string].map( item => item.repeat(n)).join("");
         return result;
}