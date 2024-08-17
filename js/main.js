
  // Fixed Navbar
    let fixedTop = document.getElementById('header');
    let offset = fixedTop.offsetHeight;
    window.onscroll = function() {
        if (window.scrollY > offset-10) {
            fixedTop.classList.add("sticky");
        } else if(window.scrollY < offset-20) {
            fixedTop.classList.remove("sticky");
        }
    }

    // Back to top button
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        }
    document.querySelector('.back-to-top a').addEventListener('click', scrollToTop());

   

        

