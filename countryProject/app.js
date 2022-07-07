import CountryController from './controller/countryController.js';

const countryController = new CountryController('countries');

window.addEventListener('load', () => {
    countryController.displayList();
  });