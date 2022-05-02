StudentService = require("../../lib/services/StudentService")
StudentController = require("../../lib/controllers/StudentController")

describe("Pruebas de unidad para clase StudentController",()=> {
	const path = ("./test/testFile.json")
	test("1) Prueba de método getStudents",()=> {
		const result = StudentController.getStudents(path)
		expect(result.length).toBe(4)
	});
	test("2) Prueba de método getStudentsFilteredByCerts", ()=> {
		const result = StudentController.getStudentsWithCerts(path)
		expect(result.length).toBe(4)
	});
	test("3) Prueba de método getStudentsFilteredByCredits",()=> {
		const result = StudentController.getStudentsWithNCredits(path,500)
		expect(result.length).toBe(2)
	});
})


