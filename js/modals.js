fetch('../components/modals.html')
    .then(response => response.text())
    .then(data => {
        const modalCont = document.getElementById('modals-placeholder');
        modalCont.innerHTML = data;
    });


const openModal = (id) => {
    const modal = document.getElementById(id);
    modal.classList.add('active');
}


const closeModal = (id) => {
    const modal = document.getElementById(id);
    modal.classList.remove('active');
}
// Fucntion for adding new task to localstrorage




const addNewTask = (event) => {
    event.preventDefault();
    let taskTitle = document.getElementById('task_title').value;
    let projectTask = document.getElementById('projectTask').value;
    let asigned_to = document.getElementById('asigned_to').value;
    let employeeId = document.getElementById('taskEmployeeId').value;
    let priority = document.getElementById('priority').value;
    let start_date = document.getElementById('start_date').value;
    let due_date = document.getElementById('due_date').value;
    let status = document.getElementById('status').value;

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    const sortedTasks = tasks.sort((a, b) => {
        const numA = parseInt(a.taskId.split('-')[1], 10);
        const numB = parseInt(b.taskId.split('-')[1], 10);
        return numB - numA;
    })

    let newId = 'ASE-' + (Number(sortedTasks[0].taskId.split('-')[1]) + 1);

    let newTask = {
        taskId: newId,
        tasktitle: taskTitle,
        asginedto: asigned_to,
        employeeId: employeeId,
        priority: priority,
        start_date: start_date,
        due_date: due_date,
        status: status
    }

    tasks.push(newTask);
    console.log(newTask);
    console.log(tasks);

    try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        document.getElementById('addNewTaskForm').reset();
        closeModal('createTaskModal');
        Swal.fire({
            position: "top-end",
            title: 'Task Added',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        })
    } catch (error) {
        console.error(error);
        alert(error);
    }
}

// setting today date

let today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();
if (mm < 10) mm = '0' + mm;
if (dd < 10) dd = '0' + dd;

const formatedDate = `${yyyy}-${mm}-${dd}`;
document.addEventListener('DOMContentLoaded', () => {

    const employeeDrop = document.getElementById('emloyeesDrop');

    setTimeout(() => {
        document.getElementById('asigned_to').addEventListener('input', () => {
            let drophtml = '';
            let employeesData = JSON.parse(localStorage.getItem('employees'));
            employeesData.forEach(employee => {
                let name = employee.fullName;
                if (name.match(new RegExp(`\\b${document.getElementById('asigned_to').value}\\w*`, 'gi'))) {
                    drophtml += `
                        <p onclick="document.getElementById('asigned_to').value = this.innerText; document.getElementById('emloyeesDrop').classList.remove('active'); document.getElementById('asigned_to').nextElementSibling.value = '${employee.id}' ">${name}</p>
                    `
                }
            });

            employeeDrop.innerHTML = drophtml;
            if (drophtml) {
                employeeDrop.classList.add('active');
            }
        });


        document.getElementById('projectTask').addEventListener('input', () => {
            let drophtml = '';
            let projects = JSON.parse(localStorage.getItem('projects'));

            projects.forEach(project => {
                let title = project.shortTitle;

                if (title.match(new RegExp(`\\b${document.getElementById('projectTask').value}\\w*`, 'gi'))) {
                    drophtml += `
                        <p onclick="document.getElementById('projectTask').value = this.innerText; document.getElementById('projectDrop').classList.remove('active'); document.getElementById('projectTask').nextElementSibling.value = '${project.id}' ">${title}</p>
                    `
                }
            });

            projectDrop.innerHTML = drophtml;
            if (drophtml) {
                projectDrop.classList.add('active');
            }
        });

        document.getElementById('start_date').value = formatedDate;
        document.getElementById('due_date').min = document.getElementById('start_date').value;
        document.getElementById('start_date').addEventListener('change', () => {
            document.getElementById('due_date').min = document.getElementById('start_date').value;
            document.getElementById('due_date').value = document.getElementById('start_date').value;
        })
    }, 1000);
})


