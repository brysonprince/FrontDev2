
class LSController {
    getCountryList() {
        let countries = [];
        if(!localStorage.getItem('countries')){
            countries = false;
        }
        else{
            countries = JSON.parse(localStorage.getItem('countries'));
        }
        return countries;  
    }

    saveList(countries) {
        console.log(countries);
        localStorage.setItem('countries', JSON.stringify(countries));
    }

    deleteList() {
        localStorage.removeItem('countries');
    }
}

export default LSController;