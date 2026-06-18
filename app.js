console.log("PalcoPlay iniciado");

console.log(
    "DISPLAY MODE:",
    window.matchMedia("(display-mode: standalone)").matches
);

console.log(
    "NAVIGATOR STANDALONE:",
    window.navigator.standalone
);

console.log(
    "REFERRER:",
    document.referrer
);

// TELAS
const telaPlaylists = document.getElementById("tela-playlists");
const telaDetalhePlaylist = document.getElementById("tela-detalhe-playlist");

// BOTÕES
const btnCriarPlaylist = document.getElementById("btn-criar-playlist");
const btnVoltarPlaylists = document.getElementById("btn-voltar-playlists");
const btnAdicionarMusica = document.getElementById("btn-adicionar-musica");
const btnSalvarMusica = document.getElementById("btn-salvar-musica");

// CAMPOS DO MODAL
const inputAudioMusica = document.getElementById("input-audio-musica");
const inputNomeMusica = document.getElementById("input-nome-musica");
const inputAlterarNomeMusica = document.getElementById("input-alterar-nome-musica");
const btnConfirmarAlterarNome = document.getElementById("btn-confirmar-alterar-nome");
const nomeMusicaExcluir = document.getElementById("nome-musica-excluir");
const btnConfirmarExcluirMusica = document.getElementById("btn-confirmar-excluir-musica");

let musicaSelecionadaId = null;

// LISTA DE MÚSICAS
const listaMusicas = document.getElementById("lista-musicas");

// MODAL BOOTSTRAP
const modalAdicionarMusica = new bootstrap.Modal(
    document.getElementById("modalAdicionarMusica")
);

const modalAlterarNome = new bootstrap.Modal(
    document.getElementById("modalAlterarNome")
);

const modalExcluirMusica = new bootstrap.Modal(
    document.getElementById("modalExcluirMusica")
);

const modalAdicionarLetra = new bootstrap.Modal(
    document.getElementById("modalAdicionarLetra")
);

const modalAlterarNomePlaylist = new bootstrap.Modal(
    document.getElementById("modalAlterarNomePlaylist")
);

const modalCriarPlaylist = new bootstrap.Modal(
    document.getElementById("modalCriarPlaylist")
);

const modalExcluirPlaylist = new bootstrap.Modal(
    document.getElementById("modalExcluirPlaylist")
);

const modalGerenciarLetras = new bootstrap.Modal(
    document.getElementById("modalGerenciarLetras")
);

const modalEditarLetra = new bootstrap.Modal(
    document.getElementById("modalEditarLetra")
);

const modalArquivosDesconectados = new bootstrap.Modal(
    document.getElementById("modalArquivosDesconectados")
);

const quantidadeArquivosDesconectados =
    document.getElementById("quantidade-arquivos-desconectados");

const btnSincronizarPosBackup =
    document.getElementById("btn-sincronizar-pos-backup");


const inputArquivoLetra = document.getElementById("input-arquivo-letra");
const btnSalvarLetra = document.getElementById("btn-salvar-letra");

const inputTempoInicioLetra = document.getElementById("input-tempo-inicio-letra");
const inputTempoFimLetra = document.getElementById("input-tempo-fim-letra");

// CARDS DE PLAYLIST
const cardsPlaylist = document.querySelectorAll(".playlist-card");


const telaPlayer = document.getElementById("tela-player");
const audioPlayer = document.getElementById("audio-player");
const btnPlayPause = document.getElementById("btn-play-pause");
const btnMusicaAnterior = document.getElementById("btn-musica-anterior");
const btnProximaMusica = document.getElementById("btn-proxima-musica");
const nomeMusicaPlayer = document.getElementById("nome-musica-player");
const progressoMusica = document.getElementById("progresso-musica");
const tempoAtual = document.getElementById("tempo-atual");
const tempoTotal = document.getElementById("tempo-total");
const proximaMusicaPlayer = document.getElementById("proxima-musica-player");

const areaLetraPlayer = document.getElementById("area-letra-player");

const listaArquivosPasta = document.getElementById("lista-arquivos-pasta");

const checkLetraMusicaInteira = document.getElementById("check-letra-musica-inteira");

const blocoTemposLetra = document.getElementById("bloco-tempos-letra");

const btnTocarPlaylist = document.getElementById("btn-tocar-playlist");

const contadorMusicasPlaylist = document.getElementById("contador-musicas-playlist");

const nomePlaylistCard = document.getElementById("nome-playlist-card");
const nomePlaylistAberta = document.getElementById("nome-playlist-aberta");
const btnEditarNomePlaylist = document.getElementById("btn-editar-nome-playlist");
const inputAlterarNomePlaylist = document.getElementById("input-alterar-nome-playlist");
const btnConfirmarAlterarNomePlaylist = document.getElementById("btn-confirmar-alterar-nome-playlist");

const btnMenuRenomearPlaylist = document.getElementById("btn-menu-renomear-playlist");

const btnMenuExcluirPlaylist = document.getElementById("btn-menu-excluir-playlist");

const inputNomeNovaPlaylist = document.getElementById("input-nome-nova-playlist");
const btnSalvarNovaPlaylist = document.getElementById("btn-salvar-nova-playlist");

const nomePlaylistExcluir = document.getElementById("nome-playlist-excluir");
const btnConfirmarExcluirPlaylist = document.getElementById("btn-confirmar-excluir-playlist");

const btnVoltarHeader = document.getElementById("btn-voltar-header");

const selectIconeEditarPlaylist = document.getElementById("select-icone-editar-playlist");

const iconePlaylistAberta = document.getElementById("icone-playlist-aberta");
const textoNomePlaylistAberta = document.getElementById("texto-nome-playlist-aberta");

const opcoesPaginasPdf = document.getElementById("opcoes-paginas-pdf");
const camposPaginasPdf = document.getElementById("campos-paginas-pdf");

const pdfInteiro = document.getElementById("pdf-inteiro");
const pdfPaginas = document.getElementById("pdf-paginas");

const inputPaginaInicialPdf = document.getElementById("input-pagina-inicial-pdf");
const inputPaginaFinalPdf = document.getElementById("input-pagina-final-pdf");

const listaLetrasGerenciar = document.getElementById("lista-letras-gerenciar");

const nomeArquivoEditarLetra = document.getElementById("nome-arquivo-editar-letra");
const inputEditarTempoInicioLetra = document.getElementById("input-editar-tempo-inicio-letra");
const inputEditarTempoFimLetra = document.getElementById("input-editar-tempo-fim-letra");
const blocoEditarPaginasPdf = document.getElementById("bloco-editar-paginas-pdf");
const inputEditarPaginaInicialPdf = document.getElementById("input-editar-pagina-inicial-pdf");
const inputEditarPaginaFinalPdf = document.getElementById("input-editar-pagina-final-pdf");
const btnSalvarEdicaoLetra = document.getElementById("btn-salvar-edicao-letra");

const btnTrocarArquivoLetra = document.getElementById("btn-trocar-arquivo-letra");

const editarLetraMusicaInteira = document.getElementById("editar-letra-musica-inteira");
const editarLetraTempoDefinido = document.getElementById("editar-letra-tempo-definido");
const blocoEditarTemposLetra = document.getElementById("bloco-editar-tempos-letra");

const editarPdfInteiro = document.getElementById("editar-pdf-inteiro");
const editarPdfPaginas = document.getElementById("editar-pdf-paginas");
const blocoEditarCamposPaginasPdf = document.getElementById("bloco-editar-campos-paginas-pdf");


const menuExportarBackup = document.getElementById("menu-exportar-backup");

const menuImportarBackup = document.getElementById("menu-importar-backup");
const inputImportarBackup = document.getElementById("input-importar-backup");

const textoUltimoBackup =
    document.getElementById("texto-ultimo-backup");

const menuPastaPalcoPlay = document.getElementById("menu-pasta-palcoplay");

const blocoConectarPastaHome = document.getElementById("bloco-conectar-pasta-home");
const btnConectarPastaHome = document.getElementById("btn-conectar-pasta-home");

const menuNovaPlaylist = document.getElementById("menu-nova-playlist");

const btnBuscaHeader = document.getElementById("btn-busca-header");

const barraBuscaHeader =
    document.getElementById("barra-busca-header");

const inputPesquisaMusicaHeader =
    document.getElementById("input-pesquisa-musica-header");

const btnFecharBusca =
    document.getElementById("btn-fechar-busca");

const menuRestaurarBackupAutomatico =
    document.getElementById("menu-restaurar-backup-automatico");



const blocoInstalarAppHome = document.getElementById("bloco-instalar-app-home");
const btnInstalarAppHome = document.getElementById("btn-instalar-app-home");

function appEstaInstalado() {
    return (
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === true ||
        document.referrer.startsWith("android-app://")
    );
}

function atualizarBotaoInstalarApp() {
    if (appEstaInstalado()) {
        blocoInstalarAppHome.classList.add("d-none");
    } else {
        blocoInstalarAppHome.classList.remove("d-none");
    }
}

atualizarBotaoInstalarApp();

let eventoInstalacaoPWA = null;

console.log(
    "Modo standalone:",
    window.matchMedia("(display-mode: standalone)").matches
);

let modoBuscaGlobal = false;
let playlistRetornoBuscaGlobalId = null;


let letraSendoEditadaId = null;
let musicaDaLetraSendoEditadaId = null;

