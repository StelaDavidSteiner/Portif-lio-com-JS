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
  Enviar(event) {
    event.preventedDefault;

    let alerta = '';

    console.log('Enviar: Preenchendo atributos');

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

    // Captura o tipo de contato selecionado
    let radios = document.getElementsByName('tipo_contato');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            this.tipo_contato = radios[i].value;
            break;
        }
    }

    if (this.tipo_contato === '')
      this.tipo_contato = 'Indefinido';
    
    if (alerta != '') {
      alert('Os seguintes campos estão com problema: ' +alerta);
    }

    console.log('Enviar: Preenchendo o grid');

    let tabela = document.getElementById('dados');
    let linha = tabela.insertRow();

    let col1 = linha.insertCell(0);
    col1.textContent = this.nome;

    let col2 = linha.insertCell(1);
    col2.textContent = this.email;

    let col3 = linha.insertCell(2);
    col3.textContent = this.fone;

    let col4 = linha.insertCell(3);
    col4.textContent = this.mensagem;

    let col5 = linha.insertCell(4);
    col5.textContent = this.data_cadastro;

    let col6 = linha.insertCell(5);
    col6.textContent = this.tipo_contato;

    let col7 = linha.insertCell(6);
    col7.innerHTML = `
            <button onClick="contato.Editar()">Editar</button>
            <button onClick="contato.Deletar()">Deletar</button>
        `;
  }

  // Editar
  Editar(){
    console.log('Editando vamos construir');
    alert('Editando ainda sera criado');
  }

  // Deletar
  Deletar(){
    alert('Deletando ainda sera criado');
  }
}

// Instanciar a classe
let contato = new Contato(); 

/*
function submeter(){
  var alerta = document.getElementById('nome').value;
  alert('Aviso: '+ alerta);
}
*/


