class productManager {
    products = [];

    constructor() {}

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const product = {
            id: this.products.length,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        this.products.push(product);
    };    
}

const manager = new productManager();
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25)
console.log(manager.getProducts());
