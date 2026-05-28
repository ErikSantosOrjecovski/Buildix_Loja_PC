const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/recomendar", (req, res) => {

    const { uso } = req.body;

    let resposta = "";

    // 🎯 PERFIL COMPETITIVO
    if (uso === "fps") {

        resposta = `
🤖 Buildix IA:

Este setup é ideal para jogadores competitivos que priorizam FPS alto, baixa latência e máxima estabilidade durante partidas online.

💻 Configuração recomendada:
• Ryzen 5 5600
• RTX 4060
• 16GB RAM Dual Channel
• SSD NVMe

⚡ Resultado esperado:
Fortnite, CS2, Valorant e Warzone rodando com FPS extremamente alto, garantindo gameplay fluida, rápida e sem travamentos.

📈 Durabilidade:
Essa máquina deve continuar excelente por vários anos antes de precisar de upgrades.
        `;
    }

    // 🎨 PERFIL GRÁFICO
    else if (uso === "grafico") {

        resposta = `
🤖 Buildix IA:

Este setup foi pensado para jogadores que desejam máxima qualidade gráfica e imersão visual.

💻 Configuração recomendada:
• Ryzen 7
• RTX 4070
• 32GB RAM
• SSD NVMe

🎮 Resultado esperado:
Jogos como Red Dead Redemption 2, Cyberpunk 2077 e GTA V rodando no Ultra com gráficos extremamente detalhados e FPS estável.

🌄 Experiência:
Ideal para quem prefere apreciar ambientes, iluminação, texturas e visuais cinematográficos sem engasgos.
        `;
    }

    // ❌ ERRO
    else {

        resposta = "❌ Perfil inválido.";
    }

    res.json({ resposta });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});