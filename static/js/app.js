
const ufoData = data;
const columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
const tbody = d3.select("tbody")



const fillTable = (dataInput) => {
    dataInput.forEach(ufo => {
        let row = tbody.append("tr");
        columns.forEach(column => {
            row.append("td").text(ufo[column])
        });        
    });
}

fillTable(ufoData)

let 
    ufoDays = [],
    ufoCities = [],
    ufoCountries = [],
    ufoStates = [];

for (let i=0; i<ufoData.length; i++){
    ufoDays.push(ufoData[i].datetime);
    ufoCities.push(ufoData[i].city);
    ufoCountries.push(ufoData[i].country);
    ufoStates.push(ufoData[i].state);
}
ufoDays = ufoDays.filter(function (e, i, arr) {
    return arr.indexOf(e, i+1) === -1;
});


ufoCities = ufoCities.filter(function (e, i, arr) {
    return arr.indexOf(e, i+1) === -1;
});

ufoCountries = ufoCountries.filter(function (e, i, arr) {
    return arr.indexOf(e, i+1) === -1;
});

ufoStates = ufoStates.filter(function (e, i, arr) {
    return arr.indexOf(e, i+1) === -1;
});


const dropDownDate = d3.select("#d3-dropdown-date")

let optionListDate = document.getElementById('d3-dropdown-date').options;

ufoDays.forEach(option => {
    optionListDate.add(
        new Option(option)
    )
});

dropDownDate.on("change", function() {
    tbody.html("");
    const selection = dropDownDate.node().value;
    console.log(selection);
    const filterData = ufoData.filter(ufo => {
        return ufo.datetime === selection;
    })
    console.log(filterData);

    fillTable(filterData)
})

const dropDownCity = d3.select("#d3-dropdown-city")

let optionListCity = document.getElementById('d3-dropdown-city').options;

ufoCities.forEach(option => {
    optionListCity.add(
        new Option(option)
    )
});

dropDownCity.on("change", function() {
    tbody.html("");
    const selection = dropDownCity.node().value;
    console.log(selection);
    const filterData = ufoData.filter(ufo => {
        return ufo.city === selection;
    })
    console.log(filterData);

    fillTable(filterData)
})

const dropDownCountry = d3.select("#d3-dropdown-country")

let optionListCountry = document.getElementById('d3-dropdown-country').options;

ufoCountries.forEach(option => {
    optionListCountry.add(
        new Option(option)
    )
});

dropDownCountry.on("change", function() {
    tbody.html("");
    const selection = dropDownCountry.node().value;
    console.log(selection);
    const filterData = ufoData.filter(ufo => {
        return ufo.country === selection;
    })
    console.log(filterData);

    fillTable(filterData)
})

const dropDownState = d3.select("#d3-dropdown-state")

let optionListState = document.getElementById('d3-dropdown-state').options;

ufoStates.forEach(option => {
    optionListState.add(
        new Option(option)
    )
});

dropDownState.on("change", function() {
    tbody.html("");
    const selection = dropDownState.node().value;
    console.log(selection);
    const filterData = ufoData.filter(ufo => {
        return ufo.state === selection;
    })
    console.log(filterData);

    fillTable(filterData)
})


