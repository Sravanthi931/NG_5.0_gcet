let students = [];

function addStudent() {
    let username = document.getElementById("name").value;
    let usermarks = Number(document.getElementById("marks").value);

    let student = {
        name: username,
        marks: usermarks
    };

    students.push(student);

    console.log(students);

    displayStudents();

    // Clear inputs after adding
    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

function displayStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    let total = 0;

    for (let i = 0; i < students.length; i++) {

        // Calculate total
        total = total + students[i].marks;

        let status;

        if (students[i].marks >= 35) {
            status = "pass";
        } else {
            status = "fail";
        }

        table.innerHTML += `
            <tr>
                <td>${students[i].name}</td>
                <td>${students[i].marks}</td>
                <td>${status}</td>
            </tr>
        `;
    }

    // Display total marks
    document.getElementById("total").innerText = total;

    // Calculate and display average
    let average = 0;

    if (students.length > 0) {
        average = total / students.length;
    }

    document.getElementById("average").innerText = average;
}
