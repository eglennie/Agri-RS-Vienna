## Downloading Imagery and QGIS processing

### Remote Sensing for Agriculture Day 1 Tutorial

___
### In this tutorial, you will learn:
- How to access Landsat Level-1 and Level-2 data
- How to optimize raster display in QGIS
- How to make image composites 
- How to calculate band indices
___
### Outline:
1) Download Images via EarthExplorer
2) Discussion: Defining a Remote-Sensing Problem
3) Level-1 Landsat Data
4) Level-2 Landsat Data
___
### Part 1: Downloading Landsat Images via EarthExplorer

#### 1. Go to http://earthexplorer.usgs.gov
EarthExplorer is an online tool that allows users to access the Earth science data from the USGS archives. It provides online search, browse display, metadata export, and data download for several USGS datasets.

<<img src="https://drive.google.com/uc?export=view&amp;id=1dF3JqWm7ByDQjVLwNVYqgf5BklsGc0CG" alt="EarthExplorer" style="zoom: 50%;" />


#### 2. Sign in to your EROS account
If you have not registered for an account, click **Register** and fill out your information.

<img src="https://drive.google.com/uc?export=view&amp;id=1md5gIXsp4zs-OuD9eGn3GUuHQJzgDXAh" alt="EROS" style="zoom: 50%;" />

#### 3. Input parameters in the *Search Criteria* tab to query the archives by location and date.

