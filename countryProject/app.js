import CountryController from './controller/countryController.js';
import LSController from './controller/lsController.js';

const countryController = new CountryController('countries');
const lsController = new LSController();

window.addEventListener('load', () => {
  countryController.displayNav();
  countryController.displayList(lsController.getCountryList());

  document.getElementById('dropbtn').addEventListener("click", () => {
    countryController.toggleDropdown()
  });

  document.getElementById('country-search').addEventListener("submit", (event) => {
    event.preventDefault();
    countryController.searchByName(event.target[0].value).then((data) => {
      lsController.saveList(data);
      location.reload();
    })
  });

  document.getElementById('drop-nav').firstChild.addEventListener("click", () => {
    lsController.deleteList();
  })
  
  window.addEventListener('resize', () =>{
    countryController.toggleDropdownButton();
  });
});