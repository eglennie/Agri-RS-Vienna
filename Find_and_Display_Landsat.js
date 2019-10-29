//------------------------------------------------------------------------------
// This script demonstrates how to filter an image collection by
// date, location, and cloud cover; set visualization parameters; 
// display the image; and compute a histogram.
// Erin Glennie, 10/21/19


// Define ROI
var roi_point = ee.Geometry.Point(-80.8240, 35.2374);

// Display ROI 
Map.centerObject(roi_point, 8);
Map.addLayer(roi_point);

// Import Landsat 8 Surface Reflectance
var landsat_sr = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR').select("B[2-5]")
  // Filter archive based on ROI
  .filterBounds(roi_point)
  // Filter archive based on Date
  .filterDate('2018-10-10', '2019-10-01')
  // Filter metadata to find cloud cover values less than 5%
  .filter(ee.Filter.lt('CLOUD_COVER',5));

// Print ImageCollection Information
print ("Filtered Landsat Surface Reflectance Image Collection:",landsat_sr);

// Find number of images in your collection
var count = landsat_sr.size();
print ('Count: ', count);

// Sort by cloud cover and select least cloudy
var least_cloudy = landsat_sr.sort('CLOUD_COVER').first();
print ('Least cloudy image:', least_cloudy);


// Display image as false color image
var viz_params = {
  bands: ["B4","B3","B2"],
  min: 0,
  max: 3000,
  gamma: 1.4
};

// Add Composite to Map
Map.addLayer(least_cloudy, viz_params, "Clear Landsat Image")


//// Histogram options
var options = {
  title: 'Landsat 8 SR histogram, bands 2-5',
  fontSize: 20,
  hAxis: {title: 'SR'},
  vAxis: {title: 'count of SR'},
  series: {
    0: {color: 'blue'},
    1: {color: 'green'},
    2: {color: 'red'},
    3: {color: 'magenta'}}};


// Make the histogram, set the options.
var histogram = ui.Chart.image.histogram(least_cloudy,histogram_geometry, 30)
    .setSeriesNames(['blue', 'green', 'red', 'NIR'])
    .setOptions(options);

// Display the histogram.
print(histogram);
    
var clear_viz = {
  bands: ["B4","B3","B2"],
  min: 0,
  max: 3000,
  gamma: 1.4
};

Map.addLayer(least_cloudy, clear_viz)
