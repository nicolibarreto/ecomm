import { Product } from '../../models/product.js';
import { ProductImage } from "../../models/productimage.js";
import { ProductFeature } from "../../models/productfeature.js";


export async function saveProduct(product) {
    const createdProduct = await Product.create(product, {
        include: [
            { association: Product.ProductFeature, as: 'features', },
            { association: Product.ProductImage, as: 'images' }
        ]
    });
    await createdProduct.save();
    return createdProduct;
}

export async function findProducts(){
    const allProducts = await Product.findAll({
        include: [
            {
                model: ProductFeature,
                as: 'features'
            }, {
                model: ProductImage,
                as: 'images'
            }]
    });
    return allProducts
}








