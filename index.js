const searchButton = document.querySelector(".nav__list--button");
const searchInput = document.querySelector(".nav__list--input");
searchButton.addEventListener("click", function(){
    if(searchInput.classList.contains("nav__list--input-active")){
        searchInput.classList.remove("nav__list--input-active");
    }else{
        searchInput.classList.add("nav__list--input-active");
    }
})
