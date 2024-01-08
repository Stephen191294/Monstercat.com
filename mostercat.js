document.getElementById('menuIcon').addEventListener('click', function() {
  toggleMenu();
});

function toggleMenu() {
  var menu = document.getElementById('slideOutMenu');
  menu.style.right = '0';

  

  if (menu.style.width === '250px') {
      menu.style.width = '0';
      content.style.marginRight = '0';
  } else {
      menu.style.width = '250px';
      content.style.marginRight = '250px';
  }
}

function closeMenu() {
  var menu = document.getElementById('slideOutMenu');
  menu.style.right = '-250px';
}