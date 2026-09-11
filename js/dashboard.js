import context from '../js/context.js';

let data = {};

function loaclStorageHandler() {
    if (!localStorage.getItem('employees') || !localStorage.getItem('tasks') || !localStorage.getItem('projects')) {

        localStorage.setItem('employees', JSON.stringify(context.employees));
        localStorage.setItem('tasks', JSON.stringify(context.tasks));
        localStorage.setItem('projects', JSON.stringify(context.projects));

        const employees = JSON.parse(localStorage.getItem('employees'));
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const projects = JSON.parse(localStorage.getItem('projects'));
        data = { employees, tasks , projects}
        
    } else {
        const employees = JSON.parse(localStorage.getItem('employees'));
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const projects = JSON.parse(localStorage.getItem('projects'));
        data = { employees, tasks, projects }

    }
    // seetng counts 
    document.getElementById('projectsCount').innerText = data.projects.length;
    document.getElementById('inprCount').innerText = data.tasks.filter(task => task.status.toLowerCase() == 'in process').length;
    document.getElementById('pendCount').innerText = data.tasks.filter(task => task.status.toLowerCase() == 'pending').length;
    document.getElementById('ovduCount').innerText = data.tasks.filter(task => task.status.toLowerCase() == 'overdued').length;
}

loaclStorageHandler();
let newData = data.tasks.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
let recetnTasks = newData.slice(0, 10);

let tableBody = document.getElementById('RecentTasksBody');
let recHtml = '';
let count = 0;
recetnTasks.forEach(task => {
    recHtml += `
        <tr>
            <th>${++count}</th>
            <td>${task.tasktitle}</td>
            <td>${task.asginedto}</td>
            <td>${task.priority}</td>
            <td>${task.status}</td>
        </tr>
    `
});

tableBody.innerHTML = recHtml;
