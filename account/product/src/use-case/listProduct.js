import {findProducts} from "../../src/repositories/productRepository.js"

export async function listProducts(){
    const product = await findProducts();

    return product
}