let musicaEditandoLetraId = null;
let letraEditandoId = null;

let iconeSelecionadoPlaylist = "bi-music-note-beamed";

let iconeEditandoPlaylist = "bi-music-note-beamed";

let corEditandoPlaylist = "#ff3d8f";

let corSelecionadaPlaylist = "#ff3d8f";

document
    .querySelectorAll(".cor-playlist")
    .forEach(function(botao) {

        botao.addEventListener("click", function() {

            document
                .querySelectorAll(".cor-playlist")
                .forEach(function(cor) {
                    cor.classList.remove("selecionada");
                });

            this.classList.add("selecionada");

            corSelecionadaPlaylist =
                this.dataset.cor;

        });

    });

let playlistParaExcluirId = null;


let pastaDoShow = null;

let musicaTocandoId = null;


let pdfAtual = null;
let paginaPdfAtual = 1;
let totalPaginasPdf = 0;

let paginaPdfInicialPermitida = 1;
let paginaPdfFinalPermitida = 1;



// ARRAY TEMPORÁRIO DE MÚSICAS
let musicas = carregarMusicasSalvas();

let nomePlaylist = carregarNomePlaylist();

let playlists = carregarPlaylistsSalvas();

// ABRIR PLAYLIST
cardsPlaylist.forEach(function(card) {
    card.addEventListener("click", function() {
        telaPlaylists.classList.add("d-none");
        telaDetalhePlaylist.classList.remove("d-none");
        btnCriarPlaylist.classList.add("d-none");
    });
});

// VOLTAR PARA PLAYLISTS
btnVoltarPlaylists.addEventListener("click", function() {
    telaDetalhePlaylist.classList.add("d-none");
    telaPlaylists.classList.remove("d-none");
    btnCriarPlaylist.classList.remove("d-none");
    btnVoltarHeader.classList.add("d-none");
    fecharBuscaMusicaHeader();
});

// ABRIR MODAL ADICIONAR MÚSICA
btnAdicionarMusica.addEventListener("click", function() {
    inputAudioMusica.value = "";
    inputNomeMusica.value = "";
    modalAdicionarMusica.show();
});

btnMenuRenomearPlaylist.addEventListener("click", function() {

    document
        .getElementById("menu-playlist")
        .classList.remove("show");

    inputAlterarNomePlaylist.value = nomePlaylist;

    modalAlterarNomePlaylist.show();

});

btnMenuExcluirPlaylist.addEventListener("click", function() {
    const playlistAtual = playlists.find(function(item) {
        return item.id === playlistAtualId;
    });

    if (!playlistAtual) {
        return;
    }

    const confirmar = confirm(
        "Deseja realmente excluir a playlist: " + playlistAtual.nome + "?"
    );

    if (!confirmar) {
        return;
    }

    playlists = playlists.filter(function(item) {
        return item.id !== playlistAtualId;
    });

    salvarPlaylists();
    renderizarPlaylists();

    telaDetalhePlaylist.classList.add("d-none");
    telaPlaylists.classList.remove("d-none");
    btnCriarPlaylist.classList.remove("d-none");

    if (playlists.length > 0) {
        playlistAtualId = playlists[0].id;
        musicas = playlists[0].musicas || [];
    } else {
        playlistAtualId = null;
        musicas = [];
    }

    renderizarMusicas();
});



// QUANDO ESCOLHER UM ARQUIVO, SUGERIR O NOME
inputAudioMusica.addEventListener("change", function() {
    const arquivo = inputAudioMusica.files[0];

    if (!arquivo) {
        return;
    }

    let nomeSugerido = arquivo.name;

    nomeSugerido = nomeSugerido.replace(/\.[^/.]+$/, "");
    nomeSugerido = nomeSugerido.replace(/_/g, " ");
    nomeSugerido = nomeSugerido.replace(/-/g, " ");

    inputNomeMusica.value = nomeSugerido;
});

// SALVAR MÚSICA
btnSalvarMusica.addEventListener("click", function() {
    const arquivo = inputAudioMusica.files[0];
    const nome = inputNomeMusica.value.trim();

    if (!arquivo) {
        alert("Escolha um arquivo de áudio.");
        return;
    }

    if (nome === "") {
        alert("Digite o nome da música.");
        return;
    }

    const novaMusica = {
        id: Date.now(),
        nome: nome,
        arquivo: arquivo
    };

    musicas.push(novaMusica);

    renderizarMusicas();
    salvarMusicas();
    atualizarContadorPlaylist();
    atualizarNomePlaylistNaTela();


    modalAdicionarMusica.hide();
});

// MOSTRAR MÚSICAS NA TELA
function renderizarMusicas() {
    listaMusicas.innerHTML = "";

    if (musicas.length === 0) {
        listaMusicas.innerHTML =
            '<p class="texto-vazio">Nenhuma música adicionada ainda.</p>';
        return;
    }

    musicas.forEach(function(musica) {
        listaMusicas.innerHTML += `
        <div class="musica-card" data-id="${musica.id}" onclick="tocarMusica(${musica.id})">

        <div class="musica-info">
          <h3>▶ ${musica.nome}</h3>

            <small class="${musica.arquivo ? 'text-secondary' : 'text-warning'}">
                ${gerarStatusMusica(musica)}
            </small>
        </div>

        <div class="acoes-musica">
            <button class="btn-ordem-musica" onclick="event.stopPropagation(); moverMusica(${musica.id}, -1)">
            ↑
            </button>

            <button class="btn-ordem-musica" onclick="event.stopPropagation(); moverMusica(${musica.id}, 1)">
                ↓
            </button>

          <div class="dropdown">

            <button
  class="btn-musica-menu"
  type="button"
  onclick="abrirMenuMusica(event)"
>
  ⋮
</button>

            <ul class="dropdown-menu dropdown-menu-dark" onclick="event.stopPropagation();">
                    <li>
                        <button class="dropdown-item" onclick="alterarNomeMusica(${musica.id})">
                            Alterar nome
                        </button>
                    </li>
                    <li>
                        <button class="dropdown-item" onclick="adicionarLetra(${musica.id})">
                            Adicionar letra
                        </button>
                    </li>
                    <li>
                        <button class="dropdown-item" onclick="gerenciarLetras(${musica.id})">
                            Gerenciar letras
                        </button>
                    </li>

                    <li>
                        <button class="dropdown-item" onclick="abrirGerenciarVolumes(${musica.id})">
                            Gerenciar volumes
                        </button>
                    </li>

                    <li>
                        <button class="dropdown-item text-danger" onclick="excluirMusica(${musica.id})">
                            Excluir
                        </button>
                    </li>
                </ul>

            </div>

        </div>

    </div>
    `;
    });
    verificarArquivosDesconectados();

    atualizarContadorPlaylist();

    // Arrastar desligado temporariamente
    // if (typeof Sortable !== "undefined") {
    //     ativarArrastarMusicas();
    // }
}


// ALTERAR NOME DA MÚSICA
function alterarNomeMusica(id) {
    const musica = musicas.find(function(item) {
        return item.id === id;
    });

    if (!musica) {
        return;
    }

    musicaSelecionadaId = id;
    inputAlterarNomeMusica.value = musica.nome;
    modalAlterarNome.show();
}

// ADICIONAR LETRA
function adicionarLetra(id) {
    musicaSelecionadaId = id;
    inputArquivoLetra.value = "";
    inputTempoInicioLetra.value = "";
    inputTempoFimLetra.value = "";
    modalAdicionarLetra.show();
    checkLetraMusicaInteira.checked = false;
    blocoTemposLetra.classList.remove("d-none");
}

// EXCLUIR MÚSICA
function excluirMusica(id) {
    const musica = musicas.find(function(item) {
        return item.id === id;
    });

    if (!musica) {
        return;
    }

    musicaSelecionadaId = id;
    nomeMusicaExcluir.textContent = musica.nome;
    modalExcluirMusica.show();
}

btnConfirmarAlterarNome.addEventListener("click", function() {
    const novoNome = inputAlterarNomeMusica.value.trim();

    if (novoNome === "") {
        alert("Digite o nome da música.");
        return;
    }

    const musica = musicas.find(function(item) {
        return item.id === musicaSelecionadaId;
    });

    if (!musica) {
        return;
    }

    musica.nome = novoNome;
    renderizarMusicas();
    salvarMusicas();
    modalAlterarNome.hide();
});

btnConfirmarExcluirMusica.addEventListener("click", function() {
    musicas = musicas.filter(function(item) {
        return item.id !== musicaSelecionadaId;
    });

    renderizarMusicas();
    salvarMusicas();
    modalExcluirMusica.hide();
});

