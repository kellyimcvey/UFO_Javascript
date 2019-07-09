const tableData = data;

//assign the tbody to a a descriptive
const tbody = d3.select("tbody")

//assign columns
const columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Select the html id of the Filter Table button
const filter = d3.select("#filter-btn");

filter.on("click", function () {

    tbody.html("");

    d3.event.preventDefault();

    //select the input date and get the html node
    const inputDate = d3.select('#datetime');
    //get the value property of the input date, trim any spaces
    const inputDateValue = inputDate.property("value").trim();

    const inputCity = d3.select('#city');
    const inputCityValue = inputCity.property("value").trim().toLowerCase();

    const inputState = d3.select('#state');
    //get the value property of the input state, trim spaces and make all lower case
    const inputStateValue = inputState.property("value").trim().toLowerCase();

    //select the input country and get the html node
    const inputCountry = d3.select('#country');
    //get the value property of the input country, trim spaces and make all lower case
    const inputCountryValue = inputCountry.property("value").trim().toLowerCase();

    //select the input shape and get the html node
    const inputShape = d3.select('#shape');
    //get the value property of the input shape, trim spaces and make all lower case
    const inputShapeValue = inputShape.property("value").trim().toLowerCase();

    //show tableData
    console.log(tableData);

    let filteredData  // defines filteredData array, that can change in code
    let userInput = false  //init boolean to false, can change in code based on user input

    if (inputDateValue != "") {
        filteredData = tableData.filter(sighting => sighting.datetime === inputDateValue)
        console.log(`DateEntered: ${inputDateValue}`)
        userInput = true
    }
    else {
        filteredData = tableData
        console.log("No date put into the machine man")
        //console.log(filteredData)
    }
    if (inputCityValue != "") {
        filteredData = filteredData.filter(sighting => sighting.city === inputCityValue)
        console.log(`CityEntered: ${inputCityValue}`)
        userInput = true
    }
    else {
        console.log("No city bro")
        //console.log(filteredData)
    }
    if (inputStateValue != "") {
        filteredData = filteredData.filter(sighting => sighting.state === inputStateValue)
        console.log(`StateEntered: ${inputStateValue}`)
        userInput = true
    }
    else {
        console.log("No state bro")
        //console.log(filteredData)
    }
    if (inputCountryValue != "") {
        filteredData = filteredData.filter(sighting => sighting.country === inputCountryValue)
        console.log(`CountryEntered: ${inputCountryValue}`)
        userInput = true
    }
    else {
        console.log("No country bro")
        //console.log(filteredData)
    }
    if (inputShapeValue != "") {
        filteredData = filteredData.filter(sighting => sighting.shape === inputShapeValue)
        console.log(`ShapeEntered: ${inputShapeValue}`)
        userInput = true
    }
    else {
        console.log("No shape bro")
        //console.log(filteredData)
    }

    // construct table on html
    if (userInput != true) {
        //user chose no criteria....alert them...just show all data
        window.alert("Nothing entered, here's everything")
        tableData.forEach(sighting => {
            var row = tbody.append("tr")
            columns.forEach(column => {
                row.append("td").text(sighting[column])
            });
        });
    } else {
        //show filtered data
        filteredData.forEach(sighting => {
            var row = tbody.append("tr")
            columns.forEach(column => {
                row.append("td").text(sighting[column])
            });
        });
        //console.log(filteredData.length)
        if (filteredData.length == 0) {
            //user had nothing return from filtered data...alert them
            window.alert("You broke it, try again")
        }
    }
});
