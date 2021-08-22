//Contas
let contaController = new ContaController();
contaController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

//CLIENTES
let primeiraConta = new Conta("1", 100);
let segundaaConta = new Poupanca("2", 200);
let terceiraConta = new ContaBonificada("3", 400);
let quartaConta = new Conta("4", 800);
let primeiroCliente = new Cliente("jefferson", "123.456.789-01", primeiraConta);
let segundoCliente = new Cliente("Marcelo", "123.456.789-02", segundaaConta);
let terceiroCliente = new Cliente("Oliveira", "123.456.789-03", terceiraConta);
let quartoCliente = new Cliente("Silva", "123.456.789-04", quartaConta);