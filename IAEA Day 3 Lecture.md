## IAEA Day 3 Lecture
## MODIS and NDVI Timeseries
---
### Goals:

- Become familiar with MODIS data and the many operational data products available

- Learn about resources for operational agricultural monitoring

- Understand basics of data processing on Google Earth Engine

- Explore MODIS NDVI time series using Google Earth Engine and GLAM

___
### Agenda:
1. Image of the Day:
   - South America
2. MODIS
   - Aqua and Terra
   - Resolution
   - Data Organization
   - Data Access
3. Operational Agricultural Monitoring
4. Google Earth Engine
   - Applications
   - Platforms
   - Geographic Data Structures
   - Data Catalog
5. Tutorial: NDVI in Google Earth Engine and GLAM

___

### MODIS 

MODIS, or the Moderate Resolution Imaging Spectroradiometer,  is a key instrument in building our understanding of land, ocean, and lower atmosphere dynamics on regional and global scales. MODIS data contributes to a number of Earth system models and operational data products that help scientists, researchers, and decision makers monitor and protect our environment. The major advantages of using MODIS data include the frequent repeats, long time series, large swath width, and concurrent land and atmospheric observations. 

#### Terra and Aqua

- Terra and Aqua are the two Earth Observing Satellites that carry MODIS, among several other instruments (from several other countries).
- The onboard instruments observe Earth's atmosphere, ocean, land, snow and ice, and energy budget. These simultaneous observations provide valuable insight into Earth system dynamics.
- Terra orbits from north to south (descending mode) and crosses the equator at approximately 10:30 local time. Aqua orbits from south to north (ascending mode) and crosses the equator at approximately 13:30 local time.

*Terra Instruments*

- Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)
- Clouds and Earth's Radiant Energy System (CERES)
- Multi-angle Imaging Spectroradiometer (MISR)
- Moderate Resolution Imaging Spectroradiometer (MODIS)
- Measurements of Pollution in the Troposphere (MOPITT)

*Aqua Instruments*

- Atmospheric Infrared Sounder (AIRS)
- Advanced Microwave Sounding Unit (AMSU-A)
- Humidity Sounder for Brazil (HSB)
- Advanced Microwave Scanning Radiometer for EOS (AMSR-E)
- Moderate Resolution Imaging Spectroradiometer (MODIS)
- Clouds and Earth's Radiant Energy System (CERES)

