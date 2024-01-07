document.getElementById('menuIcon').addEventListener('click', function() {
  toggleMenu();
});

function toggleMenu() {
  var menu = document.getElementById('slideOutMenu');
  var content = document.querySelector('.content');

  if (menu.style.width === '250px') {
      menu.style.width = '0';
      content.style.marginRight = '0';
  } else {
      menu.style.width = '250px';
      content.style.marginRight = '250px';
  }
}