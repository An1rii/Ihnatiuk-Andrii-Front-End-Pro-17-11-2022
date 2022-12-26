const arraySize = +prompt('Enter a digit og Array')
const array = [];
for (let i = 0 ; i  < arraySize; i++){
    let digit = +(prompt('Enter digit #' + (i + 1)));
    array.push(digit);
}
console.log(array);

Array.prototype.sort();
console.log(array);

array.splice(1,3);
console.log(array);
