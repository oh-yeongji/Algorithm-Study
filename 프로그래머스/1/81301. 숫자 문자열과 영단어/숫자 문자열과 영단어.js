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

    let keys = Object.keys(obj);
    for( i = 0; i < keys.length; i++){
        let key = keys[i];
        let value = obj[key];
        let regex = RegExp( key,"g");
      s = s.replace(regex, obj[key]);
    }
    return parseInt(s, 10);
}
