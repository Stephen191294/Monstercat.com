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


// Check if the Web Share API is supported by the browser
if (navigator.share) {
  // Get the share button element
  const shareButton = document.getElementById('shareButton');

  // Add a click event listener to the share button
  shareButton.addEventListener('click', () => {
      // Use the Web Share API to trigger the native sharing dialog
      navigator.share({
          title: 'Shared Content Title',
          text: 'Check out this awesome content!',
          url: 'https://example.com'
      })
      .then(() => console.log('Successfully shared'))
      .catch((error) => console.error('Error sharing:', error));
  });
} else {
  // Fallback for browsers that do not support the Web Share API
  document.getElementById('shareButton').style.display = 'none';
  alert('Web Share API is not supported in this browser.');
}