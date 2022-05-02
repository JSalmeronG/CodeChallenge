const StudentService = require("../../lib/services/StudentService")


describe("Pruebas unitarias para clase StudentService", () => {
	const path = "./test/testFile.json"

	test("1) Prueba de Método getStudents", ()=> {
		const result = StudentService.getStudents(path)
		expect(result.length).toBe(4)
	});
	test("2) Prueba de Método getStudentsFilteredByCerts", () => {
		const result = StudentService.getStudentsFilteredByCerts(path)
		expect(result.length).toBe(4)
	});

	test("3) Prueba de Método getStudentsFilteredByCredits", () => {
		const result = StudentService.getStudentsFilteredByCredits(path,500)
		expect(result.length).toBe(2)
	});
})