btnSalvarLetra.addEventListener("click", function() {
    const arquivoLetra = inputArquivoLetra.files[0];

    if (!arquivoLetra) {
        alert("Escolha um arquivo PDF, PNG ou JPG.");
        return;
    }

    let inicio = 0;
    let fim = 999999;

    if (!checkLetraMusicaInteira.checked) {
        inicio = converterTempoParaSegundos(inputTempoInicioLetra.value);
        fim = converterTempoParaSegundos(inputTempoFimLetra.value);

        if (inicio === null || fim === null) {
            alert("Digite os tempos no formato correto. Exemplo: 0:00 ou 2:30.");
            return;
        }

        if (fim <= inicio) {
            alert("O tempo final precisa ser maior que o tempo inicial.");
            return;
        }
    }

    const musica = musicas.find(function(item) {
        return item.id === musicaSelecionadaId;
    });

    if (!musica) {
        return;
    }

    if (!musica.letras) {
        musica.letras = [];
    }

    let paginaInicialPdf = null;
    let paginaFinalPdf = null;

    if (arquivoLetra.type === "application/pdf" && pdfPaginas.checked) {
        paginaInicialPdf = Number(inputPaginaInicialPdf.value);
        paginaFinalPdf = Number(inputPaginaFinalPdf.value);

        if (!paginaInicialPdf || paginaInicialPdf < 1) {
            alert("Digite a página inicial do PDF.");
            return;
        }

        if (!paginaFinalPdf) {
            paginaFinalPdf = paginaInicialPdf;
        }

        if (paginaFinalPdf < paginaInicialPdf) {
            alert("A página final precisa ser maior ou igual à inicial.");
            return;
        }
    }

    musica.letras.push({
        id: Date.now(),
        nome: arquivoLetra.name,
        arquivo: arquivoLetra,
        inicio: inicio,
        fim: fim,
        paginaInicialPdf: paginaInicialPdf,
        paginaFinalPdf: paginaFinalPdf
    });

    renderizarMusicas();
    salvarMusicas();
    modalAdicionarLetra.hide();
});

btnCriarPlaylist.addEventListener("click", function() {
    inputNomeNovaPlaylist.value = "";
    iconeSelecionadoPlaylist = "bi-music-note-beamed";

    document
        .querySelectorAll(".icone-playlist")
        .forEach(function(icone) {
            icone.classList.remove("selecionada");
        });

    document
        .querySelector('.icone-playlist[data-icone="bi-music-note-beamed"]')
        .classList.add("selecionada");

    corSelecionadaPlaylist = "#ff3d8f";

    document
        .querySelectorAll(".cor-playlist")
        .forEach(function(cor) {
            cor.classList.remove("selecionada");
        });

    document
        .querySelector('.cor-playlist[data-cor="#ff3d8f"]')
        .classList.add("selecionada");
    modalCriarPlaylist.show();
});

function abrirMusica(musica, iniciarTocando = true) {

    musicaTocandoId = musica.id;

    nomeMusicaPlayer.textContent = musica.nome;

    atualizarProximaMusicaPlayer();

    letraAtualId = null;

    carregarLetraNoPlayer(musica);

    const urlAudio = URL.createObjectURL(musica.arquivo);

    audioPlayer.src = urlAudio;

    if (typeof aplicarVolumesNoPlayerPrincipal === "function") {
        aplicarVolumesNoPlayerPrincipal(musica);
    }

    audioPlayer.currentTime = 0;
    progressoMusica.style.width = "0%";
    tempoAtual.textContent = "0:00";

    if (iniciarTocando) {
        audioPlayer.play();
        btnPlayPause.textContent = "⏸";
    } else {
        audioPlayer.pause();
        btnPlayPause.textContent = "▶";
    }
}

function tocarMusica(id) {

    fecharBuscaMusicaHeader();

    const musica = musicas.find(function(item) {
        return item.id === id;
    });

    if (!musica) {
        return;
    }

    telaDetalhePlaylist.classList.add("d-none");
    telaPlayer.classList.remove("d-none");

    document.body.classList.add("modo-player");

    if (typeof ativarTelaLigada === "function") {
        ativarTelaLigada();
    }



    abrirMusica(musica);

    if (typeof iniciarModoPalco === "function") {
        iniciarModoPalco();
    }
}

btnPlayPause.addEventListener("click", function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        btnPlayPause.textContent = "⏸";
    } else {
        audioPlayer.pause();
        btnPlayPause.textContent = "▶";
    }
});

audioPlayer.addEventListener("timeupdate", function() {
    const atual = audioPlayer.currentTime;
    const total = audioPlayer.duration;

    if (!total) {
        return;
    }

    const porcentagem = (atual / total) * 100;
    progressoMusica.style.width = porcentagem + "%";
    document.getElementById("bolinha-progresso").style.left = porcentagem + "%";

    tempoAtual.textContent = formatarTempo(atual);
    tempoTotal.textContent = formatarTempo(total);

    verificarLetraAtual(audioPlayer.currentTime);
});

audioPlayer.addEventListener("ended", function() {
    btnPlayPause.textContent = "▶";
    progressoMusica.style.width = "0%";
});

function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = Math.floor(segundos % 60);

    return minutos + ":" + String(segundosRestantes).padStart(2, "0");
}

function carregarLetraNoPlayer(musica) {
    areaLetraPlayer.innerHTML = "";

    if (!musica.letras || musica.letras.length === 0) {
        areaLetraPlayer.innerHTML =
            '<p class="texto-vazio">Nenhuma letra carregada ainda.</p>';
        return;
    }

    const primeiraLetra = musica.letras[0];
    letraAtualId = primeiraLetra.id;
    const arquivo = primeiraLetra.arquivo;
    const urlArquivo = URL.createObjectURL(arquivo);

    if (arquivo.type.startsWith("image/")) {
        pdfAtual = null;

        areaLetraPlayer.innerHTML = `
      <img
        src="${urlArquivo}"
        class="letra-imagem-player"
        alt="Letra da música"
      >
    `;
        return;
    }

    if (arquivo.type === "application/pdf") {
        mostrarPdfComPdfJs(arquivo, primeiraLetra);
        return;
    }

    areaLetraPlayer.innerHTML =
        '<p class="texto-vazio">Formato de letra não suportado.</p>';
}

areaLetraPlayer.addEventListener("click", function() {
    mostrarControlesFlutuantes();
});

function converterTempoParaSegundos(valor) {
    if (!valor) {
        return null;
    }

    const partes = valor.split(":");

    if (partes.length !== 2) {
        return null;
    }

    const minutos = Number(partes[0]);
    const segundos = Number(partes[1]);

    if (isNaN(minutos) || isNaN(segundos)) {
        return null;
    }

    if (segundos < 0 || segundos >= 60) {
        return null;
    }

    return minutos * 60 + segundos;
}


let letraAtualId = null;

function verificarLetraAtual(tempoAtualMusica) {
    const musica = musicas.find(function(item) {
        return item.id === musicaTocandoId;
    });

    if (!musica || !musica.letras || musica.letras.length === 0) {
        return;
    }

    const letraEncontrada = musica.letras.find(function(letra) {
        return tempoAtualMusica >= letra.inicio && tempoAtualMusica < letra.fim;
    });

    if (!letraEncontrada) {
        return;
    }

    if (letraAtualId === letraEncontrada.id) {
        return;
    }

    letraAtualId = letraEncontrada.id;
    mostrarLetraArquivo(letraEncontrada);
}

function mostrarLetraArquivo(letra) {
    areaLetraPlayer.innerHTML = "";

    const arquivo = letra.arquivo;
    const urlArquivo = URL.createObjectURL(arquivo);

    if (arquivo.type.startsWith("image/")) {
        areaLetraPlayer.innerHTML = `
      <img
        src="${urlArquivo}"
        class="letra-imagem-player"
        alt="Letra da música"
      >
    `;
        return;
    }

    if (arquivo.type === "application/pdf") {
        mostrarPdfComPdfJs(arquivo, letra);
        return;
    }
}

// SALVAR DADOS LEVES NO NAVEGADOR
function salvarMusicas() {
    const playlistAtual = playlists.find(function(item) {
        return item.id === playlistAtualId;
    });

    if (playlistAtual) {
        playlistAtual.musicas = musicas;
        playlistAtual.quantidadeMusicas = musicas.length;
        salvarPlaylists();
    }

    const musicasParaSalvar = musicas.map(function(musica) {
        return {
            id: musica.id,
            nome: musica.nome,
            nomeArquivoAudio: musica.arquivo ? musica.arquivo.name : musica.nomeArquivoAudio,
            volumes: musica.volumes || null,
            letras: musica.letras ? musica.letras.map(function(letra) {
                return {
                    id: letra.id,
                    nome: letra.nome,
                    inicio: letra.inicio,
                    fim: letra.fim
                };
            }) : []
        };
    });

    localStorage.setItem("palcoplay_musicas", JSON.stringify(musicasParaSalvar));
}



// CARREGAR DADOS LEVES DO NAVEGADOR
function carregarMusicasSalvas() {
    const dados = localStorage.getItem("palcoplay_musicas");

    if (!dados) {
        return [];
    }

    return JSON.parse(dados);
}

renderizarMusicas();
atualizarContadorPlaylist();
atualizarNomePlaylistNaTela();
corrigirDadosDasPlaylists();
renderizarPlaylists();

function verificarArquivosDesconectados() {
    return;
}

function contarArquivosDesconectados() {
    let total = 0;

    playlists.forEach(function(playlist) {
        if (!playlist.musicas) {
            return;
        }

        playlist.musicas.forEach(function(musica) {
            if (!musica.arquivo || !(musica.arquivo instanceof File)) {
                total++;
            }

            if (musica.letras) {
                musica.letras.forEach(function(letra) {
                    if (!letra.arquivo || !(letra.arquivo instanceof File)) {
                        total++;
                    }
                });
            }
        });
    });

    return total;
}

