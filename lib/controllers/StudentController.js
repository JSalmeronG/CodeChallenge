const StudentService = require("../../lib/services/StudentService")

class StudentController {
	static getStudents(path){
		return StudentService.getStudents(path)
	}
	static getStudentsWithCerts(path){
		return StudentService.getStudentsFilteredByCerts(path)
	}
	static getStudentsWithNCredits(path, num){
		return StudentService.getStudentsFilteredByCredits(path,num)
	}
}
module.exports = StudentController
