import countryController from './controller/countryController.js';

window.addEventListener('load', () => {
    const countries = new countryController('countries');
    countries.displayList();
  });