function gerarStatusMusica(musica) {
    if (!musica.arquivo || !(musica.arquivo instanceof File)) {
        return "⚠ áudio desconectado";
    }

    if (!musica.letras || musica.letras.length === 0) {
        return "0 letra(s) adicionada(s)";
    }

    const letrasConectadas = musica.letras.filter(function(letra) {
        return letra.arquivo;
    }).length;

    if (letrasConectadas < musica.letras.length) {
        return `⚠ ${letrasConectadas}/${musica.letras.length} letra(s) conectada(s)`;
    }

    return `${musica.letras.length} letra(s) adicionada(s)`;
}

checkLetraMusicaInteira.addEventListener("change", function() {
    if (checkLetraMusicaInteira.checked) {
        blocoTemposLetra.classList.add("d-none");
    } else {
        blocoTemposLetra.classList.remove("d-none");
    }
});


btnProximaMusica.addEventListener("click", function() {

    const indiceAtual = musicas.findIndex(function(item) {
        return item.id === musicaTocandoId;
    });

    if (indiceAtual === -1) {
        return;
    }

    const proximaMusica = musicas[indiceAtual + 1];

    if (!proximaMusica) {
        return;
    }

    abrirMusica(proximaMusica, false);

});

btnMusicaAnterior.addEventListener("click", function() {

    const indiceAtual = musicas.findIndex(function(item) {
        return item.id === musicaTocandoId;
    });

    if (indiceAtual <= 0) {
        return;
    }

    const musicaAnterior = musicas[indiceAtual - 1];

    abrirMusica(musicaAnterior, false);

});

function voltarParaPlaylistDoPlayer() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;

    telaPlayer.classList.add("d-none");
    telaDetalhePlaylist.classList.remove("d-none");

    document.body.classList.remove("modo-player");

    if (typeof encerrarModoPalco === "function") {
        encerrarModoPalco();
    }

    if (typeof desativarTelaLigada === "function") {
        desativarTelaLigada();
    }



    btnPlayPause.textContent = "▶";
}

function moverMusica(id, direcao) {
    const indiceAtual = musicas.findIndex(function(item) {
        return item.id === id;
    });

    if (indiceAtual === -1) {
        return;
    }

    const novoIndice = indiceAtual + direcao;

    if (novoIndice < 0 || novoIndice >= musicas.length) {
        return;
    }

    const musicaMovida = musicas[indiceAtual];

    musicas.splice(indiceAtual, 1);
    musicas.splice(novoIndice, 0, musicaMovida);

    renderizarMusicas();
    salvarMusicas();
}

function abrirMenuMusica(event) {
    event.preventDefault();
    event.stopPropagation();

    const botao = event.currentTarget;
    const dropdown = botao.closest(".dropdown");
    const menuAtual = dropdown.querySelector(".dropdown-menu");

    const jaEstaAberto = menuAtual.classList.contains("show");

    fecharTodosDropdowns();

    if (!jaEstaAberto) {
        menuAtual.classList.add("show");
    }
}

function fecharTodosDropdowns() {
    const menusAbertos = document.querySelectorAll(".dropdown-menu.show");

    menusAbertos.forEach(function(menu) {
        menu.classList.remove("show");
    });
}

document.addEventListener("click", function() {
    fecharTodosDropdowns();
});

btnTocarPlaylist.addEventListener("click", function() {
    if (musicas.length === 0) {
        alert("Adicione uma música primeiro.");
        return;
    }

    tocarMusica(musicas[0].id);
});

function atualizarContadorPlaylist() {
    const quantidade = musicas.length;

    if (quantidade === 1) {
        contadorMusicasPlaylist.textContent = "1 música adicionada";
    } else {
        contadorMusicasPlaylist.textContent = quantidade + " músicas adicionadas";
    }
}

function carregarNomePlaylist() {
    const nomeSalvo = localStorage.getItem("palcoplay_nome_playlist");

    if (!nomeSalvo) {
        return "Show Principal";
    }

    return nomeSalvo;
}

function salvarNomePlaylist() {
    localStorage.setItem("palcoplay_nome_playlist", nomePlaylist);
}

function atualizarNomePlaylistNaTela() {
    nomePlaylistCard.textContent = nomePlaylist;
    textoNomePlaylistAberta.textContent = nomePlaylist;
}

btnEditarNomePlaylist.addEventListener("click", function() {
    renomearPlaylistPeloMenu(playlistAtualId);
});

btnConfirmarAlterarNomePlaylist.addEventListener("click", function() {
    const novoNome = inputAlterarNomePlaylist.value.trim();

    if (novoNome === "") {
        alert("Digite o nome da playlist.");
        return;
    }

    const playlistAtual = playlists.find(function(item) {
        return item.id === playlistAtualId;
    });

    if (!playlistAtual) {
        return;
    }

    playlistAtual.nome = novoNome;
    playlistAtual.icone = iconeEditandoPlaylist;
    playlistAtual.cor = corEditandoPlaylist;

    textoNomePlaylistAberta.textContent = playlistAtual.nome;
    iconePlaylistAberta.className = "bi " + playlistAtual.icone;
    iconePlaylistAberta.style.color = playlistAtual.cor;

    salvarPlaylists();
    renderizarPlaylists();

    modalAlterarNomePlaylist.hide();

    textoNomePlaylistAberta.textContent = novoNome;

    modalAlterarNomePlaylist.hide();
});

function abrirMenuPlaylist(event, id) {
    event.preventDefault();
    event.stopPropagation();

    playlistAtualId = id;

    const botao = event.currentTarget;
    const dropdown = botao.closest(".dropdown");
    const menuAtual = dropdown.querySelector(".dropdown-menu");

    const jaEstaAberto = menuAtual.classList.contains("show");

    fecharTodosDropdowns();

    if (!jaEstaAberto) {
        menuAtual.classList.add("show");
    }
}

console.log("inputNomeNovaPlaylist:", inputNomeNovaPlaylist);
console.log("btnSalvarNovaPlaylist:", btnSalvarNovaPlaylist);
console.log("modalCriarPlaylist:", modalCriarPlaylist);

btnSalvarNovaPlaylist.addEventListener("click", function() {
    const nome = inputNomeNovaPlaylist.value.trim();

    if (nome === "") {
        alert("Digite o nome da playlist.");
        return;
    }

    const novaPlaylist = {
        id: Date.now(),
        nome: nome,
        quantidadeMusicas: 0,
        cor: corSelecionadaPlaylist,
        icone: iconeSelecionadoPlaylist,
        musicas: []
    };

    playlists.push(novaPlaylist);

    salvarPlaylists();
    renderizarPlaylists();

    modalCriarPlaylist.hide();
});

function renderizarPlaylistsSimples() {
    const listaPlaylists = document.getElementById("lista-playlists");

    listaPlaylists.innerHTML = "";

    playlists.forEach(function(playlist) {
        listaPlaylists.innerHTML += `
    <div class="col-12">
        <div class="playlist-card" onclick="abrirPlaylist()">
            <h3>${nome}</h3>
            <p>0 músicas adicionadas</p>
        </div>
    </div>
`;
    });
}

function carregarPlaylistsSalvas() {
    const dados = localStorage.getItem("palcoplay_playlists");

    if (!dados) {
        return [{
            id: 1,
            nome: nomePlaylist,
            quantidadeMusicas: musicas.length,
            musicas: musicas
        }];
    }

    const playlistsSalvas = JSON.parse(dados);

    playlistsSalvas.forEach(function(playlist) {
        if (!playlist.musicas) {
            playlist.musicas = [];
        }

        playlist.musicas.forEach(function(musica) {
            musica.arquivo = null;

            if (!musica.letras) {
                musica.letras = [];
            }

            musica.letras.forEach(function(letra) {
                letra.arquivo = null;
                letra.paginaInicialPdf = letra.paginaInicialPdf || null;
                letra.paginaFinalPdf = letra.paginaFinalPdf || null;
            });
        });
    });

    return playlistsSalvas;
}

function salvarPlaylists() {
    const playlistsParaSalvar = playlists.map(function(playlist) {
        return {
            id: playlist.id,
            nome: playlist.nome,
            cor: playlist.cor,
            icone: playlist.icone,
            quantidadeMusicas: playlist.musicas ? playlist.musicas.length : 0,
            musicas: playlist.musicas ? playlist.musicas.map(function(musica) {
                return {
                    id: musica.id,
                    nome: musica.nome,
                    nomeArquivoAudio: musica.arquivo ? musica.arquivo.name : musica.nomeArquivoAudio,
                    volumes: musica.volumes || null,
                    letras: musica.letras ? musica.letras.map(function(letra) {
                        return {
                            id: letra.id,
                            nome: letra.nome,
                            inicio: letra.inicio,
                            fim: letra.fim,
                            paginaInicialPdf: letra.paginaInicialPdf || null,
                            paginaFinalPdf: letra.paginaFinalPdf || null
                        };
                    }) : []
                };
            }) : []
        };
    });

    localStorage.setItem("palcoplay_playlists", JSON.stringify(playlistsParaSalvar));
    salvarBackupAutomaticoComIntervalo(playlistsParaSalvar);
}

function salvarBackupAutomaticoComIntervalo(playlistsParaSalvar) {
    const agora = Date.now();

    const ultimoBackupAutomatico =
        Number(localStorage.getItem("palcoplay_backup_automatico_timestamp")) || 0;

    const cincoMinutos = 5 * 60 * 1000;

    if (agora - ultimoBackupAutomatico < cincoMinutos) {
        return;
    }

    const backupAutomatico = {
        versao: "auto-1.0",
        dataBackup: new Date().toISOString(),
        playlists: playlistsParaSalvar
    };

    localStorage.setItem(
        "palcoplay_backup_automatico",
        JSON.stringify(backupAutomatico)
    );

    localStorage.setItem(
        "palcoplay_backup_automatico_timestamp",
        String(agora)
    );
}

