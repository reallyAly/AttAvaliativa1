module.exports = (faturas) => {

    let dataAtual = new Date();
    let tamanhoOriginal = faturas.length;

    for(let i = 0; i < faturas.length; i++){

        for(let j = 0; j < tamanhoOriginal; j++){
            if( faturas[i].getValor() < 2000 ){
                faturas.splice(i,1);
            }else if( (faturas[i].getValor() >= 2000 && faturas[i].getValor() <= 2500) && diff_months(dataAtual, faturas[i].getData()) <= 1){
                faturas.splice(i,1);
            }else if( (faturas[i].getValor() >= 2500 && faturas[i].getValor() <= 3000) && diff_months(dataAtual, faturas[i].getCliente().getDataInclusao()) <= 2){
                faturas.splice(i,1);
            }
        }

    }    

    faturas.splice(0,1);
    
    return faturas;
}

function diff_months(dt2, dt1) 
 {
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;

    diff /= (60 * 60 * 24 * 7 * 4);

    return Math.abs(Math.round(diff)) + 1;
 }