//import countryController from './controller/countryController';
import countryModel from './model/countryModel.js';

window.addEventListener('load', () => {
    const countries = new countryModel();
    console.log(countries.getAll());
  });