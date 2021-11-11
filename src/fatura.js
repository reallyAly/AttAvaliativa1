module.exports = class Fatura {

    constructor(codigo, valor, data, cliente){
        this.codigo = codigo;
        this.valor = valor;
        this.data = data;
        this.cliente = cliente;
    }

    setCodigo(codigo){
        this.codigo = codigo;
        return this;
    }

    getCodigo(){
        return this.codigo;
    }

    setValor(valor){
        this.valor = valor;
        return this;
    }

    getValor(){
        return this.valor;
    }

    setData(data){
        this.data = data;
        return this;
    }

    getData(){
        return this.data;
    }

    setCliente(cliente){
        this.cliente = cliente;
        return this;
    }

    getCliente(){
        return this.cliente;
    }
}