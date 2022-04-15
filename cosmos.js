$('.btnDeEnvio').click(function(event){
    event.preventDefault()
    api()
})
$('.respostaVideo').hide();
$('.respostaFoto').hide();
$('.exibirPesquisa').hide();

function api(){
//Declarando as variaveis
const chave = 'lnv6Hljcv9jdbNtk14Dd89LaxY61MAo892oEzzee';
let date = $('.dataDoUser').val();
let imagem = $('.respostaFoto');
let video = $('.respostaVideo');
let titulo = $('.titulo');
let textoDoParagrafo = $('.textoFinal');
let quadroDePesquisa = $('.exibirPesquisa');


const url = `https://api.nasa.gov/planetary/apod?api_key=${chave}&date=${date}`;
$.get(url, function(data){
    const {title, media_type, url, explanation} = data;

    titulo.text(title);
    if(media_type == 'image'){
        quadroDePesquisa.show();
        video.hide();
        imagem.show();
        imagem.attr("src", url);
    } else{
        quadroDePesquisa.show();
        video.show();
        imagem.hide();
        video.attr("src", url);
    }
    textoDoParagrafo.text(explanation);

});




}










// let time = null;
// let onChange = false;
// let int = null;
// let interval = 5;

// $(".dataDoUser").change(function(){
//     onChange = true;
//     clearTimeout(time);
//     clearInterval(int);
// })

// time = setTimeout(function(){
//     console.log(time)
// onChange = false;
// $('.conta').text('esperamos 5s');
// },6000);

// int = setInterval(function (){
//     interval--;
//     if(interval == 1){
//         clearInterval(int);
//     }
//     $('.count').text(interval);
// }, 2000);





