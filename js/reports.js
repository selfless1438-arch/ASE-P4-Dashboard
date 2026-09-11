let tasks = JSON.parse(localStorage.getItem('tasks'));
let projects = JSON.parse(localStorage.getItem('projects'));
// projects task 
let employees = JSON.parse(localStorage.getItem('employees'));

// setting up projects dets


let prjdetsHtml = '';
let perCount = 0;

projects.forEach(project => {

    prjdetsHtml += `
                <div class="item">
                    <div class="head">
                        <span>${project.id}</span>
                        <h3>${project.shortTitle}</h3>
                    </div>
                    <div class="middle">
                        <div class="cont">
                            <p class="tag">Due Date</p>
                            <p class="dets">${project.dueDate}</p>
                        </div>
                        <div class="cont">
                            <p class="tag">Category</p>
                            <p class="dets">${project.category}</p>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="tag-cont">
                            <p class="tag">Progress</p>
                            <span class="count">${project.progress}%</span>
                        </div>
                        <div class='pro-cont'>
                            <div class='pro-out'>
                                <span>${project.progress}%</span>
                                <div class='pro-in' style="width: ${project.progress}%;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
});
document.getElementById('projectsDetsCont').innerHTML = prjdetsHtml;

// project charts teask
let projectLabels = [];
let projectProgress = [];
let completed = [];
let inprocess = [];
let pending = [];
let overdeud = [];
let count = ''
projects.forEach(project => {
    projectLabels.push(project.id)
    projectProgress.push(project.progress)
    completed.push(tasks.filter(task => task.projectId == project.id && task.status.toLowerCase() == 'completed').length);
    inprocess.push(tasks.filter(task => task.projectId == project.id && task.status.toLowerCase() == 'in process').length);
    pending.push(tasks.filter(task => task.projectId == project.id && task.status.toLowerCase() == 'pending').length);
    overdeud.push(tasks.filter(task => task.projectId == project.id && task.status.toLowerCase() == 'overdued').length);
});

const projeCtx = document.getElementById('projectChart').getContext('2d');

const projectChart = new Chart(projeCtx, {
    type: 'bar',
    data: {
        labels: projectLabels,
        datasets: [
            {
                label: "Completed",
                data: completed,
                backgroundColor: "#22c55e"
            },
            {
                label: "In Process",
                data: inprocess,
                backgroundColor: "#f59e0b"
            },
            {
                label: "Pending",
                data: pending,
                backgroundColor: "#3b82f6"
            },
            {
                label: "Overdued",
                data: overdeud,
                backgroundColor: "#ef4444"
            }
        ]
    }, options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            }
        }

    }
})

// project progress cahrt

const ppctx = document.getElementById('projectProgressChart').getContext('2d');

const ppchart = new Chart(ppctx, {
    type: 'bar',

    data: {
        labels: projectLabels,
        datasets: [{
            label: 'Project Progress (%)',
            data: projectProgress,
            backgroundColor: [
                '#000000',
                '#b85656',
                '#1f288e',
                '#69ee27',
                '#2eb5c4',
                '#15bd7f',
                '#a08d12'

            ],
            categoryPercentage: 0.5,
            barPercentage: 1
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        // Makes the bar chart horizontal
        indexAxis: 'y',

        plugins: {
            legend: {
                position: 'top'
            }
        },

        scales: {
            // Percentage/value axis
            x: {
                min: 0,
                max: 100,
                ticks: {
                    callback: function (value) {
                        return value + '%';
                    }
                }
            },

            // Project names
            y: {
                ticks: {
                    autoSkip: false
                }
            }
        }
    }
});





// total of tasks category wise

// area chart
let cateData = [
    tasks.filter(task => task.status.toLowerCase() == 'completed').length,
    tasks.filter(task => task.status.toLowerCase() == 'in process').length,
    tasks.filter(task => task.status.toLowerCase() == 'pending').length,
    tasks.filter(task => task.status.toLowerCase() == 'overdued').length
];



const areaCtx = document.getElementById('polarChart');
new Chart(areaCtx, {
    type: 'polarArea',
    data: {
        labels: [
            'Completed',
            'In Process',
            'Pending',
            'Overdued',

        ],
        datasets: [{
            label: 'Tasks',
            data: cateData,
            backgroundColor: [
                '#22c55e',
                '#f59e0b',
                '#3b82f6',
                '#ef4444'
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

