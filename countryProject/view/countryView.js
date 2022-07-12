class CountryView {
    buildList(elementList, countryList) {

        for(let i in countryList) {
            elementList.appendChild(this.buildCountry(countryList[i]));
        }

    }

    buildCountry(country) {
        const item = document.createElement('div');
        item.classList.add('card');
        item.innerHTML = `<img src="${country.flags.png}" alt="${country.name.official} flag" style="width:100%; height:60%">
                        <div class="country-container">
                            <h4><b>${country.name.official}</b></h4>
                            <p><b>Subregion:</b> ${country.subregion}</p>
                        </div>`
        return item
    }

    buildCountryDetails(country) {
        const item = document.createElement('div');

    }
}

export default CountryView;