console.log("Modo Palco carregado");

let timerOcultarPlayerPalco = null;

let timerOcultarTopoVoltar = null;

const topoVoltarPalco = document.getElementById("topo-voltar-palco");
const btnVoltarPalco = document.getElementById("btn-voltar-palco");

const areaMostrarPlayer = document.createElement("div");
areaMostrarPlayer.className = "area-mostrar-player";
document.body.appendChild(areaMostrarPlayer);


const areaMostrarVoltar = document.createElement("div");
areaMostrarVoltar.className = "area-mostrar-voltar";
document.body.appendChild(areaMostrarVoltar);

areaMostrarVoltar.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    mostrarTopoVoltarPalco();
});

function ocultarPlayerPalco() {
    if (!document.body.classList.contains("modo-player")) {
        return;
    }

    document.body.classList.add("player-oculto");

    setTimeout(function() {
        if (typeof renderizarPaginaPdf === "function") {
            renderizarPaginaPdf();
        }
    }, 80);
}

function mostrarPlayerPalco() {
    if (!document.body.classList.contains("modo-player")) {
        return;
    }

    document.body.classList.remove("player-oculto");

    setTimeout(function() {
        if (typeof renderizarPaginaPdf === "function") {
            renderizarPaginaPdf();
        }
    }, 80);

    clearTimeout(timerOcultarPlayerPalco);

    timerOcultarPlayerPalco = setTimeout(function() {
        ocultarPlayerPalco();
    }, 5000);
}

function iniciarModoPalco() {
    clearTimeout(timerOcultarPlayerPalco);

    document.body.classList.remove("player-oculto");

    timerOcultarPlayerPalco = setTimeout(function() {
        ocultarPlayerPalco();
    }, 3000);
}

function encerrarModoPalco() {
    clearTimeout(timerOcultarPlayerPalco);
    document.body.classList.remove("player-oculto");
}

areaMostrarPlayer.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    mostrarPlayerPalco();
});


function mostrarTopoVoltarPalco() {
    if (!document.body.classList.contains("modo-player")) {
        return;
    }

    topoVoltarPalco.classList.add("mostrar");

    clearTimeout(timerOcultarTopoVoltar);

    timerOcultarTopoVoltar = setTimeout(function() {
        topoVoltarPalco.classList.remove("mostrar");
    }, 3000);
}

topoVoltarPalco.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    mostrarTopoVoltarPalco();
});

btnVoltarPalco.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    voltarParaPlaylistDoPlayer();
});