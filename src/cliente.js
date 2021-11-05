module.exports = class Cliente{

    constructor(nome, dataInclusao, estado){
        this.nome = nome;
        this.dataInclusao = dataInclusao;
        this.estado = estado;
    }

    setNome(nome){
        this.nome = nome;
    }

    getNome(){
        return this.nome;
    }

    setDataInclusao(dataInclusao){
        this.dataInclusao = dataInclusao;
    }

    getDataInclusao(){
        return this.dataInclusao;
    }

    setEstado(estado){
        this.estado = estado;
    }

    getEstado(){
        return this.estado;
    }

}