###### Resources
[Terra \| The EOS Flagship](https://terra.nasa.gov/)
[Aqua Earth-observing satellite mission \| Aqua Project Science](https://aqua.nasa.gov/)



#### MODIS Resolution

##### Spatial Resolution

Like Landsat, different spectral bands have different resolutions. Most of the bands intended for Land Remote Sensing as a primary use have a resolution of 250 m or 500 m. 

- 250 m (Bands 1 and 2)
- 500 m (Bands 3 - 7)
- 1000 m (Bands 8 - 36)
- Swath width is 2330 km

##### Spectral Resolution

MODIS has 36 distinct bands. The primary uses include:

- Land/ Clouds / Aerosols
- Ocean color/ Phytoplankton/ Biogeochemistry
- Atmospheric Water Vapor
- Surface/ Cloud Temperature
- Atmospheric Temperature
- Cirrus Clouds/ Water Vapor
- Cloud Properties
- Ozone
- Surface/ Cloud Temperature
- Cloud Top Altitude

##### Temporal Resolution

- Terra and Aqua are both in a circular, sun-synchronous, near-polar orbit about 705 km above Earth
- 16 orbits per day. Together, the revisit period is 1-2 days.
- Terra data is available starting in 2000 Aqua data is available starting in 2002.

##### Radiometric Resolution

- 12 bits

#### MODIS Data Organization

##### Archive Structure
*Level 1 Products*

- Level 1A - Raw radiances/ digital numbers(?) collected from all 36 bands. Some quality indicators (missing or bad pixels) and ancillary data included.
- Level 1B - Calibrated and geolocated at-aperture radiances for all 36 bands. Radiances are in W/(m2-µm-sr). Includes quality flags, error estimates, and calibration data.
- Geolocation Fields - Calculated for each 1km MODIS IFOV. Includes a number of positional fields to model the ideal 1 km band on Earth's surface between all 10 of the satellite's detectors. 

*Available Datasets*

Atmosphere 
- Aerosol Product
- Total Precipitable Water
- Cloud Product
- Atmospheric Profiles
- Atmosphere Joint Product
- Atmosphere Gridded Product
- Cloud Mask

Land 
- Surface Reflectance
- Land Surface Temperature and Emissivity (MOD11)
- Land Surface Temperature and Emissivity (MOD21)
- Land Cover Products
- Vegetation Index Products (NDVI and EVI)
- Thermal Anomalies - Active Fires
- Fraction of Photosynthetically Active Radiation (FPAR) / Leaf Area Index (LAI)
- Evapotranspiration
- Gross Primary Productivity (GPP) / Net Primary Productivity (NPP)
- Bidirectional Reflectance Distribution Function (BRDF) / Albedo Parameter
- Vegetation Continuous Fields
- Water Mask
- Burned Area Product

Cryosphere 
- Snow Cover
- Sea Ice and Ice Surface Temperature

Ocean
- Sea Surface Temperature
- Remote Sensing Reflectance
- Chlorophyll-a Concentration
- Diffuse Attenuation at 490 nm
- Particulate Organic Carbon
- Particulate Inorganic Carbon
- Normalized Fluorescence Line Height (FLH)
- Instantaneous Photosynthetically Available Radiation
- Daily Mean Photosynthetically Available Radiation

Note that MODIS Aqua products have an MYD prefix, MODIS Terra products have a MOD prefix, and combined products have a MCD prefix. 
##### Tile System
- MODIS products are distributed in multiple formats:
  - 250m, 500m, 1km, and 0.05 degree spatial resolution
  - Sinusoidal, Geographic, or Lambert Azimuthal Equal-Area (Polar regions only)
  
- The 250m, 500m, and 1km MODIS land data products are distributed as tiles.
  - The non-overlapping tiles are approximately 10 degrees square (at the equator).
  - The sinusoidal projection is the default projection for tiles. 
  - The boundaries of the tiles are based on the MODIS Sinusoidal Tile Grid.

- The 0.05 degree (~5.5 km) products provide global coverage.
  - The 0.05 degree product is referred to as the Climate Modeling Grid (CMG).
  - The CMG uses a simple Geographic lat/lon projection  

###### Resources
[MODIS Grids | NASA GSFC MODIS Land](https://modis-land.gsfc.nasa.gov/MODLAND_grid.html)

[Data Products | NASA GSFC MODIS](https://modis.gsfc.nasa.gov/data/dataprod/)

#### Data Access

The data are distributed between several DAACs (Distributed Active Archive Center) based on product type.
- MODIS level 1 data, geolocation, cloud mask, and atmosphere products:
http://ladsweb.nascom.nasa.gov/
- MODIS land products:
https://lpdaac.usgs.gov/
- MODIS cryosphere products:
http://nsidc.org/daac/modis/index.html
- MODIS ocean color and sea surface temperature products:
http://oceancolor.gsfc.nasa.gov/

[Earthdata](https://urs.earthdata.nasa.gov/) is a web application that brings together collections of data across multiple DAACs and allows users to search, visualize, and download Earth observation data.



---

### Operational Agricultural Monitoring

To facilitate the use of remotely sensed data by land managers and decision makers, several organizations maintain resources for operational agricultural monitoring. Two examples of very useful data collections for agriculture monitoring are Crop Explorer and GLAM.

##### Crop Explorer

Crop Explorer is a collaborative effort of USDA FAS and IPAD. They curate and publish regular Commodity Intelligence  Reports that describe the latest regional trends with plenty of satellite and model-derived maps and charts to provide supporting evidence. 

Crop Explorer also  hosts an exentsive  archive of NDVI, NDVI anomaly, weather, drought, soil moisture, growing season, and more. All of the data is regularly updated so analysts can easily find current data. 

##### Global Agricultural Monitoring System (GLAM)

GLAM is a user-friendly tool to view MODIS NDVI imagery and retrieve MODIS NDVI time series data. The system provides near real-time, science quality, global 8-day composites of MODIS Terra and Aqua NDVI. Users can select NDVI data by administrative boundary, crop reporting district, or a global 0.25 degree grid. Optional crop masks are also provided.

The GIMMS MODIS GLAM System is developed and provided by the NASA/GSFC/GIMMS group for the USDA/FAS/IPAD Global Agricultural Monitoring project to support Crop Explorer.

The goal is to provide objective, timely, and regular assessment of the global agricultural production outlook and conditions affecting global food security.

---
### Google Earth Engine 
Google Earth Engine (GEE) is a computing platform that allows users to run geospatial analysis using Google's infrastructure. GEE combines a massive catalog of satellite imagery with analysis capabilities that allow researchers to quickly and efficiently detect changes, trends, and patterns on the Earth's surface. 

###### Resources:
[Gorelick, et al. (2017). Google Earth Engine: Planetary-scale geospatial analysis for everyone.](https://www.sciencedirect.com/science/article/pii/S0034425717302900)

#### GEE Applications
##### Applications vs Apps

Many GEE applications are built as *Apps*. An App is a publicly accessible user interface for Earth Engine analysis. This makes it easy for experts to develop an application that can be shared and used by a broader community. One example is EEFlux, which uses Landsat data to produce evapotranspiration maps on demand. 

##### Mapping Global Forest Change
- Matt Hansen and his team at the University of Maryland, used Earth Engine to survey global tree cover from 2000 -2012.
- The scientists at Univeristy of Maryland developed the models for handleing the Landsat data, and the computer scientists at Google figured out how to process it using the Google Earth Engine platform.
- They analyzed nearly all global land, about 128.8 million km, using over 650,000 Landsat 7 images.  In total,  20 terapixels of Landsat data were processed using one million CPU-core hours on 10,000 computers in parallel - a feat that wouldn't have been possible without Google parallel computing technology.  
- They found global forest loss of 2.3 million square kilometers , and a gain of 0.8 million square kilometers. 

##### Malaria Prediction Mapping 
- A team at University of California San Francisco is working to create a Google Earth Engine app that will help health care workers around the world predict were malaria is likely to be transmitted.
- With these risk maps, health workers will know how to most effectively and efficiently target their resources.
- The platform will enable local health care workers to upload their own data on malaria cases, and combine it with real-time satellite data. Using relationships between outbreaks and the satellite-derived variables such as rainfall, vegetation, and soil moisture, the tool will predict the most vulnerable locations.   

[Earth Engine Apps](https://developers.google.com/earth-engine/apps)
[Case Studies | Google Earth Engine](https://earthengine.google.com/case_studies/)
[Hansen et al (2013) High-Resolution Global Maps of 21st-Century Forest Cover Change](https://science.sciencemag.org/content/342/6160/850)
[UCSF, Google Earth Engine Making Maps to Predict Malaria | UCSF](https://www.ucsf.edu/news/2014/09/116906/ucsf-google-earth-engine-making-maps-predict-malaria)


#### Platforms
##### [Timelapse](https://earthengine.google.com/timelapse/)
- A stand-alone feature that allows you to zoom to any part of the world and play a "video" of all the satellite images in a time-series for that area.
- Timelapse videos are a powerful (and fun!) tool for visualizing how Earth has changed over the last ~35 years. 

##### [Google Earth Engine Explorer](https://explorer.earthengine.google.com/#workspace/9Q8f-z1vWaj)
- A web interface to the Earth Engine API
- Allows anyone to visualize data in the public data catalog
- Users can also import, manipulate, save, and export data.

##### [Code Editor](https://code.earthengine.google.com/)

*Scripts*

- Scripts (written in JavaScript, by default) can be used to process data from the Earth Engine catalog and/or your own uploads.
- Scripts you write will be saved in the **Owner** folder
- Scripts shared by your collaborators will be saved in either the **Reader** or **Writer** folder, depending on your permission level.
- The **Examples** folder contains a very useful collection of prewritten scripts for several common processes on GEE.
  - Clicking on an example will automatically open it in the script editor window. 
  - Once opened, the example script can be run (as is) as a demonstration of the process and output.
  - Example scripts can also be modified and saved to your scripts. 

*Docs*

- The **Docs** tab contains brief documentation for different functions available in GEE.
- The functions are organized by method.
- Clicking a function will open a dialog box with a brief description, arguments, and outputs. 

*Assets*

- In addition to the publicly available datasets, you can add your own raster or vector data to GEE - these data are referred to **Assets**
- **Assets** may also include any results of processing run on GEE.
- **Assets** are saved in your user folder **users/username**, and you can organize and share your data.

###### Resources:
[Google AI Blog: An Inside Look at Google Earth Timelapse](https://ai.googleblog.com/2019/06/an-inside-look-at-google-earth-timelapse.html)
[Platform – Google Earth Engine](https://earthengine.google.com/platform/)

#### GEE Geographic Data Structures

`Image`/ `ImageCollection`
 - Raster data
 - Composed of one or more image bands - each with its own name, datatype, scale, mask and projection.
 - Image metadata is stored as a set of properties in a dictionary.
 - An `ImageCollection` collection contains a stack, most likely a time series, of images.

`Feature`/ `Feature Collection`
 - Vector data
 - Composed of a `Geometry` and a dictionary of properties
 - `Geometry` objects are described in detail in the [GeoJSON spec](https://tools.ietf.org/html/rfc7946), but generally include `Point`, `LineString`, `LinearRing`, and `Polygon` 
  - A `FeatureCollection` contains multiple features

##### Resources:
[Image Overview](https://developers.google.com/earth-engine/image_overview)
[ImageCollection Overview](https://developers.google.com/earth-engine/ic_creating)
[Geometry Overview](https://developers.google.com/earth-engine/geometries)
[Feature Overview](https://developers.google.com/earth-engine/features)
[FeatureCollection Overview](https://developers.google.com/earth-engine/feature_collections)

#### Data Catalog
- The data catalog contains a cast collection of current and historical imagery.
- You can search it by type, sensor, variable, etc.
- Once you identify the dataset, you can read some of the documentation and see examples of how it should be imported into your script.
- All of the datasets have a dataset id. Depending on the dataset type (`Image`, `ImageCollection`, etc.) you will use the appropriate constructor (e.g. `ee.ImageCollection(dataset_id)`) to import it. 