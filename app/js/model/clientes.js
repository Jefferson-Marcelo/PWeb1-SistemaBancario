class Clientes {
    constructor() {
        this._clientes = new Array();
        let primeiraConta = new Conta("1", 100);
        let segundaaConta = new Poupanca("2", 200);
        let terceiraConta = new ContaBonificada("3", 400);
        let quartaConta = new Conta("4", 800);
        let primeiroCliente = new Cliente("jefferson", "123.456.789-01", primeiraConta);
        let segundoCliente = new Cliente("Marcelo", "123.456.789-02", segundaaConta);
        let terceiroCliente = new Cliente("Oliveira", "123.456.789-03", terceiraConta);
        let quartoCliente = new Cliente("Silva", "123.456.789-04", quartaConta);
        this._clientes.push(primeiroCliente, segundoCliente, 
                            terceiroCliente, quartoCliente);
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        let busca = this.buscarCPF(cpf);
        if (busca)
            this._clientes.splice(index, 1);
    }
    listar() {
        return this._clientes;
    }
    pesquisar(cpf) {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }
    buscarCPF(cpf) {
        return this._clientes.indexOf(this.pesquisar(cpf));
    }
}