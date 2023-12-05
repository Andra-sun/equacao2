document.addEventListener("DOMContentLoaded", function () {
    function verificarLarguraTela() {
        var larguraTela = window.innerWidth;

        if (larguraTela > 767) {
            document.getElementById("middle").innerHTML = "Resultado->";
        } else {
            document.getElementById("middle").innerHTML = "Resultado↓";
        }
    }
    verificarLarguraTela();

    window.addEventListener("resize", verificarLarguraTela);
});
