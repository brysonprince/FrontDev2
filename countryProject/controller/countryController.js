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
        this.parentElement.appendChild(this.navView.buildNavBar());
    }

    displayList() {
        const thisView = this.countryView;
        const thisParent = this.parentElement;

        this.countryModel.getAll().then(function (data) {
            const countries = data;

            thisView.buildList(thisParent, countries);
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
}

export default CountryController;