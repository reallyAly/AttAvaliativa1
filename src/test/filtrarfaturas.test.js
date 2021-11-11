const Cliente = require("../cliente.js");
const Fatura = require("../fatura.js");
const filtrarfaturas = require("../utils/filtrarfaturas.js");

describe("Filtrar Faturas", () => {
	test("Valor menor que 2000", () => {
		let cliente1 = new Cliente("Alysson Victor", "2021-11-10", "PR");
        let fatura1 = new Fatura("0001", 500, "2021-11-10", cliente1);

        let cliente2 = new Cliente("Pedro Paulo", "2021-11-09", "SP");
        let fatura2 = new Fatura("0002", 1500, "2021-11-10", cliente2);
        let fatura3 = new Fatura("0003", 6000, "2021-11-05", cliente1);

        let faturasFake = new Array(fatura1, fatura2, fatura3);

		expect(filtrarfaturas(faturasFake)).toBeDefined();
	});
});