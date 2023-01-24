import { findAccount } from "../repositorie/accountRepository.js"

export async function getUserUserCase(_id) {
    
    return await findAccount(_id)
};
