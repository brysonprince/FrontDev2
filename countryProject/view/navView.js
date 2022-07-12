class NavView {
    buildNavBar(){
        const item = document.createElement('div');
        item.classList.add('navbar');
        item.classList.add('dropdown');

        item.innerHTML = `<button id="dropbtn" class="dropbtn"><i class="fa fa-bars"></i></button>
                          <div id="drop-nav" class="dropdown-content">
                            <ul>
                            <li><a href=index.html>Home</a></li>
                            <li><a href="">About</a></li>
                            <li>
                                <form name='search' action='/search'>
                                <input name='searchCountry'>
                                <button type='submit'>Search</button>
                                </form>
                            </li>
                            </ul>
                          </div>`;
        return item;
    }

    toggleDropdown(){
        return document.getElementById('drop-nav').classList.toggle('show');
    }
}

export default NavView;