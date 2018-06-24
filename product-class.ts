class Product {
    private name: string;
    private price: number;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }
    public getPrice(): number {
        return this.price;
    }
    public getDiscounttedPrice(discount: number): number {
        return this.price - (this.price * discount / 100);
    }
}

export { Product };
