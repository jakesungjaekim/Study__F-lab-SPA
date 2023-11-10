document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const menuIcon = document.getElementById('menu-icon');
  const menuContent = document.getElementById('menu-content');

  hamburgerMenu.addEventListener('click', () => {
    const ShowMenuContent = !menuContent.classList.contains('hidden');
    header.style.height = ShowMenuContent ? '59px' : '250px';
    menuIcon.src = ShowMenuContent ? './image/image_hamburger.svg' : './image/image_x.svg';

    menuContent.classList.toggle('hidden');
    header.classList.toggle('flex-col');
  })

});

