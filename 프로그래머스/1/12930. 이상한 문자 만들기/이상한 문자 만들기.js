const solution = (s) => {
    let result = '';
    let isEven = true; 

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        if (currentChar === ' ') {
            result += ' '; 
            isEven = true; 
        } else {
            if (isEven) {
                result += currentChar.toUpperCase(); 
            } else {
                result += currentChar.toLowerCase(); 
            }
            isEven = !isEven; 
        }
    }

    return result;
}