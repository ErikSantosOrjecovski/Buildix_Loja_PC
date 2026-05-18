// Trocar abas
function trocarAba(id) {
    document.querySelectorAll(".conteudo").forEach(sec => sec.classList.remove("ativo"));
    document.getElementById(id).classList.add("ativo");
}

// 🔥 NOVA FUNÇÃO BUILDIX
function gerarRecomendacao() {

    const orcamento = document.getElementById("orcamento").value;
    const uso = document.getElementById("uso").value;
    const prioridade = document.getElementById("prioridade").value;

    const resultado = document.getElementById("resultado-buildix");

    if (!orcamento || !uso || !prioridade) {
        resultado.innerHTML = "Preencha todas as opções!";
        return;
    }

    let perfil = "";
    let pc = "";
    let futuro = "";

    if (orcamento === "baixo" && uso === "gamer") {
        perfil = "Gamer Básico";
        pc = "Ryzen 5 5600 + RX 6600";
        futuro = "Em 2 anos: desempenho médio | Upgrade recomendado: GPU";
    }

    else if (orcamento === "medio" && uso === "gamer") {
        perfil = "Gamer Intermediário";
        pc = "i5 12400F + RTX 4060";
        futuro = "Em 2 anos: alto desempenho | Upgrade leve necessário";
    }

    else if (uso === "trabalho") {
        perfil = "Workstation";
        pc = "i5 + 16GB RAM + SSD";
        futuro = "Estável por vários anos";
    }

    else {
        perfil = "Usuário Casual";
        pc = "Configuração básica equilibrada";
        futuro = "Sem necessidade de upgrade imediato";
    }

    resultado.innerHTML = `
        <h3>Seu Perfil: ${perfil}</h3>
        <p><strong>PC Recomendado:</strong> ${pc}</p>
        <p><strong>Previsão de Futuro:</strong> ${futuro}</p>
    `;
}

// Simulação FPS (mantida)
function simularFPS() {
    const cpu = document.getElementById("cpu").value;
    const gpu = document.getElementById("gpu").value;
    const jogo = document.getElementById("jogo").value;
    const resultado = document.getElementById("resultado");

    if (!cpu || !gpu || !jogo) {
        resultado.innerText = "Selecione tudo!";
        return;
    }

    if (cpu === "Intel" && gpu === "RX 6600") {
        resultado.innerText = "Configuração incompatível!";
        return;
    }

    const fpsTabela = {
        "Intel-RTX 3060-CS2": 180,
        "Intel-RTX 4060-CS2": 240,
        "AMD-RX 6600-CS2": 160,
        "Intel-RTX 3060-GTA V": 120,
        "Intel-RTX 4060-GTA V": 150,
        "AMD-RX 6600-GTA V": 110,
        "Intel-RTX 3060-Fortnite": 140,
        "Intel-RTX 4060-Fortnite": 180,
        "AMD-RX 6600-Fortnite": 130
    };

    const chave = `${cpu}-${gpu}-${jogo}`;
    const fps = fpsTabela[chave] || 100;

    resultado.innerText = `FPS estimado em ${jogo}: ${fps}`;
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
