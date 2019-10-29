
// Add ROI to map
Map.centerObject(scp_crop)
Map.addLayer(scp_crop)

// Filter the MODIS Vegetation Index ImageCollection
var modis_vi = ee.ImageCollection("MODIS/006/MOD13A1")
  .filterDate('2018-01-01', '2019-09-01');
  
// Clip the Image Collection to ROI
var modis_vi_clip = modis_vi.map(function(image){return image.clip(scp_crop)});

// Select NDVI and EVI Data
var ndvi = modis_vi_clip.select("NDVI");
var evi = modis_vi_clip.select("EVI");

// Reduce by region
// Define input parameters
var pixel_size = 500;
var roi = scp_crop;
var reduce_type = ee.Reducer.mean()

// Build function to apply a reducer to an image
var region_reducer = function(image){
  return (ee.Feature(null, image.reduceRegion({
    reducer: reduce_type,
    geometry: roi,
    scale: pixel_size,
    maxPixels: 1e9
  })))
};

// Map region_reducer over ImageCollection
var ndvi_mean = ndvi.map(region_reducer);
var evi_mean = evi.map(region_reducer);

// Define fuction convert the date from string to date object
var date_converter = function(feature){
  var date_obj = ee.Date.parse('YYYY_MM_dd', feature.get('system:index'));
  return feature.set('date', date_obj);
};

// Map date_converter over FeatureCollection
var ndvi_mean = ndvi_mean.map(date_converter);
var evi_mean = evi_mean.map(date_converter);

// Print the FeatureCollection to check the new values (date and NDVI/EVI)
print("NDVI ", ndvi_mean);
print("EVI ", evi_mean);

// Create chart of mean values
var ndvi_chart = ui.Chart.feature.byFeature(ndvi_mean, 'date')
  .setChartType('ScatterChart')
  .setOptions({
  title: "Average MODIS NDVI for ROI",
  hAxis: {
      title: 'Date'},
  vAxis: {
    title: 'NDVI'
  },
  lineWidth: 1,
  pointSize: 2
  });
  
var evi_chart = ui.Chart.feature.byFeature(evi_mean, 'date')
  .setChartType('ScatterChart')
  .setOptions({
  title: "Average MODIS EVI for ROI",
  hAxis: {
      title: 'Date'},
  vAxis: {
    title: 'EVI'
  },
  lineWidth: 1,
  pointSize: 2
  });
    
  
print (ndvi_chart, evi_chart);

// The easy way

var ndvi_chart_easy = ui.Chart.image.seriesByRegion(
  ndvi, scp_crop, ee.Reducer.mean(),'NDVI', 500, 'system:time_start', 'label');
  
var evi_chart_easy = ui.Chart.image.seriesByRegion(
  evi, scp_crop, ee.Reducer.mean(),'EVI', 500, 'system:time_start', 'label');  

print (ndvi_chart_easy, evi_chart_easy)
