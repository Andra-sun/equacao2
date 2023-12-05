document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");

    var resultDeta = document.querySelector(".text-resultDeta");
    var resultX1 = document.querySelector(".text-resultx1");
    var resultx2 = document.querySelector(".text-resultx2");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let a = parseFloat(document.querySelector("#a").value);
        let b = parseFloat(document.querySelector("#b").value);
        let c = parseFloat(document.querySelector("#c").value);

        let delta = b ** 2 - 4 * a * c;

        if (delta >= 0) {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);

            delta = formatarNumero(delta);
            x1 = formatarNumero(x1);
            x2 = formatarNumero(x2);

            console.log("Delta:", delta);
            console.log("x1:", x1);
            console.log("x2:", x2);

            resultDeta.innerHTML = delta;
            resultX1.innerHTML = x1;
            resultx2.innerHTML = x2;
        } else {
            console.log(
                "Delta menor que zero, a equação não possui raízes reais."
            );
            resultDeta.innerHTML = "delta menor que 0";
            resultX1.innerHTML = "";
            resultx2.innerHTML = "";
        }
    });
});
function formatarNumero(numero) {
    if (Number.isInteger(numero)) {
        return numero.toString();
    } else {
        return numero.toFixed(3);
    }
}

