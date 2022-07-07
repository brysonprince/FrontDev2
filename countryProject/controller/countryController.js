import CountryModel from "../model/countryModel.js";
import CountryView from "../view/countryView.js";

class CountryController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId);
        this.countryModel = new CountryModel();
        this.countryView = new CountryView();
    }

    displayList() {
        const thisView = this.countryView;
        const thisParent = this.parentElement;

        this.countryModel.getAll().then(function (data) {
            const countries = data;

            thisView.buildList(thisParent, countries);
        });
        
    }
}

export default CountryController;