import { saveAccount } from "../repositorie/accountRepository.js";
 
export async function createUserUserCase(name, email, passaword){
  const creatDate = new Date().toISOString().substring(0.10);
  const hashPassaword = await hashPassaword(passaword);
  const  user = {
  name: name,
  email: email,
  passaword: passaword,
  creatDate 
};

await saveAccount(user);
return user

}


