// from data.js
var tableData = data;

// Test connectivity
// console.log("Hello Alien World!");

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
// Create actions for form and filter
// Select the button
var button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#sighting-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);
});
/****************************************************************/




// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// forEach 'sighting' in the tableData Object...
tableData.forEach((sighting) => {

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
    
  }); // end tableData forEach
