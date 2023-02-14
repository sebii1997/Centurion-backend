const fs = require("fs");
class productManager {
    #path = "./Productos.json"    

    /* getProducts() {
        return this.products;
    } */

    async addProduct(title, description, price, thumbnail, code, stock) {
        const product = {
            id: 0,            
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        const products = await this.consultarProducto();

        const updatedProducts = [...products, product];

        await fs.promises.writeFile(this.#path, JSON.stringify(updatedProducts));
        
    };    

    async consultarProducto() {
        try{
            const products = await fs.promises.readFile(this.#path, "utf-8");

            return JSON.parse(products);
        } catch (e){
            return [];
        }
    }
}


async function main(){
    const manager = new productManager();

    console.log(await manager.consultarProducto());

    await manager.addProduct("Monitor", "Gamer por naturaleza", 230, "Sin imagen", "abc123", "sin stock");

    console.log(await manager.consultarProducto());
}

main();
