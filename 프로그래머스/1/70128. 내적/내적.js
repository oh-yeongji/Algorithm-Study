
const solution = (a, b) => {
    
    let result = 0;
        if (a.length == b.length) {
            for (let i = 0; i < a.length; i++) {
                result += a[i] * b[i];
    }
    }

   return result;
   
};
