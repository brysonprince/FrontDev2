class NavView {
    buildNavBar(){
        const item = document.createElement('div');
        item.classList.add('navbar');
        item.classList.add('dropdown');

        item.innerHTML = `<button id="dropbtn" class="dropbtn"><i class="fa fa-bars"></i></button>
                          <div id="drop-nav" class="dropdown-content">
                            <a href=index.html>Home</a>
                            <a href="">About</a>
                            <div class="search-container">
                                <form name='search' action='/search'>
                                <input type="text" placeholder="Search..." name='searchCountry'>
                                <button type="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                          </div>`;
        return item;
    }

    toggleDropdown(){
        return document.getElementById('drop-nav').classList.toggle('show');
    }
}

export default NavView;