class CountryView {
    buildList(elementList, countryList) {

        for(let i in countryList) {
            elementList.appendChild(this.buildCountry(countryList[i]));
        }

    }

    buildCountry(country) {
        console.log(country);
        const item = document.createElement('div');
        item.classList.add('card');
        item.innerHTML = `<img src="${country.flags.png}" alt="${country.name.official} flag" style="width:80%">
                        <div class="container">
                            <h4><b>${country.name.official}</b></h4>
                            <p>Subregion: ${country.subregion}</p>
                        </div>`
        return item
    }
}

export default CountryView;