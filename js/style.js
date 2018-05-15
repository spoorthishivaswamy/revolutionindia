//navbar
window.addEventListener('scroll', function (e) {
        var nav = document.getElementById('nav');
        if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
                nav.classList.add('nav-transparent');
                nav.classList.remove('nav-colored');
            } else {
                nav.classList.add('nav-transparent');
                nav.classList.remove('nav-colored');
            }
    });

   
     