// Base URL pega a API que será utilizada
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
// Obter o botão de mudar gato do arquivo html
const catBtn = document.getElementById('change-cat');
// Obter o local da imagem do gato no arquivo html
const catImg = document.getElementById('cat');

// a constante getCats vai ser uma função anônima assíncrona que têm duas constantes: Data - Que pega a URL, e Json - Que pega Data e formata pra um .Json, e com esse .Json você pega a informação webpurl, que vai carregar os gatos nesse documento. O try e catch é para caso ocorra um erro, o catch exibe uma mensagem de erro
const getCats = async () => {
    try {
     const data = await fetch(BASE_URL);
     const json = await data.json();

     return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};

// a constante loadImg é uma função assíncrona que vai pedir o local onde vai carregar a imagem e vai executar a função get cats (obs 1: Nunca esqueça do await antes de declarar cada valor), (obs 2: Leia a constante getCats acima pra entender o funcionamento)
const loadImg = async () => {
    catImg.src = await getCats();
}

// O botão gato vai executar um evento de que quando clicado, ele executa a constante loadImg
catBtn.addEventListener('click', loadImg);

loadImg();