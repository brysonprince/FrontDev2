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

    toggleDropdownButton(){
        if(window.innerWidth < 900){
            this.navView.showDropdownButton(true);
        }
        if(window.innerWidth >= 900) {
            this.navView.showDropdownButton(false);
        }
    }
}

export default CountryController;