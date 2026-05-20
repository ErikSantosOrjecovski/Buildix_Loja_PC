// Trocar abas
function trocarAba(id) {
    document.querySelectorAll(".conteudo").forEach(sec => sec.classList.remove("ativo"));
    document.getElementById(id).classList.add("ativo");
}

function gerarRecomendacao() {

    const orcamento = document.getElementById("orcamento").value;
    const uso = document.getElementById("uso").value;
    const prioridade = document.getElementById("prioridade").value;

    const resultado = document.getElementById("resultado-buildix");
    const robot = document.getElementById("robot");
    const robotText = document.getElementById("robot-text");

    if (!orcamento || !uso || !prioridade) {
        resultado.innerHTML = "Preencha todas as opções!";
        return;
    }

    robot.style.display = "block";
    resultado.innerHTML = "";

    let mensagens = [
        "🤖 Analisando peças...",
        "⚙️ Calculando desempenho...",
        "🧠 Pensando na melhor build...",
        "💻 Otimizando configuração..."
    ];

    let i = 0;
    let intervalo = setInterval(() => {
        robotText.innerText = mensagens[i % mensagens.length];
        i++;
    }, 500);

    setTimeout(() => {

        let perfil = "";
        let pc = "";
        let desempenho = "";
        let futuro = "";
        let explicacao = "";

        if (uso === "gamer") {

            if (orcamento === "baixo") {
                perfil = "Gamer Básico";
                pc = "Ryzen 5 5600 + RX 6600";
                desempenho = "CS2: ~160 FPS | GTA V: ~110 FPS | Fortnite: ~130 FPS";
                futuro = "Roda jogos atuais no médio por 2 anos";
                explicacao = "Bom pra começar no mundo gamer sem gastar muito.";
            } else {
                perfil = "Gamer Intermediário";
                pc = "i5 12400F + RTX 4060";
                desempenho = "CS2: ~240 FPS | GTA V: ~150 FPS | Fortnite: ~180 FPS";
                futuro = "Alto desempenho por anos";
                explicacao = "Roda tudo no alto com folga.";
            }

        } else {

            if (uso === "trabalho") {
                perfil = "PC para Trabalho";
                explicacao = "Ideal para produtividade e programas pesados.";
            } else {
                perfil = "PC para Estudos";
                explicacao = "Perfeito para tarefas diárias.";
            }

            pc = "i5 + 16GB RAM + SSD";
            desempenho = "Rápido e sem travamentos";
            futuro = "Durável por anos";
        }

        resultado.innerHTML = `
            <h3>🎯 Perfil: ${perfil}</h3>
            <p><strong>💻 PC:</strong> ${pc}</p>
            <p><strong>⚡ Desempenho:</strong> ${desempenho}</p>
            <p><strong>📈 Futuro:</strong> ${futuro}</p>
            <p><strong>🤖 Explicação:</strong> ${explicacao}</p>
        `;

        clearInterval(intervalo);
        robotText.innerText = "✅ Análise concluída!";
        robot.style.display = "none";

    }, 2000);
}

// Carrinho
let carrinho = [];

function adicionarAoCarrinho(item) {
    carrinho.push(item);
    alert(item + " adicionado ao carrinho!");
}

// Cadastro
function abrirCadastro() {
    document.getElementById("cadastro-box").style.display = "block";
    document.getElementById("btn-abrir-cadastro").style.display = "none";
}

function fazerCadastro() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const msg = document.getElementById("msg-cadastro");

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !email || !senha) {
        msg.innerText = "Preencha todos os campos!";
        msg.style.color = "red";
        return;
    }

    if (!emailValido.test(email)) {
        msg.innerText = "Digite um email válido!";
        msg.style.color = "red";
        return;
    }

    msg.innerText = "Cadastrado com sucesso!";
    msg.style.color = "green";
}

function atualizarPrioridade() {
    const uso = document.getElementById("uso").value;
    const prioridade = document.getElementById("prioridade");

    prioridade.innerHTML = '<option value="">O que você prioriza?</option>';

    if (uso === "gamer") {
        prioridade.innerHTML += `
            <option value="fps">Desempenho (FPS)</option>
            <option value="qualidade">Qualidade gráfica</option>
        `;
    } else {
        prioridade.innerHTML += `
            <option value="velocidade">Velocidade</option>
            <option value="multitarefa">Multitarefa</option>
        `;
    }
}
