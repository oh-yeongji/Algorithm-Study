const solution = (array) => {
    
      const asc = array.sort((a, b) => a - b);
      const median = Math.floor(array.length / 2);


  return asc[median];
}