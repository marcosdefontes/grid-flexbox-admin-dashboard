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
});