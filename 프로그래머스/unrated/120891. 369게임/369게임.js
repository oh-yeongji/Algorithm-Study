const solution = (order) =>
    [...String(order)].filter((item)=>["3","6","9"].includes(item)).length;

