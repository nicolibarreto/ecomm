import { creatUserUserCase } from "../src/use-case/createUserAccount.js";

const user =  creatUserUserCase ("Nicoli", "nicoli@yahoo.com", "12737382")

console.log(user)
