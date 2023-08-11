let studentName = document.getElementById("studentName");
let studentAge = document.getElementById("studentAge");
let studentMatricNo = document.getElementById("studentMatricNo");

const studentsData = [
    { name: "Amos", age: 26, MatricNo: "A001" },
    { name: "Japo", age: 27, MatricNo: "B001" },
    { name: "Johnson", age: 25, MatricNo: "C001" },
    { name: "Brown", age: 33, MatricNo: "D001" },
    { name: "Grace", age: 22, MatricNo: "E001" },
    { name: "Sonny", age: 21, MatricNo: "F001" },
    { name: "Blessing", age: 31, MatricNo: "G001" },
    { name: "Bammy", age: 35, MatricNo: "H001" },
    { name: "Zeke", age: 32, MatricNo: "I001" },
    { name: "Gbenga", age: 11, MatricNo: "J001"},
    
];

const studentContainer = document.getElementById("studentContainer");

function displayStudents() {
    studentsData.forEach((studentData) => {
        const student = new Student(
            studentData.name,
            studentData.age,
            studentData.MatricNo,
        );

        const card = document.createElement("div");
        card.className = "card";

        const nameStudent = document.createElement("h2");
        nameStudent.textContent = student.name;

        const ageStudent = document.createElement("p");
        ageStudent.textContent = `Age: ${student.age}`;

        const MatricNoStudent = document.createElement("p");
        MatricNoStudent.textContent = `Grade: ${student.MatricNo}`;

        
        card.appendChild(nameElement);
        card.appendChild(ageElement);
        card.appendChild(gradeElement);
        card.appendChild(rollNumberElement);

        studentContainer.appendChild(card);
    });
}

displayStudents();
