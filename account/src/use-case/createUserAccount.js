import { saveAccount } from "../../repositorie/accountRepository.js";

export function creatUserUserCase(name, email, passaword){

    function dataAtualFormatada() {
        var data = new Date(),
          dia = data.getDate().toString(),
          diaF = dia.length == 1 ? "0" + dia : dia,
          mes = (data.getMonth() + 1).toString(),
          mesF = mes.length == 1 ? "0" + mes : mes,
          anoF = data.getFullYear();
        return diaF + "/" + mesF + "/" + anoF;
      }

const  user = {


 name: name,
 email: email,
 passaword: passaword,
 creatDate: dataAtualFormatada()



};

saveAccount(user);

return user

}

const account = creatUserUserCase('Nicoli', 'nicoli@gmail', '123456');

    console.log(account);

