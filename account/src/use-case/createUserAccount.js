import { saveAccount } from "../repositorie/accountRepository.js";
import { encodePassword } from "../helpers/helpers.js";

export async function createUserUserCase(name, email, password) {
  const createDate = new Date().toISOString().substring(0.10);
  const hashPassword = encodePassword(password);
  const user = {
    name: name,
    email: email,
    password: hashPassword,
    createDate
  };

  await saveAccount(user);
  return user

}



