function obterMensagens() {
    $.ajax({
        url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
    })
    .done(function(data) {
        preencherPaginaContatos(data);
    })
    .fail(function() {
        console.error('Erro ao obter mensagens');
    });
}

function preencherPaginaContatos(mensagens) {
    var container = $('#contato .message-container');

    
    container.empty();

  
    mensagens.forEach(function(mensagem, index) {
        var messageHtml = `
            <div class="message-container">
                <h3>Mensagem ${index + 1}</h3>
                <p><strong>Nome:</strong> ${mensagem.nome}</p>
                <p><strong>Email:</strong> ${mensagem.email}</p>
                <p><strong>Mensagem:</strong> ${mensagem.mensagem}</p>
            </div>
        `;
        container.append(messageHtml);
    });
}

function enviarMensagem() {
    var nome = $('#nome').val();
    var email = $('#email').val();
    var mensagem = $('#mensagem').val();

    var mensagemObj = { nome, email, mensagem };

    $.ajax({
        url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(mensagemObj),
        dataType: 'json',
        contentType: 'application/json',
    })
    .done(function() {
        
        $('#nome, #email, #mensagem').val('');

       
        obterMensagens();
    })
    .fail(function() {
        console.error('Erro ao enviar mensagem');
    });
}

function loginUsuario() {
    var login = $('#login').val();
    var senha = $('#senha').val();

    var usuarioObj = { login, senha };

    $.ajax({
        url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/usuarios/validar', 
        method: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(usuarioObj),
    })
    .done(function() {
       
        window.location.href = 'contato.html';
    })
    .fail(function() {
        console.error('Login ou senha incorretos.');
        alert('Login ou senha incorretos.');
    });
}


function loginAdmin() {
    var login = document.getElementById("loginadmin").value;
    var senha = document.getElementById("senhaadmin").value;

    var obj = { login, senha };

    
    if (login === 'admin' && senha === 'admin') {
       
        window.location.assign("mensagens.html");
    } else {
        alert('Login ou senha incorretos.');
    }

    console.log('Login Admin:', obj);
}