const StudentController = require("./controllers/StudentController")
const express = require("express")
const app = express()

app.use(express.json())
const port = 3000

const path = "./students.json"

app.get("/",(request, response)=> {
	response.json({message: "Welcome to Visual Thinking API"})
});

app.listen(port, ()=> {
	console.log(`Visual Thinking API is running on localhost:${port}`);
});

app.get("/v1/students",(request,response) => {
	response.json(StudentController.getStudents(path))
})

app.get("/v1/students/email", (request, response) => {
	response.json(StudentController.getStudentsWithCerts(path))
})
app.get("/v1/students/credits/:credits", (request, response) => {
	const credits = request.params.credits;
	response.json(StudentController.getStudentsWithNCredits(path, credits))
});

