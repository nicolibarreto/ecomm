import { Router } from "express";
import { createUserUserCase } from "./src/use-case/createUserAccount";

const router = Router();

router.post('/account', async (req, res)) ; {
    const {name, email, passaword} = req.body;
    const createUser = await createUserUserCase(name,email,passaword);

    return res.status(201).json({
        id: createUser._id,
        name: createUser.name,
        email: createUser.email,
        createDate: createUser.creatDate,
    });

    
};