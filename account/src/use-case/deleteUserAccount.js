import { deleteOne } from "../repositorie/accountRepository.js"

export async function getUserUserCase(_id) {
    
    return await deleteOne (_id)
};