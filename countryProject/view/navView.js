class NavView {
    buildNavBar(){
        const buttonItem = document.createElement('button');
        buttonItem.classList.add('dropbtn');

        buttonItem.id = 'dropbtn';
        buttonItem.innerHTML = '<i class="fa fa-bars"></i>'

        const divItem = document.createElement('div');
        divItem.classList.add(('dropdown-content'));
        divItem.id = 'drop-nav';

        divItem.innerHTML = `<a href=index.html>Home</a>
                            <a href="">About</a>
                            <div class="search-container">
                                <form name='search' id='country-search' action='#'>
                                <input type="text" placeholder="Search..." name='searchTerm'>
                                <button type="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </div>`;

        if(window.innerWidth < 900){
            buttonItem.classList.add('show');
        }
        else{
            divItem.classList.add('show');
        }

        return { buttonItem, divItem };
    }

    toggleDropdown(){
        return document.getElementById('drop-nav').classList.toggle('show');
    }

    showDropdownButton(show){
        document.getElementById('dropbtn').classList.toggle('show', show);

        // Need to do the opposite with the navbar content
        document.getElementById('drop-nav').classList.toggle('show', !show);
    }
}

export default NavView;