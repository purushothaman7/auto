    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    document.getElementById('mobileMenuBtn').addEventListener('click', function() {
        document.getElementById('navLinks').classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('navLinks').classList.remove('active');
        });
    });
    



    document.getElementById('languageToggle').addEventListener('click', function () {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'en' ? 'ta' : 'en';

        document.documentElement.lang = newLang;

        const btnText = this.querySelector('.current-language');
        btnText.textContent = newLang === 'en' ? 'தமிழ்' : 'English';

        document.querySelectorAll('[data-en][data-ta]').forEach(element => {
            element.textContent = element.dataset[newLang];
        });
    });

    window.addEventListener('DOMContentLoaded', function () {
        document.documentElement.lang = 'ta';
        document.querySelectorAll('[data-en][data-ta]').forEach(element => {
            element.textContent = element.dataset['ta'];
        });

        const btnText = document.querySelector('#languageToggle .current-language');
        if (btnText) btnText.textContent = 'English';
    });
