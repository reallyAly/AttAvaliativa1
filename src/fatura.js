module.exports = class Fatura {

    constructor(codigo, valor, data, cliente){
        this.codigo = codigo;
        this.valor = valor;
        this.data = data;
        this.cliente = cliente;
    }

    setCodigo(codigo){
        this.codigo = codigo;
    }

    getCodigo(){
        return this.codigo;
    }

    setValor(valor){
        this.valor = valor;
    }

    getValor(){
        return this.valor;
    }

    setData(data){
        this.data = data;
    }

    getData(){
        return this.data;
    }

    setCliente(cliente){
        this.cliente = cliente;
    }

    getCliente(){
        return this.cliente;
    }
}