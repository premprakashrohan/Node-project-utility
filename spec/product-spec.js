const productModule = require('../product');
describe('product unit test', () =>{
    let product;
    beforeEach(() => {
        product = new productModule.Product('football', 100);
    });
    it('return the product name', () => {
        //let product = new productModule.Product('football', 100);
        expect(product.getName()).toBe('football');
    });
    it('return the product price', () => {
        //let product = new productModule.Product('football', 100);
        expect(product.getPrice()).toBe(100);
    });
    it(' not return the product price', () => {
        //let product = new productModule.Product('football', 100);
        expect(product.getPrice()).not.toBe(110);
    });
    it('return 10% discount', () => {
        //let product = new productModule.Product('football', 100);
        expect(product.getDiscounttedPrice(10)).toBe(90);
    });
    it('return 50% discount', () => {
        //let product = new productModule.Product('football', 100);
        expect(product.getDiscounttedPrice(50)).toBe(50);
    });
});