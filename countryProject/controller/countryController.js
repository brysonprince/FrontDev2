import CountryModel from "../model/countryModel.js";
import CountryView from "../view/countryView.js";
import NavView from "../view/navView.js";

class CountryController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId);
        this.countryModel = new CountryModel();
        this.countryView = new CountryView();
        this.navView = new NavView();
    }

    displayNav(){
        const navElement = document.getElementById('nav');
        const toAppend = this.navView.buildNavBar();

        navElement.appendChild(toAppend.buttonItem);
        navElement.appendChild(toAppend.divItem);
    }

    displayList(data) {
        let countries = data;

        if (!countries){
            this.getCountries().then((data) => {
                countries = data;
                this.buildList(countries);
            });
        }
        else {
            this.buildList(countries);
        }
    }

    displayDetails(countryCode) {
        const thisView = this.countryView;
        const thisParent = this.parentElement;

        this.countryModel.getOne(countryCode).then((data) => {
            const countryDetails = thisView.buildCountryDetails(data[0]);

            thisParent.appendChild(countryDetails);

            const closeBtn = countryDetails.firstChild.firstElementChild;

            // remove modal container if X is clicked
            closeBtn.addEventListener("click", () => {
                thisParent.removeChild(countryDetails);
            });
        });
    }

    toggleDropdown(){
        if(!this.navView.toggleDropdown()){
            console.log('dropdown hidden');
        }
        else {
            console.log('dropdown showing')
        }
    }

    toggleDropdownButton(){
        if(window.innerWidth < 900){
            this.navView.showDropdownButton(true);
        }
        if(window.innerWidth >= 900) {
            this.navView.showDropdownButton(false);
        }
    }

    buildList(countries) {
        for(let i in countries) {
            const countryCard = this.countryView.buildCountry(countries[i]);
            countryCard.onclick = () => {
                this.displayDetails(countries[i].cca3);
            };
            this.parentElement.appendChild(countryCard);
        }
    }

    // async functions
    getCountries = async () => {
        return await this.countryModel.getAll();
    }

    searchByName = async (searchTerm) => {
        const countries = await this.getCountries();
        let matches = [];

        for(let i in countries) {
            const name = countries[i].name.official.toString().toLowerCase();
            if (name.includes(searchTerm.toString().toLowerCase())){
                matches.push(countries[i]);
            }
        }
        return matches;
    }
    
}

export default CountryController;