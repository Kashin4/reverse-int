
module.exports = function reverse (n) {
    if(n < 0){
        n *= -1;
    }
    n +="";
    let reverse ="";
    for(let i = n.length - 1; i >= 0; i--)
    {
        reverse += n[i];
    }
    return parseInt(reverse)
}