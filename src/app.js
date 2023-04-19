import axios from "axios";

const country = document.getElementById('country')
let countryData;
let countryList;

async function getCountries() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flag,population,region');
        console.log(response);
        const data = response.data;

        sortData(data);
        listCountries(data);

    } catch (e) {
        console.error(e);
    }
}

function listCountries(data) {
    countryData = data.map((countryLi) => {
        countryList = document.createElement('li');

        countryList.innerHTML = `<span>${countryLi.flag}</span> <h4>${countryLi.name.common}</h4>
    <p>Has a population of ${countryLi.population} people</p>`;

        colorCountries(countryLi.region);

        return country.appendChild(countryList);
    });
}

function colorCountries(region) {
    switch (region) {
        case 'Africa':
            countryList.setAttribute('class', 'blue');
            break;
        case 'Americas':
            countryList.setAttribute('class', 'green');
            break;
        case 'Asia':
            countryList.setAttribute('class', 'red');
            break;
        case 'Europe':
            countryList.setAttribute('class', 'yellow');
            break;
        case 'Oceania':
            countryList.setAttribute('class', 'purple');
            break;
        default:
            countryList.setAttribute('class', 'grey');
    }
}

function sortData(data) {
    const sortedData = data.sort((a,b) => {
        return a.population - b.population;
    });
}

void getCountries();


