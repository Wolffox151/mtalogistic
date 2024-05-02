const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  // Добавляем слушатель события на кнопку nav-menu
  toggle.addEventListener('click', () => {
    // Добавляем класс show-menu к меню навигации
    nav.classList.toggle('show-menu');

    // Добавляем класс show-icon для показа и скрытия значка меню
    toggle.classList.toggle('show-icon');
  });

  // Добавляем слушатель события на все элементы с классом nav__link
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Добавляем класс show-menu к меню навигации
      nav.classList.toggle('show-menu');

      // Добавляем класс show-icon для показа и скрытия значка меню
      toggle.classList.toggle('show-icon');
    });
  });
};

showMenu('nav-toggle', 'nav-menu');

