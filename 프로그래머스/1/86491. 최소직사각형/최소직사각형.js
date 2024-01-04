const solution = (sizes) => {
   const maxW = Math.max(...sizes.map(card => Math.max(...card)));
     const maxH = Math.max(...sizes.map(card => Math.min(...card)));
    return maxW * maxH;
   
}