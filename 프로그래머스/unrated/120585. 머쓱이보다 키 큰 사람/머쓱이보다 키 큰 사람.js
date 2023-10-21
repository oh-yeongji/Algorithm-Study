const solution =(array , height ) => {
    var result = 0;
        for(i =0; i < array.length; i++) {
            if (height < array[i] ){
                result++;
        }
    }
        return result;
}