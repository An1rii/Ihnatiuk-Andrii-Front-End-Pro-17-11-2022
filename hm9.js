const arraySize = +prompt('Enter a digit og Array')
const array = [];
for (let num = 0 ; num  < arraySize; num++){
    const digit = +(prompt('Enter digit #' + (num + 1)));
    array.push(digit);
}
console.log(array);
function compareNumeric(a,b){
    if (a>b) return 1;
    if (a===b) return 0;
    if (a<b) return -1;
}
array.sort(compareNumeric);
console.log(array);

array.splice(2,4);
console.log(array);
