console.log("Volumes do PalcoPlay carregado");

let musicaVolumesId = null;
let audioVolumesPreview = null;
let tocandoPreviewVolumes = false;

let contextoAudioVolumes = null;
let fonteAudioVolumes = null;
let divisorCanaisVolumes = null;
let juntadorCanaisVolumes = null;
let ganhoEsquerdoVolumes = null;
let ganhoDireitoVolumes = null;
let ganhoGeralVolumes = null;

const modalEditarNomeCanal = new bootstrap.Modal(
    document.getElementById("modalEditarNomeCanal")
);

const inputNomeCanalVolume = document.getElementById("input-nome-canal-volume");
const btnSalvarNomeCanalVolume = document.getElementById("btn-salvar-nome-canal-volume");

let canalEditandoVolume = null;

const modalGerenciarVolumes = new bootstrap.Modal(
    document.getElementById("modalGerenciarVolumes")
);

const nomeMusicaVolumes = document.getElementById("nome-musica-volumes");
const btnPreviewVolumes = document.getElementById("btn-preview-volumes");

const volumeGeral = document.getElementById("volume-geral");
const volumeEsquerdo = document.getElementById("volume-esquerdo");
const volumeDireito = document.getElementById("volume-direito");

const valorVolumeGeral = document.getElementById("valor-volume-geral");
const valorVolumeEsquerdo = document.getElementById("valor-volume-esquerdo");
const valorVolumeDireito = document.getElementById("valor-volume-direito");

const textoCanalEsquerdo = document.getElementById("texto-canal-esquerdo");
const textoCanalDireito = document.getElementById("texto-canal-direito");

const btnEditarCanalEsquerdo = document.getElementById("btn-editar-canal-esquerdo");
const btnEditarCanalDireito = document.getElementById("btn-editar-canal-direito");

const btnSalvarVolumes = document.getElementById("btn-salvar-volumes");

function abrirGerenciarVolumes(musicaId) {
    musicaVolumesId = musicaId;

    const musica = musicas.find(function(item) {
        return item.id === musicaId;
    });

    if (!musica) {
        alert("Música não encontrada.");
        return;
    }

    if (!musica.arquivo) {
        alert("Áudio desconectado. Conecte a pasta primeiro.");
        return;
    }

    nomeMusicaVolumes.textContent = "Música: " + musica.nome;

    pararPreviewVolumes();

    audioVolumesPreview = new Audio(
        URL.createObjectURL(musica.arquivo)
    );

    prepararAudioStereoVolumes();
    aplicarVolumePreview();

    btnPreviewVolumes.textContent = "▶";

    if (!musica.volumes) {
        musica.volumes = {
            geral: 100,
            esquerdo: 100,
            direito: 100,
            nomeEsquerdo: "Esquerda",
            nomeDireito: "Direita"
        };
    }

    volumeGeral.value = musica.volumes.geral;
    volumeEsquerdo.value = musica.volumes.esquerdo;
    volumeDireito.value = musica.volumes.direito;

    textoCanalEsquerdo.textContent = musica.volumes.nomeEsquerdo;
    textoCanalDireito.textContent = musica.volumes.nomeDireito;

    atualizarTextosVolumes();
    aplicarVolumePreview();

    modalGerenciarVolumes.show();
}

btnPreviewVolumes.addEventListener("click", function() {
    if (!audioVolumesPreview) {
        return;
    }

    if (audioVolumesPreview.paused) {
        audioVolumesPreview.play();
        btnPreviewVolumes.textContent = "⏸";
    } else {
        audioVolumesPreview.pause();
        btnPreviewVolumes.textContent = "▶";
    }
});

function pararPreviewVolumes() {
    if (audioVolumesPreview) {
        audioVolumesPreview.pause();
        audioVolumesPreview.currentTime = 0;
        audioVolumesPreview = null;
    }

    btnPreviewVolumes.textContent = "▶";
}

document
    .getElementById("modalGerenciarVolumes")
    .addEventListener("hidden.bs.modal", function() {
        pararPreviewVolumes();
    });


function atualizarTextosVolumes() {
    valorVolumeGeral.textContent = volumeGeral.value + "%";
    valorVolumeEsquerdo.textContent = volumeEsquerdo.value + "%";
    valorVolumeDireito.textContent = volumeDireito.value + "%";
}

function aplicarVolumePreview() {
    if (ganhoGeralVolumes) {
        ganhoGeralVolumes.gain.value = Number(volumeGeral.value) / 100;
    }

    if (ganhoEsquerdoVolumes) {
        ganhoEsquerdoVolumes.gain.value = Number(volumeEsquerdo.value) / 100;
    }

    if (ganhoDireitoVolumes) {
        ganhoDireitoVolumes.gain.value = Number(volumeDireito.value) / 100;
    }
}

volumeGeral.addEventListener("input", function() {
    atualizarTextosVolumes();
    aplicarVolumePreview();
});

volumeEsquerdo.addEventListener("input", function() {
    atualizarTextosVolumes();
    aplicarVolumePreview();
});

volumeDireito.addEventListener("input", function() {
    atualizarTextosVolumes();
    aplicarVolumePreview();
});


