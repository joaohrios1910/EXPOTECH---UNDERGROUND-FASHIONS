async function cadastrar() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;

    if (senha !== confirmar) {
        alert("As senhas não coincidem!");
        return;
    }

    const resposta = await fetch('/api/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nomeCompleto: nome,
            email,
            senha
        })
    });

    if (resposta.ok) {
        alert('Cadastro realizado com sucesso!');
        window.location.href = '/login';
    } else {
        alert('Erro ao cadastrar');
    }
}