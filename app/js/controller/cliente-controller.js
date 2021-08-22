class ContaController {
    constructor() {
        this.inputNome =
            document.querySelector("#nome");
        this.inputCPF =
            document.querySelector("#cpf");
        this.inputNumero =
            document.querySelector("#numeroConta")
        this.inputSaldo=
            document.querySelector("#saldo");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputNumero.value,
            parseFloat(this.inputSaldo.value));
        let novoCliente = new Cliente(this.inputNome.value,
                                      this.inputCPF.value,
                                      novaConta);

        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo conta ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                event.target.parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
