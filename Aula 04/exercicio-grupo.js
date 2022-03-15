/**
 * Crie uma (ou mais) classe para representar
 * um app de banco
 * 
 * - Deverá ter diferenciação de cliente PJ e PF
 * 
 * Pense no que deve ou não ser tratado como herança
 * Pense no que deve ou não ser privado
 * Pense em outras coisas que façam sentido 
 * para um app de banco e que faça consiga implementar
 * 
 */

// Bank
 
class Bank {
    constructor(name, account, balance, passcode) {
        this.name = name;
        this.account = account;
        this.balance = balance;
        this.type = type;
        this.passcode = passcode;
        this.logui = [];
        this.limite = 5000
    }
    get Balance() {
        if (this.passcode = 'passcode'){
            return this.balance;
        }else{
            return 'Senha incorreta';
        }
    }
    get Name() {
        return this.name;
    }
    get Type() {
        return this.type;
    }

   set Cpf(c) {
       this.cpf = c;
   }
   get Cpf() {
       return this.cpf;
   }
   
    saque = (valor) => {
        
        if (valor <= this.balance){
            this.balance -= valor;
            this.logui.push(-valor);
            return "Valor retirado: -" + valor;
        }else{
            return "Valor indisponível";
        }
    }
    deposito = (valor) => {
        this.balance += valor;
        return "valor adicionado com sucesso: +" + valor;
    }
    extrato = () => {
        for(var i = 0;i < this.logui.length();i++) {
            console.log(this.logui[i]);
        }
    }
    emprestimo = (valor) => {
        if(valor <= this.limite) {
            this.limite -= valor;
            this.balance = this.balance - valor;
            return "Emprestimo de " + valor + ' realizado.';
        }else{
            return 'Emprestimo indisponível';
        }
    }
}


class PJ extends Bank{
    constructor(name, account, balance, passcode, cnpj, limite = 20000) {
        super(name, account, balance, passcode);
        this.cnpj = cnpj,
        this.limit = limite;
    }
}

class PF extends Bank{
    constructor(nome, account, balance, passcode,cpf, limite = 10000) {
        super(nome, account, balance, passcode, limite)
        this.cpf = cpf
    }
}

// Saldo = () => {
//     let saldoTotal = this.saldo + this.entrada - this.saida;
//     return `Saldo: ${saldoTotal}`;
// }

// Saque = (valorSacar, senhaSacar) => {
//     if(valorSacar <= saldoTotal) {
//         if(senhaSacar === senha) {
//             let saldoFinal = saldoTotal - valorSacar;
//             return `Você sacou R$ ${valorSacar} e seu saldo agora é R$ ${saldoFinal}.`
//         }
        
//     }
// }
