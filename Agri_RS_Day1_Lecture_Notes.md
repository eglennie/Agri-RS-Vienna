### Day 1 Lecture: Remote Sensing Fundamentals

#### Remote Sensing for Agriculture Workshop

#### October 27, 2019

---

### Introductions

#### NASA Earth Science
- The Earth Science Division at NASA Goddard Space Flight Center plans, organizes, evaluates, and implements a broad program of research on our planet's natural systems and processes.
- Major focus areas include climate change, severe weather, the atmosphere, the oceans, sea ice and glaciers, and the land surface.

###### Resources:
[Earth Sciences Division | NASA GSFC](https://science.gsfc.nasa.gov/earth/)

#### Workshop Goals
- Review key remote sensing concepts to encourage a deeper understanding of when and how satellite Earth observations should be used.
- Outline how to identify data that is best suited to a particular application.
- Demonstrate best practices for image preprocessing and analysis, including visualization, classification, and time-series techniques.
- Introduce new Earth observation applications for further investigation.

#### Workshop Agenda
Day 1: Remote Sensing Fundamentals

Day 2: Landsat and Image Classification

Day 3: MODIS and NDVI Time Series

Day 4: Vector-Bourne Disease Modeling and Additional Datasets

---

#### Day 1 Goals

- Review key remote sensing concepts to build a framework for effectively using satellite imagery.
- Become familiar with several NASA satellites that produce scientific-quality, freely available, Earth Observation datasets.  
- Learn how to obtain, preprocess, and display satellite imagery for analysis. 

#### Day 1 Agenda
1. Image of the Day 
   - Garden City, Kansas
2. Key Concepts in Remote Sensing
   - Active vs Passive Sensors
   - Electromagnetic Spectrum
   - Spectral Signatures
   - Atmospheric Effects
3. Image Preprocessing
   - Radiometric Corrections
   - Geometric Corrections
   - Brightness Measurements
4. Satellite Resolution
   - Sensor Resolution 
   - Resolution Tradeoffs 
5. NASA Earth Observations
   - Satellites and their Characteristics
6. Tutorial: Downloading Landsat Imagery and QGIS processing

---
### Image of the Day
#### Garden City, Kansas
##### Climate and Water Use
- Summer highs around 25 - 32 C and they receive about 48 cm precipitation per year. 
- Heavily rely on the High Plains aquifer system for irrigation for wheat, corn, sorghum, and soy across the region. 
- Over the last few years residents and farmers have noticed extreme variations in precipitation (drought for several years, followed by a wet growing season in 2019) and have to adjust their crop types, planting schedules, and irrigation practices.
- Some use remotely sensed images to help monitor crops. 

##### Satellite Image
- Taken in September, 2000
- Landsat 7 image, spatial resolution (pixel size) is 30 m.
- Can clearly see the boundaries of different crops in the area.
- In this composite, the irrigated, healthy vegetation appears vibrant red. Harvested crops are a pale tan. Natural vegetation is green. 

**How might this image be useful?**

- Define crop extent
- Characterize crop health
- Identify crop stages
- Estimate planting/harvest dates 
- Identify crop type (based on known planting cycles)
- Estimate yield (based on extent and crop type)
- Verify crop insurance claims

###### References:
[Crop Circles in Kansas](https://earthobservatory.nasa.gov/images/5772/crop-circles-in-kansas)
[Record Spring Rainfall Weighs Down Yields in Kansas, Missouri](https://www.dtnpf.com/agriculture/web/ag/crops/article/2019/08/13/day-1-record-spring-rainfall-weighs-2)
[Wheat harvest a 'tale of two crops' - News - The Garden City Telegram - Garden City, KS](https://www.gctelegram.com/news/20190713/wheat-harvest-tale-of-two-crops)
[Kansas crops developing quicker than last few years](https://www.gctelegram.com/news/20180801/kansas-crops-developing-quicker-than-last-few-years)

---
### Key Concepts in Remote Sensing

#### Active vs Passive Sensors
An important distinction between different kinds of satellites is whether they have active or passive sensors. We will describe both here, but the focus of this workshop is on passive remote sensing. 

##### Passive Sensors
Passive sensors record energy that is naturally occurring, either the Sun's energy that is *reflected* from the surface of the Earth (optical) or the Sun's energy that is *emitted* from Earth (thermal infrared)

*Passive Sensor Example: Landsat 8 True Color Image and Thermal Image*

Landsat 8 True Color Composite

-  A view of LA from May 2013.
-  Blue, Green, and Red reflectance is included in this composite so the image appears as a "True Color" composite - i.e. the colors are close to how we could naturally perceive them.

Landsat 8 Thermal Image 
- Dark/Cold spots match the clouds in Band 9.
- Irrigated vegetation is the next coolest, followed by open water and natural vegetation.
- The burn scar near Malibu, which is covered in charcoal and dry, dead foliage, has a very high surface temperature. 
- Within the city, parks are generally coolest and industrial neighborhoods are warmest. 
- There is no clear urban heat island in this scene – an effect that these TIR bands will be particularly useful for studying.

###### Resources:
[Landsat 8 Bands](https://landsat.gsfc.nasa.gov/landsat-8/landsat-8-bands/)

##### Active Sensors
Active sensors provide their own energy source. They emit radiation at a targeted wavelength and object, and measure the energy reflected back to the sensor. 

Two common types are LiDAR and Radar.
- LiDAR uses light waves to measure various distances by collecting the reflected light pulse. It is commonly used in Earth observations and autonomous vehicle development, and typically more precise/accurate than Radar. 
- Radar transmits radio waves. When the radiation is reflected and/or scattered an antenna picks it up and uses it to determine the location. Although it is less precise than LiDAR, radio waves can penetrate clouds and collect data at night is it is useful in a wider range of conditions.

There are many kinds of radar sensors, with several applications:
- Synthetic Aperture Radar:  Is most useful for imaging immobile targets. Applications include: topography, oceanography, glaciology, geology, forestry...
-  Radar Altimeter: Transmits a signal and records the time it takes the signal to return, which can be used to calculate surface elevation. 
- Scatterometer: Measures how light or radar waves are scattered in a medium such as air. Most useful for meteorological applications.

*Radar Example: Shuttle Radar Topography Mission (SRTM)*

- One application of active sensors is to generate Digital Elevation Models (DEMs) of the Earth's surface. DEMs are very useful for deriving the elevation, slope, and aspect (cardinal orientation) of the land surface.
- The NASA Shuttle Radar Topography Mission (SRTM) obtained near-global elevation data using radar interferometry.
- Interferometric synthetic-aperture radar (IfSAR) is a technique that compares the signals from two or more SAR measurements (taken at slightly different angles) to calculate surface deformation or digital elevation.
- To achieve interferometric measurements, the space shuttle that collected SRTM had one antenna mounted onboard, and another located at the end of a mast that extended 60 m off the shuttle.  
- The dataset is available at a 30 m resolution.

##### *Lidar Example: Global Ecosystem Dynamics Investigation (GEDI)*

GEDI is an instrument on the International Space Station that produces high resolution laser ranging observations of Earth. GEDI has 3 lasers that fire 242 times a second, each illuminating 25 m footprint on Earth's surface. The distribution of energy returned to the sensor is processed to determine the ground surface, as well as the height and density of objects within the footprint.

The dense and precise 3D measurements are of great value for several applications, including:
1. Forest Management and Carbon Cycling - characterizing forest structure; habitat quality; biodiversity; carbon sinks and sources; parameterizing ecosystem models
2. Water Resources - 3D canopy models to model snowmelt, evapotranspiration, precipitation interception; glacier surfaces; snowpack elevation 
3. Weather Prediction - improved canopy and biomass products for climate model inputs/constraints
4. Topography and Surface Deformation - accurate bare Earth and under canopy topographic elevations

###### Resources: 

[Shuttle Radar Topography Mission](https://www2.jpl.nasa.gov/srtm/index.html)
[USGS EROS Archive - Digital Elevation - Shuttle Radar Topography Mission (SRTM)](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-digital-elevation-shuttle-radar-topography-mission-srtm?qt-science_center_objects=0#qt-science_center_objects)
[GEDI - Mission Overview](https://gedi.umd.edu/mission/mission-overview/)

#### Electromagnetic Spectrum
In remote sensing (RS), we often conceptualize electromagnetic radiation as waves, and refer to different parts of the spectrum in terms of wavelength. Multispectral sensors are designed to observe targets at varied wavelengths, and the sensor "bands" contain energy captured from a specific section of the spectrum. For example, a red band may be sensitive to energy with a wavelength between 650 and 680 nm.

As radiation reaches Earth's atmosphere, it is either reflected, absorbed, or transmitted, depending on the object's material and the frequency of the light. 
- Reflected radiation is captured/measured with Optical RS instruments. Optical instruments pick up on energy in the visible to short wave infrared part of the spectrum.
- Absorbed radiation is emitted (released as heat) at longer wavelengths*. Thermal RS instruments are designed to pick up on emitted energy in the infrared part of the spectrum.

\* The wavelength at which radiation is emitted is temperature dependent. Hotter objects emit energy at shorter wavelengths, and cooler objects emit energy at longer wavelengths. For example, the Sun emits more energy than the Earth. The peak wavelength of the Sun's radiation is in the visible range of the spectrum (it's no coincidence that our eyes are most sensitive to this range). The peak wavelength of the Earth's radiation, as previously mentioned, is in the infrared range of the spectrum. 

###### Resources:
[Electromagnetic Spectrum \| The Nature of Geographic Information](https://www.e-education.psu.edu/natureofgeoinfo/node/1883)

#### Spectral Signatures 
- The basis of multispectral remote sensing is that we can distinguish targets by observing their *spectral signatures*.
- All objects reflect or emit radiation in a fairly consistent way based on their chemical composition. The surface of the object and geometric conditions (e.g. angle of the incoming sunlight) can also affect the reflection/emission.
- The amount of energy reflected or emitted varies by wavelength, a pattern that we learn to recognize as the material's spectral signature. 

##### Vegetation Spectral Signature
*Visible* 

- Leaf pigments, mainly chlorophyll, are largely responsible for the way plants absorb and reflect energy in the visible region.
- Chlorophyll strongly absorbs blue and red light, and reflects green light.

*Near Infrared (NIR)*

- Cell structure controls plant absorption and reflection in the NIR region. 
- The NIR light easily passes through the outer layers of the leaf (cuticle and epidermis) and is then strongly scattered by the mesophyll and cavities within the leaf. About 60% is scattered up (reflected) or down (transmitted).
- NIR reflectance is sensitive to vegetation vigor, but there is some debate over why NIR reflectance decreases. The two leading theories are:
  1. The plant cavities collapse as the plants wilt, and therefore there is less internal scattering of light.
  2. The cell walls themselves deteriorate, and therefore don't bounce the light as effectively.

*Shortwave Infrared (SWIR)*
- Water content is the biggest determinant of reflection in the shortwave infrared. 
- Healthy vegetation has two water absorption features in this region, one around 1.4 λ and one around 2 λ.

Age and stress from disease, insects, or moisture shortage can affect these spectral characteristics. The effects are fairly simultaneous across the spectrum, but most noticeable in the NIR.  While knowledge of the individual leaf reflectance is important, it doesn't completely explain canopy reflectance. Canopies are composed of many layers of leaves that vary in size, orientation, shape, etc. Some models attempt to take these complex characteristics into account.

###### Resources

[Monitoring Vegetation From Space | EUMeTrian](http://www.eumetrain.org/data/3/36/navmenu.php?page=3.0.0)
[Knipling (1970)  Physical and Physiological Basis for the Reflectance of Visible and Near-Infrared Radiation from Vegetation](https://pubag.nal.usda.gov/pubag/downloadPDF.xhtml?id=37948&content=PDF)
[Sims & Gamon (2002)  Relationships between leaf pigment content and spectral reflectance across a wide range of species, leaf structures and developmental stage]( https://reader.elsevier.com/reader/sd/pii/S003442570200010X?token=982A16E2806A613352EC2AE3E24DE25394735DAA7089CC07F1482D0267B434F55B2A51B269C7CEC1E63AC6044C2A59F2 )

#### Atmospheric Effects
Incoming energy must pass through Earth's atmosphere before it hits a target and is reflected to a sensor. As energy passes through the atmosphere it can be scattered, refracted, or absorbed. Some of the effects are fairly predictable, while others vary over time and space. 

Sensors are carefully designed to view the parts of the spectrum that are least sensitive to atmospheric effects (see Atmospheric Windows).  Additionally, there are several methods for calibrating the data and applying corrections to minimize the inevitable atmospheric interactions (see Radiometric Corrections). 

##### Scattering 

- The redirection of EM energy by particles suspended in the atmosphere
- The type and amount of scattering depends on the atmospheric particle size, the particle abundance, the wavelength of the incoming radiation, and angle of the radiation/depth the atmosphere the radiation must pass through. 
- A general effect of scattering is reduced contrast - dark areas appear lighter and light areas appear darker. It may also cause mixing between adjacent pixels.

There's three kinds of scattering:

1) Rayleigh Scattering

- Occurs when the particle is smaller than the incoming wavelength. The diameter of dust and some gases, such as Nitrogen and Oxygen, is smaller than the wavelength of visible and near-infrared radiation. 
- As Rayleigh scattering  involves some of the most common gases in the atmosphere, it is inevitable, regardless of atmospheric conditions. 
- However, this type of scattering is fairly predictable because 1) the gases are more-or-less uniformly distributed, and 2) we know how that because violet and blue light have a short wavelengths and high frequencies, they are scattered much more efficiently than other incoming light.
- The intense Rayleigh scattering of blue and violet light is why the sky appears blue (our eyes are more sensitive to blue light than violet). 

2) Mie Scattering
   - Occurs when the diameter of the particles is similar to the wavelength of the incoming radiation. The amount of scattering is still somewhat related to wavelength, but not nearly as much as Rayleigh scattering.
   - Dust, pollen, and water are common particles that cause Mie scattering.
   - Light that passes through clouds is affected by refraction and Mie scattering. Clouds appear white to our eyes because all the visible light is scattered fairly equally.

3) Non-wavelength dependent Scattering
   - Occurs when the diameter of the particles is larger than the wavelength of incoming radiation. 
   - Often caused by large water droplets in the lower atmosphere, which creates a greyish haze.

##### Refraction

 - The bending of light rays at the contract area between two media that transmit light
 - For example, this happens when objects are enlarged by looking through a magnifying glass, or when objects are displaced by looking at them through water. 
 - Differences between atmospheric layers also affects the way light is refracted, and can be affected by variations in humidity, temperature, clarity.

##### Absorption

 - Occurs when the atmosphere prevents, or strongly attenuates, transmission of radiation through atmosphere.   
 - Absorption reduces the intensity of the energy and creates a hazy effect
 - Energy that is acquired by atmosphere is later reradiated at longer wavelengths (emitted as heat)

Three main gases responsible for absorption: 

  1. Oxygen in the upper atmosphere absorbs UV waves and creates ozone  
  2.   strongly absorbs near infrared (NIR) and middle infrared energy
  3. Water vapor as largest absorption affect of all three, and varies the most over time and space, i.e. is the least predictable for RS purposes.

###### Resources:
[Why is the sky blue?| Scientific American](https://www.scientificamerican.com/article/why-is-the-sky-blue/) 

##### Atmospheric Windows
- Atmospheric windows correspond to portions of the electromagnetic spectrum that are least affected by atmospheric interactions -  where the atmosphere is most transparent.
- Since we know the major components of the atmosphere and how they affect incoming radiation, atmospheric windows are predictable - with the exception of water vapor, pollen, and dust.
  - Gamma waves, x-rays, and UV light is blocked by the upper atmosphere
  - Violet/blue light is scattered by atmospheric gases
  - Most infrared energy is absorbed by atmospheric gases
- Sensors are designed to take advantage of these windows - spectral bands are generally placed in transparent parts of the spectrum

###### Resources:
[Atmospheric Windows](https://gisgeography.com/atmospheric-window/)

---

### Image Preprocessing
#### Radiometric Correction
Raw sensor observations, Digital Numbers (DNs), are not a true measure of energy reflected from Earth. DNs are a relative brightness value (based on the range of values the sensor can record) and are distorted by atmospheric effects and sensor noise. The purpose of radiometric corrections is to remove these effects and convert the raw observations (DNs) to a physically-meaningful measurement (Radiance, Reflectance, or Brightness Temperature).

##### Sources of radiometric errors
Internal errors:

Generally systematic and predictable calibration errors. Can also include noise, such as random bad pixels, dropped scan lines, and striping.

External errors:

Introduced by phenomena that vary in time and space and are usually non-systematic. Can include the effects of the atmosphere, terrain, slope, and aspect. Correcting for the external effects is often referred to as atmospheric correction, even though the correction may apply to both atmosphere and terrain effects.

##### Correction methods
- The need for and type of correction depends on the intended application, available atmospheric information, satellite data, and expertise.
- Atmospheric corrections can be relative (radiometric data is normalized based on another image) or absolute (atmospheric conditions are applied to yield surface reflectance). Absolute corrections can be based on the information in the image itself, or on a radiative transfer (RT) model. 
  - Image based methods are typically a simpler approach. Examples include: Empirical Line Calibration or Dark Object Subtraction (DOS)
  - RT Models offer a more complex and precise approach. Examples include: 6S, Lowtran, and MODTRAN

The general process for radiometric corrections is:
  1. Convert DNs to at-sensor radiance, based on sensor calibration values provided in image metadata.
  2. Convert to Top of Atmosphere (TOA) reflectance, based on estimates of irradiance (downwelling radiation). 
  3. Convert TOA reflectance to Surface Reflectance by applying on of the atmospheric corrections described above.

(See Brightness Measures)

#### Geometric Correction

Remotely sensed images are not maps. Geometric corrections must be applied to define an appropriate spatial scale and projection. Geometric corrections account for positional distortions and ensure that a pixel in the image matches it's proper location on Earth's surface. 

##### Sources of geometric errors

Instrument errors (distortion in the optical system), panoramic distortion (sensor field of view isn't a perfect pixel), Earth's rotation (rotation can skew images, velocity increases with latitude), platform instability (variation in sensor position), and off-nadir angle.

##### Correction methods
- A planimetrically correct image can be prepared by applying information about the instrument geometry and position to an image, this is the standard correction.
- Image resampling is an alternative method when/if the instrument geometry is not applied. 
  - Image resampling involves rescaling, rotating, or otherwise transforming the image to bring it into correspondence with a reference image. 
  - Resampling is best suited for visual representation purposes, rather than analytical purposes.
- Georeferencing is related to resampling, but requires referencing to ground control points (points of known location) as well as a reference image. 
- There are several mathematical methods to bring the image into alignment with reference points, the method used generally depends on the contents of the image. 

###### Resources:
[Digital Image Processing \| Natural Resources Canada](https://www.nrcan.gc.ca/maps-tools-publications/satellite-imagery-air-photos/remote-sensing-tutorials/image-interpretation-analysis/digital-image-processing/9279)
[Radiometric Corrections | Humboldt University](http://gsp.humboldt.edu/olm_2016/courses/GSP_216_Online/lesson4-1/radiometric.html)
[Introduction to Digital Image Processing of Remote Sensed Data, 2010](https://lcluc.umd.edu/sites/default/files/lcluc_documents/ozdogan1_lcluc_8-2010_training_0.pdf)

#### Brightness Measurements

##### Digital numbers
- Energy that is reflected back to the sensor is recorded as a Digital Number (DN).
- The DN value is not actually the brightness (radiance), it is a scaled value that represents the relative brightness in the scene based on the range of values available (i.e. the radiometric resolution). 
- DNs facilitate the design of instruments, data communications, and visual display of data.
- They lack physical meaning and are not to be used for analytical or comparison purposes.
- The data need to be calibrated based on sensor-specific measurements before scenes can be analyzed and compared.

##### Radiance
- Radiance is the amount of radiation coming from an area, including the energy reflected from the surface, neighboring pixels, clouds, etc.  Irradiance is the downwelling radiation from the sun. 
- Radiance is derived by applying sensor-specific calibration values from the image's metadata or data provider. Calibration values are determined by measuring an object of known brightness, then adjusting based on the difference between the actual value and the observed value. 
- Radiance is measured as brightness (watts) with respect to the wavelength (micrometer), angle (steradian), per square meter from which the light was reflected.  

##### Reflectance
- Although radiance is a physical measure of brightness, it is not optimal for use in many RS applications because it is subject to effects such as differences in sun angle, atmospheric interaction, and angle of observation that obscure the characteristics we wish to observe. 
- It is often preferable to use reflectance, the *proportion* of the radiation reflected by a surface relative to the total amount of incident radiation (at the same wavelength) - a dimensionless number that is usually expressed as a percentage.
- We must estimate irradiance to obtain reflectance (assuming there is no in-situ data). Irradiance is often estimated using an equation that accounts for the time, date, and place the measurement was collected. 
- Top of Atmosphere (TOA) reflectance is an estimate of brightness that includes contributions from clouds, aerosols, and gases. It is calculated by finding the ratio between radiance measured at the sensor to incident radiation.
- Surface Reflectance is an estimate of the reflectance at specific wavelengths as they would have been measured at Earth's surface if the atmosphere did not scatter or absorb radiation. It is also a ratio of radiance to incident radiation, with an atmospheric correction applied.

###### Resources:

[Top of Atmosphere |UN-SPIDER](http://www.un-spider.org/node/10958)

[Digital Number, Radiance, and Reflectance](https://www.harrisgeospatial.com/Learn/Blogs/Blog-Details/ArtMID/10198/ArticleID/16278/Digital-Number-Radiance-and-Reflectance)

---

### Satellite Orbits

Different orbits give satellites varying perspectives of Earth, each of which is valuable for different reasons. Orbits can be characterized by on their distance from Earth (high, medium, or low), eccentricity (shape), or inclination (angle relative to Earth's equator). 

Two orbits that are commonly used for Earth Observations are:

1. Geostationary - a high earth orbit (~36,000 km above Earth's surface) where the satellite's orbit speed matches the speed of Earth's rotation allowing it to continuously view the same area. This is a great orbit for weather satellites because it allows them to provide current information about clouds, water vapor, and wind.
2. Polar - a low earth orbit (~780 km above Earth's surface) where the satellite moves around Earth from pole to pole, viewing daytime on one side nighttime on the other. As the satellite orbits, Earth rotates underneath so that the next pass will be over a strip adjacent to it's last. This orbit is sun-synchronous, meaning whenever the satellite crosses the equator, the local solar time on the ground is the same. This consistency is very useful for comparing images over time. 

###### Resources:

[Catalog of Earth Satellite Orbits | NASA Earth Observatory](https://earthobservatory.nasa.gov/features/OrbitsCatalog)

---
### Satellite Resolution
According to Strahler et al. (1986), the fundamental remote sensing problem is: How do we infer information about a scene using the measurements that comprise an image? The scene is the real, on the ground pattern of energy and matter, and the image is a collection of spatially arranged measurements attempting to represent it.

There are many considerations to be taken when answering this question and trying to identify, or design, the most suitable imagery for your application. One of the most important considerations is relationship between the sensor resolution the scene elements (the objects you are trying to measure in the scene). 

Sensor resolution is typically described in terms of spatial, temporal, spectral, and radiometric specifications. 

##### Resources:

[Strahler et al., 1986](https://doi.org/10.1016/0034-4257(86)90018-0)

##### Spatial
  - Refers to the size of the smallest possible feature that can be detected. 
  - Related to the Instantaneous Field of View (IFOV), the angular cone of visibility that determines the size of the ground area that can be observed at a single moment in time. 
  - This ground area is called the resolution cell, and is equivalent to the image pixel size when the image is displayed at full resolution. 
  - A related characteristic is the swath width, or the width of the area collected in a single pass of the satellite.
##### Temporal
  - Refers to the length of time it takes a satellite to complete an orbit cycle - usually described in terms of the revisit period. 
  - However, the revisit period is complicated by overlaps between swaths (some areas will be covered in multiple orbits), greater overlap at higher latitude, and pointable satellites.
##### Spectral
  - The sensor's ability to resolve features in the electromagnetic spectrum
  - Includes the number, position, and width (in terms of wavelength) of the sensor's spectral channels 
  - More bands and/or more precise bands are associated with greater spectral resolution
##### Radiometric
  - Describes the actual information content - how sensitive the sensor is to the magnitude of electromagnetic energy in the scene
  - Measured in bits, which corresponds to the number of bits used for coding numbers in a binary format. Thus, an 8-bit sensor has 256 values available to record brightness values; a 12-bit sensor has 4096 available brightness values.
  - Sensors with greater bit depth are more sensitive to smaller variations in reflected or emitted energy. 

#### Resolution tradeoffs

Due to technical constraints, no one sensor can receive a perfect score in every resolution category. 
Generally, high spatial resolution is associated with low spectral resolution, and vice versa. Also, high spatial resolution tends to be associated with low temporal resolution. 

##### Why?

- High spectral resolution means narrower spectral bands. If the band width decreases and the spatial resolution in constant, the sensor will receive less energy. Therefore, generally the pixel size must increase so the sensor continues to receive enough reflected radiation. 
- High spatial resolution means a smaller IFOV and smaller swath width. Since the scene is smaller, it will take more orbits to cover the Earth, and the temporal resolution will be lower.

##### So, analysts must chose:

1. Emphasize the most important resolution - the type of resolution that is critical for the application - and accept reductions in the non-prioritized resolutions.
2. To not emphasize any one resolution in particular and accept moderate spatial, spectral, temporal and radiometric resolution.

##### Example: Geostationary satellites vs. polar orbiting

- Geostationary weather satellites are positioned at high altitudes (~35,880 km) and remain stationary with respect to rotating Earth. From this perspective, they can continuously monitor an entire hemisphere to watch as weather patterns develop, but they do so at low spatial and spectral resolution.
- Polar-orbiting weather satellites are generally positioned about 700-800 km from Earth and maintain a sun-synchronous cycle- meaning each successive swath passes over the same latitude at approximately the same time each day. These satellites record much more detailed information about the local weather conditions. 

###### Resources:

[Satellites | NOAA National Weather Service](https://www.weather.gov/about/satellites)

---
### NASA Earth Observations
#### Aqua and Terra
**Terra**
  - Launched in December, 1999
  - Sun-synchronous polar orbiting satellite with morning overpass time

**Aqua**
  - Launched in May, 2002
  - Sun-synchronous polar orbiting satellite with afternoon overpass time

**MODIS**
  - Aqua and Terra both carry the MODIS - the Moderate Resolution Imaging Spectroradiometer (along with several other instruments) sensor
  - MODIS is a widely used instrument that helps improve out understanding of global land, ocean, and lower atmosphere dynamics
  - Together, Terra and Aqua cover the Earth every 1-2 days, collecting data in 36 spectral bands. 
  - Spatial resolution ranges from 250 m to 1000 m, depending on the spectral band.
###### Resources:
[Terra](https://terra.nasa.gov/)
[Aqua](https://aqua.nasa.gov/)
[MODIS](https://modis.gsfc.nasa.gov/about/)


#### Suomi NPP
- Launched October, 2011
- Carries VIIRS - the Visible Infrared Imaging Radiometer (along with sever other instruments)
- VIIRS was designed to be a successor to MODIS, and builds on the design of other moderate resolution multispectral sensors - AVHRR, MODIS, and SeaWIFS.
- Revisit period is 16 days.
- 22 spectral bands designed to measure cloud and aerosol properties, ocean color, ocean and land temperature, fires, and Earth's albedo.
- Spatial resolution ranges from 375 m to 750 m, depending on the spectral band.
###### Resources: 
[Suomi National Polar-orbiting Partnership](https://www.nasa.gov/mission_pages/NPP/main/index.html)

#### Landsat
**Landsat 5**
- Launched March 1, 1984
- Decommissioned in January 2013
- Landsat 5 delivered high-quality global data for 28 years and 10 months, setting a record for longest-operating Earth observation satellite.
- Sensor: Landsat Thematic Mapper (Landsat TM)

**Landsat 7**
- Launched April, 1999
- Unfortunately, the Scan Line Corrector failed in 2003, so products after 2003 have scan line gaps. 
- Sensor: Landsat Enhanced Thematic Mapper Plus (Landsat ETM+)

**Landsat 8**
- Launched February 11, 2013
- Sensor: Operational Land Imager (Landsat OLI) and Thermal Infrared Sensor (TIRS)

**Landsat Series**
- The first Landsat satellite was launched in 1972.
- Successive satellites have been designed with data continuity as a priority.
- Landsat sensors are extremely well-calibrated, moderate spatial resolution, multispectral sensors. 
- They also include a thermal band, which is very useful for collecting simultaneous optical and thermal images.
- Landsat has a wide range of applications, including global change studies, land monitoring, and large area mapping. 
###### Resources: 
[A Landsat Timeline « Landsat Science](https://landsat.gsfc.nasa.gov/a-landsat-timeline/)  
[What are the best Landsat spectral bands for use in my research?](https://www.usgs.gov/faqs/what-are-best-landsat-spectral-bands-use-my-research?qt-news_science_products=0#qt-news_science_products)

#### TRMM and GPM
**TRMM (Tropical Rainfall Measuring Mission)**
  - Launched November 27, 1997
  - Decommissioned April 15, 2015

**GPM (Global Precipitation Measurement)**

  - Launched February 27, 2104

**Precipitation Measurements**

- TRMM provides historical precipitation data.
- GPM is the successor to TRMM.
- The GPM mission includes a constellation of several satellites, aimed at providing more precise measurements with higher temporal frequency.
- The GPM Core Observatory carries a radar and a radiometer system to measure precipitation and serve as a reference for other satellites in the constellation.

###### Resources:
[TRMM Home Page \| Precipitation Measurement Missions](https://pmm.nasa.gov/trmm)
[Global Precipitation Measurement (GPM) Mission Overview \| Precipitation Measurement Missions](https://pmm.nasa.gov/GPM)

### SMAP (Soil Moisture Active Passive)
- Launched January 21, 2015
- Combined radar(active) and microwave radiometer (passive) sensors to measure soil moisture content.
- Unfortunately, the radar sensor failed in September 2015.
- Applications include monitoring drought, predicting floods, assisting crop productivity, and forecasting storms.
###### Resources:
[SMAP](https://smap.jpl.nasa.gov/)
