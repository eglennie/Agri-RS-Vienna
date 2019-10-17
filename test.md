## IAEA Day 3 Tutorial
## NDVI Time Series in Google Earth Engine and GLAM
---
### In this tutorial you will learn:


---
### Outline:

1) Getting Started in GEE (AM Session)
   - Define ROI
   - Access Landsat 8 Surface Reflectance archive
   - Filter based on date and location
   - Sort based on cloud cover
   - Set visualization parameters
   - Display image
   - Display histogram
2) MODIS Time Series in GEE (PM Session)
   - Upload assets (crop shapefile)
   - Add MODIS Vegetation Index product
   - Practice mapping functions over the archive
   - Export time series of average NDVI and EVI values for our crop shapefile.
3) MODIS NDVI Time Series in GLAM (PM Session)
   - Find the same area in GLAM
   - Apply crop masks
   - Explore timeseries
   - Export
   - Compare to the GEE MODIS time series?
---
### Part 1: Getting Started in GEE (AM Session)

#### 1. Define Region of Interest (ROI)
- GEE handles vector data with the `Geometry` type. 
- GEE `Features` can contain a `Geometry` and a `Dictionary` of properties, or just the properties. 
- `Geometry` objects can be defined manually (by adding coordinate points), drawn interactively on the map, or uploaded from a shapefile.
:arrow_right: Open **Code Editor** and zoom to an area of your choice.
:arrow_right: Open the **Inspector** tab on the right panel of the editor. The inspector will return information about the layers on your map.
:arrow_right: Click a point on the map where you would like your ROI to be, note the coordinates.
:arrow_right: Now, we are going to define a variable for a `Geometry` oject with the type `Point`
```js
var roi_point = ee.Geometry.Point(-80.8240, 35.2374);
```

#### 2. Display ROI
:arrow_right: Now we will center the map on our point, and then add the point to the map.

```js
Map.centerObject(roi_point, 15);
Map.addLayer(roi_point);
```

#### 3. Import Landsat 8 Surface Reflectance

There are multiple ways to access the GEE archive. We will search for the Landsat 8 Surface Reflectance (aka Level-2 Landsat Product) in the Data Catalog, and then import it to our script by dataset id.

:arrow_right: Open a new tab in your web browser and go to https://developers.google.com/earth-engine/datasets/
:arrow_right: Search **Landsat 8 Surface Reflectance**, and click the first result (USGS Landsat 8 Surface Reflectance Tier 1).
:arrow_right: The image collection id is the important part. Every dataset has an id that can be used to import it into a GEE script.
:arrow_right: Copy the **Earth Engine Snippet** and add it to your script as a variable.

```js
var landsat_sr = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
```

#### 4. Filter Image Collection
One advantage of GEE is the ability to quickly filter large datasets. We will filter our selection by bands, location, date, and cloud cover.
- `.select("B[2-5]")` selects bands 2 - 5 from the Landsat 8 data. The band names are dataset specific.
- `filterBounds(geometry)` is an `ImageCollection` method to find images that intersect the `Geometry`. It is a shortcut for `ee.Filter.bounds(...)`
- `filterDate` is an `ImageCollection` method to find images collected within the given date range. It is a shortcut for `ee.Filter.date(...)`
-  `.filter(ee.Filter.lt('CLOUD_COVER',5))` filters the metadata to find images with a cloud cover less than 5%. `.filter` is a method that applies the filter specified by the `ee.Filter.lt(property_name, value)` constructor to the image collection. 
 
```js 
var landsat_sr = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR').select("B[2-5]")
  .filterBounds(roi_point)
  .filterDate('2018-10-10', '2019-10-01')
  .filter(ee.Filter.lt('CLOUD_COVER',5));
```

#### 5. Print `ImageCollection` Information
`print(ImageCollection);` will print the `ImageCollection` properties to the **Console**. You can use this to explore the  images returned and their properties.

```js
print (landsat_sr);
```

#### 6. Count the Number of Images in your Collection
We can also quickly count how many images were returned using `.size()`

```js
var count = landsat_sr_clear.size();
print ('Count: ', count);
```

#### 7. Sort by Cloud Cover and Select the Least Cloudy
```js
var least_cloudy = landsat_sr.sort('CLOUD_COVER').first();
print (least_cloudy);
```

#### 8. Set Visualization Parameters and Add to Map
Before we add the image to the map, we can specify some parameters to improve the display. We can create a **viz_param** `dictionary` to store our settings.

:arrow_right: Specify the image bands that you would like to include in the composite.  
:arrow_right: Activate the **Inspector** tab and click around the image to get an idea of what the min and max values for the image stretch.
:arrow_right: We will aslo set a gamma correction factor for each band. 

