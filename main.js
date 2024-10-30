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

const result2 = [];
function numDiv2(n2){
    num2 = n2/2;
    for(let i=0;i<2;i++){
        result2.splice(i, 0, num2);
    }console.log(result2);
}
numDiv2(50);