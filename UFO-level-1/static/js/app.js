// from data.js
var tableData = data;

// Test connectivity
// console.log("Hello Alien World!");

// Test connection to tableData Object
// forEach 'sighting' in the tableData Object...
tableData.forEach((sighting) => {
    // display individual sighting info on the console
    // console.log(sighting);
  
    //forEach entry in the tableData Object...
    Object.entries(sighting).forEach(
        // Use the arrow function to grab each key and value...
        ([key, value]) => {
      // and write each key and value to the console.
      console.log(`Key: ${key} and Value ${value}`);
    });
    
  }); // end tableData forEach

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
            var cell = row.append("td");
            cell.text(value);
    });
    
  }); // end tableData forEach
