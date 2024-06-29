// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
  let metadata = data.metadata

    // Filter the metadata for the object with the desired sample number
    let resultArray = metadata.filter(sampleObj => sampleObj.id == sample)
    let result = resultArray[0]


    // Use d3 to select the panel with id of `#sample-metadata`
    let PANEL = d3.select("#sample-metadata")

    // Use `.html("") to clear any existing metadata
    PANEL.html("")

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
for (key in result) {
  PANEL.append("h6").text(`${key.toUpperCase()}: ${result[key]}`);
}
  });
}
// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;
    let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    let result = resultArray[0];

    let otu_ids = result.otu_ids
    let otu_labels = result.otu_labels
    let sample_values = result.sample_values


    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values


    // Build a Bubble Chart
let bubleLayout = {
  title: "Bacteria Cultures",
  margin: {t:0},
  hover: "closest",
  xaxis: {title: "OTU ID"},
};

let bubbleData = [{
  x: otu_ids,
  y: sample_values,
  text: otu_labels,
  mode: "markers",
  marker: {
    size: sample_values,
    color:  otu_ids,
    colorscale: "Earth"
  }
}];

    // Render the Bubble Chart
Plotly.newPlot("bubble", bubbleData,bubleLayout)

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks

let yticks = otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse()
    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately

let barLayout = {
  title: "Top 10 Bacteria Cultures",
  margin: {t: 30, l: 150}
}
let barData = [{
  y: yticks,
  x: sample_values.slice(0,10).reverse(),
  text: otu_labels.slice(0,10).reverse(),
  type: "bar",
  orientation: "h",
}]

    // Render the Bar Chart
Plotly.newPlot("bar", barData, barLayout)
  });
}

// Function to run on page load
function init() {
  let selector = d3.select("#selDataset")
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field  
    let sampleNames = data.names
    

    // Use d3 to select the dropdown with id of `#selDataset`
for(let i = 0; i < sampleNames.length; i++){
  selector
  .append("option")
  .text(sampleNames[i])
  .property("value", sampleNames[i])
}

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list
  let firstSample = sampleNames[0];
  buildCharts(firstSample);
  buildMetadata(firstSample);

    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample)
  buildMetadata(newSample)
}

// Initialize the dashboard
init();
