const solution = (money) => {
    
const cup = parseInt ( money / 5500 ) ;
const remains = money % 5500;
const [a,b] = [ cup , remains ]
return [a,b];

   
}

