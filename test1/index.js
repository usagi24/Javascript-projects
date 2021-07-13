var count = 1;
var myNavBar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {

  if ( window.scrollY >= 10 ) {
    myNavBar.classList.add('navbarscroll');
  }
  else {
    myNavBar.classList.remove('navbarscroll');
  }
});

document.querySelector('.navbar-toggler').addEventListener('click', function(){
  count++;
  if(count % 2 == 0 || window.scrollY >= 10) {
    myNavBar.classList.add('navbarscroll');
  }

  else {
    myNavBar.classList.remove('navbarscroll');
  }
});
