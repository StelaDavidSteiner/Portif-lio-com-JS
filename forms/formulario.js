class Contato {
  //Atributos
  constructor() {
    this.nome = null;
    this.email = null;
    this.fone = null;
    this.mensagem = null;
    this.data_cadastro = null;
    this.tipo_contato = null;
  }

  // Métodos
  Enviar() {
    let alerta = '';
    //if (nome esta vazio) mandar uma mensagem de erro:
    this.nome = document.getElementById('nome').value;
    if (this.nome === ''){
      alerta = 'nome';
    }

    this.email = document.getElementById('email').value;
    if (this.email === ''){
      alerta += ', email';
    }

    this.fone = document.getElementById('fone').value;
    if (this.fone === ''){
      alerta += ', fone';
    } 

    this.mensagem = document.getElementById('mensagem').value;
    if (this.mensagem === ''){
      alerta += ', mensagem';
    }

    this.data_cadastro = new Date();
    if (this.data_cadastro === ''){
      alerta += ', data_cadastro';
    }

    this.tipo_contato = document.getElementById('tipo_contato').value;
    if (this.tipo_contato === ''){
      alerta += ', tipo_contato';
    }

    if (alerta != '') {
      alert('Os seguintes campos estão com problema: ' +alerta);
    }

    let tabela = document.getElementById('dados');
    let linha = tabela.insertRow();
    linha.insertCell();
    linha.innerHTML = this.nome;
    linha.insertCell();
    linha.innerHTML = this.email;
    linha.insertCell();
    linha.innerHTML = this.fone;
    linha.insertCell();
    linha.innerHTML = this.mensagem;
    linha.insertCell();
    linha.innerHTML = this.tipo_contato;    




  }
}
// Instanciar a classe
contato = new Contato();

//function submeter(){
//    var alerta = document.getElementById('nome').value;
//    alert('Aviso: '+ alerta);
//}

