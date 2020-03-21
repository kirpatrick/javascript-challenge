// from data.js
var tableData = data;

// Test connectivity
console.log("Hello Alien World!");

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

