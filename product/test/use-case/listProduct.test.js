import request from 'supertest';
import { app } from '../../src/app.js';
import { saveProduct } from '../../src/repositories/productRepository.js';
import { productExample } from './productExample.js';

describe('Product List', () => {
    it('should return a empty list ', async () => {
        await request(app)
            .get('/product')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(200)
            .expect(({ body }) => {
                expect(body).toEqual([]);
            });
  
        });

        it('should return a list a product ', async () => {
            await saveProduct(productExample);
            await request(app)
                .get('/product')
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .expect(({ body }) => {
                    expect(body).toEqual(expect.arrayContaining([{
                        ...productExample,
                        value: String(productExample.value),
                        id_user: expect.any(String),
                        id: expect.any(Number),
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                        features: expect.arrayContaining(productExample.features.map(feature => ({
                            ...feature,
                            id: expect.any(Number),
                            product_id: body[0].id,
                            createdAt: expect.any(String),
                            updatedAt: expect.any(String),
                        }))),
                        images: expect.arrayContaining(productExample.images.map(image => ({
                            ...image,
                            id: expect.any(Number),
                            product_id: body[0].id,
                            createdAt: expect.any(String),
                            updatedAt: expect.any(String),
                        })))
                    }]));
                });
        });
});
