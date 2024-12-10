document.addEventListener('DOMContentLoaded', function() {  
    // Функція для перемикання вкладок  
    function openTab(evt, tabName) {  
        // Оголошення змінних  
        var i, content, navLinks;  

        // Приховати весь контент  
        content = document.getElementsByClassName("content");  
        for (i = 0; i < content.length; i++) {  
            content[i].style.display = "none";  
        }  

        // Видалити клас active з усіх посилань навігації  
        navLinks = document.getElementsByClassName("nav-link");  
        for (i = 0; i < navLinks.length; i++) {  
            navLinks[i].classList.remove("active");  
        }  

        // Показати вибраний контент і додати клас active  
        document.getElementById(tabName).style.display = "block";  
        evt.currentTarget.classList.add("active");  
    }  

    // Додати обробники подій для навігаційних посилань  
    var navLinks = document.getElementsByClassName("nav-link");  
    for (var i = 0; i < navLinks.length; i++) {  
        navLinks[i].addEventListener("click", function(e) {  
            openTab(e, this.getAttribute('data-tab'));  
        });  
    }  

    // Відкрити першу вкладку за замовчуванням  
    document.querySelector('.nav-link[data-tab="tea"]').click();  

    // Функції для відео  
    function openVideo() {  
        document.getElementById("videoModal").style.display = "block";  
        document.getElementById("videoPlayer").play();   
        localStorage.setItem('videoOpen', 'true');  
    }  

    function closeVideo() {  
        document.getElementById("videoPlayer").pause();   
        document.getElementById("videoPlayer").currentTime = 0;  
        document.getElementById("videoModal").style.display = "none";  
        localStorage.removeItem('videoOpen');  
    }  

    // Додавання обробників подій для відео  
    document.querySelector('.close').addEventListener('click', closeVideo);  
    document.getElementById('videoTrigger').addEventListener('click', openVideo);  

    window.onclick = function(event) {  
        const modal = document.getElementById("videoModal");  
        if (event.target == modal) {  
            closeVideo();  
        }  
    }  

    window.onload = function() {  
        if (localStorage.getItem('videoOpen') === 'true') {  
            openVideo();  
        }  
    }  
});