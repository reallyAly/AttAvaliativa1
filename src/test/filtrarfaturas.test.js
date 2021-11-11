const Cliente = require("../cliente.js");
const Fatura = require("../fatura.js");
const filtrarfaturas = require("../utils/filtrarfaturas.js");

let cliente1 = new Cliente("Alysson Victor", new Date(2021,11,10), "PR");
let fatura1 = new Fatura("0001", 2000, new Date(2021,11,10), cliente1);
let cliente2 = new Cliente("Pedro Paulo", new Date(2021,11,9), "SP");
let fatura2 = new Fatura("0002", 1500, new Date(2021,11,10), cliente2);
let fatura3 = new Fatura("0003", 6000, new Date(2021,11,5), cliente1);

let faturasFake = new Array(fatura1, fatura2, fatura3);

describe("Filtrar Faturas", () => {

	test("Valor menor que 2000", () => {
		expect(filtrarfaturas(faturasFake)).not.toContain(fatura2);
	});

    test("Se o valor da fatura estiver entre 2000 e 2500 e a data for menor ou igual a de um mês atrás", () => {
		expect(filtrarfaturas(faturasFake)).toBeDefined();
	});

});