import CountryController from './controller/countryController.js';

const countryController = new CountryController('countries');

window.addEventListener('load', () => {
  countryController.displayNav();
  countryController.displayList();
  document.getElementById('dropbtn').addEventListener("click", () => {
    countryController.toggleDropdown()
  });
});