const COUNTRIES_API = 'https://restcountries.com/v3.1';

class countryModel {
    // get all
    getAll() {
        fetch(COUNTRIES_API + '/all')
        .then((response) => {
            if (response.ok){
                console.log(response);
                return response.json();
            }
            throw Error(response.statusText);
        })
        .catch( error => console.log('There was an error retrieving countries') );
    }

    // get one
    getOne(country) {
        fetch(COUNTRIES_API + '/name' + country)
        .then((response) => {
            if (response.ok){
                console.log(response);
                return response.json();
            }
            throw Error(response.statusText);
        })
        .catch( error => console.log('There was an error retrieving countries') );
    }
}

export default countryModel;