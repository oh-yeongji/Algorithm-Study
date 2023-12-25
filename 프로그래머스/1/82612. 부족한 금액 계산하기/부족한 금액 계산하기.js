const solution = (price, money, count) => {
    // money > (price + price * count)  면 0
    // money < (price + price * count) 면 money - (price + price * count)
    let result = 0;
    for( i =0; i <= count; i++){
        result += price * i;
      
    }
    
    let answer = result - money;
    return money < result ? answer : 0;
    console.log(answer);
    
}