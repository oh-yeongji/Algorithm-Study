const solution = (name, yearning, photo)=> {
  
  const result = [];
  for (let i = 0; i < name.length; i++) {
    result[name[i]] = yearning[i];
  }
  return photo.map((arr) => arr.reduce((acc, cur) => acc + (result[cur] || 0), 0));
  }