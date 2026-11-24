// Permite clicar nos cards de PC_GAMER para focar no input
for (let i = 1; i < 5; i++) {
    document.getElementById("PC_GAMER_div"+i).addEventListener("click", function() {
        var input = document.getElementById("PC_GAMER_"+i);
        input.focus();
        if (input.value === "0") input.value = "";
    });
    document.getElementById("PC_GAMER_"+i).addEventListener("blur", function() {
        if (this.value === "") this.value = "0";
    });
    
}
// Permite clicar nos cards de Monitor_GAMER para focar no input
for (let i = 1; i < 5; i++) {
    document.getElementById("Monitor_GAMER_div"+i).addEventListener("click", function() {
        var input = document.getElementById("Monitor_GAMER_"+i);
        input.focus();
        if (input.value === "0") input.value = "";
    });
    document.getElementById("Monitor_GAMER_"+i).addEventListener("blur", function() {
        if (this.value === "") this.value = "0";
    });
}
// Permite clicar nos cards de GAMES para focar no input
for (let i = 1; i < 5; i++) {
    document.getElementById("GAME_div"+i).addEventListener("click", function() {
        var input = document.getElementById("GAME_"+i);
        input.focus();
        if (input.value === "0") input.value = "";
    });
    document.getElementById("GAME_"+i).addEventListener("blur", function() {
        if (this.value === "") this.value = "0";
    });
}


// Limpa todos os campos

function limparPedido(){
    for (let i = 1; i < 5; i++) {
        document.getElementById("PC_GAMER_"+i).value = 0;
    }
    for (let i = 1; i < 5; i++) {
        document.getElementById("Monitor_GAMER_"+i).value = 0;
    }
    for (let i = 1; i < 5; i++) {
        document.getElementById("GAME_"+i).value = 0;
    }
    document.getElementById("resumo").textContent ="";
}

