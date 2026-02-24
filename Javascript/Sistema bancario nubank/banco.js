        function verificarSaldo() {
            const saldo = parseFloat(document.getElementById('saldo').value);
            const resultado = document.getElementById('resultado');

            if (saldo > 0) {
                resultado.textContent = `Seu saldo é positivo: R$ ${saldo.toFixed(2)}`;
            } if (saldo === 0) {
                resultado.textContent = "Seu saldo é zero.";
            }
            else if (saldo < 0) {
                resultado.textContent = `Seu saldo é negativo: R$ ${saldo.toFixed(2)}`;
            }
        }