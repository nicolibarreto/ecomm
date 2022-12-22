import { Router } from 'express';
import {listProducts} from './use-case/listProduct.js'

import { createProductUseCase } from './use-case/createProductUseCase.js';

export const router = Router();
router.get('/product', (req, res) => {
    listProducts()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(500).json({ status: 'Error getting product!', message: error.message });
        })
});
router.post('/product', function (req, res) {
    const product = req.body
    createProductUseCase(product)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((error) => {
            res.status(400).json({ status: 'Error fetching products!', message: error.message });
        })
});