function calcularPedido() {

    // ==========================================
    // 1. PC Gamer
    // ==========================================
    let PC_GAMER_1 = Number(
        document.getElementById("PC_GAMER_1").value
    );

    let PC_GAMER_2 = Number(
        document.getElementById("PC_GAMER_2").value
    );

    let PC_GAMER_3 = Number(
        document.getElementById("PC_GAMER_3").value
    );

    let PC_GAMER_4 = Number(
        document.getElementById("PC_GAMER_4").value
    );


    // ==========================================
    // 2. Monitores
    // ==========================================

    let Monitor_GAMER_1 = Number(
        document.getElementById("Monitor_GAMER_1").value
    );

    let Monitor_GAMER_2 = Number(
        document.getElementById("Monitor_GAMER_2").value
    );

    let Monitor_GAMER_3 = Number(
        document.getElementById("Monitor_GAMER_3").value
    );

    let Monitor_GAMER_4 = Number(
        document.getElementById("Monitor_GAMER_4").value
    );

    // ==========================================
    // 1. Games
    // ==========================================
    let GAME_1 = Number(
        document.getElementById("GAME_1").value
    );

    let GAME_2 = Number(
        document.getElementById("GAME_2").value
    );

    let GAME_3 = Number(
        document.getElementById("GAME_3").value
    );

    let GAME_4 = Number(
        document.getElementById("GAME_4").value
    );

    // ==========================================
    // 3. VALIDAÇÃO DAS QUANTIDADES
    // ==========================================

    // Guarda todas as quantidades em uma lista
    let quantidades = [
        PC_GAMER_1,
        PC_GAMER_2,
        PC_GAMER_3,
        PC_GAMER_4,
        Monitor_GAMER_1,
        Monitor_GAMER_2,
        Monitor_GAMER_3,
        Monitor_GAMER_4,
        GAME_1,
        GAME_2,
        GAME_3,
        GAME_4
    ];

    // Verifica se existe alguma quantidade inválida
    if (quantidades.some(q => !Number.isInteger(q) || q < 0)) {

        document.getElementById("resumo").textContent =
            "Digite quantidades inteiras maiores ou iguais a zero.";

        return;

    }


    // ==========================================
    // 4. CÁLCULO DO VALOR TOTAL
    // ==========================================

    // Multiplica cada quantidade pelo seu preço
    let total =
        (PC_GAMER_1 * 3691.69) +    
        (PC_GAMER_2 * 3462.74) +
        (PC_GAMER_3 * 3168.24) +
        (PC_GAMER_4 * 8064.55) +
        (Monitor_GAMER_1 * 566.11) +
        (Monitor_GAMER_2 * 692.00) +
        (Monitor_GAMER_3 * 967.98) +
        (Monitor_GAMER_4 * 989.10) +
        (GAME_1 * 418.41) +
        (GAME_2 * 55.71) +
        (GAME_3 * 106.86) +
        (GAME_4 * 55.71);


    // ==========================================
    // 5. MONTAGEM DO RESUMO DO PEDIDO
    // ==========================================

    // Começa com um texto vazio
    let resumo = "";

        // PC_GAMER_1
    if (PC_GAMER_1 > 0) {

        resumo += PC_GAMER_1
            + " x PC GAMER ACreed — R$ "
            + (PC_GAMER_1 * 3691.69).toFixed(2)
            + "\n";

    }

    // PC_GAMER_2
    if (PC_GAMER_2 > 0) {

        resumo += PC_GAMER_2
            + " x PC Gamer Aquario Preto — R$ "
            + (PC_GAMER_2 * 3462.74).toFixed(2)
            + "\n";

    }


    // PC_GAMER_3
    if (PC_GAMER_3 > 0) {

        resumo += PC_GAMER_3
            + " x PC Gamer Aquario Branco  — R$ "
            + (PC_GAMER_3 * 3168.24).toFixed(2)
            + "\n";

    }


    // PC_GAMER_4
    if (PC_GAMER_4 > 0) {

        resumo += PC_GAMER_4
            + " x PC Gamer Branco — R$ "
            + (PC_GAMER_4 * 8064.55).toFixed(2)
            + "\n";

    }

    // Monitor_GAMER__1
    if (Monitor_GAMER_1 > 0) {

        resumo += Monitor_GAMER_1
            + " x Monitor Gamer AOC AGON — R$ "
            + (Monitor_GAMER_1 * 566.11).toFixed(2)
            + "\n";

    }

    // Monitor_GAMER_2
    if (Monitor_GAMER_2 > 0) {

        resumo += Monitor_GAMER_2
            + " x LG UltraGear Monitor Gamer — R$ "
            + (Monitor_GAMER_2 * 692.00).toFixed(2)
            + "\n";

    }


    // PC_GAMER_3
    if (Monitor_GAMER_3 > 0) {

        resumo += Monitor_GAMER_3
            + " x Monitor Gamer Curvo AOC AGON — R$ "
            + (Monitor_GAMER_3 * 967.98).toFixed(2)
            + "\n";

    }


    // Monitor_GAMER_4
    if (Monitor_GAMER_4 > 0) {

        resumo += Monitor_GAMER_4
            + " x Monitor Gamer AOC AGON G4S — R$ "
            + (Monitor_GAMER_4 * 989.10).toFixed(2)
            + "\n";

    }

    // GAME_1
    if (GAME_1 > 0) {

        resumo += GAME_1
            + " x GTA 6 - PS5 — R$ "
            + (GAME_1 * 418.41).toFixed(2)
            + "\n";

    }

    // GAME_2
    if (GAME_2 > 0) {

        resumo += GAME_2
            + " x Ghost Of Tsushima - EP - PS4 — R$ "
            + (GAME_2 * 55.71).toFixed(2)
            + "\n";

    }

    // GAME_3
    if (GAME_3 > 0) {

        resumo += GAME_3
            + " x God of War Ragnarök - ES - PS4 — R$ "
            + (GAME_3 * 106.86).toFixed(2)
            + "\n";

    }

    // GAME_4
    if (GAME_4 > 0) {

        resumo += GAME_4
            + " x Bloodborne Hits - PS4 — R$ "
            + (GAME_4 * 55.71).toFixed(2)
            + "\n";

    }


    // ==========================================
    // 6. VERIFICA SE O PEDIDO ESTÁ VAZIO
    // ==========================================

    if (resumo === "") {

        resumo = "Nenhum produto selecionado.\n";

    }


    // ==========================================
    // 7. ACRESCENTA O TOTAL AO RESUMO
    // ==========================================

    resumo += "\nTOTAL: R$ "
        + total.toFixed(2).replace(".", ",");


    // ==========================================
    // 8. MOSTRA O RESULTADO NA PÁGINA
    // ==========================================

    document.getElementById("resumo").textContent = resumo;

}

function enviarPedido(){
    let pedido = document.getElementById("resumo").textContent
    if ((pedido === "") || (pedido === "Nenhum produto selecionado.\n\nTOTAL: R$ 0,00"))
    {
        alert("Não a nenhum pedido!")
    } else {
        window.open("https://wa.me/5521967710158?text=" + encodeURIComponent(pedido));
    }
} 
