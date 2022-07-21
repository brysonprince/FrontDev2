class CountryView {
    buildCountry(country) {
        const item = document.createElement('div');
        item.classList.add('card');
        item.innerHTML = `<img src="${country.flags.png}" alt="${country.name.official} flag" style="width:100%; height:60%">
                          <div class="country-container">
                              <h4><b>${country.name.official}</b></h4>
                              <p><b>Subregion:</b> ${country.subregion}</p>
                          </div>`;
        return item
    }

    buildCountryDetails(country) {
        console.log(country);
        const item = document.createElement('div');
        item.classList.add('modal');
        item.id = 'country-detail-container'
        item.innerHTML = `<div class="modal-content">
                              <span class="close">&times;</span>
                              <img src="${country.flags.png}" alt="${country.name.official} flag" style="width:25%; height:25%">
                              <div class="country-details">
                              <p>Name: ${country.name.official}</p>
                              <p>Continent(s):${country.continents}</p>
                              <p>Language(s):${country.languages}</p>
                              <p>Latitude:${country.latlng[0]}</p>
                              <p>Longitude:${country.latlng[1]}</p>
                              <a href="${country.maps.googleMaps}">View on Google Maps</a>
                              </div>
                            </div>
                          </div>`
        return item;

                          /*<img src="${country.flags.png}" alt="${country.name.official} flag" style="width:100%; height:60%">
                          <h3><b>${country.name.official}</b></h3>
                          */

    }
}

export default CountryView;