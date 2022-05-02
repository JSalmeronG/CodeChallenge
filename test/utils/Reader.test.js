const Reader = require("./../../lib/utils/Reader")

describe(" Pruebas unitarias a classe Reader.js", () => {
	test("1) Prueba lectura correcta de arhivo .json", ()=> {
		const path = "./test/testFile.json"
		const result = Reader.readJsonFile(path)
		expect(result.length).toBe(4)
	});
})

