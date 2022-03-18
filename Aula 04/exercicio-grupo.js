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
    #passcode
    constructor(name, account, balance, passcode = "Senha123", limite) {
        this.name = name,
        this.account = account,
        this.balance = balance,
        this.#passcode = passcode,
        this.limite = limite
    }
    get passcodes () {
        return this.#passcode;
    }

    set passcodes(i) {
        return this.#passcode = i;
    }
    get Name() {
        return this.name;
    }

    set Name(i) {
        return this.name = i;
    }
    
    get Cpf() {
        return this.cpf;
    }

    set Cpf(c) {
            this.cpf = c;
        }
    conferirSenha () {
        if (this.#passcode === "Senha123") {
            this.#passcode=true;
            return `Acesso permitido`;
        } else {
            this.#passcode=false;
            return "Acesso negado"
        }
    }

    saque = (valor) => {
        if (valor <= this.balance & this.#passcode){
                 this.balance -= valor;
            return `Valor de R$ ${valor} Retirado com Sucesso | SAldo Atual = | R$ ${this.balance}`;     
        }else if( valor>this.balance & this.#passcode){
            return "Saldo indisponivel";
        }else{
            return "Senha Incorreta" ;
        }
    }

    deposito = (valor ) => {
        this.balance += valor;
        return `valor de R$ ${valor} Adicionado com sucesso | Saldo atual = R$ ${this.balance}`;
    }

    emprestimo = (valor) => {
        if(valor <= this.limite & this.#passcode) {
            this.limite += valor;
            this.balance = this.balance + valor;
            return `Empréstimo de R$ ${valor} realizado | Saldo Atual = R$ ${this.balance}.`;
        }else if( valor>this.balance & this.#passcode){
            return "Limite indsponível";
        }else{
            return 'Senha Incorreta';
        }
    }

    transferencia = (valor ) => {
        if (valor <= this.balance & this.#passcode ){
            this.balance -= valor;
            return `Transferência de R$ ${valor} Realizada com sucesso Saldo atual = R$ ${this.balance}`;
        }else if( valor>this.balance & this.#passcode){
            return "Saldo indisponivel";
        }else{
            return "Senha Incorreta"
        }
    }
}

class PJ extends Bank{
    constructor(name, account, balance, passcode, cnpj, limite = 20000) {
        super(name, account, balance, passcode);
        this.cnpj = cnpj,
        this.limite = limite;
    }
}

class PF extends Bank{
    constructor(nome, account, balance, passcode,cpf, limite = 10000) {
        super(nome, account, balance, passcode, limite),
        this.cpf = cpf
    }
}

/*
const joao = new PF('João', 0000, 2000, 'passcode', 01010101);
console.log(joao); // PF {name: 'João', saque: ƒ, deposito: ƒ, extrato: ƒ, emprestimo: ƒ, …}
console.log(joao.saque(300)); // Valor retirado: R$ -300
console.log(joao.extrato);
console.log(joao.saque(3000)); // Valor indisponível
console.log(joao.emprestimo(4000)); // Empréstimo de R$ 2700 realizado.
console.log(joao.saque(3000)); // Valor indisponível
*/

console.log("=== Pessoa Fisica ===")
const pessoa2 = new PF("Gabriel", 0001, 2000, "Senha123", 0874636362);
console.log(pessoa2.balance);
console.log(pessoa2);
console.log(pessoa2.conferirSenha());
console.log(pessoa2.emprestimo(200));
console.log(pessoa2.deposito(300));
console.log(pessoa2.saque(100));
console.log(pessoa2.transferencia(500));

console.log("=== Pessoa Juridica ===")
const pessoa3 = new PJ("Debora", 0002, 3000, "Senha12", 12332133);
console.log(pessoa3.balance)
console.log(pessoa3);
console.log(pessoa3.conferirSenha());
console.log(pessoa3.deposito(500));
console.log(pessoa3.saque(400));
console.log(pessoa3.emprestimo(100));
console.log(pessoa3.transferencia(500));

