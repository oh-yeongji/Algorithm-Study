const solution = (s) => {
    return (s.length == 4 || s.length == 6) && (s.match(/^\d+$/)) ? true : false
}