function prepararAudioStereoVolumes() {
    contextoAudioVolumes = new AudioContext();

    fonteAudioVolumes =
        contextoAudioVolumes.createMediaElementSource(audioVolumesPreview);

    divisorCanaisVolumes =
        contextoAudioVolumes.createChannelSplitter(2);

    ganhoEsquerdoVolumes =
        contextoAudioVolumes.createGain();

    ganhoDireitoVolumes =
        contextoAudioVolumes.createGain();

    ganhoGeralVolumes =
        contextoAudioVolumes.createGain();

    juntadorCanaisVolumes =
        contextoAudioVolumes.createChannelMerger(2);

    fonteAudioVolumes.connect(divisorCanaisVolumes);

    divisorCanaisVolumes.connect(ganhoEsquerdoVolumes, 0);
    divisorCanaisVolumes.connect(ganhoDireitoVolumes, 1);

    ganhoEsquerdoVolumes.connect(juntadorCanaisVolumes, 0, 0);
    ganhoDireitoVolumes.connect(juntadorCanaisVolumes, 0, 1);

    juntadorCanaisVolumes.connect(ganhoGeralVolumes);

    ganhoGeralVolumes.connect(contextoAudioVolumes.destination);
}


btnEditarCanalEsquerdo.addEventListener("click", function() {
    canalEditandoVolume = "esquerdo";
    inputNomeCanalVolume.value = textoCanalEsquerdo.textContent;
    modalEditarNomeCanal.show();
});

btnEditarCanalDireito.addEventListener("click", function() {
    canalEditandoVolume = "direito";
    inputNomeCanalVolume.value = textoCanalDireito.textContent;
    modalEditarNomeCanal.show();
});

btnSalvarNomeCanalVolume.addEventListener("click", function() {
    const novoNome = inputNomeCanalVolume.value.trim();

    if (novoNome === "") {
        alert("Digite o nome do canal.");
        return;
    }

    if (canalEditandoVolume === "esquerdo") {
        textoCanalEsquerdo.textContent = novoNome;
    }

    if (canalEditandoVolume === "direito") {
        textoCanalDireito.textContent = novoNome;
    }

    modalEditarNomeCanal.hide();
});

btnSalvarVolumes.addEventListener("click", function() {
    const musica = musicas.find(function(item) {
        return item.id === musicaVolumesId;
    });

    if (!musica) {
        alert("Música não encontrada.");
        return;
    }

    musica.volumes = {
        geral: Number(volumeGeral.value),
        esquerdo: Number(volumeEsquerdo.value),
        direito: Number(volumeDireito.value),
        nomeEsquerdo: textoCanalEsquerdo.textContent,
        nomeDireito: textoCanalDireito.textContent
    };

    salvarMusicas();
    salvarPlaylists();

    modalGerenciarVolumes.hide();

    mostrarMensagemTemporaria("✅ Volumes salvos.", "success");
});

let contextoAudioPlayerPrincipal = null;
let fonteAudioPlayerPrincipal = null;
let splitterPlayerPrincipal = null;
let mergerPlayerPrincipal = null;
let ganhoEsquerdoPlayerPrincipal = null;
let ganhoDireitoPlayerPrincipal = null;
let ganhoGeralPlayerPrincipal = null;

function prepararAudioPlayerPrincipal() {
    if (contextoAudioPlayerPrincipal) {
        return;
    }

    contextoAudioPlayerPrincipal = new AudioContext();

    fonteAudioPlayerPrincipal =
        contextoAudioPlayerPrincipal.createMediaElementSource(audioPlayer);

    splitterPlayerPrincipal =
        contextoAudioPlayerPrincipal.createChannelSplitter(2);

    ganhoEsquerdoPlayerPrincipal =
        contextoAudioPlayerPrincipal.createGain();

    ganhoDireitoPlayerPrincipal =
        contextoAudioPlayerPrincipal.createGain();

    ganhoGeralPlayerPrincipal =
        contextoAudioPlayerPrincipal.createGain();

    mergerPlayerPrincipal =
        contextoAudioPlayerPrincipal.createChannelMerger(2);

    fonteAudioPlayerPrincipal.connect(splitterPlayerPrincipal);

    splitterPlayerPrincipal.connect(ganhoEsquerdoPlayerPrincipal, 0);
    splitterPlayerPrincipal.connect(ganhoDireitoPlayerPrincipal, 1);

    ganhoEsquerdoPlayerPrincipal.connect(mergerPlayerPrincipal, 0, 0);
    ganhoDireitoPlayerPrincipal.connect(mergerPlayerPrincipal, 0, 1);

    mergerPlayerPrincipal.connect(ganhoGeralPlayerPrincipal);

    ganhoGeralPlayerPrincipal.connect(contextoAudioPlayerPrincipal.destination);
}

function aplicarVolumesNoPlayerPrincipal(musica) {
    prepararAudioPlayerPrincipal();

    const volumes = musica.volumes || {
        geral: 100,
        esquerdo: 100,
        direito: 100
    };

    ganhoGeralPlayerPrincipal.gain.value =
        Number(volumes.geral) / 100;

    ganhoEsquerdoPlayerPrincipal.gain.value =
        Number(volumes.esquerdo) / 100;

    ganhoDireitoPlayerPrincipal.gain.value =
        Number(volumes.direito) / 100;
}