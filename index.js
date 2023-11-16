document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const menuIcon = document.getElementById('menu-icon');
  const menuContent = document.getElementById('menu-content');

  hamburgerMenu.addEventListener('click', () => {
    const ShowMenuContent = !menuContent.classList.contains('hidden');
    menuIcon.src = ShowMenuContent ? './image/image_hamburger.svg' : './image/image_x.svg';
    
    if(!ShowMenuContent) {
      header.classList.remove('border-b')
    } else {
      header.classList.add('border-b');
    } 

    menuContent.classList.toggle('hidden');

  })

});

