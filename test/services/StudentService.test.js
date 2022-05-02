const StudentService = require("../../lib/services/StudentService")


describe("Pruebas unitarias para clase StudentService", () => {
	const path = "../testFile.json"

	test("1) Prueba de Método getStudents", (path)=> {
		const result = StudentService.getStudents()
		expect(result.length).toBe(4)
	});
	test("2) Prueba de Método getStudentsFilteredByCerts", (path) => {
		const result = StudentService.getStudentsFilteredByCerts()
		expect(result.length).toBe(2)
	});

	test("3) Pruba de Método getStudentsFilteredByCredits", (path,num) => {
		const result = StudentService.getStudentsFilteredByCredits()
		expect(result.length).toBe(2)
	});
})

