console.log("Pasta PalcoPlay carregada");





const telaConfiguracaoInicial =
    document.getElementById("tela-configuracao-inicial");

const btnConfigurarPastaInicialTela =
    document.getElementById("btn-configurar-pasta-inicial-tela");

const btnIgnorarConfigPastaTela =
    document.getElementById("btn-ignorar-config-pasta-tela");



btnIgnorarConfigPastaTela.addEventListener("click", function() {

    localStorage.setItem(
        "palcoplay_config_inicial",
        "ignorado"
    );

    finalizarConfiguracaoInicial();

});

let pastaPalcoPlayHandle = null;

function abrirBancoPalcoPlay() {
    return new Promise(function(resolve, reject) {
        const pedido = indexedDB.open("palcoplay-db", 1);

        pedido.onupgradeneeded = function(evento) {
            const banco = evento.target.result;

            if (!banco.objectStoreNames.contains("configuracoes")) {
                banco.createObjectStore("configuracoes");
            }
        };

        pedido.onsuccess = function(evento) {
            resolve(evento.target.result);
        };

        pedido.onerror = function(evento) {
            reject(evento.target.error);
        };
    });
}

async function salvarPastaPalcoPlay(handle) {
    const banco = await abrirBancoPalcoPlay();

    return new Promise(function(resolve, reject) {
        const transacao = banco.transaction("configuracoes", "readwrite");
        const store = transacao.objectStore("configuracoes");

        const pedido = store.put(handle, "pastaPalcoPlay");

        pedido.onsuccess = function() {
            resolve();
        };

        pedido.onerror = function(evento) {
            reject(evento.target.error);
        };
    });
}

async function carregarPastaPalcoPlay() {
    const banco = await abrirBancoPalcoPlay();

    return new Promise(function(resolve, reject) {
        const transacao = banco.transaction("configuracoes", "readonly");
        const store = transacao.objectStore("configuracoes");

        const pedido = store.get("pastaPalcoPlay");

        pedido.onsuccess = function() {
            resolve(pedido.result || null);
        };

        pedido.onerror = function(evento) {
            reject(evento.target.error);
        };
    });
}


function atualizarBotaoPastaHome() {
    const statusPasta = localStorage.getItem("palcoplay_config_inicial");

    if (!btnConectarPastaHome) {
        return;
    }

    if (statusPasta === "configurado") {
        btnConectarPastaHome.innerHTML =
            '<i class="bi bi-arrow-repeat"></i> Sincronizar arquivos';

        const textoPastaHome = document.getElementById("texto-pasta-home");

        if (textoPastaHome) {
            textoPastaHome.textContent =
                "Sincronize antes de tocar para garantir que músicas e letras estejam conectadas.";
        }
    } else {
        btnConectarPastaHome.innerHTML =
            '<i class="bi bi-folder2-open"></i> Configurar Pasta PalcoPlay';

        const textoPastaHome = document.getElementById("texto-pasta-home");

        if (textoPastaHome) {
            textoPastaHome.textContent =
                "Configure sua pasta para usar todos os recursos do PalcoPlay.";
        }
    }
}

async function escolherESincronizarPastaPalcoPlay() {

    try {
        if (!pastaPalcoPlayHandle) {
            pastaPalcoPlayHandle = await carregarPastaPalcoPlay();
        }

        if (!pastaPalcoPlayHandle) {
            pastaPalcoPlayHandle = await window.showDirectoryPicker();
            await salvarPastaPalcoPlay(pastaPalcoPlayHandle);
        }

        const arquivosEncontrados = [];

        for await (const entrada of pastaPalcoPlayHandle.values()) {
            if (entrada.kind === "file") {
                arquivosEncontrados.push({
                    nome: entrada.name,
                    handle: entrada
                });
            }
        }

        if (typeof reconectarTodasPlaylistsDaPasta === "function") {
            await reconectarTodasPlaylistsDaPasta(arquivosEncontrados);
        }

        localStorage.setItem("palcoplay_config_inicial", "configurado");

        atualizarBotaoPastaHome();

        mostrarMensagemTemporaria(
            "Aê! Arquivos sincronizados. Só usar!",
            "success"
        );

        const agora = new Date();

        const horario =
            agora.getHours().toString().padStart(2, "0") +
            ":" +
            agora.getMinutes().toString().padStart(2, "0");

        localStorage.setItem("palcoplay_ultima_sincronizacao", horario);

        if (btnConectarPastaHome) {
            btnConectarPastaHome.classList.add("d-none");
        }

        const textoPastaHome = document.getElementById("texto-pasta-home");

        if (textoPastaHome) {
            textoPastaHome.innerHTML =
                '<span class="status-pasta-home">' +
                '<strong>🟢 Arquivos sincronizados</strong>' +
                '<span>• Última sincronização: ' + horario + '</span>' +
                '</span>';
        }

        finalizarConfiguracaoInicial();

    } catch (erro) {
        console.log(erro);

        pastaPalcoPlayHandle = null;

        mostrarMensagemTemporaria(
            "⚠ Não consegui acessar a pasta. Configure novamente.",
            "warning"
        );
    }
}

btnConectarPastaHome.addEventListener("click", async function() {
    await escolherESincronizarPastaPalcoPlay();
});



const btnCopiarNomePasta =
    document.getElementById("btn-copiar-nome-pasta");

if (btnCopiarNomePasta) {
    btnCopiarNomePasta.addEventListener("click", function() {
        navigator.clipboard.writeText("PalcoPlay");

        mostrarMensagemTemporaria(
            "Nome da pasta copiado.",
            "success"
        );
    });
}


function finalizarConfiguracaoInicial() {

    telaConfiguracaoInicial.classList.add("d-none");

    if (typeof telaPlaylists !== "undefined") {
        telaPlaylists.classList.remove("d-none");
    }

}

btnConfigurarPastaInicialTela.addEventListener(
    "click",
    async function() {
        await escolherESincronizarPastaPalcoPlay();
    }
);

window.addEventListener("load", async function() {
    const statusPasta =
        localStorage.getItem("palcoplay_config_inicial");

    if (!statusPasta) {
        telaConfiguracaoInicial.classList.remove("d-none");

        if (typeof telaPlaylists !== "undefined") {
            telaPlaylists.classList.add("d-none");
        }

        return;
    }

    if (statusPasta === "configurado") {
        await escolherESincronizarPastaPalcoPlay();
        return;
    }

    if (statusPasta === "ignorado") {
        telaConfiguracaoInicial.classList.add("d-none");

        if (typeof telaPlaylists !== "undefined") {
            telaPlaylists.classList.remove("d-none");
        }
    }
});

atualizarBotaoPastaHome();