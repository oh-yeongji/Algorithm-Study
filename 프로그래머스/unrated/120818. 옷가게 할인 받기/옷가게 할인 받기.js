const solution = (price) => {
    //옷 > 10만원
    if( price < 100000) {
        return price;
    }
    //옷 >= 10만원이고 옷 < 30만원  5%할인 => 옷가격 = 옷가격- 옷가격 * 0.05  === 옷 * 0.95    
    if( price >= 100000 && price < 300000  ) {
        return Math.floor(price *  0.95);
    } 
     //옷 >= 30만원이고 옷 < 50만원 10%할인  => 옷가격 = 옷가격- 옷가격 * 0.1  === 옷 * 0.9
    if( price >= 300000 && price < 500000 ) {
        return Math.floor(price *  0.9);
    }
     //옷 >= 50만원 20%할인 => 옷가격 = 옷가격- 옷가격 * 0.2  === 옷 * 0.8
    if(price >= 500000) {
        return Math.floor(price * 0.8);
    }
}