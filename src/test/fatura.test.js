const Cliente = require("../cliente.js");
const Fatura = require("../fatura.js");

let cliente1 = new Cliente("Alysson Victor", new Date(2021,9,10), "PR");
let fatura1 = new Fatura("0001", 2000, new Date(2021,10,10), cliente1);

describe("Testes para a classe Fatura", () => {

    test("Teste para os métodos getCodigo da classe Fatura", () => {
		expect(fatura1.getCodigo()).toBe("0001");
	});

    test("Teste para os métodos getValor da classe Fatura", () => {
		expect(fatura1.getValor()).toBe(2000);
	});

    test("Teste para os métodos getData da classe Fatura", () => {
		expect(fatura1.getData()).toStrictEqual(new Date(2021,10,10));
	});

    test("Teste para os métodos getCliente da classe Fatura", () => {
		expect(fatura1.getCliente()).toBe(cliente1);
	});

	test("Teste para os métodos setCodigo da classe Fatura", () => {
		expect(fatura1.setCodigo("00012")).toBe(fatura1);
	});

    test("Teste para os métodos setValor da classe Fatura", () => {
		expect(fatura1.setValor(2100)).toBe(fatura1);
	});

    test("Teste para os métodos setData da classe Fatura", () => {
		expect(fatura1.setData(new Date())).toBe(fatura1);
	});

    test("Teste para os métodos setCliente da classe Fatura", () => {
		expect(fatura1.setCliente(cliente1)).toBe(fatura1);
	});

});