// Suerte! :)

//Variables de Estado
let countryList = [];
let filterName = "";
let filterRegion = "";

async function takeCountry() {
    let response = await fetch("https://restcountries.com/v2/all");
    let country = await response.json();
    countryList = country;
    loopArray(country)
}

takeCountry();

function createCard(flag, name, population, region, capital) {

    let section = document.createElement("div")
    section.innerHTML = `
    <div class="card card-{country.name}">
      <img class="flag" src="${flag}" alt=" flag" />
      <div class="content">
        <h3 class="name">${name}</h3>
        <div><span class="country-info">Population: ${population}</span><span class="population"></span>
        </div>
        <div><span class="country-info">Region: ${region}</span><span class="region"></span></div>

        <div><span class="country-info">Capital: ${capital} </span><span class="capital"></span></div>
      </div>
    </div>

    `
    document.querySelector(".cards").appendChild(section);

}

//Función que hace un loop por todos los valores de country
function loopArray(country) {
    document.querySelector(".cards").innerHTML = "";

    for (let index = 0; index < country.length; index++) {
        let flag = country[index].flag;
        let name = country[index].name;
        let population = country[index].population;
        let region = country[index].region;
        let capital = country[index].capital;

        //console.log(region)
        // Justo antes de utilizarlo, comparamos todo con lowerCase.

        filterName = filterName.toLowerCase();

        console.log(filterRegion);

        if (name.toLowerCase().includes(filterName)) {

            if ((!filterRegion || filterRegion == 'All') || (filterRegion == region)) {

                createCard(flag, name, population, region, capital);
            }
        }

        // if (region == filterRegion) {
        //     createCard(flag, name, population, region, capital);
        // }
    }
}

let input = document.querySelector(".search-input");
input.addEventListener("input", function (event) {
    event.preventDefault();

    let paisBuscado = input.value;
    console.log(paisBuscado);
    filterName = paisBuscado;
    loopArray(countryList);

})

let options = document.querySelector("#regions");
options.addEventListener("change", function (e) {
    e.preventDefault();
    let regionBuscada = options.value;
    filterRegion = regionBuscada;
    loopArray(countryList);
    console.log(filterRegion);
})

let themeButton = document.querySelector(".btn-toggle");
themeButton.addEventListener("click", function () {
    let body = document.querySelector("body");


    if (body.classList.contains("light")) {
        body.classList.remove("light")
    }

    else {
        body.classList.add("light");
    }
})





//Comprobar si el valor que le paso al input está dentro del contry.name.
//Includes
//FilterArray
