let students = [];

const addBtn = document.getElementById("addBtn");
const studentName = document.getElementById("studentName");
const studentList = document.getElementById("studentList");
const search = document.getElementById("search");

const totalStudents = document.getElementById("totalStudents");
const presentStudents = document.getElementById("presentStudents");
const absentStudents = document.getElementById("absentStudents");

// Add Student
addBtn.addEventListener("click", function () {

    if (studentName.value == "") {
        alert("Please Enter Student Name");
        return;
    }

    students.push({
        name: studentName.value,
        status: "Not Marked"
    });

    studentName.value = "";

    showStudents();

});

// Show Students
function showStudents() {

    studentList.innerHTML = "";

    let present = 0;
    let absent = 0;

    let searchValue = search.value.toLowerCase();

    for (let i = 0; i < students.length; i++) {

        if (students[i].status == "Present") {
            present++;
        }

        if (students[i].status == "Absent") {
            absent++;
        }

        if (students[i].name.toLowerCase().includes(searchValue)) {

            studentList.innerHTML += `

            <tr>

                <td>${students[i].name}</td>

                <td>${students[i].status}</td>

                <td>

                    <button class="present-btn" onclick="present(${i})">
                        Present
                    </button>

                    <button class="absent-btn" onclick="absent(${i})">
                        Absent
                    </button>

                    <button class="delete-btn" onclick="removeStudent(${i})">
                        Delete
                    </button>

                </td>

            </tr>

            `;
        }

    }

    totalStudents.textContent = students.length;
    presentStudents.textContent = present;
    absentStudents.textContent = absent;

}

// Present
function present(index) {

    students[index].status = "Present";

    showStudents();

}

// Absent
function absent(index) {

    students[index].status = "Absent";

    showStudents();

}

// Delete
function removeStudent(index) {

    students.splice(index, 1);

    showStudents();

}

// Search Student
search.addEventListener("keyup", function () {

    showStudents();

});