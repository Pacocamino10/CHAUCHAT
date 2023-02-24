let cargador = 7;

function disparar (cargador) {
    let contadorDisparos=0;


    for (let i = 1; i <= cargador; i++) {
        let probabilidadFallo=Math.floor((Math.random() * (100 - 1 + 1)));
        if(probabilidadFallo<=20){
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



