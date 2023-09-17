var tela_1 = document.getElementById('tela_1');
var tela_2 = document.getElementById('tela_2');
var tela_3 = document.getElementById('tela_3');
var tela_4 = document.getElementById('tela_4');
var tela_cruzada = document.getElementById('tela_cruzada');
var span = document.getElementById('span');
var img = document.getElementById('img');
var nao = document.getElementById('nao');

function p1(){
    setTimeout(function() {
        setTimeout(function() {
            tela_1.parentNode.removeChild(tela_1);
            tela_2.style.cssText = "display: block;";
        }, 500)
        tela_1.style.cssText = "animation: sair 0.5s;";
    }, 100)

}
function p2(){
    setTimeout(function() {
        setTimeout(function() {
            tela_2.parentNode.removeChild(tela_2);
            tela_3.style.cssText = "display: block;";
        }, 500)
        tela_2.style.cssText = "animation: sair 0.5s;";
    }, 100)
}
function p3(){
    setTimeout(function() {
        setTimeout(function() {
            tela_3.parentNode.removeChild(tela_3);
            tela_4.style.cssText = "display: block;";
        }, 500)
        tela_3.style.cssText = "animation: sair 0.5s;";
    }, 100)
}
n = 0;
function naoo(){
    var width = parseInt(Math.random()*1000);
    var heigth = parseInt(Math.random()*1000);
    n++;
    for(i = 0; i > -1; i++){
        if(heigth > window.screen.height){
            heigth = parseInt(Math.random()*1000);
        }else{
            break;
        }
    }
    for(i = 0; i > -1; i++){
        if(width > window.screen.width - 50){
            width = parseInt(Math.random()*1000);
        }else{
            break;
        }
    }
    if(n == 5){
        img.setAttribute("src", "imgs/tela_3/img_2.jpeg");
        span.style.cssText = "display: block;";
    }

    nao.style.cssText = "position: absolute; top: "+heigth+"px; left: "+width+"px;";
}

function cruzadinha(){
    setTimeout(function() {
        setTimeout(function() {
            tela_1.parentNode.removeChild(tela_1);
            tela_cruzada.style.cssText = "display: block;";
        }, 500)
        tela_1.style.cssText = "animation: sair 0.5s;";
    }, 100)

}

function  termo(){
    setTimeout(function() {
        setTimeout(function() {
            tela_1.parentNode.removeChild(tela_1);
            tela_termo.style.cssText = "display: block;";
        }, 500)
        tela_1.style.cssText = "animation: sair 0.5s;";
    }, 100)

}