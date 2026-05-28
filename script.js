// ============================
// 🔹 CONTROLE DE ABAS
// ============================
function trocarAba(id) {
    document.querySelectorAll(".conteudo")
        .forEach(sec => sec.classList.remove("ativo"));

    document.getElementById(id).classList.add("ativo");
}

// ============================
// 🛒 CARRINHO
// ============================
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarAoCarrinho(nome) {
    const item = {
        nome,
        preco: gerarPrecoFake(nome)
    };

    carrinho.push(item);
    salvarCarrinho();
    atualizarCarrinhoUI();
}

function gerarPrecoFake(nome) {
    const precos = {
        "RTX 4060": 2500,
        "RTX 3060": 1800,
        "Ryzen 5 5600": 800,
        "Intel i5 12400F": 900,
        "Teclado RGB": 250,
        "Mouse Gamer": 150,
        "Headset": 300,
        "Mousepad": 80
    };

    return precos[nome] || 100;
}

function atualizarCarrinhoUI() {
    const lista = document.getElementById("lista-carrinho");
    const total = document.getElementById("total-carrinho");

    if (!lista || !total) return;

    lista.innerHTML = "";
    let soma = 0;

    carrinho.forEach((item, index) => {
        soma += item.preco;

        lista.innerHTML += `
            <div class="card">
                <h3>${item.nome}</h3>
                <p>R$ ${item.preco}</p>
                <button onclick="removerItem(${index})">Remover</button>
            </div>
        `;
    });

    total.innerText = "Total: R$ " + soma;
}

function removerItem(index) {
    carrinho.splice(index, 1);
    salvarCarrinho();
    atualizarCarrinhoUI();
}

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// ============================
// 🤖 BUILDIX MATCH + IA
// ============================
async function gerarRecomendacao() {

    const orcamento = document.getElementById("orcamento").value;
    const uso = document.getElementById("uso").value;

    const resultado = document.getElementById("resultado-buildix");
    const robot = document.getElementById("robot");
    const robotText = document.getElementById("robot-text");
    const respostaIA = document.getElementById("resposta-ia");

    if (!orcamento || !uso) {
        resultado.innerHTML = "⚠️ Preencha todas as opções!";
        if (respostaIA) respostaIA.innerHTML = "";
        return;
    }

    resultado.innerHTML = "";
    if (respostaIA) respostaIA.innerHTML = "";

    if (robot && robotText) {
        robot.style.display = "block";
        robotText.innerText = "🤖 Analisando seu perfil gamer...";
    }

    let perfil = "";
    let pc = "";
    let desempenho = "";
    let explicacao = "";

    if (uso === "fps") {
        perfil = "Competitivo";
        pc = "Ryzen 5 5600 + RTX 4060";
        desempenho = "Foco em FPS alto, baixa latência e estabilidade.";
        explicacao = "Ideal para jogadores competitivos que querem partidas rápidas, lisas e sem travamentos.";
    }

    if (uso === "grafico") {
        perfil = "Qualidade Gráfica";
        pc = "Ryzen 7 + RTX 4070";
        desempenho = "Foco em gráficos no Ultra com FPS estável.";
        explicacao = "Ideal para jogadores que querem aproveitar jogos bonitos, detalhados e sem engasgos.";
    }

    setTimeout(async () => {

        resultado.innerHTML = `
            <h3>🎯 Perfil: ${perfil}</h3>
            <p><strong>💻 PC recomendado:</strong> ${pc}</p>
            <p><strong>⚡ Desempenho:</strong> ${desempenho}</p>
            <p><strong>🤖 Explicação:</strong> ${explicacao}</p>
        `;

        try {
            const response = await fetch("http://localhost:3000/recomendar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ uso })
            });

            const data = await response.json();

            if (respostaIA) {
                respostaIA.innerHTML = `
                    <h3>🤖 IA Buildix recomenda:</h3>
                    <p>${data.resposta}</p>
                `;
            }

        } catch (error) {
            if (respostaIA) {
                respostaIA.innerHTML = "⚠️ IA não respondeu. Verifique se o backend está rodando.";
            }
        }

        if (robot) {
            robot.style.display = "none";
        }

    }, 1500);
}

// ============================
// 👤 CADASTRO
// ============================
function fazerCadastro(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const msg = document.getElementById("msg-cadastro");

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!nome || !email || !senha) {
        msg.innerText = "❗ Preencha todos os campos!";
        msg.style.color = "red";
        return;
    }

    if (!emailValido.test(email)) {
        msg.innerText = "❗ Insira um email válido!";
        msg.style.color = "red";
        return;
    }

    if (!senhaForte.test(senha)) {
        msg.innerText = "❗ Sua senha deve ter 8 caracteres, número, maiúscula e minúscula!";
        msg.style.color = "red";
        return;
    }

    const usuario = { nome, email, senha };
    localStorage.setItem("usuario", JSON.stringify(usuario));

    msg.innerText = "✅ Conta criada com sucesso!";
    msg.style.color = "green";
}

function abrirCadastro() {
    const box = document.getElementById("cadastro-box");
    const botao = document.getElementById("btn-abrir-cadastro");

    box.style.display = "block";
    botao.style.display = "none";
}

// ============================
// 🚀 INICIALIZAÇÃO
// ============================
window.onload = () => {
    atualizarCarrinhoUI();
};