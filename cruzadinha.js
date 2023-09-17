var dica = document.getElementById('dica');
var n_p1 = document.querySelectorAll('.p1 div').length; 
var n = 1;



function mudar(a){
    if(a === 1){
        dica.innerHTML = "1. Mês que a gente teve o primeiro beijo oficial";
        document.querySelector('#p1l1').focus();
    }else if(a === 2){
        dica.innerHTML = "2. Amor da vida de José Wallacy";
        document.querySelector('#p1l3').value != '' ? document.querySelector('#p2l2').focus() : document.querySelector('#p1l3').focus();
    }else if(a === 3){
        dica.innerHTML = "3. Dia do nosso aniversário de namoro";
        document.querySelector('#p3l1').focus();
    }else if(a === 4){
        dica.innerHTML = "4. Apilido carinhoso entre a gente";
        document.querySelector('#p2l6').value != '' ? document.querySelector('#p4l2').focus() : document.querySelector('#p2l6').focus();
    }else if(a === 5){
        dica.innerHTML = "5. Você é meu Floco de ____";
        document.querySelector('#p5l1').focus();
    }else if(a === 6){
        dica.innerHTML = "6. O que amo fazer em você (com a boca)";
        document.querySelector('#p4l2').value != '' ? document.querySelector('#p6l2').focus() : document.querySelector('#p4l2').focus();
    }
    else if(a === 7){
        dica.innerHTML = "7. Nome da nossa futura filha";
        document.querySelector('#p7l1').focus();
    }
    else if(a === 8){
        dica.innerHTML = "7. Última palavra da nossa música";
        document.querySelector('#p6l4').value != '' ? document.querySelector('#p8l2').focus() : document.querySelector('#p6l4').focus();
    }
    
}

