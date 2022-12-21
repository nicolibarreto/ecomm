import { Router } from 'express';
import { createUserUserCase} from "../src/use-case/createUserAccount.js";



export const router = new Router();

router.post('/account', function(request, response) {
    const { name, email, password } = request.body; 
    
    createUserUserCase(name,email,password).then((createdAccount) => {
        response.status(201).json(createdAccount)
    })
    .catch((error) => {
        res.status(400).json({ status: 'Error creating user!', message: error.message });
    })
});
