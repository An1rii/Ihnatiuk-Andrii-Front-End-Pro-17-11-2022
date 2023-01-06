const products = [
    {name: 'Apple', price: 20},
    {name: 'Cherry', price: 10},
    {name: 'Banana', price: 15},
    {name: 'Orange', price: 25},
    {name: 'Lemon', price: 17},
    {name: 'Pear', price: 30}
];

const GRN_PER_DOLLAR = 41;
const DISCOUNT_START_FROM = 10000;
const DISCOUNT = 20;
const number = getNumber();
const count = getCount(number)
ShowTotalPrice(number,count)

for (let prodId = 0;prodId < products.length;prodId++) {
    console.log(`${prodId + 1} ${products[prodId].name} ${products[prodId].price}`);
}
function getNumber(){
    let prodNum;
    do {
        prodNum = prompt('Write product number:');

        if (prodNum === null) {
            break;
        }
        prodNum--;
    } while (prodNum < 0 || prodNum > products.length - 1 || isNaN(prodNum));
}
if (prodCount === null) {
    break;
}
let prodCount;
function getCount(){

    do {
        prodCount = prompt('Write product count:');


        prodCount = +prodCount;
    } while(prodCount <= 0 || isNaN(prodCount));
}
getCount()
getNumber()
if (typeof prodNum === 'number') {
    const product = products[prodNum];

    console.log(product);


    if (typeof prodCount === 'number') {
        const totalProdPrice = prodCount * product.price;

        console.log(`Total price: $${totalProdPrice}`);

        if (totalProdPrice * GRN_PER_DOLLAR > DISCOUNT_START_FROM) {
            console.log(`Congrats, you get a discount ${DISCOUNT}%`);
            console.log(`Your total price is: ${totalProdPrice * (100 - DISCOUNT) / 100}`);
        }
    }
}