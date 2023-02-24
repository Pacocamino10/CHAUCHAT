let cargador = 20;

function disparar (cargador) {
    let probabilidadFallo=Math.floor((Math.random() * (100 - 1 + 1)));
    let contadorDisparos=0;


    for (let i = 1; i <= cargador; i++) {
        
         if(probabilidadFallo<=90){
            console.log(i+"   pium!");
            contadorDisparos++;
            if (contadorDisparos%3==0 || contadorDisparos==3) {
            console.log(" ");
            
        }} 
        
        else {
            console.log(i+"   Illo, me he quedao pillá!")
            break;}

     

       
        
    }

    

}

disparar (cargador);


// ZONA  PREMIUN 



