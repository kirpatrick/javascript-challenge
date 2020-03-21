// Test connectivity
// console.log("Hello Alien World!");

// from data.js
var tableData = data;

/****************************************************************/
// Test connection to tableData Object
// forEach 'sighting' in the tableData Object...
// tableData.forEach((sighting) => {
//     // display individual sighting info on the console
//     // console.log(sighting);

//     //forEach entry in the tableData Object...
//     Object.entries(sighting).forEach(
//         // Use the arrow function to grab each key and value...
//         ([key, value]) => {
//       // and write each key and value to the console.
//       console.log(`Key: ${key} and Value ${value}`);
//     });

//   }); // end tableData forEach

/****************************************************************/
/*** WORKING TABLE ***/
// // Use D3 to select the table body
// var tbody = d3.select("tbody");

// // Use D3 to select the table
// var table = d3.select("table");

// // Use D3 to set the table class to `table table-striped`
// table.attr("class", "table table-striped");

// // forEach 'sighting' in the tableData Object...
// tableData.forEach((sighting) => {

//     // Append one table row per sighting
//     var row = tbody.append("tr");

//     //forEach entry in the tableData Object...
//     Object.entries(sighting).forEach(
//         // Use the arrow function to grab each key and value...
//         ([key, value]) => {
//             // Append sightingDetail to the html table row
//             var sightingDetail = row.append("td");
//             sightingDetail.text(value);
//     });

//   }); // end tableData forEach

/****************************************************************/
// Create actions for form and filter
// Select the button
var button = d3.select("#button");

// Define what happens when the button is clicked
button.on("click", function () {
    // Log current number of rows on the table
    var rowCount = (document.getElementById("ufo-table")).rows.length;
    console.log('The number of rows is: ' + rowCount);
    
    // Call 'ResetFilter' to clear previously selected data if present
    if (rowCount > 0) {
        console.log('If condition hit');
        ResetFilter(rowCount);
        // Wait 2 seconds then ReturnFilteredData
        setTimeout(ReturnFilteredData(), 2000);
    }
    // If first time searching the data, then ReturnFilteredData 
    else {
        console.log('Else condition hit');
        ReturnFilteredData();
    }
});

/****************************************************************/
// Clear previous data filtered for display
function ResetFilter(rowCount) {
    // Variable to log the number of rows in the given data set
    var i = 0;
    while ((document.getElementById("ufo-table")).rows.length > 0) {
        // Test loop & count
        console.log(i);
        i++;

        // Delete previous data from table
        document.getElementById("ufo-table").deleteRow(0);
    }
};

/****************************************************************/
// Return data for selected date
function ReturnFilteredData() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredSighting = tableData.filter(sighting => sighting.datetime === inputValue);

    // console.log(filteredSighting);

    // Use D3 to select the table body
    var tbody = d3.select("tbody");

    // Use D3 to select the table
    var table = d3.select("table");

    // Use D3 to set the table class to `table table-striped`
    table.attr("class", "table table-striped");

    /*** Refactor original table to work with filter ***/
    // forEach 'filteredSighting' in the tableData Object...
    filteredSighting.forEach((sighting) => {

        // Append one table row per sighting
        var row = tbody.append("tr");

        //forEach entry in the tableData Object...
        Object.entries(sighting).forEach(
            // Use the arrow function to grab each key and value...
            ([key, value]) => {
                // Append sightingDetail to the html table row
                var sightingDetail = row.append("td");
                sightingDetail.text(value);
            });

    }); // end filteredSighting forEach
};