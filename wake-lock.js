console.log("Wake Lock do PalcoPlay carregado");

let wakeLockPalcoPlay = null;

async function ativarTelaLigada() {
    if (!("wakeLock" in navigator)) {
        console.log("Wake Lock não suportado neste navegador.");
        return;
    }

    try {
        wakeLockPalcoPlay = await navigator.wakeLock.request("screen");
        console.log("Tela ligada ativada.");
    } catch (erro) {
        console.log("Erro ao ativar Wake Lock:", erro);
    }
}

async function desativarTelaLigada() {
    if (wakeLockPalcoPlay) {
        await wakeLockPalcoPlay.release();
        wakeLockPalcoPlay = null;
        console.log("Tela ligada desativada.");
    }
}