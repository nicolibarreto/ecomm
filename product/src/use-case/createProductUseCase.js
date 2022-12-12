import { randomUUID } from 'crypto';
import { saveProduct } from '../repositories/productRepository.js';

export async function createProductUseCase(product) {
  
  const id = randomUUID();

  function dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString(),
      diaF = dia.length == 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = mes.length == 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }

 const createProduct = product 
 createProduct.productId = id
 createProduct.createDate = dataAtualFormatada()


  await saveProduct(createProduct)
 return createProduct


}


