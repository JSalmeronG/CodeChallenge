const Reader = require("../utils/Reader")

class StudentService{
	static getStudents(path){
		const students = Reader.readJsonFile(path)
		return students
	}
	
	static getStudentsFilteredByCerts(path){
		const students = Reader.readJsonFile(path)
		const studentsCerts = students.filter( (student)=> student.haveCertification == true)
		const studentsEmail = studentsCerts.map( (student) => student.email)
		return studentsEmail
	}

	static getStudentsFilteredByCredits(path,num){
		const students = Reader.readJsonFile(path)
		const studentsTop= students.filter( (student)=> student.credits > num)
		return studentsTop
	}
}

module.exports = StudentService
