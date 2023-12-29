//responsive header
function showNavbar(){
    const header = document.querySelector('.header');
    header.style.display='inline';
    const btn = document.getElementById('menu-btnx');
    btn.style.display='inline-flex';
  }
   function hideNavbar(){
    const header = document.querySelector('.header');
    const btn = document.getElementById('menu-btnx');
    header.style.display='none';
    btn.style.display='none';
    }

//nav link active
let sections= document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll=() =>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset =sec.offsetTop;
        let height= sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top< offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        }
    })
}

//skill-bar animaton start when scroll
document.addEventListener('DOMContentLoaded', function () {
    const skillPerElements = document.querySelectorAll('.skill-per');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fillbar 2s ease-in-out';
          entry.target.style.width = '100%';
        }
      });
    }, { threshold: 0.5 }); 

    skillPerElements.forEach(element => {
      observer.observe(element);
    });
  });
