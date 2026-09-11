const employees = [
    {
        id: "ASE-001",
        fullName: "Ahmed Raza",
        designation: "Project Manager",
        department: "Management",
        salary: 185000,
        joiningDate: "2022-03-15",
        contact: "0301-4527819",
        email: "ahmed.raza@ase.com"
    },
    {
        id: "ASE-002",
        fullName: "Hamza Khan",
        designation: "Senior Software Engineer",
        department: "Development",
        salary: 165000,
        joiningDate: "2022-06-20",
        contact: "0302-6719345",
        email: "hamza.khan@ase.com"
    },
    {
        id: "ASE-003",
        fullName: "Usman Ali",
        designation: "Software Engineer",
        department: "Development",
        salary: 125000,
        joiningDate: "2023-01-10",
        contact: "0303-5284167",
        email: "usman.ali@ase.com"
    },
    {
        id: "ASE-004",
        fullName: "Bilal Ahmed",
        designation: "Frontend Developer",
        department: "Development",
        salary: 115000,
        joiningDate: "2023-04-18",
        contact: "0304-7936251",
        email: "bilal.ahmed@ase.com"
    },
    {
        id: "ASE-005",
        fullName: "Saad Hassan",
        designation: "Backend Developer",
        department: "Development",
        salary: 130000,
        joiningDate: "2023-07-03",
        contact: "0305-4168273",
        email: "saad.hassan@ase.com"
    },
    {
        id: "ASE-006",
        fullName: "Ali Hamza",
        designation: "UI/UX Designer",
        department: "Design",
        salary: 105000,
        joiningDate: "2023-02-14",
        contact: "0306-5827394",
        email: "ali.hamza@ase.com"
    },
    {
        id: "ASE-007",
        fullName: "Muhammad Ahsan",
        designation: "Graphic Designer",
        department: "Design",
        salary: 85000,
        joiningDate: "2024-01-08",
        contact: "0307-6349182",
        email: "muhammad.ahsan@ase.com"
    },
    {
        id: "ASE-008",
        fullName: "Hassan Tariq",
        designation: "QA Engineer",
        department: "Quality Assurance",
        salary: 110000,
        joiningDate: "2023-09-12",
        contact: "0308-7294516",
        email: "hassan.tariq@ase.com"
    },
    {
        id: "ASE-009",
        fullName: "Zain Abbas",
        designation: "Junior Software Engineer",
        department: "Development",
        salary: 80000,
        joiningDate: "2024-02-19",
        contact: "0309-3857214",
        email: "zain.abbas@ase.com"
    },
    {
        id: "ASE-010",
        fullName: "Talha Mahmood",
        designation: "DevOps Engineer",
        department: "DevOps",
        salary: 145000,
        joiningDate: "2022-11-07",
        contact: "0310-6418259",
        email: "talha.mahmood@ase.com"
    },
    {
        id: "ASE-011",
        fullName: "Fahad Iqbal",
        designation: "System Administrator",
        department: "IT",
        salary: 120000,
        joiningDate: "2023-05-22",
        contact: "0311-5739146",
        email: "fahad.iqbal@ase.com"
    },
    {
        id: "ASE-012",
        fullName: "Saif Ullah",
        designation: "Database Administrator",
        department: "IT",
        salary: 135000,
        joiningDate: "2022-08-16",
        contact: "0312-8257413",
        email: "saif.ullah@ase.com"
    },
    {
        id: "ASE-013",
        fullName: "Areeba Malik",
        designation: "HR Manager",
        department: "Human Resources",
        salary: 140000,
        joiningDate: "2022-04-11",
        contact: "0313-4672185",
        email: "areeba.malik@ase.com"
    },
    {
        id: "ASE-014",
        fullName: "Hira Shah",
        designation: "HR Executive",
        department: "Human Resources",
        salary: 90000,
        joiningDate: "2024-03-04",
        contact: "0314-7193258",
        email: "hira.shah@ase.com"
    },
    {
        id: "ASE-015",
        fullName: "Maryam Noor",
        designation: "Accountant",
        department: "Finance",
        salary: 100000,
        joiningDate: "2023-06-13",
        contact: "0315-5826417",
        email: "maryam.noor@ase.com"
    },
    {
        id: "ASE-016",
        fullName: "Hassan Javed",
        designation: "Finance Executive",
        department: "Finance",
        salary: 95000,
        joiningDate: "2024-01-22",
        contact: "0316-4379251",
        email: "hassan.javed@ase.com"
    },
    {
        id: "ASE-017",
        fullName: "Umar Farooq",
        designation: "Marketing Manager",
        department: "Marketing",
        salary: 130000,
        joiningDate: "2022-09-05",
        contact: "0317-6914285",
        email: "umar.farooq@ase.com"
    },
    {
        id: "ASE-018",
        fullName: "Eman Fatima",
        designation: "Marketing Executive",
        department: "Marketing",
        salary: 85000,
        joiningDate: "2024-04-15",
        contact: "0318-7532164",
        email: "eman.fatima@ase.com"
    },
    {
        id: "ASE-019",
        fullName: "Abdullah Qureshi",
        designation: "Sales Executive",
        department: "Sales",
        salary: 90000,
        joiningDate: "2023-10-09",
        contact: "0319-4285176",
        email: "abdullah.qureshi@ase.com"
    },
    {
        id: "ASE-020",
        fullName: "Ayesha Siddiqui",
        designation: "Business Analyst",
        department: "Business Analysis",
        salary: 125000,
        joiningDate: "2023-03-27",
        contact: "0320-6157394",
        email: "ayesha.siddiqui@ase.com"
    },
    {
        id: "ASE-021",
        fullName: "Daniyal Aslam",
        designation: "Mobile App Developer",
        department: "Development",
        salary: 120000,
        joiningDate: "2024-05-06",
        contact: "0321-8372415",
        email: "daniyal.aslam@ase.com"
    },
    {
        id: "ASE-022",
        fullName: "Arham Sheikh",
        designation: "Junior UI Designer",
        department: "Design",
        salary: 75000,
        joiningDate: "2024-06-17",
        contact: "0322-5268193",
        email: "arham.sheikh@ase.com"
    },
    {
        id: "ASE-023",
        fullName: "Noor Fatima",
        designation: "Content Writer",
        department: "Marketing",
        salary: 80000,
        joiningDate: "2024-07-01",
        contact: "0323-7146285",
        email: "noor.fatima@ase.com"
    },
    {
        id: "ASE-024",
        fullName: "Waleed Akram",
        designation: "Support Engineer",
        department: "IT Support",
        salary: 95000,
        joiningDate: "2023-12-04",
        contact: "0324-4682179",
        email: "waleed.akram@ase.com"
    },
    {
        id: "ASE-025",
        fullName: "Ibrahim Khan",
        designation: "Team Lead",
        department: "Development",
        salary: 155000,
        joiningDate: "2022-07-25",
        contact: "0325-7395142",
        email: "ibrahim.khan@ase.com"
    }
];
const users = [
    {
        role: 'admin',
        email: 'admin@mail.com',
        password: '123'
    }
]
const tasks = [
    { taskId: "TASK-001", projectId: "ASE-P-005", tasktitle: "Update company website", asginedto: "Ahmed Raza", employeeId: "ASE-001", priority: "High", start_date: "2026-07-20", due_date: "2026-08-01", status: "Overdued" },
    { taskId: "TASK-002", projectId: "ASE-P-007", tasktitle: "Fix login authentication", asginedto: "Hamza Khan", employeeId: "ASE-002", priority: "Medium", start_date: "2026-07-22", due_date: "2026-08-03", status: "Overdued" },
    { taskId: "TASK-003", projectId: "ASE-P-005", tasktitle: "Design dashboard UI", asginedto: "Usman Ali", employeeId: "ASE-003", priority: "Low", start_date: "2026-07-24", due_date: "2026-08-05", status: "Overdued" },
    { taskId: "TASK-004", projectId: "ASE-P-001", tasktitle: "Create employee API", asginedto: "Bilal Ahmed", employeeId: "ASE-004", priority: "High", start_date: "2026-07-25", due_date: "2026-08-07", status: "Overdued" },
    { taskId: "TASK-005", projectId: "ASE-P-005", tasktitle: "Implement task filtering", asginedto: "Saad Hassan", employeeId: "ASE-005", priority: "Medium", start_date: "2026-07-28", due_date: "2026-08-09", status: "Overdued" },
    { taskId: "TASK-006", projectId: "ASE-P-008", tasktitle: "Prepare monthly report", asginedto: "Ali Hamza", employeeId: "ASE-006", priority: "Low", start_date: "2026-07-30", due_date: "2026-08-10", status: "Overdued" },
    { taskId: "TASK-007", projectId: "ASE-P-007", tasktitle: "Optimize database queries", asginedto: "Muhammad Ahsan", employeeId: "ASE-007", priority: "High", start_date: "2026-08-01", due_date: "2026-08-12", status: "Overdued" },
    { taskId: "TASK-012", projectId: "ASE-P-005", tasktitle: "Update responsive layout", asginedto: "Saif Ullah", employeeId: "ASE-012", priority: "Low", start_date: "2026-08-06", due_date: "2026-08-19", status: "Overdued" },
    { taskId: "TASK-013", projectId: "ASE-P-007", tasktitle: "Configure deployment pipeline", asginedto: "Areeba Malik", employeeId: "ASE-013", priority: "High", start_date: "2026-08-07", due_date: "2026-08-20", status: "Overdued" },
    { taskId: "TASK-014", projectId: "ASE-P-005", tasktitle: "Fix navbar issues", asginedto: "Hira Shah", employeeId: "ASE-014", priority: "Medium", start_date: "2026-08-08", due_date: "2026-08-21", status: "Overdued" },
    { taskId: "TASK-015", projectId: "ASE-P-005", tasktitle: "Create task details modal", asginedto: "Maryam Noor", employeeId: "ASE-015", priority: "Low", start_date: "2026-08-09", due_date: "2026-08-22", status: "Overdued" },
    { taskId: "TASK-016", projectId: "ASE-P-001", tasktitle: "Add pagination to employees", asginedto: "Hassan Javed", employeeId: "ASE-016", priority: "High", start_date: "2026-08-10", due_date: "2026-08-23", status: "Overdued" },
    { taskId: "TASK-017", projectId: "ASE-P-005", tasktitle: "Implement role permissions", asginedto: "Umar Farooq", employeeId: "ASE-017", priority: "Medium", start_date: "2026-08-11", due_date: "2026-08-24", status: "Overdued" },
    { taskId: "TASK-018", projectId: "ASE-P-008", tasktitle: "Design reports page", asginedto: "Eman Fatima", employeeId: "ASE-018", priority: "Low", start_date: "2026-08-12", due_date: "2026-08-25", status: "Overdued" },
    { taskId: "TASK-019", projectId: "ASE-P-002", tasktitle: "Integrate email notifications", asginedto: "Abdullah Qureshi", employeeId: "ASE-019", priority: "High", start_date: "2026-08-13", due_date: "2026-08-26", status: "Overdued" },
    { taskId: "TASK-020", projectId: "ASE-P-008", tasktitle: "Create analytics charts", asginedto: "Ayesha Siddiqui", employeeId: "ASE-020", priority: "Medium", start_date: "2026-08-14", due_date: "2026-08-27", status: "Overdued" },

    { taskId: "TASK-021", projectId: "ASE-P-004", tasktitle: "Mobile app authentication", asginedto: "Daniyal Aslam", employeeId: "ASE-021", priority: "High", start_date: "2026-08-15", due_date: "2026-08-28", status: "Overdued" },
    { taskId: "TASK-022", projectId: "ASE-P-005", tasktitle: "Create UI components", asginedto: "Arham Sheikh", employeeId: "ASE-022", priority: "Low", start_date: "2026-08-16", due_date: "2026-08-29", status: "Overdued" },
    { taskId: "TASK-023", projectId: "ASE-P-005", tasktitle: "Write product documentation", asginedto: "Noor Fatima", employeeId: "ASE-023", priority: "Medium", start_date: "2026-08-17", due_date: "2026-08-30", status: "Overdued" },
    { taskId: "TASK-024", projectId: "ASE-P-007", tasktitle: "Resolve server issues", asginedto: "Waleed Akram", employeeId: "ASE-024", priority: "High", start_date: "2026-08-18", due_date: "2026-08-31", status: "Overdued" },
    { taskId: "TASK-025", projectId: "ASE-P-005", tasktitle: "Review development sprint", asginedto: "Ibrahim Khan", employeeId: "ASE-025", priority: "Medium", start_date: "2026-08-19", due_date: "2026-09-01", status: "Overdued" },
    { taskId: "TASK-026", projectId: "ASE-P-007", tasktitle: "Fix database connection", asginedto: "Ahmed Raza", employeeId: "ASE-001", priority: "High", start_date: "2026-08-20", due_date: "2026-09-02", status: "Overdued" },
    { taskId: "TASK-027", projectId: "ASE-P-001", tasktitle: "Update employee records", asginedto: "Hamza Khan", employeeId: "ASE-002", priority: "Low", start_date: "2026-08-21", due_date: "2026-09-03", status: "Overdued" },
    { taskId: "TASK-028", projectId: "ASE-P-005", tasktitle: "Create login page UI", asginedto: "Usman Ali", employeeId: "ASE-003", priority: "Medium", start_date: "2026-08-22", due_date: "2026-09-04", status: "Overdued" },
    { taskId: "TASK-029", projectId: "ASE-P-007", tasktitle: "Implement task API validation", asginedto: "Bilal Ahmed", employeeId: "ASE-004", priority: "High", start_date: "2026-08-23", due_date: "2026-09-05", status: "Overdued" },
    { taskId: "TASK-030", projectId: "ASE-P-005", tasktitle: "Prepare project documentation", asginedto: "Saad Hassan", employeeId: "ASE-005", priority: "Medium", start_date: "2026-08-24", due_date: "2026-09-06", status: "Overdued" },

    { taskId: "TASK-031", projectId: "ASE-P-001", tasktitle: "Complete employee module", asginedto: "Ali Hamza", employeeId: "ASE-006", priority: "High", start_date: "2026-08-10", due_date: "2026-08-20", status: "Completed" },
    { taskId: "TASK-032", projectId: "ASE-P-007", tasktitle: "Finish API documentation", asginedto: "Muhammad Ahsan", employeeId: "ASE-007", priority: "Medium", start_date: "2026-08-12", due_date: "2026-08-22", status: "Completed" },
    { taskId: "TASK-033", projectId: "ASE-P-005", tasktitle: "Finalize dashboard design", asginedto: "Hassan Tariq", employeeId: "ASE-008", priority: "Low", start_date: "2026-08-14", due_date: "2026-08-24", status: "Completed" },
    { taskId: "TASK-034", projectId: "ASE-P-005", tasktitle: "Complete frontend integration", asginedto: "Zain Abbas", employeeId: "ASE-009", priority: "High", start_date: "2026-08-15", due_date: "2026-08-26", status: "Completed" },
    { taskId: "TASK-035", projectId: "ASE-P-007", tasktitle: "Database backup setup", asginedto: "Talha Mahmood", employeeId: "ASE-010", priority: "Medium", start_date: "2026-08-16", due_date: "2026-08-27", status: "Completed" },
    { taskId: "TASK-036", projectId: "ASE-P-001", tasktitle: "Create employee cards", asginedto: "Fahad Iqbal", employeeId: "ASE-011", priority: "Low", start_date: "2026-08-17", due_date: "2026-08-28", status: "Completed" },
    { taskId: "TASK-037", projectId: "ASE-P-005", tasktitle: "QA regression testing", asginedto: "Saif Ullah", employeeId: "ASE-012", priority: "High", start_date: "2026-08-18", due_date: "2026-08-29", status: "Completed" },
    
    { taskId: "TASK-041", projectId: "ASE-P-007", tasktitle: "Server monitoring setup", asginedto: "Hassan Javed", employeeId: "ASE-016", priority: "Medium", start_date: "2026-08-22", due_date: "2026-09-02", status: "Completed" },
    { taskId: "TASK-042", projectId: "ASE-P-007", tasktitle: "Database optimization", asginedto: "Umar Farooq", employeeId: "ASE-017", priority: "High", start_date: "2026-08-23", due_date: "2026-09-03", status: "Completed" },
    { taskId: "TASK-043", projectId: "ASE-P-001", tasktitle: "Employee onboarding process", asginedto: "Eman Fatima", employeeId: "ASE-018", priority: "Medium", start_date: "2026-08-24", due_date: "2026-09-04", status: "Completed" },
    { taskId: "TASK-044", projectId: "ASE-P-001", tasktitle: "Update HR records", asginedto: "Abdullah Qureshi", employeeId: "ASE-019", priority: "Low", start_date: "2026-08-25", due_date: "2026-09-05", status: "Completed" },
    { taskId: "TASK-045", projectId: "ASE-P-001", tasktitle: "Prepare salary report", asginedto: "Ayesha Siddiqui", employeeId: "ASE-020", priority: "High", start_date: "2026-08-26", due_date: "2026-09-06", status: "Completed" },
    { taskId: "TASK-046", projectId: "ASE-P-003", tasktitle: "Verify financial records", asginedto: "Daniyal Aslam", employeeId: "ASE-021", priority: "Medium", start_date: "2026-08-27", due_date: "2026-09-07", status: "Completed" },
    { taskId: "TASK-047", projectId: "ASE-P-002", tasktitle: "Marketing campaign report", asginedto: "Arham Sheikh", employeeId: "ASE-022", priority: "High", start_date: "2026-08-20", due_date: "2026-09-03", status: "Completed" },
    { taskId: "TASK-048", projectId: "ASE-P-005", tasktitle: "Social media content plan", asginedto: "Noor Fatima", employeeId: "ASE-023", priority: "Low", start_date: "2026-08-22", due_date: "2026-09-04", status: "Completed" },
    { taskId: "TASK-049", projectId: "ASE-P-002", tasktitle: "Sales performance report", asginedto: "Waleed Akram", employeeId: "ASE-024", priority: "Medium", start_date: "2026-08-24", due_date: "2026-09-05", status: "Completed" },
    { taskId: "TASK-050", projectId: "ASE-P-005", tasktitle: "Business requirements document", asginedto: "Ibrahim Khan", employeeId: "ASE-025", priority: "High", start_date: "2026-08-25", due_date: "2026-09-06", status: "Completed" },

    { taskId: "TASK-051", projectId: "ASE-P-007", tasktitle: "API error handling", asginedto: "Ahmed Raza", employeeId: "ASE-001", priority: "Medium", start_date: "2026-08-26", due_date: "2026-09-07", status: "Completed" },
    { taskId: "TASK-052", projectId: "ASE-P-004", tasktitle: "Improve mobile UI", asginedto: "Hamza Khan", employeeId: "ASE-002", priority: "Low", start_date: "2026-08-27", due_date: "2026-09-08", status: "Completed" },
    { taskId: "TASK-053", projectId: "ASE-P-005", tasktitle: "Write user guide", asginedto: "Usman Ali", employeeId: "ASE-003", priority: "Medium", start_date: "2026-08-28", due_date: "2026-09-08", status: "Completed" },
    { taskId: "TASK-054", projectId: "ASE-P-007", tasktitle: "Troubleshoot network issue", asginedto: "Bilal Ahmed", employeeId: "ASE-004", priority: "High", start_date: "2026-08-29", due_date: "2026-09-08", status: "Completed" },
    { taskId: "TASK-055", projectId: "ASE-P-005", tasktitle: "Sprint planning", asginedto: "Saad Hassan", employeeId: "ASE-005", priority: "High", start_date: "2026-08-30", due_date: "2026-09-08", status: "Completed" },
    { taskId: "TASK-056", projectId: "ASE-P-001", tasktitle: "Create employee filters", asginedto: "Ali Hamza", employeeId: "ASE-006", priority: "Medium", start_date: "2026-08-25", due_date: "2026-09-01", status: "Completed" },
    { taskId: "TASK-057", projectId: "ASE-P-007", tasktitle: "Implement password validation", asginedto: "Muhammad Ahsan", employeeId: "ASE-007", priority: "High", start_date: "2026-08-26", due_date: "2026-09-02", status: "Completed" },
    { taskId: "TASK-058", projectId: "ASE-P-005", tasktitle: "Create QA checklist", asginedto: "Hassan Tariq", employeeId: "ASE-008", priority: "Low", start_date: "2026-08-27", due_date: "2026-09-03", status: "Completed" },
    { taskId: "TASK-059", projectId: "ASE-P-005", tasktitle: "Update user permissions", asginedto: "Zain Abbas", employeeId: "ASE-009", priority: "Medium", start_date: "2026-08-28", due_date: "2026-09-04", status: "Completed" },
    { taskId: "TASK-060", projectId: "ASE-P-007", tasktitle: "Configure production server", asginedto: "Talha Mahmood", employeeId: "ASE-010", priority: "High", start_date: "2026-08-29", due_date: "2026-09-05", status: "Completed" },

    { taskId: "TASK-061", projectId: "ASE-P-005", tasktitle: "Implement task comments", asginedto: "Fahad Iqbal", employeeId: "ASE-011", priority: "High", start_date: "2026-08-25", due_date: "2026-09-10", status: "In process" },
    { taskId: "TASK-062", projectId: "ASE-P-001", tasktitle: "Fix employee search", asginedto: "Saif Ullah", employeeId: "ASE-012", priority: "Medium", start_date: "2026-08-26", due_date: "2026-09-11", status: "In process" },
    { taskId: "TASK-063", projectId: "ASE-P-008", tasktitle: "Improve dashboard charts", asginedto: "Areeba Malik", employeeId: "ASE-013", priority: "Low", start_date: "2026-08-27", due_date: "2026-09-12", status: "In process" },
    { taskId: "TASK-067", projectId: "ASE-P-005", tasktitle: "Optimize frontend performance", asginedto: "Umar Farooq", employeeId: "ASE-017", priority: "High", start_date: "2026-08-31", due_date: "2026-09-16", status: "In process" },
    { taskId: "TASK-068", projectId: "ASE-P-005", tasktitle: "Notification UI", asginedto: "Eman Fatima", employeeId: "ASE-018", priority: "Medium", start_date: "2026-09-01", due_date: "2026-09-17", status: "In process" },
    { taskId: "TASK-069", projectId: "ASE-P-001", tasktitle: "Profile settings page", asginedto: "Abdullah Qureshi", employeeId: "ASE-019", priority: "Low", start_date: "2026-09-02", due_date: "2026-09-18", status: "In process" },
    { taskId: "TASK-070", projectId: "ASE-P-007", tasktitle: "CI/CD improvements", asginedto: "Ayesha Siddiqui", employeeId: "ASE-020", priority: "High", start_date: "2026-09-03", due_date: "2026-09-19", status: "In process" },

    { taskId: "TASK-071", projectId: "ASE-P-008", tasktitle: "System health dashboard", asginedto: "Daniyal Aslam", employeeId: "ASE-021", priority: "Medium", start_date: "2026-09-04", due_date: "2026-09-20", status: "In process" },
    { taskId: "TASK-072", projectId: "ASE-P-007", tasktitle: "Database indexing", asginedto: "Arham Sheikh", employeeId: "ASE-022", priority: "High", start_date: "2026-09-01", due_date: "2026-09-14", status: "In process" },
    { taskId: "TASK-073", projectId: "ASE-P-001", tasktitle: "Employee attendance module", asginedto: "Noor Fatima", employeeId: "ASE-023", priority: "Medium", start_date: "2026-09-02", due_date: "2026-09-15", status: "In process" },
    { taskId: "TASK-074", projectId: "ASE-P-001", tasktitle: "Update employee policies", asginedto: "Waleed Akram", employeeId: "ASE-024", priority: "Low", start_date: "2026-09-03", due_date: "2026-09-16", status: "In process" },
    { taskId: "TASK-075", projectId: "ASE-P-003", tasktitle: "Expense tracking module", asginedto: "Ibrahim Khan", employeeId: "ASE-025", priority: "High", start_date: "2026-09-04", due_date: "2026-09-17", status: "In process" },
    { taskId: "TASK-076", projectId: "ASE-P-003", tasktitle: "Invoice verification", asginedto: "Ahmed Raza", employeeId: "ASE-001", priority: "Medium", start_date: "2026-09-05", due_date: "2026-09-18", status: "In process" },
    { taskId: "TASK-077", projectId: "ASE-P-002", tasktitle: "Campaign analytics", asginedto: "Hamza Khan", employeeId: "ASE-002", priority: "High", start_date: "2026-09-01", due_date: "2026-09-16", status: "In process" },
    { taskId: "TASK-078", projectId: "ASE-P-002", tasktitle: "Content calendar", asginedto: "Usman Ali", employeeId: "ASE-003", priority: "Low", start_date: "2026-09-02", due_date: "2026-09-17", status: "In process" },
    { taskId: "TASK-079", projectId: "ASE-P-002", tasktitle: "Customer follow-up system", asginedto: "Bilal Ahmed", employeeId: "ASE-004", priority: "Medium", start_date: "2026-09-03", due_date: "2026-09-18", status: "In process" },
    { taskId: "TASK-080", projectId: "ASE-P-008", tasktitle: "Business dashboard", asginedto: "Saad Hassan", employeeId: "ASE-005", priority: "High", start_date: "2026-09-04", due_date: "2026-09-19", status: "In process" },

    { taskId: "TASK-081", projectId: "ASE-P-004", tasktitle: "Push notification API", asginedto: "Ali Hamza", employeeId: "ASE-006", priority: "Medium", start_date: "2026-09-05", due_date: "2026-09-20", status: "In process" },
    { taskId: "TASK-082", projectId: "ASE-P-005", tasktitle: "Design task cards", asginedto: "Muhammad Ahsan", employeeId: "ASE-007", priority: "Low", start_date: "2026-09-06", due_date: "2026-09-21", status: "In process" },
    { taskId: "TASK-083", projectId: "ASE-P-005", tasktitle: "Create help documentation", asginedto: "Hassan Tariq", employeeId: "ASE-008", priority: "Medium", start_date: "2026-09-07", due_date: "2026-09-22", status: "In process" },
    
    { taskId: "TASK-091", projectId: "ASE-P-005", tasktitle: "Create admin settings", asginedto: "Hassan Javed", employeeId: "ASE-016", priority: "High", start_date: "2026-09-01", due_date: "2026-09-12", status: "Pending" },
    { taskId: "TASK-092", projectId: "ASE-P-007", tasktitle: "Implement password reset", asginedto: "Umar Farooq", employeeId: "ASE-017", priority: "Medium", start_date: "2026-09-02", due_date: "2026-09-13", status: "Pending" },
    { taskId: "TASK-093", projectId: "ASE-P-008", tasktitle: "Create dashboard widgets", asginedto: "Eman Fatima", employeeId: "ASE-018", priority: "Low", start_date: "2026-09-03", due_date: "2026-09-14", status: "Pending" },
    { taskId: "TASK-094", projectId: "ASE-P-001", tasktitle: "Build employee endpoints", asginedto: "Abdullah Qureshi", employeeId: "ASE-019", priority: "High", start_date: "2026-09-04", due_date: "2026-09-15", status: "Pending" },
    { taskId: "TASK-095", projectId: "ASE-P-005", tasktitle: "Task priority system", asginedto: "Ayesha Siddiqui", employeeId: "ASE-020", priority: "Medium", start_date: "2026-09-05", due_date: "2026-09-16", status: "Pending" },
    { taskId: "TASK-096", projectId: "ASE-P-008", tasktitle: "Export reports to PDF", asginedto: "Daniyal Aslam", employeeId: "ASE-021", priority: "Low", start_date: "2026-09-06", due_date: "2026-09-17", status: "Pending" },
    { taskId: "TASK-097", projectId: "ASE-P-007", tasktitle: "Improve application security", asginedto: "Arham Sheikh", employeeId: "ASE-022", priority: "High", start_date: "2026-09-07", due_date: "2026-09-18", status: "Pending" },
    { taskId: "TASK-098", projectId: "ASE-P-005", tasktitle: "Create test cases", asginedto: "Noor Fatima", employeeId: "ASE-023", priority: "Medium", start_date: "2026-09-08", due_date: "2026-09-19", status: "Pending" },
    { taskId: "TASK-099", projectId: "ASE-P-001", tasktitle: "Update profile UI", asginedto: "Waleed Akram", employeeId: "ASE-024", priority: "Low", start_date: "2026-09-08", due_date: "2026-09-20", status: "Pending" },
    { taskId: "TASK-100", projectId: "ASE-P-007", tasktitle: "Production deployment", asginedto: "Ibrahim Khan", employeeId: "ASE-025", priority: "High", start_date: "2026-09-08", due_date: "2026-09-21", status: "Pending" },

    { taskId: "TASK-101", projectId: "ASE-P-005", tasktitle: "IT asset management", asginedto: "Ahmed Raza", employeeId: "ASE-001", priority: "Medium", start_date: "2026-09-08", due_date: "2026-09-22", status: "Pending" },
    { taskId: "TASK-102", projectId: "ASE-P-007", tasktitle: "Database migration plan", asginedto: "Hamza Khan", employeeId: "ASE-002", priority: "High", start_date: "2026-09-09", due_date: "2026-09-23", status: "Pending" },
    { taskId: "TASK-103", projectId: "ASE-P-001", tasktitle: "New employee orientation", asginedto: "Usman Ali", employeeId: "ASE-003", priority: "Medium", start_date: "2026-09-09", due_date: "2026-09-24", status: "Pending" },
    { taskId: "TASK-104", projectId: "ASE-P-001", tasktitle: "HR dashboard updates", asginedto: "Bilal Ahmed", employeeId: "ASE-004", priority: "Low", start_date: "2026-09-09", due_date: "2026-09-25", status: "Pending" },
    { taskId: "TASK-105", projectId: "ASE-P-001", tasktitle: "Monthly payroll processing", asginedto: "Saad Hassan", employeeId: "ASE-005", priority: "High", start_date: "2026-09-09", due_date: "2026-09-26", status: "Pending" },
    { taskId: "TASK-106", projectId: "ASE-P-008", tasktitle: "Financial dashboard", asginedto: "Ali Hamza", employeeId: "ASE-006", priority: "Medium", start_date: "2026-09-09", due_date: "2026-09-27", status: "Pending" },
    { taskId: "TASK-107", projectId: "ASE-P-002", tasktitle: "Marketing strategy", asginedto: "Muhammad Ahsan", employeeId: "ASE-007", priority: "High", start_date: "2026-09-09", due_date: "2026-09-28", status: "Pending" },
    { taskId: "TASK-108", projectId: "ASE-P-002", tasktitle: "Create promotional content", asginedto: "Hassan Tariq", employeeId: "ASE-008", priority: "Low", start_date: "2026-09-09", due_date: "2026-09-29", status: "Pending" },
    { taskId: "TASK-109", projectId: "ASE-P-002", tasktitle: "Sales target planning", asginedto: "Zain Abbas", employeeId: "ASE-009", priority: "Medium", start_date: "2026-09-09", due_date: "2026-09-30", status: "Pending" },
    { taskId: "TASK-110", projectId: "ASE-P-002", tasktitle: "Business process analysis", asginedto: "Talha Mahmood", employeeId: "ASE-010", priority: "High", start_date: "2026-09-09", due_date: "2026-10-01", status: "Pending" },

    { taskId: "TASK-111", projectId: "ASE-P-004", tasktitle: "Mobile dashboard", asginedto: "Fahad Iqbal", employeeId: "ASE-011", priority: "Medium", start_date: "2026-09-09", due_date: "2026-10-02", status: "Pending" },
    { taskId: "TASK-112", projectId: "ASE-P-005", tasktitle: "Create design system", asginedto: "Saif Ullah", employeeId: "ASE-012", priority: "Low", start_date: "2026-09-09", due_date: "2026-10-03", status: "Pending" },
    { taskId: "TASK-113", projectId: "ASE-P-001", tasktitle: "Employee handbook", asginedto: "Areeba Malik", employeeId: "ASE-013", priority: "Medium", start_date: "2026-09-09", due_date: "2026-10-04", status: "Pending" },
    { taskId: "TASK-114", projectId: "ASE-P-007", tasktitle: "Network monitoring", asginedto: "Hira Shah", employeeId: "ASE-014", priority: "High", start_date: "2026-09-09", due_date: "2026-10-05", status: "Pending" },
    { taskId: "TASK-115", projectId: "ASE-P-005", tasktitle: "Quarterly team planning", asginedto: "Maryam Noor", employeeId: "ASE-015", priority: "High", start_date: "2026-09-09", due_date: "2026-10-06", status: "Pending" },
    { taskId: "TASK-116", projectId: "ASE-P-005", tasktitle: "Create audit logs", asginedto: "Hassan Javed", employeeId: "ASE-016", priority: "Medium", start_date: "2026-09-09", due_date: "2026-10-07", status: "Pending" },
    { taskId: "TASK-117", projectId: "ASE-P-002", tasktitle: "Customer feedback module", asginedto: "Umar Farooq", employeeId: "ASE-017", priority: "Low", start_date: "2026-09-09", due_date: "2026-10-08", status: "Pending" },
    { taskId: "TASK-118", projectId: "ASE-P-005", tasktitle: "Content management module", asginedto: "Eman Fatima", employeeId: "ASE-018", priority: "Medium", start_date: "2026-09-09", due_date: "2026-10-09", status: "Pending" },
    { taskId: "TASK-119", projectId: "ASE-P-002", tasktitle: "Sales analytics dashboard", asginedto: "Abdullah Qureshi", employeeId: "ASE-019", priority: "High", start_date: "2026-09-09", due_date: "2026-10-10", status: "Pending" },
    { taskId: "TASK-120", projectId: "ASE-P-005", tasktitle: "Project performance analysis", asginedto: "Ayesha Siddiqui", employeeId: "ASE-020", priority: "High", start_date: "2026-09-09", due_date: "2026-10-11", status: "Pending" }
];
const projects = [
    {
        id: "ASE-P-001",
        shortTitle: "Employee Management Portal",
        description:
            "Develop a centralized employee management portal that allows HR teams and administrators to manage employee profiles, departments, roles, attendance records, leave requests, and employment information.",
        startDate: "2026-01-05",
        dueDate: "2026-03-20",
        category: "Software Development",
        progress: 52
    },
    {
        id: "ASE-P-002",
        shortTitle: "Customer CRM Platform",
        description:
            "Build a comprehensive customer relationship management platform for managing customer profiles, interactions, leads, opportunities, sales activities, and communication history.",
        startDate: "2026-01-12",
        dueDate: "2026-04-10",
        category: "Software Development",
        progress: 59
    },
    {
        id: "ASE-P-003",
        shortTitle: "E-Commerce Web Application",
        description:
            "Develop a scalable e-commerce application that enables customers to browse products, manage shopping carts, place orders, make payments, and track deliveries.",
        startDate: "2026-02-02",
        dueDate: "2026-05-15",
        category: "Web Development",
        progress: 75
    },
    {
        id: "ASE-P-004",
        shortTitle: "Mobile Attendance App",
        description:
            "Create a mobile attendance application that allows employees to check in and check out using their mobile devices with attendance history and location-based verification.",
        startDate: "2026-02-09",
        dueDate: "2026-04-24",
        category: "Mobile Development",
        progress: 25
    },
    {
        id: "ASE-P-005",
        shortTitle: "Project Management System",
        description:
            "Develop an internal project management system for creating projects, assigning employees, defining tasks, tracking progress, setting deadlines, and monitoring project performance.",
        startDate: "2026-02-16",
        dueDate: "2026-05-29",
        category: "Software Development",
        progress: 82
    },
    {
        id: "ASE-P-007",
        shortTitle: "API Gateway Development",
        description:
            "Design and implement a centralized API gateway to manage communication between internal services and external applications, including authentication, authorization, routing, logging, and monitoring.",
        startDate: "2026-03-09",
        dueDate: "2026-05-01",
        category: "Backend Development",
        progress: 56
    },
    {
        id: "ASE-P-008",
        shortTitle: "Analytics Dashboard",
        description:
            "Build an interactive analytics dashboard that presents business data through charts, graphs, tables, KPIs, and customizable reports.",
        startDate: "2026-03-16",
        dueDate: "2026-06-05",
        category: "Data & Analytics",
        progress: 69
    }
];




export default { employees, tasks, users, projects };