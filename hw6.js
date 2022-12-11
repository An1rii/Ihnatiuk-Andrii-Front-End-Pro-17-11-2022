let numOrStr = prompt('input number or string');
console.log(numOrStr)
switch (numOrStr){
    case '' :
        console.log('ви скасували')
        break
    case isNaN (+ numOrStr):
        console.log(' number is Ba_NaN')
        break
    case  null :
        console.log('Empty String');
        break
        default:
            console.log('OK!')
}
/*const time = prompt("Скільки годин у користувача?");
m = ("60");
s = ("60");
alert(time *  m  *  s + "сек в ч ")*/