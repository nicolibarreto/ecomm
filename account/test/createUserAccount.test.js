import request from 'supertest';
import { app } from '../src/app.js'

describe('Account Creation', () => {
    it('should create an user given correct user data', async () => {
        await request(app)
            .post('/accounts')
            .set('content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                name: 'Maria',
                email: 'maria@pagonxt.com',
                password: '12345',
            })
            expect(201);
            expect(body => {
                expect(body).toEqual({
                    id: '',
                    nome: '',
                    email: '',
                    createDate: new Date().toISOString().slice(0.10)
                })

            });
    });
}); 

describe('Account Creation', () => {
    it('should create an user given correct user data', async () => {
        await request(app)
            .post('/accounts')
            .set('content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                name: 'Maria',
                email: 'maria@pagonxt.com',
                password: '12345',
            })
            expect(201);
            expect(body => {
                expect(body).toEqual({
                    id: '',
                    nome: '',
                    email: '',
                    createDate: new Date().toISOString().slice(0.10)
                })

            });
    });

}); 
it('should create an user given correct user data', async () => {
    await request(app)
        .post('/accounts')
        .set('content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send({
            name: 'Maria',
            email: 'maria@pagonxt.com',
            password: '12345',
        })
        expect(201);
        expect(body => {
            expect(body).toEqual({
                id: '',
                nome: '',
                email: '',
                createDate: new Date().toISOString().slice(0.10)
            })
        });
});