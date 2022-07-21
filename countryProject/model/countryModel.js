const COUNTRIES_API = 'https://restcountries.com/v3.1';

class countryModel {
    // get JSON
    getJSON(url) {
        return fetch(url)
        .then(function (response) {
            if (response.ok){
                return response.json();
            }
            else {
                throw Error(response.statusText);
            }
        })
        .catch (function (error) {
            console.log(error);
        });
    }

    // get all
    getAll() {
        return this.getJSON(`${COUNTRIES_API}/all`);
    }

    // get one
    getOne(countryCode) {
        return this.getJSON(`${COUNTRIES_API}/alpha/${countryCode}`);
    }
}

export default countryModel;