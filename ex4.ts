//calculate discount for a product 
// if above $100,then 10% off otherwise 5% off
function calculateDiscountPrice(price:number):
number{
    if (price>100){
        return price *0.10; 
    } else {
        return price *0.10/2
    }
}
// 10 % off on a product
const productPrice = 100 
const discount = calculateDiscountPrice(productPrice);
console.log(`the discount for a product priced at $${productPrice} is $${discount}`);

//  5% off if price is less than $100
const product2Price =70
const discount2 = calculateDiscountPrice(product2Price);
console.log(`the discount for a product priced at $${product2Price} is $${discount2}`);