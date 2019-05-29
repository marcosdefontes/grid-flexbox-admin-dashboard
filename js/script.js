document.addEventListener('DOMContentLoaded', function () {
   dropdown = document.getElementById('dropdown-notifications');

   dropdown.getElementsByClassName('dropdown-trigger')[0].addEventListener('click', function () {
      dropdown.classList.toggle('is-active');
   })
   window.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
         dropdown.classList.remove('is-active')
      }
   });

   menuItems = document.getElementById('main-menu').getElementsByClassName('item');
   [].forEach.call(menuItems, function (el) {
      el.addEventListener('click', function () {
         el.classList.toggle('opened');
      })
   });

   menuTogglers = document.getElementsByClassName('menu-toggler');
   [].forEach.call(menuTogglers, function (el) {
      el.addEventListener('click', function () {
         document.getElementById('side-menu').classList.toggle('opened');
      })

   })

});