var fim = 0;
function p(a, b, event){
    if(a === 1){
        //p1
            var l1 = document.querySelector('#p1l1').value;
            var l2 = document.querySelector('#p1l2').value;
            var l3 = document.querySelector('#p1l3').value;
            var l4 = document.querySelector('#p1l4').value;
            var l5 = document.querySelector('#p1l5').value;
        //p1

        if(document.querySelector('#p1l' + b).value != ""){
            if(document.querySelector('#p1l' + (b + 1))){
                document.querySelector('#p1l' + (b + 1)).focus();
            }  
        }else{
            if(document.querySelector('#p1l' + (b - 1))){
                document.querySelector('#p1l' + (b - 1)).focus();
            }  
        }


        if((l1 + l2 + l3 + l4 + l5) === "abril"){
            document.querySelector('#p1l1').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p1l1').setAttribute("disabled", "disabled");
            document.querySelector('#p1l2').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p1l2').setAttribute("disabled", "disabled");
            document.querySelector('#p1l3').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p1l3').setAttribute("disabled", "disabled");
            document.querySelector('#p1l4').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p1l4').setAttribute("disabled", "disabled");
            document.querySelector('#p1l5').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p1l5').setAttribute("disabled", "disabled");
            fim += 1;
            if(fim === 8){
                document.getElementById('fim').innerHTML = "Parabéns Amor, você completou todos. Sei que tava básico, mas só queria fazer algo que você gosta. Te amo";
            }
        }
    }else if(a === 2){
        //p2
            var l1 = document.querySelector('#p1l3').value;
            var l2 = document.querySelector('#p2l2').value;
            var l3 = document.querySelector('#p2l3').value;
            var l4 = document.querySelector('#p2l4').value;
            var l5 = document.querySelector('#p2l5').value;
            var l6 = document.querySelector('#p2l6').value;
        //p2

        if(document.querySelector('#p2l' + b).value != ""){
            if(document.querySelector('#p2l' + (b + 1))){
                document.querySelector('#p2l' + (b + 1)).focus();
            }  
        }else{
            if(document.querySelector('#p2l' + (b - 1))){
                document.querySelector('#p2l' + (b - 1)).focus();
            }  
        }

        if((l1 + l2 + l3 + l4 + l5 + l6) === "raissa"){
            document.querySelector('#p1l3').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p1l3').setAttribute("disabled", "disabled");
            document.querySelector('#p2l2').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p2l2').setAttribute("disabled", "disabled");
            document.querySelector('#p2l3').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p2l3').setAttribute("disabled", "disabled");
            document.querySelector('#p2l4').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p2l4').setAttribute("disabled", "disabled");
            document.querySelector('#p2l5').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p2l5').setAttribute("disabled", "disabled");
            document.querySelector('#p2l6').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p2l6').setAttribute("disabled", "disabled");
            fim += 1;
            if(fim === 8){
                document.getElementById('fim').innerHTML = "Parabéns Amor, você completou todos. Sei que tava básico, mas só queria fazer algo que você gosta. Te amo";
            }
        }
    }else if(a === 3){
        //p3
            var l1 = document.querySelector('#p3l1').value;
            var l2 = document.querySelector('#p3l2').value;
            var l3 = document.querySelector('#p3l3').value;
            var l4 = document.querySelector('#p3l4').value;
            var l5 = document.querySelector('#p2l4').value;
            var l6 = document.querySelector('#p3l6').value;
            var l7 = document.querySelector('#p3l7').value;
            var l8 = document.querySelector('#p3l8').value;
            var l9 = document.querySelector('#p3l9').value;
        //p3

        if(document.querySelector('#p3l' + b).value != ""){
            if(document.querySelector('#p3l' + (b + 1))){
                document.querySelector('#p3l' + (b + 1)).focus();
            }  
        }else{
            if(document.querySelector('#p3l' + (b - 1))){
                document.querySelector('#p3l' + (b - 1)).focus();
            }  
        }

        if((l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9) === "dezessete"){
            document.querySelector('#p3l1').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p3l1').setAttribute("disabled", "disabled");
            document.querySelector('#p3l2').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p3l2').setAttribute("disabled", "disabled");
            document.querySelector('#p3l3').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p3l3').setAttribute("disabled", "disabled");
            document.querySelector('#p3l4').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p3l4').setAttribute("disabled", "disabled");
            document.querySelector('#p2l4').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p2l4').setAttribute("disabled", "disabled");
            document.querySelector('#p3l6').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p3l6').setAttribute("disabled", "disabled");
            document.querySelector('#p3l7').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p3l7').setAttribute("disabled", "disabled");
            document.querySelector('#p3l8').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p3l8').setAttribute("disabled", "disabled");
            document.querySelector('#p3l9').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p3l9').setAttribute("disabled", "disabled");
            fim += 1;
            if(fim === 8){
                document.getElementById('fim').innerHTML = "Parabéns Amor, você completou todos. Sei que tava básico, mas só queria fazer algo que você gosta. Te amo";
            }
        }
    }else if(a === 4){
        //p2
            var l1 = document.querySelector('#p2l6').value;
            var l2 = document.querySelector('#p4l2').value;
            var l3 = document.querySelector('#p4l3').value;
            var l4 = document.querySelector('#p4l4').value;
        //p2

        if(document.querySelector('#p4l' + b).value != ""){
            if(document.querySelector('#p4l' + (b + 1))){
                document.querySelector('#p4l' + (b + 1)).focus();
            }  
        }else{
            if(document.querySelector('#p4l' + (b - 1))){
                document.querySelector('#p4l' + (b - 1)).focus();
            }  
        }

        if((l1 + l2 + l3 + l4) === "amor"){
            document.querySelector('#p2l6').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p2l6').setAttribute("disabled", "disabled");
            document.querySelector('#p4l2').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p4l2').setAttribute("disabled", "disabled");
            document.querySelector('#p4l3').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p4l3').setAttribute("disabled", "disabled");
            document.querySelector('#p4l4').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p4l4').setAttribute("disabled", "disabled");
            fim += 1;
            if(fim === 8){
                document.getElementById('fim').innerHTML = "Parabéns Amor, você completou todos. Sei que tava básico, mas só queria fazer algo que você gosta. Te amo";
            }
        }
    }else if(a === 5){
        //p2
            var l1 = document.querySelector('#p5l1').value;
            var l2 = document.querySelector('#p3l2').value;
            var l3 = document.querySelector('#p5l3').value;
            var l4 = document.querySelector('#p5l4').value;
        //p2

        if(document.querySelector('#p5l' + b).value != ""){
            if(document.querySelector('#p5l' + (b + 1))){
                document.querySelector('#p5l' + (b + 1)).focus();
            }  
        }else{
            if(document.querySelector('#p5l' + (b - 1))){
                document.querySelector('#p5l' + (b - 1)).focus();
            }  
        }

        if((l1 + l2 + l3 + l4) === "neve"){
            document.querySelector('#p5l1').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p5l1').setAttribute("disabled", "disabled");
            document.querySelector('#p3l2').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p3l2').setAttribute("disabled", "disabled");
            document.querySelector('#p5l3').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p5l3').setAttribute("disabled", "disabled");
            document.querySelector('#p5l4').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p5l4').setAttribute("disabled", "disabled");
            fim += 1;
            if(fim === 8){
                document.getElementById('fim').innerHTML = "Parabéns Amor, você completou todos. Sei que tava básico, mas só queria fazer algo que você gosta. Te amo";
            }
        }
    }else if(a === 6){
        //p2
            var l1 = document.querySelector('#p4l2').value;
            var l2 = document.querySelector('#p6l2').value;
            var l3 = document.querySelector('#p6l3').value;
            var l4 = document.querySelector('#p6l4').value;
            var l5 = document.querySelector('#p6l5').value;
            var l6 = document.querySelector('#p6l6').value;
        //p2

        if(document.querySelector('#p6l' + b).value != ""){
            if(document.querySelector('#p6l' + (b + 1))){
                document.querySelector('#p6l' + (b + 1)).focus();
            }  
        }else{
            if(document.querySelector('#p6l' + (b - 1))){
                document.querySelector('#p6l' + (b - 1)).focus();
            }  
        }

        if((l1 + l2 + l3 + l4 + l5 + l6) === "morder"){
            document.querySelector('#p4l2').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p4l2').setAttribute("disabled", "disabled");
            document.querySelector('#p6l2').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p6l2').setAttribute("disabled", "disabled");
            document.querySelector('#p6l3').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p6l3').setAttribute("disabled", "disabled");
            document.querySelector('#p6l4').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p6l4').setAttribute("disabled", "disabled");
            document.querySelector('#p6l5').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p6l5').setAttribute("disabled", "disabled");
            document.querySelector('#p6l6').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p6l6').setAttribute("disabled", "disabled");
            fim += 1;
            if(fim === 8){
                document.getElementById('fim').innerHTML = "Parabéns Amor, você completou todos. Sei que tava básico, mas só queria fazer algo que você gosta. Te amo";
            }
        }
    }else if(a === 7){
        //p2
            var l1 = document.querySelector('#p7l1').value;
            var l2 = document.querySelector('#p2l2').value;
            var l3 = document.querySelector('#p7l3').value;
            var l4 = document.querySelector('#p7l4').value;
            var l5 = document.querySelector('#p7l5').value;
            var l6 = document.querySelector('#p7l6').value;
            var l7 = document.querySelector('#p7l7').value;
        //p2

        if(document.querySelector('#p7l' + b).value != ""){
            if(document.querySelector('#p7l' + (b + 1))){
                document.querySelector('#p7l' + (b + 1)).focus();
            }  
        }else{
            if(document.querySelector('#p7l' + (b - 1))){
                document.querySelector('#p7l' + (b - 1)).focus();
            }  
        }

        if((l1 + l2 + l3 + l4 + l5 + l6 + l7) === "dandara"){
            document.querySelector('#p7l1').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p7l1').setAttribute("disabled", "disabled");
            document.querySelector('#p2l2').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p2l2').setAttribute("disabled", "disabled");
            document.querySelector('#p7l3').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p7l3').setAttribute("disabled", "disabled");
            document.querySelector('#p7l4').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p7l4').setAttribute("disabled", "disabled");
            document.querySelector('#p7l5').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p7l5').setAttribute("disabled", "disabled");
            document.querySelector('#p7l6').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p7l6').setAttribute("disabled", "disabled");
            document.querySelector('#p7l7').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p7l7').setAttribute("disabled", "disabled");
            fim += 1;
            if(fim === 8){
                document.getElementById('fim').innerHTML = "Parabéns Amor, você completou todos. Sei que tava básico, mas só queria fazer algo que você gosta. Te amo";
            }
        }
    }else if(a === 8){
        //p2
            var l1 = document.querySelector('#p6l4').value;
            var l2 = document.querySelector('#p8l2').value;
            var l3 = document.querySelector('#p8l3').value;
            var l4 = document.querySelector('#p8l4').value;
        //p2

        if(document.querySelector('#p8l' + b).value != ""){
            if(document.querySelector('#p8l' + (b + 1))){
                document.querySelector('#p8l' + (b + 1)).focus();
            }  
        }else{
            if(document.querySelector('#p8l' + (b - 1))){
                document.querySelector('#p8l' + (b - 1)).focus();
            }  
        }

        if((l1 + l2 + l3 + l4) === "dela"){
            document.querySelector('#p6l4').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p6l4').setAttribute("disabled", "disabled");
            document.querySelector('#p8l2').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p8l2').setAttribute("disabled", "disabled");
            document.querySelector('#p8l3').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p8l3').setAttribute("disabled", "disabled");
            document.querySelector('#p8l4').style.cssText = 'background-color: #90ee90;';
            document.querySelector('#p8l4').setAttribute("disabled", "disabled");
            fim += 1;
            if(fim === 8){
                document.getElementById('fim').innerHTML = "Parabéns Amor, você completou todos. Sei que tava básico, mas só queria fazer algo que você gosta. Te amo";
            }
        }
    }
}