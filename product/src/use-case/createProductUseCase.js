import { randomUUID } from 'crypto';
import { saveProduct } from '../repositories/productRepository.js';

export async function createProductUseCase(product) {

  const id_user = randomUUID();

  const createProduct = { id_user, ...product }

  const Products = await saveProduct(createProduct)

  return Products;
  
}
