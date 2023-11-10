const solution = (myString, pat) => {
    const newPat = pat.toLowerCase();
    const newMyString = myString.toLowerCase();
   return  newMyString.includes(newPat)? 1 : 0

}