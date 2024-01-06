const solution = (s) =>{
   
   let obj = {
   zero: 0,
   one: 1,
   two: 2,
   three: 3,
   four: 4,
   five: 5,
   six: 6,
   seven: 7,    
   eight: 8,
   nine: 9,
   }

    Object.keys(obj).forEach( el =>{
		
        let regex = RegExp( el,"g");
      s = s.replace(regex, obj[el]);
      });
    return parseInt(s, 10);
}
