import { saveAccount } from "../repositorie/accountRepository.js";
import { encodePassword } from "../helpers.js";

export async function createUserUserCase(name, email, passaword) {
  const creatDate = new Date().toISOString().substring(0.10);
  const hashPassaword = encodePassword(passaword);
  const user = {
    name: name,
    email: email,
    passaword: hashPassaword,
    createDate
  };

  await saveAccount(user);
  return user

}



// metodo get
//  export async function getUserUserCase(identificador)`{
//   manipula~c"ao
//   return getAccount(identificador)
// }

// metodo delete

