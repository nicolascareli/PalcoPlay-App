import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCxIqg5eQ5eqhR6FazzPOuCKvtL6FXbp1M",
    authDomain: "palcoplay-c67ad.firebaseapp.com",
    projectId: "palcoplay-c67ad",
    storageBucket: "palcoplay-c67ad.firebasestorage.app",
    messagingSenderId: "245847011470",
    appId: "1:245847011470:web:f8591506c40ae1972f99df"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const btnLoginGoogle =
    document.getElementById("btn-login-google");

const btnLogoutGoogle =
    document.getElementById("btn-logout-google");

const usuarioLogado =
    document.getElementById("usuario-logado");

const nomeUsuarioAuth =
    document.getElementById("nome-usuario-auth");

const emailUsuarioAuth =
    document.getElementById("email-usuario-auth");

const fotoUsuarioAuth =
    document.getElementById("foto-usuario-auth");

const authMenuRodape =
    document.getElementById("auth-menu-rodape");

btnLoginGoogle.addEventListener("click", async function() {
    try {
        await signInWithPopup(auth, provider);
    } catch (erro) {
        console.error("Erro ao entrar com Google:", erro);
        alert("Não foi possível entrar com Google.");
    }
});

btnLogoutGoogle.addEventListener("click", async function() {
    try {
        await signOut(auth);
    } catch (erro) {
        console.error("Erro ao sair:", erro);
    }
});

onAuthStateChanged(auth, function(usuario) {
    if (usuario) {
        btnLoginGoogle.classList.add("d-none");
        usuarioLogado.classList.remove("d-none");
        authMenuRodape.classList.remove("d-none");

        nomeUsuarioAuth.textContent =
            usuario.displayName || "Usuário PalcoPlay";

        emailUsuarioAuth.textContent =
            usuario.email || "";

        fotoUsuarioAuth.src =
            usuario.photoURL ||
            "img/user-default.png";
    } else {
        btnLoginGoogle.classList.remove("d-none");
        usuarioLogado.classList.add("d-none");
        authMenuRodape.classList.add("d-none");
    }
});


const btnUpgradePro =
    document.getElementById("btn-upgrade-pro");

const modalPlanoPro = new bootstrap.Modal(
    document.getElementById("modalPlanoPro")
);

btnUpgradePro.addEventListener("click", function() {
    modalPlanoPro.show();
});