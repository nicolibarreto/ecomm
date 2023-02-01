import request from 'supertest';
import { cleanProductTable } from './clearProduct.js';
import { app } from '../../src/app.js';
import { productExample } from './productExample.js';

describe('Product Creation', () => {
    afterEach(async () => {
        await cleanProductTable();
    });
    it('should create a product given required product data', async () => {
        await request(app)
            .post('/product')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send(productExample)
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    ...productExample,
                    id_user: body.id_user,
                    id: expect.any(Number),
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    features: productExample.features.map(feature => ({
                        ...feature,
                        id: expect.any(Number),
                        product_id: body.id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    })),
                    images: productExample.images.map(image => ({
                        ...image,
                        id: expect.any(Number),
                        product_id: body.id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    }))
                });
            });
    });
});