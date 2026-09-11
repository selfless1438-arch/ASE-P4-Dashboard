import context from '../js/context.js';
let data = {};

function loaclStorageHandler() {
    if (!localStorage.getItem('employees') || !localStorage.getItem('tasks')) {

        localStorage.setItem('employees', JSON.stringify(context.employees));
        localStorage.setItem('tasks', JSON.stringify(context.tasks));

        const employees = JSON.parse(localStorage.getItem('employees'));
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        data = { employees, tasks }

    } else {

        const employees = JSON.parse(localStorage.getItem('employees'));
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        data = { employees, tasks }

    }
}

loaclStorageHandler();
const { employees, tasks } = data;


let ptasks = tasks.filter(
    task => task.status.toLowerCase() == 'pending'
);
let inptasks = tasks.filter(
    task => task.status.toLowerCase() == 'in process'
);
let ddtasks = tasks.filter(
    task => task.status.toLowerCase() == 'overdued'
);

document.getElementById('t_tasks_count').innerText = tasks.length;
document.getElementById('p_tasks_count').innerText = ptasks.length;
document.getElementById('inp_tasks_count').innerText = inptasks.length;
document.getElementById('dd_tasks_count').innerText = ddtasks.length;

let tablebody = document.getElementById('taskTBody');
const btnsCont = document.getElementById('pagesBtnsCont');


let pagesCount = Math.ceil(tasks.length / 20);
let btnsHtml = '';
let btnCount = 0;

while (pagesCount > btnCount) {

    btnsHtml += `
            <button type="button" onclick="getTasks(${btnCount * 20},${(btnCount * 20) + 20},event)"> ${++btnCount} </button>
    `
}

btnsCont.innerHTML = btnsHtml;

btnsCont.querySelector('button').classList.add('active');


let curentTasks = tasks.splice(0, 20);

let html = '';
let count = 0;
curentTasks.forEach(task => {
    if (task.priority.toLowerCase() == 'high' && task.status.toLowerCase() == 'overdued') {
        html += `
        <tr class="highfy">
            <th>${++count}</th>
            <td>${task.tasktitle}</td>
            <td>${task.asginedto}</td>
            <td><span class="${task.priority.toLowerCase()}">${task.priority}</span></td>
            <td>${task.due_date}</td>
            <td>${task.status}</td>
        </tr>
    `
    } else {

        html += `
            <tr class="${task.priority.toLowerCase()}" >
                <th>${++count}</th>
                <td>${task.tasktitle}</td>
                <td>${task.asginedto}</td>
                <td><span class="${task.priority.toLowerCase()}">${task.priority}</span></td>
                <td>${task.due_date}</td>
                <td>${task.status}</td>
            </tr>
        `
    }
})

tablebody.innerHTML = html;
// Showing count 

