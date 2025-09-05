// Apenas para testes, vamos inicializar o Firebase
// Substitua pelas suas credenciais
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    databaseURL: "SUA_DATABASE_URL",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const gameRef = database.ref('game');

// Se a conexão funcionar, este log deve aparecer
gameRef.once('value', (snapshot) => {
    if (snapshot.val()) {
        console.log("O Firebase está funcionando! Dados:", snapshot.val());
    } else {
        console.log("O Firebase está conectado, mas o banco de dados está vazio.");
    }
});

// Este é o código que exibe a tela inicial
document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        document.getElementById('mobile-screen').classList.add('active');
    } else {
        document.getElementById('tv-screen').classList.add('active');
    }
});