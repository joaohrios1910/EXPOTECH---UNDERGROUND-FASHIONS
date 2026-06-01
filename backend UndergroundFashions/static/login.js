async function login() {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const resposta = await fetch('/api/clientes/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            senha
        })
    });

    if (resposta.ok) {

        const usuario = await resposta.json();

        localStorage.setItem(
            'usuario',
            JSON.stringify(usuario)
        );

        window.location.href = "http://localhost:5173";

    } else {

        alert('Email ou senha incorretos');

    }
}