## ### Day 2 Lecture: Landsat and Land Cover Classification

#### Remote Sensing for Agriculture Workshop

#### October 28, 2019

---
### Goals

- Learn about Landsat characteristics, data access, and data applications
- Develop an understanding of the satellite image classification concepts and process
- Practice classifying a Landsat Image in QGIS
___
### Day 2 Agenda
1. Image of the Day
   
   - Eastern Kazakhstan
2. Landsat
   - Applications 
   - Landsat 8 Resolution
   - Data Organization and Access
   - Limitations
3. Image Classification
   - Hard vs. Fuzzy
   - Supervised vs. Unsupervised
4. Supervised Image Classification
   - Training Data
   - Classifier Allocation
   - Accuracy Assessment
4.  Tutorial: Landsat Image Classification in QGIS
___
### Landsat
#### Landsat History 
- Landsat is the longest running continuously acquired collection of space-based moderate resolution land remote sensing data.
- Since 1972, the Landsat series of satellites have provided key information about agricultural productivity, forest monitoring, natural resource management, water quality, regional planning, and emergency response.
- The Landsat program is jointly managed by NASA and the US Geological Survey (USGS)
- There are two Landsat sensors currently in orbit: Landsat 7 and Landsat 8. 

##### Resources

[Markham & Helder (2012) Forty-year calibrated record of earth-reflected radiance from Landsat: A review](https://www.sciencedirect.com/science/article/pii/S0034425712000338)

[Wulder et al. (2012) Opening the archive: How free data has enabled the science and monitoring promise of Landsat](https://www.fs.fed.us/pnw/pubs/journals/pnw_2012_wulder.pdf)

[Roy et al (2014) Landsat-8: Science and product vision for terrestrial global change research](https://www.sciencedirect.com/science/article/pii/S003442571400042X)

#### Landsat Applications 

##### Mapping Water Consumption with Evapotranspiration
- Evapotranspiration (ET), the sum of evaporation and plant transpiration from Earth's surface into the atmosphere, is very useful for accounting for groundwater that is used for agricultural purposes.
- The METRIC model, developed using Landsat Thermal imagery, uses surface temperature and several calibration factors to estimate evapotranspiration. The model was designed to work in the Midwest/western United States, and required several parameters. It also required analysts to download and process the entire Landsat archive.
- Recently, the research team partnered with Google Earth Engine, a cloud-computing platform that enables geospatial analysis on many satellite observation datasets (more on this day 3!)
- EEFlux is the result of their partnership. It is an online application that allows anyone with an internet connection to rapidly produce an evapotranspiration product from their selected Landsat scene.
- The METRIC animation first shows a true color image of a agricultural region in Idaho in 2000. The true color composite transitions into a thermal image, demonstrating the temperature difference between the cooler irrigated fields and warmer surroundings. Finally, the METRIC evapotranspiration map shows water use by the irrigated crops.
###### Resources
[EEFLUX Application](http://eeflux-level1.appspot.com/)
[Overview of Evapotranspiration | NASA ARSET Training](https://arset.gsfc.nasa.gov/sites/default/files/water/Brazil_2017/Day3/S6P1.pdf)
[Allen et al. (2007) Satellite-Based Energy Balance for Mapping Evapotranspiration with Internalized Calibration (METRIC)—Model](https://ascelibrary.org/doi/abs/10.1061/(ASCE)0733-9437(2007)133:4(380))

##### Identifying Crop Type and Extent

- Corn and soy look similar from space, which presents a problem because in the US corn and soybean acreages aren't available until months after harvest - meaning yield forecasts and decisions about crop insurance, commodity markets, land-use, etc. are delayed.
- Researchers at the University of Illinois made a breakthrough when they developed a new technique to identify a corn crop vs a soy crop.
- Instead of using VIS and NIR, two parts of the spectrum that are often used in crop and vegetation mapping, Guan et al (2018) use the Landsat SWIR band - which is particularly sensitive to leaf water content - to distinguish the crops.
- By analyzing 15 years of Landsat data, they found that corn and soybeans have predictably different water content by July. This distinctive feature is captured by the SWIR band. 
- They combine the spectral and temporal information from Landsat in a neural network, and accurately classify corn and soybeans long before the acreages are published.
- The long temporal record of Landsat data presents an opportunity for identifying features using both spectral and temporal information.

###### Resources:
[Satellites, supercomputers, and machine learning provide real time crop data | NASA GSFC Landsat](https://landsat.gsfc.nasa.gov/satellites-supercomputers-and-machine-learning-provide-real-time-crop-type-data/
)

[Cai et al (2018) A high-performance and in-season classification system of field-level crop types using time-series Landsat data and a machine learning approach ](https://www.sciencedirect.com/science/article/pii/S0034425718300610 )



#### Landsat 8 Resolution

##### Temporal Resolution

- Completes 14.5 orbits a day, and the revisit time is 16 days.
- In sun-synchronous, near-polar orbit ~ 705 km above Earth. 

##### Spatial Resolution 

- Collects images in a swath that is about 185km wide, which is later broken up into image chunks (185km x 180km)
- 15 m Panchromatic
- 30 m Optical
- 100 m Thermal

##### Radiometric Resolution 

- Landsat 8: 16 bit or values from 0-4095 (4096 possible values)
- Landsat 5 and 7: 8 bit or values from  0-255 (256 possible values)
- Since Landsat 8 has a greater range of values to assign to the measured radiation, it can record much greater nuance than its predecessors.

##### Spectral Resolution

- 11 Bands total 
- 9 Optical (Optical images are recorded by the Operational Land Imager a.k.a. OLI)
- 2 Thermal (Thermal images are recorded by the Thermal Infrared Sensor a.k.a. TIRS )

###### Resources:
[Landsat Orbit Swath | NASA Goddard Media Services](https://svs.gsfc.nasa.gov/vis/a010000/a011400/a011481/index.html)
[Landsat 8 Overview | NASA GSFC Landsat Science](https://landsat.gsfc.nasa.gov/landsat-8/landsat-8-overview/)



#### Data Organization

##### Tile system
- Landsat scenes are organized in a path (column) and row system
- Each path is based on the swath width of the orbit overpass. The rows are based on how the image path is divided into segments for downlinking
- Scenes are approximately ~ 185km X ~ 180 km.
- The uncompressed size of a Landsat 8 scene is roughly 2 GB.
- Landsat 8 image files contain metadata, quality assessment, and a GeoTiff for each spectral band.

##### Archive structure
*Collections*

Groups of products that have consistent geometric and radiometric calibration methods

*Within each collection, there's 3 tiers:*

  1. Tier 1 (T1): Highest available data quality. Includes Level-1 Precision and Terrain (L1TP) corrected data that have well-characterized radiometry and are inter-calibrated across the different Landsat instruments.
  2. Tier 2 (T2): Data that do not meet Tier 1 requirements are assigned Tier 2. Includes Level-1 Systematic Terrain Correction (L1GT) and Level-1 Geometric Systematic Correction (L1GS) data. The L1GT and L1GS data are radiometrically corrected, but lack sufficient reference data for geometric correction. Common reasons for lower data quality include: less accurate orbital information, cloud cover, and insufficient ground control.  
  3. Near Real Time (RT): Minimally-processed data that is available within 12 hours of collection. 

*Processing levels* 

- Level 1 Scenes (Global)
    - Distributed as scaled and calibrated digital numbers (DNs)
    - DNs can be scaled to absolutely calibrated radiance of reflectance values using metadata that is supplied with the scene 
- Level-2 Scenes (Global)
    - The USGS Earth Resources Observation and Science (EROS) Center Science Processing Architecture (ESPA) processes scenes on a per-order basis. Orders typically take 2-5 days to be filled.
    - Available products:
      - Source Products (Level-1 Product)
      - TOA Reflectance
      - Surface Reflectance
      - Band 6 TOA Brightness Temperature
      - Surface Reflectance-based Spectral Indices: NDVI, NDMI, NBR, SAVI, EVI
      - Customized Scenes: data format, projection, image extent, pixel size.
      - Inter-comparison and output product statistics
    
- Landsat Analysis Ready Data (ARD) Tiles (U.S. only)
    - Products are processed for direct use in applications. 
    - Includes: Top-of-Atmosphere Reflectance, Top-of-Atmosphere Brightness Temperature, Surface Reflectance, Provisional Surface Temperature, and Pixel-level QA.
- Level-3 Scenes (U.S. only)
  - Additional processing for dynamic surface water extent, burned area, and fractional snow cover.

##### Resources:
[Landsat Geometry | USGS Landsat Mission](https://www.usgs.gov/land-resources/nli/landsat/landsat-geometry) 
[Landsat Collection 1 | USGS Landsat Collections](https://www.usgs.gov/land-resources/nli/landsat/landsat-collection-1?qt-science_support_page_related_con=1#qt-science_support_page_related_con)
[Landsat 8 OLI/TIRS Level-2 Data Products | USGS EROS Archive](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-landsat-archives-landsat-8-olitirs-level-2-data-products?qt-science_center_objects=0#qt-science_center_objects)



#### Data Access

All access options require a [USGS EROS account](https://ers.cr.usgs.gov/register/) to download scenes. 

| Portal Name                                                  | Description                                                  | Level 1 |             Level 2             | Bulk Download |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :-----: | :-----------------------------: | :-----------: |
| [EarthExplorer](https://earthexplorer.usgs.gov/)             | Query, visualize, and download images from the USGS archive, including Landsat. |   Yes   | Yes - processing time required. |      No       |
| [GloVis](https://glovis.usgs.gov)                            | Query, visualize, and download images from many datasets, including Landsat. |   Yes   |               No                |      No       |
| [LandsatLook](https://landsatlook.usgs.gov/)                 | Query, visualize, and download Landsat images. Additional tools to produce simple maps and video animations. |   Yes   |               No                |      No       |
| [EarthExplorer Bulk Download Application (BDA)](https://earthexplorer.usgs.gov/bulk) | Downloadable tool to automatically retrieve Landsat scenes (via EarthExplorer) using a scene list. |   Yes   |               No                |      Yes      |
| [ESPA Bulk Downloader](https://espa.cr.usgs.gov/ordering/new/) | Specify a scene list and desired processing level, submit order through a simple web interface. |   No    | Yes - processing time required. |      Yes      |
| [ESPA API](https://github.com/USGS-EROS/espa-api#user-api)   | Users write their own clients to interact with bulk ordering capabilities. |   No    | Yes - processing time required  |      Yes      |
| [EarthExplorer API](https://earthexplorer.usgs.gov/inventory/documentation/json-api) | Search and download using HTTP communications with programming language of choice. |   Yes   |               No                |      Yes      |

###### Resources
 [Landsat Data Access | USGS Landsat Missions](https://www.usgs.gov/land-resources/nli/landsat/landsat-data-access?qt-science_support_page_related_con=0#qt-science_support_page_related_con)



#### Landsat Limitations

One of Landsat's major strengths - being a versatile sensor that is useful for a wide range of applications, is also one of its greatest limitations. It's moderate spatial, temporal, and spectral resolution makes it a good option for many projects but perfect for few.

The 30 m spatial resolution, while fine enough to identify large crops and agricultural areas, is too large to identify small holder agriculture. Even when the scene elements are large enough to distinguish in 30 m resolution it is inevitable that some of the pixels will be a mixture of different land covers.

The ~16 day revisit is enough to (hopefully) get a handful of samples over the growing season, but not frequent enough for real-time monitoring or analyzing the phenology. Further, one shouldn't depend on receiving a updated image every 16 days - sometimes the images aren't kept due to cloud cover or other complications.

Finally, the spectral bands are well-placed to monitor vegetation (Red, NIR, SWIR, thermal...), but aren't fine enough to pick up on more subtle spectral characteristics that can help differentiate species or capture slight variations in plant vigor. 



---



### Image Classification

- Accurate and up-to-date land cover information in critical for resource management, monitoring, and planning. Land cover maps are often an input into hydrological, ecosystem, and agricultural models.
- Classification is an image processing technique that allows analysts to assign pixels to a land cover class, based on the assumption that variation on the ground is captured by spectral variation in a satellite image.
- Classification algorithms (classifiers) differ in the way they define groups of pixels to represent land cover classes.



#### Hard vs Fuzzy Classification

One major distinction in classifiers is the type of output they produce.

*Hard Classification*

- Hard classifiers match pixels to a single class
- Results in a single landcover map

*Fuzzy Classification*

- Fuzzy classifiers assign pixels a grade from 0 to 1 that describes their membership in a class. 
- Results in several "membership maps" corresponding to each land cover class.
- Membership maps can be "hardened" later by assigning pixel to the class with the highest membership score.


#### Supervised vs Unsupervised Classification

A second major distinction in classifiers is the process by which spectrally similar groups are defined. Supervised classifications require the analyst to define several land cover classes and create representative samples for each class to train the algorithm.  In unsupervised classification, the computer groups spectrally similar pixels. The analyst then refines the groups and identifies the land cover type. There are also a few hybrid methods, see ISODATA.

##### Advantages and Disadvantages

*Supervised Advantages* 

- Analyst has control of the land cover classes
- Classification is tied to specific locations of known identity (assuming you are 100% sure of your training data)
- Analyst is not faced with the challenge of matching spectral groups to informational groups
- Analyst may have more control/insight into issues by examining training data

*Supervised Disadvantages*

- Analyst imposes classification structure, which may not reflect that actual composition of the scene
- Classes are typically defined with respect to informational classes, not spectral classes/properties, which can introduce bias.  
- Training data may not be representative of entire scene.
- Can be time consuming, expensive, and tedious.
- Supervised classifiers will most likely miss small or subtle categories - only classes that the analyst identified in the training process will be included.

*Unsupervised Advantages* 

- Doesn't require extensive prior knowledge of the region to classify (However extensive knowledge may be required for interpreting the land cover type of the spectrally similar groups identified by the computer.) 
- Opportunity for human error is minimized
- May recognize small of unique land cover types that may have been otherwise overlooked.

*Unsupervised Disadvantages*

- The spectrally homogenous classes may differ from the informational classes of interest to the analyst
- The analyst has limited control over the land cover classes and the class characteristics
- Spectral properties of informational classes will change over time, so the defined relationships can not be assumed to stay the same for multiple images.

##### Process Overview

*Supervised*

1. Training Data  
   - Use ground truth data, aerial photographs, and/or high-resolution images to define training areas
   - Training areas should only contain pixels of known class membership
   - Statistics derived from the training pixels are used to describe the spectral characteristics of a land cover class
2. Classifier Allocation
   - Classifier allocates pixels to a the most appropriate class based on their similarity to the training data statistics
3. Accuracy Assessment
   - A sample of validation points are selected, and the class membership is compared between the reference class and the classifier-assigned class.
   - The class membership for the reference class can be identified by the analyst (similar to defining training data) or extracted from another land cover classification map.  
   - The reference and classified values are compared in an error matrix, AKA confusion matrix.
   - Errors of Omission (User's accuracy), Errors of Commission (Producer's accuracy), and overall accuracy are some common statistics derived from the error matrix.

*Unsupervised* 
1. Classifier Allocation
    - Analyst selects algorithm and perhaps some parameters (e.g. similarity thresholds, how many classes to produce)
    - Classifier allocated pixels to a group based on the pixel's similarity to other members of the group. 
2. Analyst Interpretation
   - The analyst interprets the spectrally-similar groups produced by the classifier and attempts to match them to informational classes.
3. Accuracy Assessment
   - The methods for accuracy assessment are similar to those used in the supervised classification.

###### Resources

[Wang (1990) Fuzzy supervised classification of remote sensing images](https://ieeexplore.ieee.org/document/46698)

[Campbell and Wynne (2011) Introduction to Remote Sensing - Fifth Edition]( https://www.amazon.com/Introduction-Remote-Sensing-Fifth-Campbell/dp/160918176X )

[Franklin & Wulder (2012) Remote sensing methods in medium spatial resolution satellite data land cover classification of large areas](https://journals.sagepub.com/doi/10.1191/0309133302pp332ra)

[Image Classification and Analysis | Natural Resources Canada]( https://www.nrcan.gc.ca/maps-tools-publications/satellite-imagery-air-photos/remote-sensing-tutorials/image-interpretation-analysis/image-classification-and-analysis/9361 )



---

### Supervised Image Classification

#### 1. Training Data
Objective: Identify a set of pixels that accurately represent spectral variation of each informational class.

##### Defining Land Cover Classes
Training sites corresponding to each informational class must be confirmed and delineated on the image. The analyst relies on field knowledge, aerial photography, and/or high resolution satellite images to identify and confirm training areas.

*Spectral Classes*

- Pixels that are united by common spectral responses across the bands included in the image. 
- May or may not align with the information the analyst would like to extract.

*Informational Classes*

- Pixels that are united by the type of information (land cover class) that the analyst would to extract.
- For example, "crop" may be an informational class, but "non-irrigated crop" and "irrigated crop" may be two distinct spectral classes.

According to Green and Congalton (2008), an effective classification scheme should:
1. Include classes that are relevant to user's needs.
2. Consist of classes that are:
   - Mutually Exclusive - an object should belong to only one class
   - Exhaustive - all objects should belong to a class
   - Hierarchical - high level general (informational) classes further subdivided into more specific (spectral) subclasses
3. Consider the smallest objects that can be classified in relation to pixel size

##### Guidelines for Good Training Data
*Number*

- Depends on the number of categories to be mapped, their diversity, and the resources that can be devoted to the task.
- Generally, create a minimum of 5-10 sites or at least 100 pixel per class.
- Creating a few extra sites may be preferable, because later in the process it may be necessary to eliminate unsatisfactory sites.
- More spectrally diverse classes require more sample sites. Analyst should create samples for each spectral subclass within the informational class.

*Size*

- It is generally preferable to have many small classes rather than a few large classes.
- However, it is a balance: training sites that are too small may be difficult to locate accurately on image, training sites that are too large increases the opportunity for spectral heterogeneity.

*Location*

- Distribute samples throughout image to capture natural variation of class.
- Should be placed away from the edges of contrasting parcels.

*Uniformity*

- Sites should represent a pure sample of their land cover class - avoid mixed pixels!
- The values for each band should have a unimodal distribution. If not, you may need to discard spectrally dissimilar training sites or define an additional land cover class. 
- The statistics (typically mean and variance) used to classify pixels typically assume a normal distribution of training data brightness values for each band.  

###### Resources
[Joyce (1978) Procedures for Gathering Ground Truth Information for a Supervised Approach to a Computer-Implemented Land Cover Classification of Landsat-Aquired Multispectral Scanner Data](https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19780007606.pdf)



#### 2. Classifier Allocation
Objective: Match unclassified pixels to suitable land cover categories based on the spectral characteristics of the training data.

##### Multidimensional Spectral Feature Space

- Multidimensional spectral feature space is an n-Dimensional array used to plot spectral brightness values for all pixels in the image.
- n is equal to the number of spectral bands in the image.
- All of the brightness combinations within an image will form a point cloud, with one point representing one pixel.
- Spectrally similar pixels will form clusters within the point cloud. 

##### (Some) Supervised Classification Algorithms

*Parallelepiped* 

- AKA Box Decision Rule
- Regions of multidimensional dataspace are defined based on the range in values within the training data. Spectral values of unclassified pixels are projected onto dataspace and classes are assigned based on the region they fall in.
- Simple concept, but variable accuracy
- Problems may arise when training regions overlap, or when unclassified pixels don't fall within one of the regions.

*Minimum Distance*

- Training data are plotted in multidimensional data space
- The training areas form clusters in the dataspace, and each is represented by a centroid.
- Unknown pixels are then assigned a class based on the minimum distance between the pixel position and a training data centroid.  

*Maximum Likelihood*

- This strategy intends to account for natural variation in a landcover class
- The mean and variance of the spectral values for each training class is used to estimate the probability that a pixel belongs to a class
- The pixel is assigned to the class it has the highest probability of belonging to
- Maximum likelihood classifiers may preform better than other classifiers when there is some overlap between classes. However, they are more sensitive to training data and assume a normal distribution of values for each class.

*Spectral Angle Mapping*

- This classifier calculates the spectral angle between signatures of mage pixels and training signatures 
- A pixel belongs to a class if it has the lowest angle between it's spectral signature and the training signature

##### Other interesting things to note:
- It is possible to add ancillary data (such as a Digital Elevation Model) to a classification. The incorporation process depends on the algorithm used. For example, in a Classification and Regression Tree (CART) analysis ancillary data may be added as if it were an additional spectral band in the image. 
- Object-oriented classification is similar to supervised classification, but the first step is to create a segmented image. A segmented image contains groups of spectrally-similar pixels. Conventional classifiers are used in the next step, but the "unknown" input is a segment rather than an individual pixel.
- There are also many examples of classifications that take advantage of dense time series data to incorporate a temporal signature into the classification (instead of just the spectral signature). This can be especially useful in crop classification, such as the example of soy vs. corn classification above. 

###### Resources

[Breiman (1984) Classification and Regression Trees](https://www.taylorfrancis.com/books/9781315139470)
[Pal & Mather (2003) An assessment of the effectiveness of decision tree methods for land cover classification](http://www.dl.edi-info.ir/An%20assessment%20of%20the%20effectiveness%20of%20decision%20tree%20methods%20for%20land%20cover%20classification.pdf)
[Lu & Weng (2007)  A survey of image classification methods and techniques for improving classification performance](https://www.tandfonline.com/doi/full/10.1080/01431160600746456)
[Platt & Rapoza (2008) An Evaluation of an Object-Oriented Paradigm for Land Use/Land Cover Classification](https://www.tandfonline.com/doi/abs/10.1080/00330120701724152)
[Gómez et al (2016) Optical remotely sensed time series data for land cover classification: A review](https://www.sciencedirect.com/science/article/pii/S0924271616000769#!) 
[Multidimensional Feature Space and Working with it in ENVI| 50 North Spatial](http://www.50northspatial.org/n-dimensional-spectral-feature-space-envi/)



#### 3. Accuracy Assessment

##### Classification Errors

*Human Sources*

- Misidentification of pixels
- Poorly defined classes
- Errors in image registration/ preprocessing

*Landscape Sources* 

- Size of landcover parcel relative to pixel size
- Variation in parcel size
- Shape or parcels
- Arrangement of parcels/ mixed pixels
- Distribution of parcels
- Spectral and radiometric contrast between parcels 

*Error Characteristics*

- Errors (misclassified pixels) tend to be arranged in a particular pattern, not randomly distributed.
- Errors tend to be in groups, rather than isolated.
- Errors tend to be located near parcel boundaries.
- Errors tend to be more common between some classes than others. 


#### Accuracy Assessment Process

##### 1. Create Samples

- Site-specific accuracy assessment is based on a comparison between a reference map (assumed to be true) and the classified map at specific locations (sample points)
- Analyst must decide:
  - Sampling strategy: random, systematic, stratified, etc.
  - Number of samples
  - Should consider the requirements for a statistically valid comparison

##### 2. Collect Reference Data
- The "true" land cover class of each sample point must be defined - the collection of these samples is the reference data.
- Ideally, reference data will be collected from a similar time/season as the classified map.

The analyst has a couple of options for assembling reference data:
1. Field Collection
   - Reference data collected in the field is ideal, these are known as "ground truth" points.
   - A GPS is used to find the pre-determined sample sites and then the land cover is recorded.
   - Other characteristics of the conditions around the sample point may also be recorded. 
   - All characteristics should be recorded in a standard template
   - If a large enough sample is collected, half may be used to train the model and half may be used to validate the model 
2. High Resolution Reference Imagery
   - Aerial photography and high resolution satellite imagery may be used as a more practical alternative to field collection
   - Requires analyst to interpret an image, and therefore may be less reliable than data collected in the field. 
3. Reference map
   - Can extract the sample point land cover values from another classified map
   - The maps must be carefully geometrically-aligned, and use the same classification scheme and level of detail.
   - Can also complete a non site-specific accuracy assessment by comparing the total area assigned to each land cover class in each map.

##### 3. Compile Error Matrix
  - *n* x *n* array, where *n* is the number of categories
  - The left hand side of the matrix (y-axis) is labeled with categories from the map
  - The upper edge (x-axis) is labeled with categories from the reference data.
  - The values of the matrix represent the number of pixels that were compared in each category.

##### 4. Interpret Error Matrix 
- Row sum (right column) is the number of samples that were classified as the row category
- Column sum (bottom row) is the total number of reference samples collected for the column category
- The main diagonal shows the number of correctly classified pixels
- Off-diagonal values represent misclassified pixels


#### Metrics

*Errors of Omission*

- Refers to reference sites that were left out (omitted) from the correct class in the classified map.

- For each class, the omission error is calculated by summing the misclassified pixels (down the columns) and dividing by the total number of reference sites collected for that class (column sum).

- For example, if the reference data include a total of 33 water samples, and 5 were misclassified as bare and 7 were misclassified as vegetation, the Omission Error is:

  $$
  \frac{5+7}{33} = 36\%
  $$



*Producer's Accuracy*

- The producer's accuracy is related to the Omission Error
- Producers want to know: "How often were the reference sites properly classified?"
- The producer's accuracy is calculated as either:
$$
\frac{\text{Correctly classified reference sites}}{\text{Total number reference sites}}
$$
  or
$$
100\% - \text{Omission error} = \text{Producer's Accuracy}
$$



*Errors of Commission*

- Refers to reference samples that are added to an incorrect category
- For each class, the commission error is calculated by summing the misclassified pixels across the rows, and dividing by the total number of samples classified as the row category.
- For example, if 27 of the sample points were classified as water, and 6 of those points were supposed to be classified as bare ground, the Commission Error is:
$$
\frac{6+7}{27} = 22\%
$$



*User's Accuracy*

- The user's accuracy is related to the Commission Error.
- Users want to know: " How often does the map actually represent what is on the ground?"
- The user's accuracy is calculated as either:
$$
\frac{\text{Total number of samples incorrectly included in a class}}{\text{Total number of samples in a class}}
$$
  or
$$
100\% - \text{Comission error} = \text{User's Accuracy}
$$



*Overall Accuracy*
$$
\frac{\text{Total number of correctly classified sites}}{\text{Total number of sample sites}}
$$



*Kappa Coefficient*

- The Kappa coefficient is generated from a statistical test and used to indicate how well the classifier preformed compared to a random assignment.
- Ranges from -1 to +1, with -1 being significantly worse than random, and +1 being significantly better.

###### Resources

[Accuracy Assessment of a Land Cover Classification | NASA ARSET Tutorial](https://arset.gsfc.nasa.gov/land/webinars/18adv-land-classification)
[Accuracy Assessment Module | Humboldt University]( http://gsp.humboldt.edu/olm_2016/courses/GSP_216_Online/lesson6-2/index.html )
[Accuracy Assessment Workflows | Penn State University](https://www.e-education.psu.edu/geog883/node/524)
[Congalton (1991) A review of assessing the accuracy of classifications of remotely sensed data](https://www.sciencedirect.com/science/article/pii/003442579190048B?via%3Dihub)
[Congalton & Green (2008) Assessing the Accuracy of Remotely Sensed Data](https://www.taylorfrancis.com/books/9780429143977)
[Olofsson et al. (2014) Good practices for estimating area and assessing accuracy of land change](http://reddcr.go.cr/sites/default/files/centro-de-documentacion/olofsson_et_al._2014_-_good_practices_for_estimating_area_and_assessing_accuracy_of_land_change.pdf)