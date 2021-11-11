module.exports = class Cliente{

    constructor(nome, dataInclusao, estado){
        this.nome = nome;
        this.dataInclusao = dataInclusao;
        this.estado = estado;
    }

    setNome(nome){
        this.nome = nome;
        return this;
    }

    getNome(){
        return this.nome;
    }

    setDataInclusao(dataInclusao){
        this.dataInclusao = dataInclusao;
        return this;
    }

    getDataInclusao(){
        return this.dataInclusao;
    }

    setEstado(estado){
        this.estado = estado;
        return this;
    }

    getEstado(){
        return this.estado;
    }

}