const Cliente = require("../cliente.js");

let cliente1 = new Cliente("Alysson Victor", new Date(2021,9,10), "PR");

describe("Testes para a classe Cliente", () => {

    test("Teste para o método getNome da classe Cliente", () => {
		expect(cliente1.getNome()).toBe("Alysson Victor");
	});

    test("Teste para o método getDataInclusao da classe Cliente", () => {
		expect(cliente1.getDataInclusao()).toStrictEqual(new Date(2021,9,10));
	});

    test("Teste para o método getEstado da classe Cliente", () => {
		expect(cliente1.getEstado()).toBe("PR");
	});

    test("Teste para o método setNome da classe Cliente", () => {
		expect(cliente1.setNome("Alysson Victor")).toBe(cliente1);
	});

    test("Teste para o método getDataInclusao da classe Cliente", () => {
		expect(cliente1.setDataInclusao(new Date(2021,9,10))).toBe(cliente1);
	});

    test("Teste para o método getEstado da classe Cliente", () => {
		expect(cliente1.setEstado("PR")).toBe(cliente1);
	});

});