*Location Options*

   - Geocoder - Address/Place: Specify a City, etc.
   - Geocoder - Feature: Specify search extent and feature type (physical or administrative).
   - Geocoder - Path/Row: The path and row refer to the location of a scene on the Landsat WRS2 grid. You can use the [Landsat Acquisition Tool](https://landsat.usgs.gov/landsat_acq#convertPathRow) to convert Lat/Long coordinates into Path/Row. Try finding the Path/Row of our current location.
   - KML/Shapefile: Upload a KML or shapefile of your search area.
   - Polygon: Use the map to draw a polygon or manually specify the coordinates of the vertices. Toggle the **Decimal/Minute/Second** and **Decimal** buttons to change the format of the coordinates. 
   - Circle: Specify a center coordinate and radius of your search area.
   - Predefined Area: Only available for states/districts in the United States. 

:arrow_right: Use one (or more!) of the options to locate imagery for our current location. Perhaps search our current address or zoom to our location and click **Use Map**.

![Location](https://drive.google.com/uc?export=view&id=1h3m03iVGH2qZEBJAhCeHhuYaTO9U5iKF)

*Date Range*

   - Define the start and end date for your search
   - Use **Search months** to check/uncheck months to include for your study.
   - For example, if you want to find all images collected in July and August from 2000-2019, enter 01/01/2000, 09/01/2019 and check only July and August.

:arrow_right: Find all August and September images collected over the last 5 years

*Result Options*

  - Use the **Number of records to return** dropdown to limit the number of images found. 
    

:arrow_right: Leave the number of records set to 100

<img src="https://drive.google.com/uc?export=view&amp;id=1EFYlIUoESYdJelL-bBxfI0g8MhKLCHOG" alt="Date" style="zoom: 50%;" />

#### 4. Continue to the *Dataset* Tab
As you can see, there are many datasets available from the USGS archive!

:arrow_right:  Select **Landsat**, **Collection 1 Level-1**, **Landsat 8 OLI/TIRS CS Level-1** and **Landsat 7 ETM+ C1 Level-1**

   - Level-1 Landsat data includes the raw DNs, which need to be atmospherically corrected and converted to surface reflectance.

   - Level-2 Landsat data provides analysis-ready surface reflectance product. However, the Level-2 data must be ordered ahead of time

<img src="https://drive.google.com/uc?export=view&amp;id=1Sc-8cf5fzLVmcYZPpNI96KryLTzJyGJb" alt="datasets" style="zoom:50%;" />

#### 5. Explore the *Additional Criteria* Options
   - The additional criteria are specific to each data set.
   - If you have selected multiple datasets, you will need to specify the criteria for each.

:arrow_right: Skip the additional parameters for now, let's look at our results! (Click **Results**)
    
#### 6. The *Results* panel displays the images found based on our query.
Notice that the Results are separated by data set.

:arrow_right: Use the **Data Set** dropdown to switch between Landsat 8 and Landsat 7

:arrow_right: Examine images from Landsat 7 and Landsat 8 - Do you notice any major differences between the two?

:arrow_right: Click the **Show Result Controls** dropdown

:arrow_right: Select **Show All Footprints From Current Page** and/or **Show All Browse From Current Page** to see a sample of your results.

Individual images are displayed as thumbnails. The ID (image name), Acquisition Date, Path, and Row are noted next to the thumbnail.     

:arrow_right: Hover over the icons for each image to learn what they do. Try some of the different display options.

<img src="https://drive.google.com/uc?export=view&amp;id=1-0qjL7yUA_41BgGXq16b13_CvgEUhkC4" alt="Results" style="zoom: 67%;" />

#### 7. Select Level 1 Image and Download

:arrow_right: Find the Landsat 8 Image collected on September 16, 2019 in Path 189 Row 27.

:arrow_right: Click the **Download Options** icon, and then click **Download** next to the Level-1 GeoTIFF Data Product option.

<img src="https://drive.google.com/uc?export=view&amp;id=1OjPS1qtv5Hx5lfGdZXsHpmRmrd50w833" alt="DownloadOptions" style="zoom: 50%;" />

You should see the download begin. The download time will vary, but expect it to take several minutes.

#### 8. Download Level-2 Image 

This image is the Level-2 product corresponding to the Level-1 product we are downloading from EarthExplorer. Since the Level-2 Images are on-demand we ordered the Level-2 images ahead of time. If you need to order Level-2 images in the future, follow the same process as above but select the On-demand level-2 products in the **Data Set** section. 

:arrow_right: Go to [Google Drive | Day 1 Landsat Images](https://drive.google.com/open?id=1blmtbLqYoygGAYvrJc9Q4sox500YpK4h) and the **LC081890272019091601T1-SC20191006192024_SR** folder.

---
### Part 2: Discussion - Defining A Remote Sensing Problem (Discussion)

While we wait for our images to download -
- What are the applications for Remote Sensing data in your work?
- Do you see any opportunities for remotely sensed data to fill gaps or issues with ground collected data/current methods?
- What would the ideal data look like?

  ---
### Part 3: Level-1 Landsat Data 

#### 1. Unzip Level-1 Landsat files

:arrow_right: Navigate to the folder were the Landsat images downloaded. Move the files to a more logical location, if you would like. 

:arrow_right: Right click and  unzip the file.

<img src="https://drive.google.com/uc?export=view&amp;id=1VVcoxAZfRLZeLbHPPl4aE1YkvVMK63Na" alt="L1 Files" style="zoom:50%;" />

- The file will be downloaded as a .tar.gz file, so it will need to be unzipped twice. Windows users can use 7zip to accomplish this. 

- Once unzipped, examine the contents. You should see metadata files, a quality assessment (BQA) file, and a GeoTIFF for each band (e.g. B1, B2, B3)

- The QA band is a 16-bit band that allows users to apply per pixel filters. Each pixel is a bit-packed combination of surface, atmospheric, and sensor conditions.  

###### Resources

[Landsat Collection 1 Level-1 Quality Assessment Band](https://www.usgs.gov/land-resources/nli/landsat/landsat-collection-1-level-1-quality-assessment-band?qt-science_support_page_related_con=0#qt-science_support_page_related_con)
[Landsat Level-1 Quality Assessment Tools](https://www.usgs.gov/land-resources/nli/landsat/landsat-level-1-quality-assessment-tools?qt-science_support_page_related_con=2#qt-science_support_page_related_con)

#### 2. Open QGIS

:arrow_right: Click the **New Project** button at the top left of the screen.

#### 3. Add Landsat Image to QGIS

:arrow_right: Open the **Data Source Manager**, and go to the **Raster** tab. 

:arrow_right: Navigate to the unzipped Landsat files. Select all .tif files, click **Open**, and then **Add**

All of the image bands should be loaded to the project, they will appear in the **Layers** panel. Toggle the layer on/off using the check box. 

<img src="https://drive.google.com/uc?export=view&amp;id=1RYOYBrMna1P-Dw2CuqfhqWYeBk_Fs6L6" alt="AddL1" style="zoom: 50%;" />

#### 4. Make a Virtual Raster
Displaying all the image bands as separate layers is not useful for interpretation or analysis. Instead, we can create a *Virtual Raster*, or a way to associate all of the layers without creating a new file.

:arrow_right: Go to **Raster**, **Miscellaneous**, **Build Virtual Raster**.

:arrow_right: Click the **...** icon next to **Input Layers**. 

:arrow_right: Select B1-B7 and B9. Bands 8 (15m Panchromatic), 10 and 11 (100m Thermal) have different spatial resolutions than the other images, so we don't want to include them in the stack. 

:arrow_right: Click the **Advanced Parameters** dropdown and input **0** as the **Nodata value for input bands**. This will eliminate the black box around the image and improve display.

:arrow_right: Specify a filename for the virtual raster

:arrow_right: Leave other defaults, and **Run**.

![VRT](https://drive.google.com/uc?export=view&id=1x87CE--ppNYI9IbZI05nfNSWPqJnt4om)

###### Resources:
[Raster Miscellaneous \| QGIS Documentation](https://docs.qgis.org/3.4/en/docs/user_manual/processing_algs/gdal/rastermiscellaneous.html#gdalbuildvirtualraster)

#### What you need to know about image composites:
- Although each image contains several different bands, we can only visualize three bands at a time. 
- Our eyes are sensitive to Blue, Green, and Red (RBG) light, so we connect the image bands to the RBG channels and interpret the scene based on the color of the composite.  This requires knowledge of color properties (e.g. Blue + Red = Purple) and spectral properties (e.g. in the visible spectrum, plants reflect the most green light). 
- The true color composite may also be referred to as a natural color composite.  Any color composite that includes spectral bands outside the visible range may be referred to as a false color composite.
- It is a common convention to refer to a composite by the bands included, as they correspond to the "RGB" channels. For example, a Landsat 8 true color composite may also be referred to as a "432" composite, because Band 4 = Red, Band 3 = Green, and Band 2 = Blue. Since band number/placement differs by sensor, these names are sensor-specific. 

<img src="https://drive.google.com/uc?export=view&amp;id=1PKNbAviM8XqEqhbMfhvszY-GAa1f_v3F" alt="Composites" style="zoom:67%;" />

Image source: [Natural and False Color Composites| Humboldt State University](http://gsp.humboldt.edu/OLM/Courses/GSP_216_Online/lesson3-1/composites.html)

#### 5. Create a True Color Composite (432)

:arrow_right: Right click the virtual raster, and go to **Properties**, then **Symbology**.

:arrow_right: Ensure the **Render Type** is set to **Multiband color**. 

This allows us to make a composite image from 3 different bands. There are other options available for displaying a single-band raster. 

:arrow_right: To make a true color composite, lets "connect" **Band 4** (in a Landsat 8 image, this is red) to the **Red band**, then **Band 3** to **Green band** and **Band 2** to **Blue band**.

:arrow_right: Click **OK**, inspect the image composite.

> Does the composite look similar to "natural" colors?

<img src="https://drive.google.com/uc?export=view&amp;id=1tNuQbUranLIT1M2x3D3rPk5qVleHP8dN" alt="DN432settings" style="zoom: 80%;" />

##### Resources: 
[Raster Properties Dialog \| QGIS Documentation](https://docs.qgis.org/3.4/en/docs/user_manual/working_with_raster/raster_properties.html)

#### 6. Create a False Color Composite (543)

:arrow_right: Right click the virtual raster, and go to **Properties**, then **Symbology**.

:arrow_right: Now, connect **Band 5** to  **Red band**, **Band 3** to **Green band**, and **Band 2** to **Blue band**.

:arrow_right: Click **OK**, inspect the image composite
> How does the vegetation look?

#### 7. Display Single Band Image

:arrow_right: Right click the virtual raster, and go to **Properties**, then **Symbology**.

:arrow_right: Change **Render Type** to **Singleband gray**. 

:arrow_right: Select **Band 8** as the **Gray band**. This is actually Landsat Band 9, but it is the 8th band in the virtual raster because we skipped band 8.

:arrow_right: Click **OK**

>  What does Landsat band 9 show?

![SingleBand](https://drive.google.com/uc?export=view&id=1OZOhSG4h9QHpn41NPhgb0TJRN7UpHK7D)



#### 8. Adjust Display Properties

##### Stretching

- "Stretching" a raster refers to redistributing the band values to optimize the histogram distribution.
- Stretching is only used for display purposes - the actual pixel values will be unaffected. 
- Different stretch methods yield different results; QGIS offers a couple of options for a Min/Max stretch. 
- In QGIS, the default **Min** and **Max** values will be based on the values of the raster. Let's explore the impacts of changing these values.

##### Min/ Max Value Options:

- User Defined: Overwrite the default min and max values. 
- Cumulative count cut: Remove outliers by clipping anything that is in outside of the specified range, which is based on top and bottom percentages of data. 
- Min/max: uses the whole range of values in the image band.
- Mean +- standard deviation: Clips anything outside of the specified range, which is based on standard deviation. 

##### Statistics extent

By default, statistics are calculated entire raster, but if you select **Current canvas** the min/max statistics will be calculated based on your current map view. The value range of your current extent will likely be smaller than the entire raster, so the contrast will be enhanced as you can around the map.

![Stretch](https://drive.google.com/uc?export=view&id=19x9OVc9C18XmVTVMtmDXgEH3EuVRArIC)

Band 8 is the panchromatic band. The pan band receives reflected energy from a broader section of the spectrum, enabling a higher spatial resolution (15m). The pan band can be useful for distinguishing smaller features in the image.  It is often used to 'pansharpen' (increase the spatial resolution) of the other bands in the image.

:arrow_right: Find the **LC08_L1TP_189027_20190916_20190925_01_T1_B8** layer (not in the virtual raster)

:arrow_right: Open the **Layer Properties** dialog box, go to the **Symbology** tab, and set **Contrast Enhancement** to **Stretch to Min/Max**

:arrow_right: Click the **Min/Max Value Settings** dropdown menu.

:arrow_right: Try adjusting the values and inspecting the map display. 

> What settings work best for your image?
---
### Part 4: Level-2 Landsat Data 

#### 1. Unzip and examine Level-2 Landsat files  

:arrow_right: Navigate to the folder containing the Level-2 data (downloaded from Google Drive in Part 1, Step 8.) 

:arrow_right: Unzip the .tar.gz file

> What do you notice about the contents of the file? How does it compare to the Level-1 data?

#### 2. Remove Level-1 Layers

:arrow_right: Remove all of the Level-1 bands (not the virtual raster) from the project. Remove layers by selecting (can select multiple with shift button) and then clicking the **Remove layer** icon.

:arrow_right: Rename the "Virtual" layer to "Virtual Level 1". (Right-click layer, **Rename Layer**)

<img src="https://drive.google.com/uc?export=view&amp;id=1SnWTmtF7l9gqZaxvzHVed7r_7gjwx2KT" alt="Remove L1" style="zoom: 50%;" />

#### 3. Add Level-2 Data to QGIS Project

:arrow_right: Create another Virtual Raster for the Level-2 data: **Raster** &rightarrow; **Miscellaneous** &rightarrow;  **Build Virtual Raster** &rightarrow; **Input Layers:  Band 1 - Band 7** &rightarrow; **Nodata value** = -9999  (The no data value is changed from 0 to -9999 in the Level-2 product) &rightarrow; **Save as...** &rightarrow; **Run**

:arrow_right: Remove all Level-2 layers (not the virtual raster)

:arrow_right: Rename the new "Virtual" layer to "Virtual Level 2"

<img src="https://drive.google.com/uc?export=view&amp;id=1kwbZbtm5MWbMlYEGXTgO2rUZNn_mLz8C" alt="Add L2" style="zoom:67%;" />

#### 4. Compare the Level-1 (Calibrated DNs) and Level-2 (Surface Reflectance)

:arrow_right: Use the symbology settings to create a true color composite (432) for both virtual rasters (repeat Part 3, step 5)

:arrow_right: Use the check boxes in the Layer panel to toggle between the two images.

> How do they compare? What part of the image shows the largest adjustment?

#### 5. Try Different Band Combinations

:arrow_right: Open  [Landsat Band Characteristics and Composites]( https://github.com/eglennie/Agri-RS-Vienna/blob/master/Landsat8_Band_Characteristics_Combos.md) table on GitHub

:arrow_right: Test different composites and interpret some of the features in the image. 

#### What you need to know about band indices:
- Band indices, or ratios, enhance certain spectral response characteristics to help distinguish surfaces.
- Indices are commonly used to highlight snow, water, urban, and vegetation.
- The Normalized Difference Vegetation Index (NDVI) is perhaps the best known band index. 
  - Healthy vegetation absorbs red light and strongly reflects NIR. 
  - NDVI accentuates this characteristic to highlight vegetation.
  - Mathematically, NDVI values can range from -1 to +1. Generally: Water is the most negative, barren land is around 0, grassland/shrubland has a low positive value (likely less than 0.4), and dense vegetation has a high positive value.
  - The major weakness of NDVI is that it tends to overestimate low values and underestimate high values (due to saturation)
- There are several vegetation indices, each with their own strengths and weaknesses. NDVI, however, benefits from being the most widely-used and well studied. 

#### 6. Calculate Normalized Different Vegetation Index (NDVI)

:arrow_right: Go to **Raster** in the QGIS toolbar &rightarrow; **Raster Calculator**

:arrow_right: Use the **Raster Calculator** to construct the equation below using the Level-2 data (indices should be calculated with surface reflectance data)

$$
NDVI = \frac{NIR-Red}{NIR+Red} 
$$

:arrow_right: Specify a name for the **Output layer**

:arrow_right: Click **OK**

#### 7. Adjust NDVI Symbology

:arrow_right: Right-click **NDVI** &rightarrow; **Properties**&rightarrow; **Symbology** &rightarrow; **Render type = Singleband pseudocolor**

:arrow_right: Adjust the Min/Max values to **Cumulative** or **Mean+- Standard Deviation** 

:arrow_right: Click the **Color ramp** dropdown menu to see the preset color ramp options. Select **Spectral**. 

:arrow_right: Vegetation is often symbolized using a Red to Green color ramp. Adjust **Spectral** by clicking the gradient and setting **Color 2** to Green.

:arrow_right: Since 0 typically corresponds to barren, and slightly positive corresponds to sparse vegetation, let's set yellow (neutral) to zero. On the **Value** side of the color ramp, type **0** next to yellow. 

<img src="https://drive.google.com/uc?export=view&amp;id=1qpOI_NT4_hFkXiAzSQRHbFsuqSUM_B7M" alt="NDVIsymbologyOptions" style="zoom:67%;" />

<img src="https://drive.google.com/uc?export=view&amp;id=1shzdOQaYqAcn3bZsVQdTYqBhC4pcPrnF" alt="NDVIsymbologyImage" style="zoom:67%;" />

#### 8. Calculate Other Indices

##### Soil Adjusted Vegetation Index (SAVI)
Similar to NDVI, SAVI highlights vegetation using a ratio of the NIR and Red reflectance. SAVI attempts to adjust for the influence of soil brightness in areas with sparse vegetation cover.

$$
 SAVI = \frac{NIR-Red}{NIR+Red+0.5}\;\cdot\;1.5
$$

##### Enhanced Vegetation Index (EVI)
EVI is also used to indicate vegetation greenness. While NDVI is sensitive to chlorophyll content, EVI has been shown to be more responsive to canopy structure.

$$
EVI = 2.5 \;\cdot\;\frac{NIR - Red}{NIR + 6 \cdot Red - 7.5 \cdot Blue +1}
$$

Where ***G***(2.5) is the gain factor, ***C1***(6) and ***C2***(7.5) are aerosol resistance coefficients and ***L***(1)  is the canopy background adjustment

##### Normalized Difference Water Index (NDWI)
Gao(1996) found that the NDWI can be used to monitor vegetation water content using the NIR and SWIR bands of the image.
$$
NDWI = \frac{NIR - SWIR}{NIR + SWIR}
$$
Landsat 8 has two SWIR bands (6 & 7), but band 6 should be used for SWIR in this equation.

##### Modified Normalized Difference Water Index (MNDWI)
Xu (2006) found that using the green band instead of the NIR was more responsive to open water areas.
$$
MNDWI = \frac{Green - SWIR}{Green + SWIR}
$$

###### Resources:

[Landsat Surface Reflectance-Derived Spectral Indices](https://www.usgs.gov/land-resources/nli/landsat/landsat-surface-reflectance-derived-spectral-indices?qt-science_support_page_related_con=0#qt-science_support_page_related_con)

[Tucker (1979) Red and photographic infrared linear combinations for monitoring vegetation](https://www.sciencedirect.com/science/article/pii/0034425779900130)
[Huete (1988) A soil-adjusted vegetation index (SAVI)](https://www.sciencedirect.com/science/article/pii/003442578890106X)
[Huete et al. (2002) "Overview of the radiometric and biophysical performane of the MODIS vegetation indices" ](https://www.sciencedirect.com/science/article/pii/S0034425702000962#bBIB8)
[Gao (1996) "NDWI - A normalized difference water index for remote sensing of vegetation liquid water from space"](https://www.sciencedirect.com/science/article/pii/S0034425796000673)
[Xu (2006) "Modification of normalized difference water index (NDWI) to enhance open water features in remotely sensed imagery"](http://www.aari.ru/docs/pub/060804/xuh06.pdf)

#### 9. EVI Adjustments

You may notice that the EVI range is extremely large, and that the image doesn't show any variation.

:arrow_right: Open the EVI **Properties**, then **Histogram**

:arrow_right: Zoom in until you see the actual range of values, rather than the outliers.

<img src="https://drive.google.com/uc?export=view&amp;id=1f9TzI30wAHi64sEkHNr7PGPT3NuwVd2G" alt="EVIhist" style="zoom:50%;" />

:arrow_right: Close the histogram and notice the new image stretch. Where are the outliers clustered?

:arrow_right: Open the EVI **Properties** again, and then **Symbology**

:arrow_right: Use the **Singleband Psuedocolor** render type and set the **Min** and **Max** values to -2.5 and +2.5.

Now, we can see the bulk of the values fall within the +-2 .5 range. Due to the adjustment factors, it is okay for EVI values to fall outside of the -1 to +1 range. 

<img src="https://drive.google.com/uc?export=view&amp;id=1xpyNmAl0l8lBngu0WA1kJYezGqALhem3" alt="EVI" style="zoom:80%;" />

#### 10. Compare the Results

##### Identify Tool

:arrow_right: Adjust the symbology and min/max stretch to optimize the display of each index image

:arrow_right: Open the **Identify** tool in the QGIS toolbar

:arrow_right: Zoom to an area of interest and click a pixel. The **Identify Results** panel should open and with the value of the **Current layer** (i.e. whatever layer is selected) displayed. 

:arrow_right: Change the **Mode** to **Top down**, so the values of all active layers at the selected pixel will print (in order of the layers top to bottom)

:arrow_right: Explore the pixel values for several areas throughout the image to compare the indices

<img src="https://drive.google.com/uc?export=view&amp;id=1sGMje24TnH5sxQ1moJQ-3yBiNYQs9Smq" alt="IdentifyTool" style="zoom:50%;" />

##### Histogram

:arrow_right: Select an index layer > **Properties** > **Histogram**

:arrow_right: Save a screenshot of the histogram for each vegetation index so you can compare them side by side

> Do the results for the index images look reasonable?

> How do the vegetation indices compare? How does the min, max, and distribution differ for each?

> Which water index preforms better?

###### Resources:
[QGIS Documentation | General Tools](https://docs.qgis.org/3.4/en/docs/user_manual/introduction/general_tools.html#identify)