function renderizarPlaylists() {
    const listaPlaylists = document.getElementById("lista-playlists");

    listaPlaylists.innerHTML = "";

    playlists.forEach(function(playlist) {
        listaPlaylists.innerHTML += `
            <div class="col-12 col-md-10 col-lg-10">

                <div
                    <div
                        class="playlist-card"
                        style="border: 1px solid ${playlist.cor}66;"
                        onclick="abrirPlaylistPorId(${playlist.id})"
                    >
                    <div class="playlist-card-topo">

                        <div class="playlist-info">
                            <h3 class="playlist-nome-com-icone">
                                <i
                                    class="bi ${playlist.icone}"
                                    style="color:${playlist.cor};"
                                ></i>

                                ${playlist.nome}
                            </h3>

                            <p>
                                ${
                                    (playlist.musicas ? playlist.musicas.length : 0) === 1
                                    ? "1 música adicionada"
                                    : (playlist.musicas ? playlist.musicas.length : 0) + " músicas adicionadas"
                                }
                            </p>
                        </div>

                        <div class="acoes-playlist">

                            <button
                                class="btn-ordem-playlist"
                                onclick="event.stopPropagation(); moverPlaylist(${playlist.id}, -1)"
                            >
                                ↑
                            </button>

                            <button
                                class="btn-ordem-playlist"
                                onclick="event.stopPropagation(); moverPlaylist(${playlist.id}, 1)"
                            >
                                ↓
                            </button>

                            <div
                                class="dropdown"
                                onclick="event.stopPropagation();"
                            >

                                <button
                                    class="btn-playlist-menu"
                                    type="button"
                                    onclick="abrirMenuPlaylist(event, ${playlist.id})"
                                >
                                    ⋮
                                </button>

                                <ul
                                    class="dropdown-menu dropdown-menu-dark"
                                    onclick="event.stopPropagation();"
                                >
                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onclick="renomearPlaylistPeloMenu(${playlist.id})"
                                        >
                                            Alterar nome
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item text-danger"
                                            onclick="excluirPlaylistPeloMenu(${playlist.id})"
                                        >
                                            Excluir playlist
                                        </button>
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        `;
    });
}

function abrirPlaylistUnica() {
    telaPlaylists.classList.add("d-none");
    telaDetalhePlaylist.classList.remove("d-none");
    btnCriarPlaylist.classList.add("d-none");
}


let playlistAtualId = 1;

function abrirPlaylistPorId(id) {
    playlistAtualId = id;

    const playlist = playlists.find(function(item) {
        return item.id === id;
    });

    if (!playlist) {
        return;
    }

    textoNomePlaylistAberta.textContent = playlist.nome;

    iconePlaylistAberta.className = "bi " + playlist.icone;
    iconePlaylistAberta.style.color = playlist.cor;

    musicas = playlist.musicas || [];
    renderizarMusicas();
    atualizarContadorPlaylist();

    telaPlaylists.classList.add("d-none");
    telaDetalhePlaylist.classList.remove("d-none");
    btnCriarPlaylist.classList.add("d-none");
    btnVoltarHeader.classList.remove("d-none");
    btnBuscaHeader.classList.remove("d-none");
}


function renomearPlaylistPeloMenu(id) {
    const idNumerico = Number(id);
    playlistAtualId = idNumerico;

    const playlist = playlists.find(function(item) {
        return Number(item.id) === idNumerico;
    });

    if (!playlist) {
        alert("Playlist não encontrada para editar.");
        return;
    }

    inputAlterarNomePlaylist.value = playlist.nome;
    iconeEditandoPlaylist = playlist.icone || "bi-music-note-beamed";

    document
        .querySelectorAll(".icone-playlist-editar")
        .forEach(function(icone) {
            icone.classList.remove("selecionada");
        });

    const iconeSelecionado = document.querySelector(
        '.icone-playlist-editar[data-icone="' + iconeEditandoPlaylist + '"]'
    );

    if (iconeSelecionado) {
        iconeSelecionado.classList.add("selecionada");
    }

    corEditandoPlaylist = playlist.cor || "#ff3d8f";

    document.querySelectorAll(".cor-playlist-editar").forEach(function(cor) {
        cor.classList.remove("selecionada");
    });

    const corSelecionada = document.querySelector(
        '.cor-playlist-editar[data-cor="' + corEditandoPlaylist + '"]'
    );

    if (corSelecionada) {
        corSelecionada.classList.add("selecionada");
    }

    fecharTodosDropdowns();
    modalAlterarNomePlaylist.show();
}



btnConfirmarExcluirPlaylist.addEventListener("click", function() {
    if (playlistParaExcluirId === null || playlistParaExcluirId === undefined) {
        return;
    }

    const idParaExcluir = Number(playlistParaExcluirId);

    playlists = playlists.filter(function(item) {
        return Number(item.id) !== idParaExcluir;
    });

    salvarPlaylists();
    renderizarPlaylists();

    if (Number(playlistAtualId) === idParaExcluir) {
        playlistAtualId = playlists.length > 0 ? playlists[0].id : null;
        musicas = playlists.length > 0 ? playlists[0].musicas || [] : [];

        renderizarMusicas();

        telaDetalhePlaylist.classList.add("d-none");
        telaPlaylists.classList.remove("d-none");
        btnCriarPlaylist.classList.remove("d-none");
        btnVoltarHeader.classList.add("d-none");
    }

    playlistParaExcluirId = null;

    modalExcluirPlaylist.hide();
});

function moverPlaylist(id, direcao) {

    const indiceAtual = playlists.findIndex(function(item) {
        return item.id === id;
    });

    if (indiceAtual === -1) {
        return;
    }

    const novoIndice = indiceAtual + direcao;

    if (novoIndice < 0 || novoIndice >= playlists.length) {
        return;
    }

    const playlistMovida = playlists[indiceAtual];

    playlists.splice(indiceAtual, 1);
    playlists.splice(novoIndice, 0, playlistMovida);

    salvarPlaylists();
    renderizarPlaylists();
}

function mostrarMensagemTemporaria(mensagem, tipo) {
    const mensagemGeral = document.getElementById("mensagem-geral");

    mensagemGeral.textContent = mensagem;
    mensagemGeral.className = "mensagem-geral " + tipo;

    setTimeout(function() {
        mensagemGeral.className = "mensagem-geral d-none";
    }, 3000);
}

window.addEventListener("load", function() {
    setTimeout(function() {
        const splashScreen = document.getElementById("splash-screen");

        if (splashScreen) {
            splashScreen.style.display = "none";
        }
    }, 2000);
});

async function mostrarPdfComPdfJs(arquivoPdf, letra = null) {
    areaLetraPlayer.innerHTML = `
        <canvas id="canvas-pdf-player"></canvas>

        <div
            id="area-pdf-esquerda"
            style="
                position:absolute;
                left:0;
                top:0;
                width:50%;
                height:calc(100% - 80px);
                z-index:1000;
            "
        ></div>

        <div
            id="area-pdf-direita"
            style="
                position:absolute;
                right:0;
                top:0;
                width:50%;
                height:calc(100% - 80px);
                z-index:1000;
            "
        ></div>

        <div
            id="indicador-pagina-pdf"
            class="indicador-pagina-pdf"
        ></div>
    `;

    const urlPdf = URL.createObjectURL(arquivoPdf);

    pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

    pdfAtual = await pdfjsLib.getDocument(urlPdf).promise;

    const paginaInicial =
        letra && letra.paginaInicialPdf ?
        letra.paginaInicialPdf :
        1;

    const paginaFinal =
        letra && letra.paginaFinalPdf ?
        letra.paginaFinalPdf :
        pdfAtual.numPages;

    paginaPdfAtual = paginaInicial;
    totalPaginasPdf = paginaFinal;

    paginaPdfInicialPermitida = paginaInicial;
    paginaPdfFinalPermitida = paginaFinal;

    renderizarPaginaPdf();

    document
        .getElementById("area-pdf-esquerda")
        .addEventListener("click", function() {
            paginaAnteriorPdf();
        });

    document
        .getElementById("area-pdf-direita")
        .addEventListener("click", function() {
            proximaPaginaPdf();
        });
}

async function renderizarPaginaPdf() {
    if (!pdfAtual) {
        return;
    }

    const pagina = await pdfAtual.getPage(paginaPdfAtual);

    const canvas = document.getElementById("canvas-pdf-player");
    const contexto = canvas.getContext("2d");

    const areaLargura = areaLetraPlayer.clientWidth;
    const areaAltura = areaLetraPlayer.clientHeight;

    const viewportOriginal = pagina.getViewport({ scale: 1 });

    const escalaLargura = areaLargura / viewportOriginal.width;
    const escalaAltura = areaAltura / viewportOriginal.height;

    const escala = Math.min(escalaLargura, escalaAltura);

    const viewport = pagina.getViewport({ scale: escala });

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await pagina.render({
        canvasContext: contexto,
        viewport: viewport
    }).promise;

    const indicador = document.getElementById("indicador-pagina-pdf");

    if (indicador) {
        indicador.textContent = paginaPdfAtual + " / " + totalPaginasPdf;
    }
}

