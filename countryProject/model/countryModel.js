const COUNTRIES_API = 'https://restcountries.com/v3.1';

class countryModel {
    // get all
    getAll = async () => {
        try {
            const response = await fetch(COUNTRIES_API + '/all');
            if (response.ok){
                const resJSON = await response.json();
                Promise.resolve(resJSON);
            }
            else {
                Promise.reject(response.statusText);
            }
        }
        catch {
            Promise.reject('There was an error retrieving the countries')
        }
    }

    // get one
    getOne = async (req, res) => {
        fetch(COUNTRIES_API + '/name' + country)
        .then((response) => {
            if (response.ok){
                return response;
            }
            throw Error(response.statusText);
        })
        .catch( error => console.log('There was an error retrieving countries') );
    }
}

export default countryModel;