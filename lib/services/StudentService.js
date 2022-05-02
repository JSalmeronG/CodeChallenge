const Reader = require("../utils/Reader")

class StudentService{
	static getStudents(path){
		const students = Reader.readJsonFile(path)
		return students
	}
	
	static getStudentsFilteredByCerts(path){
		const students = Reader.readJsonFile(path)
		const studentsCerts = students.filter( (student)=> student.haveCertification == true)
		return studentsCerts
	}

	static getStudentsFilteredByCredits(path,num){
		const students = Reader.readJsonFile(path)
		const studentsTop= students.filter( (student)=> student.credits > 500 )
		return studentsTop
	}
}

module.exports = StudentService
