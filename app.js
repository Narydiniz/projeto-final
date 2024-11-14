// Mostrar o modal de login
function mostrarModal() {
    document.getElementById('login-modal').style.display = 'block';
}

// Fechar o modal de login
function fecharModal() {
    document.getElementById('login-modal').style.display = 'none';
}

//Fecha o modal ao clicar fora do contéudo
window.onclick = function(event) {
    const modal = document.getElementById('login-modal');
    if (event.target === modal){
        fecharModal();
    }
};

// Função para realizar o login
function fazerLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha, mensagem })
    })
    .then(response => response.json())
    .then(data => {
        if (data.sucesso) {
            sessionStorage.setItem('usuarioLogado', JSON.stringify(data.usuario)); // Armazena o usuário logado
            fecharModal(); // Fecha o modal de login
            atualizarInterfaceUsuarioLogado(); // Atualiza a interface com as informações do usuário logado
        } else {
            alert(data.mensagem || 'Erro ao fazer login');
        }
    })
    .catch(error => {
        console.error('Erro ao fazer login:', error);
    });
}


//--------------------------------------------------------------------------------------------------------------------------------------------


// Mostrar o modal de cadastro-clientes
function mostrarModal() {
    document.getElementById('cadastro-cliente').style.display = 'block';
}

// Fechar o modal de cadastro-clientes
function fecharModal() {
    document.getElementById('cadastro-cliente').style.display = 'none';
}

//Fecha o modal ao clicar fora do contéudo
window.onclick = function(event) {
    const modal = document.getElementById('cadastro-cliente');
    if (event.target === modal){
        fecharModal();
    }
};