// ============================
// 🔹 CONTROLE DE ABAS (MANTIDO)
// ============================
function trocarAba(id) {
    document.querySelectorAll(".conteudo")
        .forEach(sec => sec.classList.remove("ativo"));

    document.getElementById(id).classList.add("ativo");
}

// ============================
// 🔹 BASE DE DADOS DAS BUILDS (MANTIDO)
// ============================
const builds = {
    gamer: {
        baixo: {
            perfil: "Gamer Básico",
            pc: "Ryzen 5 5600 + RX 6600",
            desempenho: "CS2: ~160 FPS | GTA V: ~110 FPS | Fortnite: ~130 FPS",
            futuro: "Roda jogos atuais no médio por 2 anos",
            explicacao: "Boa entrada no mundo gamer."
        },
        medio: {
            perfil: "Gamer Intermediário",
            pc: "i5 12400F + RTX 4060",
            desempenho: "CS2: ~240 FPS | GTA V: ~150 FPS | Fortnite: ~180 FPS",
            futuro: "Alto desempenho por anos",
            explicacao: "Ótimo custo-benefício."
        },
        alto: {
            perfil: "Gamer Avançado",
            pc: "Ryzen 7 + RTX 4070",
            desempenho: "Tudo no ultra acima de 200 FPS",
            futuro: "Preparado para futuros jogos",
            explicacao: "Máquina de alto nível."
        }
    },
    trabalho: {
        geral: {
            perfil: "PC para Trabalho",
            pc: "i5 + 16GB RAM + SSD",
            desempenho: "Rápido e estável",
            futuro: "Durável por anos",
            explicacao: "Ideal para produtividade."
        }
    },
    estudo: {
        geral: {
            perfil: "PC para Estudos",
            pc: "i5 + 8GB RAM + SSD",
            desempenho: "Leve e eficiente",
            futuro: "Bom por anos",
            explicacao: "Perfeito para tarefas diárias."
        }
    }
};

// ============================
// 🛒 CARRINHO (VERSÃO ORIGINAL)
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
// 🤖 GERAR RECOMENDAÇÃO (RESTAURADO)
// ============================
function gerarRecomendacao() {

    const orcamento = document.getElementById("orcamento").value;
    const uso = document.getElementById("uso").value;
    const prioridade = document.getElementById("prioridade").value;

    const resultado = document.getElementById("resultado-buildix");
    const robot = document.getElementById("robot");
    const robotText = document.getElementById("robot-text");

    if (!orcamento || !uso || !prioridade) {
        resultado.innerHTML = "⚠️ Preencha todas as opções!";
        return;
    }

    robot.style.display = "block";
    resultado.innerHTML = "";

    const mensagens = [
        "🤖 Analisando peças...",
        "⚙️ Calculando desempenho...",
        "🧠 Pensando na build...",
        "💻 Otimizando configuração..."
    ];

    let i = 0;
    const intervalo = setInterval(() => {
        robotText.innerText = mensagens[i % mensagens.length];
        i++;
    }, 500);

    setTimeout(() => {

        let build;

        if (uso === "gamer") {
            build = { ...builds.gamer[orcamento] };

            if (prioridade === "fps") {
                build.pc += " + foco em FPS";
                build.explicacao += " Priorizando taxa de quadros.";
            }

            if (prioridade === "qualidade") {
                build.pc += " + gráficos ultra";
                build.explicacao += " Priorizando qualidade visual.";
            }

        } else {

            build = { ...builds[uso].geral };

            if (prioridade === "velocidade") {
                build.pc += " + SSD NVMe";
                build.explicacao += " Sistema mais rápido.";
            }

            if (prioridade === "multitarefa") {
                build.pc += " + 32GB RAM";
                build.explicacao += " Melhor multitarefa.";
            }
        }

        resultado.innerHTML = `
            <h3>🎯 Perfil: ${build.perfil}</h3>
            <p><strong>💻 PC:</strong> ${build.pc}</p>
            <p><strong>⚡ Desempenho:</strong> ${build.desempenho}</p>
            <p><strong>📈 Futuro:</strong> ${build.futuro}</p>
            <p><strong>🤖 Explicação:</strong> ${build.explicacao}</p>
        `;

        clearInterval(intervalo);
        robotText.innerText = "✅ Concluído!";
        robot.style.display = "none";

    }, 2000);
}

// ============================
// 👤 CADASTRO (MELHORADO SEM QUEBRAR)
// ============================
function fazerCadastro(event) {

    event.preventDefault(); // 🔥 impede o reload

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
// 🔄 PRIORIDADE DINÂMICA (MANTIDO)
// ============================
function atualizarPrioridade() {

    const uso = document.getElementById("uso").value;
    const prioridade = document.getElementById("prioridade");

    prioridade.innerHTML = '<option value="">O que você prioriza?</option>';

    if (uso === "gamer") {
        prioridade.innerHTML += `
            <option value="fps">FPS</option>
            <option value="qualidade">Qualidade gráfica</option>
        `;
    } else {
        prioridade.innerHTML += `
            <option value="velocidade">Velocidade</option>
            <option value="multitarefa">Multitarefa</option>
        `;
    }
}

// ============================
// 🚀 INICIALIZAÇÃO (MANTIDO)
// ============================
window.onload = () => {
    atualizarCarrinhoUI();
};
