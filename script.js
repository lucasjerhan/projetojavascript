function enviarMensagem() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Simulação de envio de mensagem (pode ser substituído por uma chamada de API real)
    console.log('Mensagem Enviada:', { nome, email, mensagem });
}

function loginAdmin() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    // Simulação de autenticação do administrador (pode ser substituído por uma chamada de API real)
    if (login === 'admin' && senha === 'admin') {
        document.getElementById('area-admin').style.display = 'none';
        document.getElementById('admin-content').style.display = 'block';
    } else {
        alert('Login ou senha incorretos.');
    }
    console.log('Mensagem Enviada:', { login, senha });
}
function redirecionarParaEntrar() {
    // Obtém os valores de login e senha (se necessário)
    var login = document.getElementById("nome").value;
    var senha = document.getElementById("email").value;

    // Aqui você pode adicionar lógica adicional, como verificar as credenciais, se necessário

    // Redireciona para a página entrar.html
    window.location.assign("entrar.html");
}
function obterMensagens() {

    var retorno = [];

    var consulta = $.ajax({
        url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });

    return retorno;
}

function inserirMensagem(obj) {

    /*

    var obj = {
            nome: "nome da pessoa", 
            email: "email informado", 
            mensagem: "a mensagem informada"} 

    */

    var inserir = $.ajax({

        url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(obj),
        dataType: 'json',
        async: false,
        contentType: 'application/json',
    });
}

function validarUsuario(objLoginSenha) {

    //email: admin@admin.com
    //senha: '1234'

    /*

    var objLoginSenha = {
            email: "email informado", 
            senha: "senha informada"} 

    */

    var retorno = false;

    console.log(objLoginSenha);

    var validacao = $.ajax({
        url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/usuarios/validar',
        method: 'POST',
        dataType: 'json',
        async: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
                },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).fail(function(){
        return retorno;
    });

    validacao.done(function(data) {
        retorno = data;
    });

    return retorno;
}

