const arraySize = +prompt('Enter a digit og Array')
const array = [];
for (let num = 0 ; num  < arraySize; num++){
    let digit = +(prompt('Enter digit #' + (num + 1)));
    array.push(digit);
}
console.log(array);

array.sort();
console.log(array);

array.splice(2,4);
console.log(array);
