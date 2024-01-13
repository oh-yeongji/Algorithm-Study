const solution = (nums) =>{
    
   let takeAnimal = Math.floor(nums.length / 2);
   let set = [...new Set(nums)].length;
   return takeAnimal < set ? takeAnimal : set
}