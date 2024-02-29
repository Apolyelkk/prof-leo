(function () {
    var cliqueBloqueado = true;

    function esconderElementos() {
        var elementos = ["background", "atomo", "texto-carregando", "texto-feito"];
        elementos.forEach(function (elementoId) {
            var elemento = document.getElementById(elementoId);
            if (elemento) {
                elemento.style.display = "none";
            }
        });
    }

    function exibirFeito() {
        var textoFeito = document.getElementById("texto-feito");
        if (textoFeito) {
            textoFeito.style.display = "block";
        }
    }

    function carregamento() {
        var textoCarregando = document.getElementById("texto-carregando");
        var progresso = 0;
        var incremento = 1;

        function atualizarTexto() {
            if (textoCarregando) {
                textoCarregando.innerHTML = progresso + "%";
            }
        }

        function animar() {
            progresso += incremento;

            if (progresso <= 100) {
                atualizarTexto();
                requestAnimationFrame(animar);
            } else {
                exibirFeito();
                if (textoCarregando) {
                    textoCarregando.style.display = "none";
                }
                cliqueBloqueado = false;
            }
        }

        animar();
    }

    carregamento();

    document.addEventListener("click", function () {
        if (!cliqueBloqueado) {
            esconderElementos();
            cliqueBloqueado = true;

            // Reprodução de áudio quando o clique estiver desbloqueado e o usuário clicar na tela
            meuAudio.play().then(function () {
                // Reprodução iniciada com sucesso
            }).catch(function (error) {
                // Tratar erro, se necessário
                console.error('Erro ao iniciar a reprodução:', error);
            });
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        cliqueBloqueado = true;
    });
})();

