// Passo 1: Configure o Firebase
// Vá em https://firebase.google.com/, crie um novo projeto e pegue suas credenciais
// Cole-as aqui:
const firebaseConfig = {
    apiKey: "AIzaSyBPVD5yq5Pzb65ZADkjhqyaC06Vf9xPbYQ",
  authDomain: "show-do-milhao-79270.firebaseapp.com",
  databaseURL: "https://show-do-milhao-79270-default-rtdb.firebaseio.com",
  projectId: "show-do-milhao-79270",
  storageBucket: "show-do-milhao-79270.firebasestorage.app",
  messagingSenderId: "94789466204",
  appId: "1:94789466204:web:e7ad59dab239a0cad00e99",
  measurementId: "G-BDPQQRPRWK"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const gameRef = database.ref('game');

// As perguntas e respostas do seu documento
const questions = [
    { q: "1. A inovação em serviços não se restringe apenas à tecnologia, podendo envolver mudanças em processos, atendimento ao cliente e novos modelos de entrega de valor.", options: ["a) É falso, pois só existe inovação se houver tecnologia digital.", "b) É verdadeiro, pois envolve aspectos organizacionais, culturais e de relacionamento.", "c) É falso, já que inovação é apenas criar novos produtos físicos."], ans: "b" },
    { q: "2. Toda inovação em serviços exige grandes investimentos financeiros e infraestrutura tecnológica de ponta.", options: ["a) É verdadeiro, porque sem altos recursos não há inovação.", "b) É falso, pois muitas inovações surgem de ajustes simples e criativos.", "c) É verdadeiro, já que apenas multinacionais podem inovar."], ans: "b" },
    { q: "3. A personalização do atendimento ao cliente pode ser considerada uma inovação em serviços porque:", options: ["a) Não tem impacto na experiência do cliente.", "b) Cria valor diferenciado e fortalece o relacionamento.", "c) É apenas um recurso estético."], ans: "b" },
    { q: "4. Inovar em serviços significa apenas copiar práticas de concorrentes.", options: ["a) É verdadeiro, pois copiar já é inovar.", "b) É falso, pois copiar não é inovação; é necessário diferencial.", "c) É verdadeiro, porque o mercado aceita repetições."], ans: "b" },
    { q: "5. Serviços digitais como bancos online e streaming são exemplos claros de:", options: ["a) Inovação incremental.", "b) Inovação disruptiva.", "c) Inovação de posição."], ans: "b" },
    { q: "6. Pequenas empresas podem inovar em serviços?", options: ["a) Não, pois apenas grandes empresas têm recursos para isso.", "b) Sim, muitas vezes inovam em nichos e criam diferenciais competitivos.", "c) Não, porque falta estrutura organizacional."], ans: "b" },
    { q: "7. O design de serviços busca:", options: ["a) Criar propagandas mais atraentes.", "b) Mapear a jornada do cliente e melhorar sua experiência.", "c) Eliminar o contato humano por completo."], ans: "b" },
    { q: "8. Automatizar processos de atendimento com chatbots pode ser considerado inovação porque:", options: ["a) Melhora a eficiência e acessibilidade.", "b) Reduz apenas os custos da empresa sem afetar clientes.", "c) É uma simples modernização sem valor."], ans: "a" },
    { q: "9. Inovação incremental em serviços significa:", options: ["a) Fazer pequenas melhorias contínuas em algo já existente.", "b) Criar algo totalmente novo e disruptivo.", "c) Apenas copiar práticas externas."], ans: "a" },
    { q: "10. Inovação disruptiva em serviços ocorre quando:", options: ["a) Uma empresa copia práticas de outra maior.", "b) Há ruptura no mercado com um novo modelo.", "c) Se altera apenas o visual do serviço."], ans: "b" },
    { q: "11. Programas de fidelidade digitais são considerados inovações porque:", options: ["a) Não afetam diretamente o consumidor.", "b) Oferecem recompensas personalizadas e aumentam engajamento.", "c) São apenas marketing sem valor real."], ans: "b" },
    { q: "12. A sustentabilidade pode ser considerada inovação em serviços quando:", options: ["a) Não impacta em nada o consumidor.", "b) Empresas oferecem opções mais ecológicas, como entregas verdes.", "c) É apenas um discurso sem prática."], ans: "b" },
    { q: "13. A inovação em serviços depende da cultura organizacional?", options: ["a) Não, é um processo isolado.", "b) Sim, a cultura é essencial para sustentar a inovação.", "c) Não, depende apenas de tecnologia."], ans: "b" },
    { q: "14. Serviços baseados em assinaturas, como academias e plataformas digitais, representam:", options: ["a) Inovação incremental.", "b) Inovação de processo.", "c) Inovação em modelo de receita."], ans: "c" },
    { q: "15. Digitalização de processos burocráticos em órgãos públicos é:", options: ["a) Apenas modernização estética.", "b) Um exemplo de inovação em serviços governamentais.", "c) Um gasto desnecessário sem impacto no cidadão."], ans: "b" },
    { q: "16. (TECNOLOGIA) Qual foi a principal invenção que permitiu a Revolução Industrial?", options: ["a) Telégrafo.", "b) Eletricidade.", "c) Máquina a vapor."], ans: "c" },
    { q: "17. A inovação aberta ocorre quando:", options: ["a) Empresas criam tudo sozinhas.", "b) Há co-criação com clientes, startups e universidades.", "c) Há apenas compra de ideias prontas."], ans: "b" },
    { q: "18. A inovação em serviços gera vantagem competitiva porque:", options: ["a) Foca apenas em reduzir custos.", "b) Depende exclusivamente de tecnologia de ponta.", "c) Diferencia empresas em mercados competitivos."], ans: "c" },
    { q: "19. Inovar em serviços significa:", options: ["a) Apenas usar inteligência artificial.", "b) Copiar modelos de concorrentes sem adaptação.", "c) Transformar ideias em soluções práticas que gerem valor."], ans: "c" },
    { q: "20. A inovação em serviços é um processo:", options: ["a) Isolado e pontual.", "b) Que se encerra após a primeira mudança.", "c) Contínuo de adaptação às necessidades do mercado."], ans: "c" },
    { q: "21. O auto check-in em aeroportos é considerado inovação porque:", options: ["a) Substituiu