function proximaPaginaPdf() {
    if (!pdfAtual) {
        return;
    }

    if (paginaPdfAtual >= paginaPdfFinalPermitida) {
        return;
    }

    paginaPdfAtual++;
    renderizarPaginaPdf();
}

function paginaAnteriorPdf() {
    if (!pdfAtual) {
        return;
    }

    if (paginaPdfAtual <= paginaPdfInicialPermitida) {
        return;
    }

    paginaPdfAtual--;
    renderizarPaginaPdf();
}

btnVoltarHeader.addEventListener("click", function() {
    btnVoltarPlaylists.click();
});

function corrigirDadosDasPlaylists() {
    playlists.forEach(function(playlist) {
        if (!playlist.cor) {
            playlist.cor = "#ff3d8f";
        }

        if (!playlist.icone) {
            playlist.icone = "bi-music-note-beamed";
        }

        if (!playlist.musicas) {
            playlist.musicas = [];
        }
    });

    salvarPlaylists();
}

document
    .querySelectorAll(".cor-playlist-editar")
    .forEach(function(botao) {

        botao.addEventListener("click", function() {

            document
                .querySelectorAll(".cor-playlist-editar")
                .forEach(function(cor) {
                    cor.classList.remove("selecionada");
                });

            this.classList.add("selecionada");

            corEditandoPlaylist = this.dataset.cor;

        });

    });

console.log("modalExcluirPlaylist:", document.getElementById("modalExcluirPlaylist"));
console.log("btnConfirmarExcluirPlaylist:", document.getElementById("btn-confirmar-excluir-playlist"));

function excluirPlaylistPeloMenu(id) {
    const idNumerico = Number(id);

    const playlist = playlists.find(function(item) {
        return Number(item.id) === idNumerico;
    });

    if (!playlist) {
        mostrarMensagemTemporaria("⚠ Playlist não encontrada.", "warning");
        return;
    }

    if (playlists.length === 1) {
        mostrarMensagemTemporaria(
            "⚠ É necessário existir pelo menos uma playlist.",
            "warning"
        );
        return;
    }

    playlistParaExcluirId = idNumerico;
    nomePlaylistExcluir.textContent = playlist.nome;

    fecharTodosDropdowns();

    modalExcluirPlaylist.show();
}


document
    .querySelectorAll(".icone-playlist")
    .forEach(function(botao) {
        botao.addEventListener("click", function() {
            document
                .querySelectorAll(".icone-playlist")
                .forEach(function(icone) {
                    icone.classList.remove("selecionada");
                });

            this.classList.add("selecionada");

            iconeSelecionadoPlaylist = this.dataset.icone;
        });
    });

document
    .querySelectorAll(".icone-playlist-editar")
    .forEach(function(botao) {
        botao.addEventListener("click", function() {
            document
                .querySelectorAll(".icone-playlist-editar")
                .forEach(function(icone) {
                    icone.classList.remove("selecionada");
                });

            this.classList.add("selecionada");

            iconeEditandoPlaylist = this.dataset.icone;
        });
    });


inputArquivoLetra.addEventListener("change", function() {
    const arquivo = inputArquivoLetra.files[0];

    if (!arquivo) {
        opcoesPaginasPdf.classList.add("d-none");
        return;
    }

    if (arquivo.type === "application/pdf") {
        opcoesPaginasPdf.classList.remove("d-none");
    } else {
        opcoesPaginasPdf.classList.add("d-none");
    }

    pdfInteiro.checked = true;
    pdfPaginas.checked = false;

    camposPaginasPdf.classList.add("d-none");

    inputPaginaInicialPdf.value = "";
    inputPaginaFinalPdf.value = "";
});

pdfInteiro.addEventListener("change", function() {
    if (pdfInteiro.checked) {
        camposPaginasPdf.classList.add("d-none");
    }
});

pdfPaginas.addEventListener("change", function() {
    if (pdfPaginas.checked) {
        camposPaginasPdf.classList.remove("d-none");
    }
});

function gerenciarLetras(id) {
    const musica = musicas.find(function(item) {
        return item.id === id;
    });

    if (!musica) {
        return;
    }

    musicaSelecionadaId = id;

    listaLetrasGerenciar.innerHTML = "";

    if (!musica.letras || musica.letras.length === 0) {
        listaLetrasGerenciar.innerHTML =
            '<p class="texto-vazio">Nenhuma letra adicionada ainda.</p>';
    } else {
        musica.letras.forEach(function(letra) {
            let tipoLetra = "Arquivo";

            if (letra.nome.toLowerCase().endsWith(".pdf")) {
                tipoLetra = "PDF";
            }

            if (
                letra.nome.toLowerCase().endsWith(".png") ||
                letra.nome.toLowerCase().endsWith(".jpg") ||
                letra.nome.toLowerCase().endsWith(".jpeg")
            ) {
                tipoLetra = "Imagem";
            }

            let infoPaginas = "";

            if (tipoLetra === "PDF") {
                if (letra.paginaInicialPdf && letra.paginaFinalPdf) {
                    if (letra.paginaInicialPdf === letra.paginaFinalPdf) {
                        infoPaginas = " • página " + letra.paginaInicialPdf;
                    } else {
                        infoPaginas =
                            " • páginas " +
                            letra.paginaInicialPdf +
                            " até " +
                            letra.paginaFinalPdf;
                    }
                } else {
                    infoPaginas = " • PDF inteiro";
                }
            }

            let infoTempo = "";

            if (letra.inicio === 0 && letra.fim >= 999999) {
                infoTempo = " • início ao fim";
            } else {
                infoTempo =
                    " • " +
                    formatarTempo(letra.inicio) +
                    " até " +
                    formatarTempo(letra.fim);
            }

            listaLetrasGerenciar.innerHTML += `
                <div class="letra-gerenciar-item">

                    <div class="letra-gerenciar-info">
                        <strong>${letra.nome}</strong>
                        <small>${tipoLetra}${infoPaginas}${infoTempo}</small>
                    </div>

                    <div class="acoes-letra">
                        <button
                            class="btn-editar-letra"
                            onclick="editarLetra(${musica.id}, ${letra.id})"
                        >
                            <i class="bi bi-pencil-square"></i>
                        </button>

                        <button
                            class="btn-excluir-letra"
                            onclick="excluirLetra(${musica.id}, ${letra.id})"
                        >
                            <i class="bi bi-trash3"></i>
                        </button>
                    </div>

                </div>
            `;
        });
    }

    modalGerenciarLetras.show();
}

function excluirLetra(musicaId, letraId) {

    const musica = musicas.find(function(item) {
        return item.id === musicaId;
    });

    if (!musica) {
        return;
    }

    if (!confirm("Excluir esta letra?")) {
        return;
    }

    musica.letras = musica.letras.filter(function(letra) {
        return letra.id !== letraId;
    });

    salvarPlaylists();

    gerenciarLetras(musicaId);
}

function editarLetra(musicaId, letraId) {
    const musica = musicas.find(function(item) {
        return item.id === musicaId;
    });

    if (!musica) {
        return;
    }

    const letra = musica.letras.find(function(item) {
        return item.id === letraId;
    });

    if (!letra) {
        return;
    }

    musicaDaLetraSendoEditadaId = musicaId;
    letraSendoEditadaId = letraId;

    nomeArquivoEditarLetra.textContent = letra.nome;

    if (letra.inicio === 0 && letra.fim >= 999999) {
        editarLetraMusicaInteira.checked = true;
        editarLetraTempoDefinido.checked = false;
        blocoEditarTemposLetra.classList.add("d-none");

        inputEditarTempoInicioLetra.value = "";
        inputEditarTempoFimLetra.value = "";
    } else {
        editarLetraMusicaInteira.checked = false;
        editarLetraTempoDefinido.checked = true;
        blocoEditarTemposLetra.classList.remove("d-none");

        inputEditarTempoInicioLetra.value = formatarTempo(letra.inicio);
        inputEditarTempoFimLetra.value = formatarTempo(letra.fim);
    }

    if (letra.nome.toLowerCase().endsWith(".pdf")) {
        blocoEditarPaginasPdf.classList.remove("d-none");

        if (letra.paginaInicialPdf && letra.paginaFinalPdf) {
            editarPdfInteiro.checked = false;
            editarPdfPaginas.checked = true;
            blocoEditarCamposPaginasPdf.classList.remove("d-none");

            inputEditarPaginaInicialPdf.value = letra.paginaInicialPdf;
            inputEditarPaginaFinalPdf.value = letra.paginaFinalPdf;
        } else {
            editarPdfInteiro.checked = true;
            editarPdfPaginas.checked = false;
            blocoEditarCamposPaginasPdf.classList.add("d-none");

            inputEditarPaginaInicialPdf.value = "";
            inputEditarPaginaFinalPdf.value = "";
        }
    } else {
        blocoEditarPaginasPdf.classList.add("d-none");

        editarPdfInteiro.checked = false;
        editarPdfPaginas.checked = false;

        inputEditarPaginaInicialPdf.value = "";
        inputEditarPaginaFinalPdf.value = "";
    }

    modalEditarLetra.show();
}

