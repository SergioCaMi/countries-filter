
// Variables de Estado
let countryList = []; 
let filterName = "";
let filterRegion = ""; 

getCountries();

// Función para obtener la lista de países 
async function getCountries() {
    let response = await fetch("https://restcountries.com/v2/all"); 
    let country = await response.json(); 
    countryList = country; 
    iterCountries(country); 
}

// Función para crear una tarjeta de país en el DOM
function createCard(flag, name, population, region, capital) {
    let newDiv = document.createElement("div"); 
    newDiv.innerHTML = `
    <div class="card card-{country.name}">
      <img class="flag" src="${flag}" alt="flag" />
      <div class="content">
        <h3 class="name">${name}</h3>
        <div><span class="country-info">Population: ${population}</span><span class="population"></span></div>
        <div><span class="country-info">Region: ${region}</span><span class="region"></span></div>
        <div><span class="country-info">Capital: ${capital}</span><span class="capital"></span></div>
      </div>
    </div>
    `;
    document.querySelector(".cards").appendChild(newDiv); 
}

// creamos tarjetas
function iterCountries(country) {
    document.querySelector(".cards").innerHTML = ""; // Limpia las tarjetas

    // Filtramos países por nombre y región
    //Creamos un array con los elementos que cumplen las condiciones: el nombre coincida con el que le damos y la regíon no se haya especificado
    //sean todas las regiones o sea a la que pertenece el país.
    //array.filter(callback(element, index, array), thisArg)
    let filteredCountries = country.filter(country =>
        country.name.toLowerCase().includes(filterName.toLowerCase()) &&
        (filterRegion === '' || filterRegion === 'All' || country.region === filterRegion)
    );

    // Crea tarjetas de cada país que debe aparecer
    filteredCountries.forEach(country => {
        let flag = country.flag; 
        let name = country.name; 
        let population = country.population; 
        let region = country.region; 
        let capital = country.capital; 
        createCard(flag, name, population, region, capital); 
    });
}

// Evento para filtrar países por nombre. Actualizamos el valor del campo del país buscado y 
// filtra la lista de países que cumplen con el nuevo texto.
let input = document.querySelector(".search-input");
input.addEventListener("input", function (e) {
    e.preventDefault();
    let countrySearched = input.value; 
    filterName = countrySearched; 
    iterCountries(countryList); 
});

// Evento para filtrar países por región. Actualizamos el valor del campo del país buscado y 
// filtra la lista de países que cumplen con el nuevo texto.
let options = document.querySelector("#regions");
options.addEventListener("change", function (e) {
    e.preventDefault();
    let regionBuscada = options.value;
    filterRegion = regionBuscada; 
    iterCountries(countryList); 
});

// Evento para cambiar el tema de la página
let themeButton = document.querySelector(".btn-toggle");
themeButton.addEventListener("click", function () {
    let body = document.querySelector("body");
    //Ponemos o quitamos la clase light
    if (body.classList.contains("light")) {
        body.classList.remove("light"); 
    } else {
        body.classList.add("light"); 
    }
});
