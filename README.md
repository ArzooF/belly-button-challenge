# Project: Belly Button Biodiversity Dashboard
This project involves creating an ==interactive dashboard== to explore the Belly Button Biodiversity dataset. The dataset catalogs microbes that colonize human navels.

## Repository Setup
- Created a new repository, 'belly-button-challenge'.
- Cloned the repository.
- Copied the starter files (index.html, samples.json, static folder) into the repository.
- Pushed aforementioned changes to GitHub.

## Data Handling
Used the D3 library to read **samples.json** from the provided URL. The samples.json file contained the necessary data for the dashboard.

## Visualization Requirements
### Bar Chart: 
Created a horizontal bar chart with a dropdown menu and displayed the top 10 OTUs for the selected individuals. Used *sample_values* for bar chart values, *otu_ids* for bar chart labels and *otu_labels* for hover text.
### Bubble Chart:
Created a bubble chart to display each sample. Used *otu_ids* for the x-axis values, *sample_values* for the y-axis and marker sizes, *otu_ids for marker colors* and *otu_labels* for text values.

## Metadata Display
Displayed the *demographic information* of each sample, *looped* through the metadata **JSON object** and *append* the key-value pairs to the **HTML panel**.

## Interactivity
All charts and metadata updates when a new sample is selected. Deployed the app to **GitHub Pages** for easy access.

## Deployment
Deployed the completed dashboard to a free **static** page and submitted the deployment link and the GitHub repository link (https://arzoof.github.io/belly-button-challenge/)

