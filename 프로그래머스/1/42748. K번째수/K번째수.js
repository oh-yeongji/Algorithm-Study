const solution = (array, commands) => {
    let newArray = [];
    for( i = 0; i < commands.length; i++){
     var result = array.slice(commands[i][0]-1, commands[i][1])
     .sort((a,b)=> { return a - b });
  
     newArray.push(result[commands[i][2]-1]);
     
    }                       
return newArray;
}