Find more parameters for image visualization here: [Image Visualization  \|  Google Earth Engine  |  Google Developers](https://developers.google.com/earth-engine/image_visualization)

```js
var viz_params = {
  bands: ["B4","B3","B2"],
  min: 0,
  max: 3000,
  gamma: [0.95, 1.1, 1]
};
```

#### 9. Add Image to the Map

:arrow_right: Use `Map.addLayer` to add the image, the visualization parameters, and a name for the layer.
:arrow_right: Run the script.

```js
Map.addLayer(least_cloudy, viz_params, "Clear Landsat Image")
```

#### 10. Explore Image Properties
:arrow_right: Once the layer displays on the map, find it in the **Layers** menu and click the **gear** icon.
:arrow_right: A layer visualization parameter widget should pop up. This provides a GUI to adjust the parameters we set programatically in the previous step.
:arrow_right: Update your **viz_params** if you find that parameters that better display the data using the widget.

#### 11. Create a Histogram of the Image
Another way to explore the values in each band is to create a histogram. The inputs for the histogram chart tool are  an `Image`, `Geometry`, and a scale. 

:arrow_right: First, we will define the `Geography`. Use the **Draw a Shape** or **Draw a Rectangle** tools to define the area you want to create a histogram for. Name the variable in the **imports** section of your script.
:arrow_right: Let's pre-define the options for the histogram we are creating:

```js
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
```

:arrow_right: We will use the `ui.Char.image.histogram(image, geometry, scale)` tool to create a chart from our image.

```js

// Make the histogram, set the options.
var histogram = ui.Chart.image.histogram(least_cloudy,histogram_geometry, 30)
    .setSeriesNames(['blue', 'green', 'red', 'NIR'])
    .setOptions(options);

// Display the histogram.
print(histogram);
```

#### 12. Examine the Histogram

:arrow_right: Run the script. The histogram should print in the **Console** panel. You can use the **arrow** icon in the corner to maximize the figure.

#### 13. Save the script! 


---

### Part 2: MODIS NDVI Time Series in Google Earth Engine

#### 1. Open a New GEE Script
:arrow_right: **Scripts** &rightarrow; **NEW** &rightarrow; **File** &rightarrow; **OK**

#### 2. Upload Assets
- Raster data must be in a GeoTIFF or [TFRecord](https://www.skcript.com/svr/why-every-tensorflow-developer-should-know-about-tfrecord/) format, and must not be larger than 10 GB. 
- Vector data must be in a shapefile format.

:arrow_right: Download the study area shapefile [here].
:arrow_right: Go to [GEE Code Editor](https://code.earthengine.google.com) &rightarrow; **Assets** &rightarrow; **New** &rightarrow; **Shapefile**
:arrow_right: Add the **.zip** file to **Source files**. The source should contain a shapefile, and related files (e.g. shx, .dbf, .prj). May be zipped or unzipped.
:arrow_right: Specify an **Asset ID**.
:arrow_right: Click **Upload**. Monitor progress in the **Tasks** tab. 

#### 3. Import the Asset to Script
:arrow_right: Hover over the asset in the asset manager and click the **arrow** icon to add the asset to a new script. 
:arrow_right: Assign a more meaningful name to the variable imported at the top of the script.

#### 4. Add the ROI to Map
```js
Map.centerObject(scp_crop)
Map.addLayer(scp_crop)
```

#### 5. Add MODIS Vegetation Index `Image Collection` and Filter by Date
```js
var modis_vi = ee.ImageCollection("MODIS/006/MOD13A1")
  .filterDate('2018-01-01', '2019-09-01'));
```

#### 6. Clip the `ImageCollection` to ROI
- Unlike the Landsat `ImageCollection`, this MODIS `ImageCollection` is not split into tiles or scenes - it is a continuous global layer. So, filtering by bounds will still select the entire global layer. Instead, we will clip the images too our crop extent. 
- In GEE, `clip()` is a function that operates on a single `Image`, not a `ImageCollection`. The `.map` method allows us to apply the `clip()` function to each `Image` in our `ImageCollection`.   

:arrow_right: Define a new variable for the clipped images, created by mapping the `clip()` function over the `Image Collection`.

```js
var modis_vi_clip = modis_vi.map(function(image){return image.clip(scp_crop)});
```

#### 7. Select NDVI and EVI Data
The MODIS VI `ImageCollection` that we imported has two datasets: NDVI and EVI. 

:arrow_right: Use the `.select()` method to save the bands to seperate variables.

```js
var ndvi = modis_vi_clip.select("NDVI");
var evi = modis_vi_clip.select("EVI");
```

#### 8. Build Reducer Function 
`Reducers` are GEE's way of aggregating data over time, space, image bands, etc. The `ee.Reducer` class has many functions to specify how the data is aggregated. The `ImageCollection.reduce()`, `Image.reduce()`,..., methods recieve a reduction constructor and apply it to the data (Similar to how ImageCollection.filter() recieves a ee.Filter() constructor).

Our goal is to reduce the NDVI values within out region (i.e. over space) then plot the values for all observations (i.e. over time). To achieve this, we must map a function over the `ImageCollection` (as in step 6). However, since this function is more complex, we will define it beforehand.

:arrow_right: Pre-define the parameters for our function. This way, we can write the function with general variables, so it will be easier to use elsewhere later. 

```js
ar pixel_size = 500;
var roi = scp_crop;
var reduce_type = ee.Reducer.mean()
```

:arrow_right: Build the function to map over the collection. This function recieves an `Image` from the collection, and returns a `FeatureCollection` of reduced values for the specified geometry. The `ee.Feature()` creates a feature with a `null` geometry. `.reduceRegion` is an `Image` method that applies the specifed reducer (in this case, mean) within the geometry (in this case, our scp_crop). 

```js
var region_reducer = function(image){
  return (ee.Feature(null, image.reduceRegion({
    reducer: reduce_type,
    geometry: roi,
    scale: pixel_size,
    maxPixels: 1e9
  })))
};
```


#### 9. Map `region_reducer` over our `ImageCollection`
:arrow_right: Calculate the time series of mean NDVI and EVI for our region by mapping the function we created in step 8 over each `ImageCollection`

```js
var ndvi_mean = ndvi.map(region_reducer);
var evi_mean = evi.map(region_reducer);
```

#### 10. Define function to convert the date from string to date object.
The new `FeatureCollection` not yet have a (usuable) time property, which we will want for creating our time series plot. We need to convert the `system:index` field from a string to a date object, and store it as a new property.

:arrow_right: Build a function to map over the `FeatureCollection`. This time for each feature we will convert the date string, and then use `.set(property_name, propertry_value)` to add the new date to the feature. 


```js
var date_converter = function(feature){
  var date_obj = ee.Date.parse('YYYY_MM_dd', feature.get('system:index'));
  return feature.set('date', date_obj);
    
};
```
#### 11. Map the `date_converter` function over our `FeatureCollection`
:arrow_right: Apply the function to the `FeatureCollection` using `.map()`
:arrow_right: Print the `FeatureCollection`. Check the properties for some of the features in the collection. You should find a NDVI or EVI value and the date we just created.


```js
var ndvi_mean = ndvi_mean.map(date_converter);
var evi_mean = evi_mean.map(date_converter);

print ("Mean NDVI: ", ndvi_mean);
print ("Mean EVI: ", evi_mean);
```
#### 12. Create a Chart to Visualize the NDVI and EVI time series.

:arrow_right: Use `ui.Chart.feature.byFeature(feature, xproperty)` to create a chart object, and then print it to the **Console**

```js
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
  
print (ndvi_chart);

```

#### 13. Export Values to CSV.

:arrow_right: Click the **arrow** in the upper right corner of the chart. 
:arrow_right: When the fullsize chart appears, use the **Download CSV** option at the top to save the values in your series. 

#### 14. The Shortcut

Now that we have learned how to reduce `ImageCollections` and map functions - two of the most common ways of handling data in GEE - you can try the *easy* way. 

The following command will produce the same chart as we just created, by applying a mean reducer to the ndvi data within the scp_crop region. 

```js 
var ndvi_chart_easy = ui.Chart.image.seriesByRegion(
  ndvi, scp_crop, ee.Reducer.mean(),'NDVI', 5000, 'system:time_start', 'label');
  
var evi_chart_easy = ui.Chart.image.seriesByRegion(
  evi, scp_crop, ee.Reducer.mean(),'EVI', 5000, 'system:time_start', 'label');  
  
print (ndvi_chart_easy, evi_chart_easy)
```

---

### Part 3: MODIS NDVI Time Series in GLAM

#### About the GIMMS Global Agricultural Monitoring System
The GIMMS Global Agricultural Monitoring (GLAM) System is a user-friendly tool to view MODIS NDVI imagery and retrieve MODIS NDVI time series data. The system provides near real-time, science quality, global 8-day composites of MODIS Terra and Aqua NDVI. These datasets are derived from the Collection 6 MOD09 and MYD09 surface reflectance products.

Users can select NDVI data by administrative boundary, crop reporting district, or a global 0.25 degree grid. Optional crop masks are also provided.

The GIMMS MODIS GLAM System is developed and provided by the NASA/GSFC/GIMMS group for the USDA/FAS/IPAD Global Agricultural Monitoring project. The goal is to provide objective, timely, and regular assessment of the global agricultural production outlook and conditions affecting global food security.

#### 1. Interface
The most recent global NDVI anomalies will be displayed on the map. 
The toolbar at the top of the page allows your to pan, zoom, select shapes (boundaries for NDVI data), remove shapes, and save snapshots. 
The panel on the left side of the screen allows you to select data, boundaries, and crop masks.

#### 2. Selecting a Study Area
:arrow_right: Open a web browser and go to https://glam1.gsfc.nasa.gov

:arrow_right: Chose either **Terra** or **Aqua** as the satellite. 

:arrow_right: Use the **Layer** dropdown to select **NDVI Anomalies**, a natural cover composite (**621**), or the original **NDVI** values. Use **Year** and **Start DOY: MM/DD Range** the date of the layer. These preferences will be used for visualization only (i.e. won't affect the time-series)

In the **Overlays/Shape** section, select each of the different boundary types. These shapes define the region over which the NDVI values will be aggregated. For example, if you select Senegal using the **Admin Level 0** layer, the mean NDVI for the entire country will be calculated for each available observation.

:arrow_right: Navigate to Iowa - a.k.a. the heart of the US Corn Belt. 

:arrow_right: Add the **Crop Reporting District** shape layer, and activate the **Select Shape** tool at the top of the map. 

:arrow_right: Scroll over the the map and find **Iowa CRD 70** and click select it. Multiple shapes may be selected by holding the shift key. Shapes can be removed by activating the **Remove Shape** tool.

#### 3. Generate Time Series
:arrow_right: Notice that your **Selected IDs** appear in the bottom of the panel. Click **Submit** to generate the time series for your region.
:arrow_right: Examine all the charts! 
:arrow_right: You can configure the time preferences to better reflect the phenological cycle or your years of interest in the **Configure** panel.
:arrow_right: Use the **Download CSV Table** button at the top to save the data record. 

##### Plot 1: Time Series
Displays the annual NDVI values for each year selected. The Min/Max bounds show the range of all values in the series, and the Mean shows the average of all values for the series. 
##### Plot 2: Cumulative Time Series
Cumulative NDVI may be used an an indicator of how productive the vegetation is. This chart offers a visualization of how productive the selected years are, compared to the average year.
##### Plot 3: Historical Time Series
The top plot shows the record of NDVI observations over the available data record. The long-term mean for all observations is also displayed.
The bottom plot shows the NDVI anomalies over the available data record. The NDVI anomalies are equal to the NDVI observations minus the long-term mean.
##### Plot 4: Interactive Time Series
This plot has the same information as Plot 1, but offers more control over the visualization and displays the data values as you move your cursor over them.

#### 4. Apply Crop Masks
:arrow_right: Keep the chart tab open and go back to the GLAM homepage.

Now, we will apply a crop mask and see if/how the NDVI values are affected.

:arrow_right: Open the **Crop Mask** dropdown on the the left panel and examine the crop mask options. 
:arrow_right: In the United States the NASS (National Agriculture Statistic Service) mask will have the most precise information. Open the drop down and select **Corn**. This will mask all land that is not a corn crop.
:arrow_right: Scroll over some of the CRDs, the pop-up box will show you the percent cover (PC) based on the NASS Corn mask. 
:arrow_right: It turns out our CRD only has 15% corn cover, so the average NDVI for the whole region may not be representative of the corn NDVI.
:arrow_right: Select **Iowa CRD 70** and **Submit**
:arrow_right: Visually exampine the charts - did the crop mask change anything? 
:arrow_right: Download the CSV table for this chart as well. 

#### 5. Compare the NDVI Series

:arrow_right: Open the two CSVs. Notice there is basic information about your selection and the mask applied at the top of the file. 

The exported data includes the start and end date of the MODIS 8-day period, the source (Standard-STD, or Near Real Time - NTD),  the sample value, sample count (number of samples contributing to the value - indicates data quality), the long-term mean NDVI, mean sample count, and the NDVI anomaly (sample value - long-term mean).

:arrow_right: Copy and paste the crop-masked data to the unmasked CSV.
:arrow_right: Create a line plot with both the unmasked NDVI and the masked NDVI.

> What do you notice about how the two compare?




  
  

