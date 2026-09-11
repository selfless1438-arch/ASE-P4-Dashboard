if (!localStorage.getItem('loggenInUser')) window.location = 'login.html';

let url = window.location.href;
let currentLink = url.split('/').slice(-1)[0];
// fetching navbar and aside bar
fetch('../components/navbar.html')
    .then(response => response.text())
    .then(data => {
        const navCont = document.getElementById('navbar-placeholder');
        navCont.innerHTML = data;
        const asideMenu = document.getElementById('asideMenu');
        const navLinks = document.querySelectorAll('.navLink');
        navLinks.forEach(link => {
            let href = link.getAttribute('href');
            if (href == currentLink) {
                link.classList.add('active');                
            }
        })
    });
