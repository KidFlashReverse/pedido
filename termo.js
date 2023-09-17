var n = 0;

function handleKeyUp(event) {
    if (event.key === "Enter") {
        if(n){    
            if(document.querySelector('#p'+n+'l'+'1').value != '' && document.querySelector('#p'+n+'l'+'2').value != '' && document.querySelector('#p'+n+'l'+'3').value != '' && document.querySelector('#p'+n+'l'+'4').value != ''&& document.querySelector('#p'+n+'l'+'5').value != ''){
                var checar = [1, 2, 1, 1];
                var save = 0;

                for (i = 1; i < 6; i++){
                    if(document.querySelector('#p'+n+'l'+i).value === 'n'){
                        if(i === 1){
                            document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: #90ee90;';
                            checar[0] = 0;
                        }else{
                            if(checar[0] == 1){
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: yellow;';
                                checar[0] = 0;
                            }else{ 
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: grey;';
                            }
                        }
                    }else if(document.querySelector('#p'+n+'l'+i).value === 'e'){
                        if(i === 2){
                            if(save != 0){
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: #90ee90;';
                                document.querySelector('#p'+n+'l'+save).style.cssText = 'background-color: grey;';
                                checar[1] -= 1;
                            }else{
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: #90ee90;';
                                checar[1] -= 1;
                            }
                        }else if(i === 4){
                            if(save != 0){
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: #90ee90;';
                                document.querySelector('#p'+n+'l'+save).style.cssText = 'background-color: grey;';
                                checar[1] -= 1;
                            }else{
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: #90ee90;';
                                checar[1] -= 1;
                            }
                        }else{
                            if(checar[1] > 0){
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: yellow;';
                                checar[1] -= 1;
                                save = i;
                            }else{ 
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: grey;';
                            }
                        }
                    }else if(document.querySelector('#p'+n+'l'+i).value === 'v'){
                        if(i === 3){
                            if(save != 0){
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: #90ee90;';
                                document.querySelector('#p'+n+'l'+save).style.cssText = 'background-color: grey;';
                                checar[2] = 0;
                            }else{
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: #90ee90;';
                                checar[2] = 0;
                            }
                        }else{
                            if(checar[2] == 1){
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: yellow;';
                                checar[2] = 0;
                                save = i;
                            }else{ 
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: grey;';
                            }
                        }
                    }
                    else if(document.querySelector('#p'+n+'l'+i).value === 's'){
                        if(i === 5){
                            if(save != 0){
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: #90ee90;';
                                document.querySelector('#p'+n+'l'+save).style.cssText = 'background-color: grey;';
                                checar[3] = 0;
                            }else{
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: #90ee90;';
                                checar[3] = 0;
                            }
                            
                        }else{
                            if(checar[3] == 1){
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: yellow;';
                                checar[3] = 0;
                                save = i;
                            }else{ 
                                document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: grey;';
                            }
                        }
                    }else{
                        document.querySelector('#p'+n+'l'+i).style.cssText = 'background-color: grey;';
                    }
                }
                
                if(document.querySelector('#p'+n+'l'+'1').value + document.querySelector('#p'+n+'l'+'2').value + document.querySelector('#p'+n+'l'+'3').value + document.querySelector('#p'+n+'l'+'4').value + document.querySelector('#p'+n+'l'+'5').value === 'neves'){
                    document.getElementById('span').innerHTML = "Parabéns amor, completou o termo";
                    for(i = 1; i < 6; i++){
                        document.querySelector('#p'+n+'l'+i).setAttribute("disabled", "disabled");
                    }
                }else{
                    if(n != 6){
                        for(i = 1; i < 6; i++){
                            document.querySelector('#p'+n+'l'+i).setAttribute("disabled", "disabled");
                            document.querySelector('#p'+(n+1)+'l'+i).removeAttribute("disabled");
                            document.querySelector('#p'+(n+1)+'l'+'1').focus();
                        }
                    }else{
                        document.getElementById('span').innerHTML = "Infelizmente, acabram as chances <br>A palavra era: NEVES";
                        for(i = 1; i < 6; i++){
                            document.querySelector('#p'+n+'l'+i).setAttribute("disabled", "disabled");
                        }
                    }
                    
                }
            }else{
                alert('Preencha todos os campos');
            }
        }
    }
}

document.addEventListener("keyup", handleKeyUp);

function termo(a, b){
    if(a === 1){
        n = 1;
        if(document.querySelector('#p1l' + b).value != ""){
            if(document.querySelector('#p1l' + (b + 1))){
                document.querySelector('#p1l' + (b + 1)).focus();
            }  
        }else{
            if(document.querySelector('#p1l' + (b - 1))){
                document.querySelector('#p1l' + (b - 1)).focus();
            }  
        }
    }else if(a === 2){
        n = 2;
        if(document.querySelector('#p'+a+'l' + b).value != ""){
            if(document.querySelector('#p'+a+'l' + (b + 1))){
                document.querySelector('#p'+a+'l' + (b + 1)).focus();
            }  
        }else{
            if(document.querySelector('#p'+a+'l' + (b - 1))){
                document.querySelector('#p'+a+'l' + (b - 1)).focus();
            }  
        }
    }else if(a === 3){
        n = 3;
        if(document.querySelector('#p'+a+'l' + b).value != ""){
            if(document.querySelector('#p'+a+'l' + (b + 1))){
                document.querySelector('#p'+a+'l' + (b + 1)).focus();
            }  
        }else{
            if(document.querySelector('#p'+a+'l' + (b - 1))){
                document.querySelector('#p'+a+'l' + (b - 1)).focus();
            }  
        }
    }else if(a === 4){
        n = 4;
        if(document.querySelector('#p'+a+'l' + b).value != ""){
            if(document.querySelector('#p'+a+'l' + (b + 1))){
                document.querySelector('#p'+a+'l' + (b + 1)).focus();
            }  
        }else{
            if(document.querySelector('#p'+a+'l' + (b - 1))){
                document.querySelector('#p'+a+'l' + (b - 1)).focus();
            }  
        }
    }else if(a === 5){
        n = 5;
        if(document.querySelector('#p'+a+'l' + b).value != ""){
            if(document.querySelector('#p'+a+'l' + (b + 1))){
                document.querySelector('#p'+a+'l' + (b + 1)).focus();
            }  
        }else{
            if(document.querySelector('#p'+a+'l' + (b - 1))){
                document.querySelector('#p'+a+'l' + (b - 1)).focus();
            }  
        }
    }else if(a === 6){
        n = 6;
        if(document.querySelector('#p'+a+'l' + b).value != ""){
            if(document.querySelector('#p'+a+'l' + (b + 1))){
                document.querySelector('#p'+a+'l' + (b + 1)).focus();
            }  
        }else{
            if(document.querySelector('#p'+a+'l' + (b - 1))){
                document.querySelector('#p'+a+'l' + (b - 1)).focus();
            }  
        }
    }
}