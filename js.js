var troca="X";
var compare="";
var fim1=0;
var fim2=0;
var fim3=0;
var fim4=0;
var habilitar = true;
var ganhador='';
var cont=0;
var check = 0;
var qtdVitoriaO =0;
var qtdVitoriaX =0;
var vetCorVitoria = new Array(3);


function mudarCor(idCaixa, cor){
    document.getElementById(idCaixa).style.backgroundColor = cor;
    document.getElementById(idCaixa).style.backgroundColor = cor;
}

function inserirMarcacao(idTxt,p,q){
    if(document.getElementById(idTxt).innerHTML ==''&& habilitar == true){
        cont++;
        document.getElementById(idTxt).innerHTML = troca;
            
            for(z=0; z<3; z++){
                if(document.getElementById('txt'+p+z).innerHTML == troca){
                    fim1++;
                }
                if(document.getElementById('txt'+z+q).innerHTML == troca){
                    fim2++;
                }
                if(document.getElementById('txt'+z+z).innerHTML == troca){
                    fim3++;
                }
                if(document.getElementById('txt'+z+(2-z)).innerHTML == troca){
                    fim4++;
                }
            } 

        if(fim1<3){
            fim1=0;
        }
        else{
            fimDeJogo(troca);
        }
        
        if(fim2<3){
            fim2=0;
        }
        else{
            fimDeJogo(troca);
        }
        
        if(fim3<3){
            fim3=0;
        }
        else{
            fimDeJogo(troca);
        }
        
        if(fim4<3){
            fim4=0;
        }
        else{
            fimDeJogo(troca);
        }
            
        (troca=="X")?troca="O":troca="X";
           
    }
    
    
}


function novoJogo(){
    habilitar = true;
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            document.getElementById('txt'+i+j).innerHTML = '';
            document.getElementById('txt'+i+j).style.backgroundColor = 'white';
        }    
    }

    fim1=0;
    fim2=0;
    fim3=0;
    fim4=0;
    
    document.getElementById('menu').style.top = '-40px';
    document.getElementById('menu').style.transition = 'all 0.9s';
}

function fimDeJogo(xisOuBola){
    habilitar = false;
    ganhardor = xisOuBola
    if(document.getElementById('txt00').innerHTML == xisOuBola &&
            document.getElementById('txt01').innerHTML == xisOuBola &&
            document.getElementById('txt02').innerHTML == xisOuBola){
        for(i=0; i<3; i++)
            document.getElementById('txt0'+i).style.backgroundColor = 'pink';                
    }
    
    if(document.getElementById('txt10').innerHTML == xisOuBola &&
            document.getElementById('txt11').innerHTML == xisOuBola &&
            document.getElementById('txt12').innerHTML == xisOuBola){
        for(i=0; i<3; i++)
            document.getElementById('txt1'+i).style.backgroundColor = 'pink';                
    }
    
    if(document.getElementById('txt20').innerHTML == xisOuBola &&
            document.getElementById('txt21').innerHTML == xisOuBola &&
            document.getElementById('txt22').innerHTML == xisOuBola){
        for(i=0; i<3; i++)
            document.getElementById('txt2'+i).style.backgroundColor = 'pink';                
    }
    
    if(document.getElementById('txt00').innerHTML == xisOuBola &&
            document.getElementById('txt10').innerHTML == xisOuBola &&
            document.getElementById('txt20').innerHTML == xisOuBola){
        for(i=0; i<3; i++)
            document.getElementById('txt'+i+'0').style.backgroundColor = 'pink';                
    }
    
    if(document.getElementById('txt01').innerHTML == xisOuBola &&
            document.getElementById('txt11').innerHTML == xisOuBola &&
            document.getElementById('txt21').innerHTML == xisOuBola){
        for(i=0; i<3; i++)
            document.getElementById('txt'+i+'1').style.backgroundColor = 'pink';                
    }
    
    if(document.getElementById('txt02').innerHTML == xisOuBola &&
            document.getElementById('txt12').innerHTML == xisOuBola &&
            document.getElementById('txt22').innerHTML == xisOuBola){
        for(i=0; i<3; i++)
            document.getElementById('txt'+i+'2').style.backgroundColor = 'pink';                
    }
    
    if(document.getElementById('txt00').innerHTML == xisOuBola &&
            document.getElementById('txt11').innerHTML == xisOuBola &&
            document.getElementById('txt22').innerHTML == xisOuBola){
        for(i=0; i<3; i++)
            document.getElementById('txt'+i+i).style.backgroundColor = 'pink';                
    }
    
    if(document.getElementById('txt02').innerHTML == xisOuBola &&
            document.getElementById('txt11').innerHTML == xisOuBola &&
            document.getElementById('txt20').innerHTML == xisOuBola){
        for(i=0; i<3; i++)
            document.getElementById('txt'+i+(2-i)).style.backgroundColor = 'pink';                
    }
    
    if(ganhador == 'X')
        qtdVitoriaX++
    else if(ganhador == 'O')
        qtdVitoriaO++
    else
        ganhador =='';
    
    document.getElementById('menu').style.top = '-10px';
    document.getElementById('menu').style.transition = 'all 0.9s';
}

