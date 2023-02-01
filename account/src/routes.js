import { request, response, Router } from 'express';
import { deleteOne } from './repositorie/accountRepository.js';
import { createUserUserCase } from "./use-case/createUserAccount.js";
import { createUserTokenUseCase } from './use-case/createUserToken.js';
import { getUserUserCase } from './use-case/getUserAccount.js';

export const router = new Router();

router.post('/account', function(request, response) {
    const { name, email, password } = request.body; 
    
    createUserUserCase(name,email,password).then((createdAccount) => {
        response.status(201).json(createdAccount)
    })
    .catch((error) => {
        response.status(400).json({ status: 'Error creating user!', message: error.message });
    })
});

router.get('/account/:id', function (request, response) {
    getUserUserCase(request.params.id).then((user) => {
        response.json(user) 
    })
    .catch((error) => {
        response.status(500).json({status: 'Error returning user!' , message: error.message});
    })
 
});

router.delete('/account/:id', function (request, response) {
    deleteOne(request.params.id).then((user) => {
        response.json(user) 
    })
    .catch((error) => {
        response.status(500).json({status: 'Error deleting user!' , message: error.message});
    })  
});

router.post('/tokens', async (request, response) => {
    const { email, password } = request.body;
    const authToken = await createUserTokenUseCase(email, password);
    console.log(authToken)
    console.log(email, password)
    
    if(authToken) {
        
        return response.status(201).json({
            token: authToken
        });
    }
    return response.status(401).json({
        message: 'user e-mail or password incorrect',
    });
});