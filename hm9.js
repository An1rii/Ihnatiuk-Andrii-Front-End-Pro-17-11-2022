const arraySize = +prompt('Enter a digit og Array')
let array = [];
for (let i = 0 ; i  < arraySize; i=i+1){
    let digit = parseInt(prompt('Enter digit #' + (i + 1)));
    array.push(digit);
}
console.log(array);

array.sort();
console.log(array);

array.splice(1,3);
console.log(array);
