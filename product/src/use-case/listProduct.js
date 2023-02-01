import {findProducts} from "../repositories/productRepository.js"

export async function listProducts(){
    const product = await findProducts();

    return product
}