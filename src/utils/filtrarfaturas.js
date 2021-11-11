module.exports = (faturas) => {
    for(let i = 0; i < faturas.length; i++){
        if(faturas[i].getValor() < 2000){
            faturas.splice(i,1);
            return faturas;
        }
    }
}