document
    .getElementById("input-substituir-letra")
    .addEventListener("change", function() {
        const arquivoNovo = this.files[0];

        if (!arquivoNovo) {
            return;
        }

        const musica = musicas.find(function(item) {
            return item.id === musicaDaLetraSendoEditadaId;
        });

        if (!musica) {
            return;
        }

        const letra = musica.letras.find(function(item) {
            return item.id === letraSendoEditadaId;
        });

        if (!letra) {
            return;
        }

        letra.arquivo = arquivoNovo;
        letra.nome = arquivoNovo.name;

        nomeArquivoEditarLetra.textContent = arquivoNovo.name;

        if (arquivoNovo.type === "application/pdf") {
            blocoEditarPaginasPdf.classList.remove("d-none");
        } else {
            blocoEditarPaginasPdf.classList.add("d-none");
            letra.paginaInicialPdf = null;
            letra.paginaFinalPdf = null;
        }

        salvarPlaylists();

        mostrarMensagemTemporaria("✅ Arquivo trocado.", "success");

        this.value = "";
    });

editarLetraMusicaInteira.addEventListener("change", function() {
    if (editarLetraMusicaInteira.checked) {
        blocoEditarTemposLetra.classList.add("d-none");
    }
});

editarLetraTempoDefinido.addEventListener("change", function() {
    if (editarLetraTempoDefinido.checked) {
        blocoEditarTemposLetra.classList.remove("d-none");
    }
});

editarPdfInteiro.addEventListener("change", function() {
    if (editarPdfInteiro.checked) {
        blocoEditarCamposPaginasPdf.classList.add("d-none");
    }
});

editarPdfPaginas.addEventListener("change", function() {
    if (editarPdfPaginas.checked) {
        blocoEditarCamposPaginasPdf.classList.remove("d-none");
    }
});

btnTrocarArquivoLetra.addEventListener("click", function() {
    document.getElementById("input-substituir-letra").click();
});

btnSalvarEdicaoLetra.addEventListener("click", function() {
    const musica = musicas.find(function(item) {
        return item.id === musicaDaLetraSendoEditadaId;
    });

    if (!musica) {
        return;
    }

    const letra = musica.letras.find(function(item) {
        return item.id === letraSendoEditadaId;
    });

    if (!letra) {
        return;
    }

    if (editarLetraMusicaInteira.checked) {
        letra.inicio = 0;
        letra.fim = 999999;
    } else {
        const inicio = converterTempoParaSegundos(inputEditarTempoInicioLetra.value);
        const fim = converterTempoParaSegundos(inputEditarTempoFimLetra.value);

        if (inicio === null || fim === null) {
            alert("Digite os tempos no formato correto. Exemplo: 0:00 ou 2:30.");
            return;
        }

        if (fim <= inicio) {
            alert("O tempo final precisa ser maior que o inicial.");
            return;
        }

        letra.inicio = inicio;
        letra.fim = fim;
    }

    if (letra.nome.toLowerCase().endsWith(".pdf")) {
        if (editarPdfInteiro.checked) {
            letra.paginaInicialPdf = null;
            letra.paginaFinalPdf = null;
        } else {
            let paginaInicial = Number(inputEditarPaginaInicialPdf.value);
            let paginaFinal = Number(inputEditarPaginaFinalPdf.value);

            if (!paginaInicial || paginaInicial < 1) {
                alert("Digite a página inicial do PDF.");
                return;
            }

            if (!paginaFinal) {
                paginaFinal = paginaInicial;
            }

            if (paginaFinal < paginaInicial) {
                alert("A página final precisa ser maior ou igual à inicial.");
                return;
            }

            letra.paginaInicialPdf = paginaInicial;
            letra.paginaFinalPdf = paginaFinal;
        }
    } else {
        letra.paginaInicialPdf = null;
        letra.paginaFinalPdf = null;
    }

    salvarPlaylists();
    gerenciarLetras(musica.id);

    modalEditarLetra.hide();

    mostrarMensagemTemporaria("✅ Letra atualizada.", "success");
});


menuExportarBackup.addEventListener("click", exportarBackup);

function exportarBackup() {

    const totalMusicas = playlists.reduce(function(total, playlist) {
        return total + (playlist.musicas ? playlist.musicas.length : 0);
    }, 0);

    const totalLetras = playlists.reduce(function(total, playlist) {
        if (!playlist.musicas) {
            return total;
        }

        return total + playlist.musicas.reduce(function(subtotal, musica) {
            return subtotal + (musica.letras ? musica.letras.length : 0);
        }, 0);
    }, 0);

    const dados = {
        versao: "2.0",
        dataExportacao: new Date().toISOString(),

        estatisticas: {
            playlists: playlists.length,
            musicas: totalMusicas,
            letras: totalLetras
        },

        configuracoes: {
            ultimaSincronizacao: localStorage.getItem("palcoplay_ultima_sincronizacao"),
            pastaConfigurada: localStorage.getItem("palcoplay_config_inicial")
        },

        playlists: playlists
    };

    const json = JSON.stringify(dados, null, 2);

    const blob = new Blob(
        [json], { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download =
        "palcoplay-backup-" +
        new Date().toISOString().slice(0, 10) +
        ".json";

    link.click();

    URL.revokeObjectURL(url);

    const agora = new Date();

    const dataBackup =
        agora.toLocaleDateString("pt-BR") +
        " " +
        agora.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
        });

    localStorage.setItem(
        "palcoplay_ultimo_backup",
        dataBackup
    );

    atualizarTextoUltimoBackup();

    mostrarMensagemTemporaria(
        "💾 Backup exportado. Ele salva playlists, letras, páginas e volumes. Mantenha também sua pasta PalcoPlay com os arquivos.",
        "success"
    );
}

function atualizarTextoUltimoBackup() {
    if (!textoUltimoBackup) {
        return;
    }

    const ultimoBackup =
        localStorage.getItem("palcoplay_ultimo_backup");

    if (!ultimoBackup) {
        textoUltimoBackup.textContent =
            "Último backup: nunca";
        return;
    }

    textoUltimoBackup.textContent =
        "Último backup: " + ultimoBackup;
}


menuImportarBackup.addEventListener("click", function() {
    inputImportarBackup.value = "";
    inputImportarBackup.click();
});


inputImportarBackup.addEventListener("change", function() {
    const arquivo = this.files[0];

    if (!arquivo) {
        return;
    }

    const leitor = new FileReader();

    leitor.onload = function(evento) {
        try {
            const dados = JSON.parse(evento.target.result);

            if (!dados.playlists || !Array.isArray(dados.playlists)) {
                alert("Este arquivo não parece ser um backup válido do PalcoPlay.");
                return;
            }

            const confirmar = confirm(
                "Importar este backup vai substituir suas playlists atuais. Deseja continuar?"
            );

            if (!confirmar) {
                return;
            }

            playlists = dados.playlists;

            playlists.forEach(function(playlist) {
                if (!playlist.musicas) {
                    playlist.musicas = [];
                }

                playlist.musicas.forEach(function(musica) {
                    musica.arquivo = null;

                    if (!musica.letras) {
                        musica.letras = [];
                    }

                    musica.letras.forEach(function(letra) {
                        letra.arquivo = null;
                    });
                });
            });

            salvarPlaylists();
            renderizarPlaylists();

            telaDetalhePlaylist.classList.add("d-none");
            telaPlayer.classList.add("d-none");
            telaPlaylists.classList.remove("d-none");

            btnCriarPlaylist.classList.remove("d-none");
            btnVoltarHeader.classList.add("d-none");

            mostrarMensagemTemporaria(
                "📂 Backup importado com sucesso.",
                "success"
            );

            const offcanvasMenu = bootstrap.Offcanvas.getInstance(
                document.getElementById("menuPalcoPlay")
            );

            if (offcanvasMenu) {
                offcanvasMenu.hide();
            }

            const totalDesconectados = contarArquivosDesconectados();

            if (totalDesconectados > 0) {
                localStorage.setItem(
                    "palcoplay_precisa_reconfigurar_pasta",
                    "sim"
                );

                if (typeof atualizarBotaoPastaHome === "function") {
                    atualizarBotaoPastaHome();
                }

                quantidadeArquivosDesconectados.textContent = totalDesconectados;

                telaDetalhePlaylist.classList.add("d-none");
                telaPlayer.classList.add("d-none");
                telaPlaylists.classList.remove("d-none");

                setTimeout(function() {
                    modalArquivosDesconectados.show();
                }, 500);
            }

        } catch (erro) {
            alert("Não foi possível importar este backup.");
            console.error(erro);
        }
    };

    leitor.readAsText(arquivo);
});

function restaurarBackupAutomatico() {

    const backupSalvo =
        localStorage.getItem("palcoplay_backup_automatico");

    if (!backupSalvo) {

        mostrarMensagemTemporaria(
            "⚠ Nenhum backup automático encontrado.",
            "warning"
        );

        return;
    }

    try {

        const backup =
            JSON.parse(backupSalvo);

        playlists = backup.playlists || [];

        salvarPlaylists();

        renderizarPlaylists();

        if (playlists.length > 0) {
            playlistAtualId = playlists[0].id;
            musicas = playlists[0].musicas || [];
        } else {
            playlistAtualId = null;
            musicas = [];
        }

        renderizarMusicas();

        telaDetalhePlaylist.classList.add("d-none");
        telaPlayer.classList.add("d-none");
        telaPlaylists.classList.remove("d-none");

        btnCriarPlaylist.classList.remove("d-none");
        btnVoltarHeader.classList.add("d-none");

        const dataBackup =
            new Date(backup.dataBackup);

        mostrarMensagemTemporaria(
            "✅ Backup automático restaurado (" +
            dataBackup.toLocaleString("pt-BR") +
            ")",
            "success"
        );

    } catch (erro) {

        console.log(erro);

        mostrarMensagemTemporaria(
            "❌ Não foi possível restaurar o backup automático.",
            "danger"
        );
    }
}


