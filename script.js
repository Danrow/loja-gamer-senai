function limparPedido(){
    document.getElementById("PC_GAMER_1").value = 0;
    document.getElementById("PC_GAMER_2").value = 0;
    document.getElementById("PC_GAMER_3").value = 0;
    document.getElementById("PC_GAMER_4").value = 0;
    document.getElementById("Monitor_GAMER_1").value = 0;
    document.getElementById("Monitor_GAMER_2").value = 0;
    document.getElementById("Monitor_GAMER_3").value = 0;
    document.getElementById("Monitor_GAMER_4").value = 0;
    document.getElementById("GTA_6_PS5").value = 0;
    document.getElementById("GOT_EP_PS4").value = 0;
    document.getElementById("GOW_Ragnarok_ES_PS4").value = 0;
    document.getElementById("Bloodborne_Hits_PS4").value = 0;

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
    let GTA_6_PS5 = Number(
        document.getElementById("GTA_6_PS5").value
    );

    let GOT_EP_PS4 = Number(
        document.getElementById("GOT_EP_PS4").value
    );

    let GOW_Ragnarok_ES_PS4 = Number(
        document.getElementById("GOW_Ragnarok_ES_PS4").value
    );

    let Bloodborne_Hits_PS4 = Number(
        document.getElementById("Bloodborne_Hits_PS4").value
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
        GTA_6_PS5,
        GOT_EP_PS4,
        GOW_Ragnarok_ES_PS4,
        Bloodborne_Hits_PS4
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
        (GTA_6_PS5 * 418.41) +
        (GOT_EP_PS4 * 55.71) +
        (GOW_Ragnarok_ES_PS4 * 106.86) +
        (Bloodborne_Hits_PS4 * 55.71);


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

    // GTA_6_PS5
    if (GTA_6_PS5 > 0) {

        resumo += GTA_6_PS5
            + " x GTA_6_PS5 — R$ "
            + (GTA_6_PS5 * 418.41).toFixed(2)
            + "\n";

    }

    // GOT_EP_PS4
    if (GOT_EP_PS4 > 0) {

        resumo += GOT_EP_PS4
            + " x GOT_EP_PS4 — R$ "
            + (GOT_EP_PS4 * 55.71).toFixed(2)
            + "\n";

    }

    // GOW_Ragnarok_ES_PS4
    if (GOW_Ragnarok_ES_PS4 > 0) {

        resumo += GOW_Ragnarok_ES_PS4
            + " x GOW_Ragnarok_ES_PS4 — R$ "
            + (GOW_Ragnarok_ES_PS4 * 106.86).toFixed(2)
            + "\n";

    }

    // Bloodborne_Hits_PS4
    if (Bloodborne_Hits_PS4 > 0) {

        resumo += Bloodborne_Hits_PS4
            + " x Bloodborne_Hits_PS4 — R$ "
            + (Bloodborne_Hits_PS4 * 55.71).toFixed(2)
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
