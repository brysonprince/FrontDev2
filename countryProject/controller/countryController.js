import countryModel from "../model/countryModel.js";
import CountryView from "../view/countryView.js";

class CountryController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId);
        this.countryModel = new countryModel();
        this.countryView = new CountryView();
    }

    displayList() {
        const countries = this.countryModel.getAll().then(console.log).catch(console.log);
        this.countryView.buildList(this.parentElement, countries);
    }
}

export default CountryController;