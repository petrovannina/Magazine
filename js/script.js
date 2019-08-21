

const navbarBtn = document.querySelector('.c-burger');
const navbarLinks = document.querySelector('.c-submenu');
const searchIcon =document.querySelector('.c-search-icon');


navbarBtn.addEventListener('click', function () {
    var value = navbarLinks.classList.contains('c-submenu')

    if (value){
        navbarLinks.classList.remove('c-submenu')
        navbarBtn.classList.remove('change')
    }
    else{
        navbarLinks.classList.add('c-submenu')
        navbarBtn.classList.add('change')
    }
})


searchIcon.addEventListener('click',function () {
    var value = searchIcon.classList.contains('c-search-container')

    if(value){
        searchIcon.classList.remove('c-search-container')
    }
    else{
        searchIcon.classList.add('c-search-container')
    }
})