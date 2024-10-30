//Number divided into halves

/* Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`. */

const result = [];
function numDiv(n){
    num = n/2;
    for(let i=0;i<2;i++){
        result.splice(i, 0, num);
    }console.log(result);
}
numDiv(25);