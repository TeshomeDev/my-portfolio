
   const button = document.getElementById('btn');
  const menu = document.getElementById('navbar');
  
  button.addEventListener('click', function() {

  menu.classList.toggle('show-menu');
  menu.classList.toggle('button-hover');
});

button.addEventListener('mouseenter', function() {
  menu.classList.add('show-menu');
});

button.addEventListener('mouseleave', function() {
  menu.classList.remove('show-menu');
});





