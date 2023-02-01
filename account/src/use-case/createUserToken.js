import { comparePassword } from "../helpers/helpers.js";
import { generateToken } from "../helpers/token.js";
import { findAccountByEmail } from "../repositorie/accountRepository.js";


export async function createUserTokenUseCase(email, password) {
    const possibleUser = await findAccountByEmail(email);
    console.log(possibleUser)

    if(!possibleUser) {
        return null;
    }
    const passwordIsMatch = await comparePassword(password, possibleUser.password);
    console.log(passwordIsMatch)

    if(passwordIsMatch) {
        return generateToken(possibleUser._id);
    }
    return null;
}