menuPastaPalcoPlay.addEventListener("click", async function() {
    const offcanvasMenu = bootstrap.Offcanvas.getInstance(
        document.getElementById("menuPalcoPlay")
    );

    if (offcanvasMenu) {
        offcanvasMenu.hide();
    }

    localStorage.setItem(
        "palcoplay_precisa_reconfigurar_pasta",
        "sim"
    );

    if (typeof escolherESincronizarPastaPalcoPlay === "function") {
        await escolherESincronizarPastaPalcoPlay();
    }
});

async function selecionarPastaPalcoPlay() {
    if (!window.showDirectoryPicker) {
        mostrarMensagemTemporaria(
            "⚠ Seu navegador não suporta seleção de pasta.",
            "warning"
        );
        return;
    }

    try {
        pastaDoShow = await window.showDirectoryPicker();

        const arquivosEncontrados = [];

        for await (const entrada of pastaDoShow.values()) {
            if (entrada.kind === "file") {
                arquivosEncontrados.push({
                    nome: entrada.name,
                    handle: entrada
                });
            }
        }

        await reconectarTodasPlaylistsDaPasta(arquivosEncontrados);

        mostrarMensagemTemporaria(
            "📁 Pasta PalcoPlay conectada com sucesso.",
            "success"
        );

        blocoConectarPastaHome.classList.add("d-none");

    } catch (erro) {
        console.error("Erro ao selecionar/reconectar pasta:", erro);

        mostrarMensagemTemporaria(
            "⚠ Erro ao conectar pasta. Veja o console.",
            "warning"
        );
    }
}


async function reconectarTodasPlaylistsDaPasta(arquivosEncontrados) {
    for (const playlist of playlists) {
        if (!playlist.musicas) {
            continue;
        }

        for (const musica of playlist.musicas) {

            if (!musica.arquivo) {
                const audioEncontrado = arquivosEncontrados.find(function(arquivo) {
                    return arquivo.nome.trim().toLowerCase() ===
                        (musica.nomeArquivoAudio || "").trim().toLowerCase();
                });

                if (audioEncontrado) {
                    musica.arquivo = await audioEncontrado.handle.getFile();
                }
            }

            if (musica.letras && musica.letras.length > 0) {
                for (const letra of musica.letras) {
                    if (letra.arquivo) {
                        continue;
                    }

                    const letraEncontrada = arquivosEncontrados.find(function(arquivo) {
                        return arquivo.nome.trim().toLowerCase() ===
                            (letra.nome || "").trim().toLowerCase();
                    });

                    if (letraEncontrada) {
                        letra.arquivo = await letraEncontrada.handle.getFile();
                    }
                }
            }
        }
    }

    const playlistAtual = playlists.find(function(item) {
        return Number(item.id) === Number(playlistAtualId);
    });

    if (playlistAtual) {
        musicas = playlistAtual.musicas || [];
        renderizarMusicas();
    }

    salvarPlaylists();
}

// btnConectarPastaHome.addEventListener("click", async function() {
//     await selecionarPastaPalcoPlay();
// });


menuNovaPlaylist.addEventListener("click", function() {
    const offcanvasMenu = bootstrap.Offcanvas.getInstance(
        document.getElementById("menuPalcoPlay")
    );

    if (offcanvasMenu) {
        offcanvasMenu.hide();
    }

    btnCriarPlaylist.click();
});

function renderizarMusicasFiltradas(listaFiltrada) {
    listaMusicas.innerHTML = "";

    if (listaFiltrada.length === 0) {
        listaMusicas.innerHTML =
            '<p class="texto-vazio">Nenhuma música encontrada.</p>';
        return;
    }

    listaFiltrada.forEach(function(musica) {
        listaMusicas.innerHTML += `
            <div class="musica-card" data-id="${musica.id}" onclick="tocarMusica(${musica.id})">

                <div class="musica-info">
                    <h3>▶ ${musica.nome}</h3>

                    <small class="${musica.arquivo ? 'text-secondary' : 'text-warning'}">
                        ${gerarStatusMusica(musica)}
                    </small>
                </div>

            </div>
        `;
    });
}


btnBuscaHeader.addEventListener("click", function() {
    barraBuscaHeader.classList.remove("d-none");

    inputPesquisaMusicaHeader.value = "";
    inputPesquisaMusicaHeader.focus();

    modoBuscaGlobal = !telaPlaylists.classList.contains("d-none");
});


btnFecharBusca.addEventListener("click", function() {
    fecharBuscaMusicaHeader();
});


inputPesquisaMusicaHeader.addEventListener("input", function() {
    const termo = inputPesquisaMusicaHeader.value.trim().toLowerCase();

    if (termo === "") {
        if (telaPlaylists.classList.contains("d-none")) {
            renderizarMusicas();
        } else {
            renderizarPlaylists();
        }

        return;
    }

    buscarMusicasEmTodasPlaylists(termo);
});

function fecharBuscaMusicaHeader() {
    barraBuscaHeader.classList.add("d-none");
    inputPesquisaMusicaHeader.value = "";
    renderizarMusicas();
}

function buscarMusicasEmTodasPlaylists(termo) {
    const estaNaTelaPlaylists = !telaPlaylists.classList.contains("d-none");

    const areaResultado = estaNaTelaPlaylists ?
        document.getElementById("lista-playlists") :
        listaMusicas;

    areaResultado.innerHTML = "";

    let resultados = [];

    playlists.forEach(function(playlist) {
        if (!playlist.musicas) {
            return;
        }

        playlist.musicas.forEach(function(musica) {
            if (musica.nome.toLowerCase().includes(termo)) {
                resultados.push({
                    musica: musica,
                    playlist: playlist
                });
            }
        });
    });

    if (resultados.length === 0) {
        areaResultado.innerHTML =
            '<p class="texto-vazio text-center">Nenhuma música encontrada.</p>';
        return;
    }

    resultados.forEach(function(resultado) {
        areaResultado.innerHTML += `
            <div class="col-12 col-md-10 col-lg-10">
                <div
                    class="musica-card"
                    onclick="tocarMusicaBuscaGlobal(${resultado.musica.id}, ${resultado.playlist.id})"
                >
                    <div class="musica-info">
                        <h3>▶ ${resultado.musica.nome}</h3>

                        <small>
                            ${resultado.playlist.nome}
                        </small>
                    </div>
                </div>
            </div>
        `;
    });
}


function tocarMusicaBuscaGlobal(musicaId, playlistId) {
    playlistRetornoBuscaGlobalId = playlistAtualId;

    const playlistEncontrada = playlists.find(function(playlist) {
        return Number(playlist.id) === Number(playlistId);
    });

    if (!playlistEncontrada || !playlistEncontrada.musicas) {
        return;
    }

    const musicaEncontrada = playlistEncontrada.musicas.find(function(musica) {
        return Number(musica.id) === Number(musicaId);
    });

    if (!musicaEncontrada) {
        return;
    }

    fecharBuscaMusicaHeader();

    telaPlaylists.classList.add("d-none");
    telaDetalhePlaylist.classList.add("d-none");
    telaPlayer.classList.remove("d-none");

    document.body.classList.add("modo-player");

    if (typeof ativarTelaLigada === "function") {
        ativarTelaLigada();
    }



    abrirMusica(musicaEncontrada);

    if (typeof iniciarModoPalco === "function") {
        iniciarModoPalco();
    }
}


window.addEventListener("beforeinstallprompt", function(event) {
    event.preventDefault();
    eventoInstalacaoPWA = event;
});

btnInstalarAppHome.addEventListener("click", async function() {
    if (eventoInstalacaoPWA) {
        eventoInstalacaoPWA.prompt();

        await eventoInstalacaoPWA.userChoice;

        eventoInstalacaoPWA = null;
        return;
    }

    alert(
        "Para instalar o PalcoPlay: toque nos três pontinhos do navegador e escolha 'Instalar app' ou 'Adicionar à tela inicial'."
    );
});

window.addEventListener("appinstalled", function() {
    eventoInstalacaoPWA = null;
    atualizarBotaoInstalarApp();
});

function atualizarProximaMusicaPlayer() {
    if (!proximaMusicaPlayer) {
        return;
    }

    const indiceAtual = musicas.findIndex(function(item) {
        return item.id === musicaTocandoId;
    });

    const proximaMusica = musicas[indiceAtual + 1];

    if (proximaMusica) {
        proximaMusicaPlayer.textContent = "Próxima: " + proximaMusica.nome;
    } else {
        proximaMusicaPlayer.textContent = "Próxima: —";
    }
}


btnSincronizarPosBackup.addEventListener("click", async function() {
    modalArquivosDesconectados.hide();

    if (typeof escolherESincronizarPastaPalcoPlay === "function") {
        await escolherESincronizarPastaPalcoPlay();
    }
});

atualizarTextoUltimoBackup();

menuRestaurarBackupAutomatico.addEventListener(
    "click",
    restaurarBackupAutomatico
);