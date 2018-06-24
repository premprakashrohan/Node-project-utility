import { Product } from './product-class';

const prod1 = new Product('Football',100);
const discountPrice = prod1.getDiscounttedPrice(10);
console.log('${discountPrice}');
