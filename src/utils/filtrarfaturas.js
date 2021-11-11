module.exports = (faturas) => {
    for(let i = 0; i < faturas.length; i++){
        if(faturas[i].getValor() < 2000){
            return undefined;
        }
    }
}


