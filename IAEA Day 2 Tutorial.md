## IAEA Day 2 Tutorial
## Landsat Image Classification in QGIS
---
### In this tutorial, you will learn:
1. How to query and download Landsat images in QGIS
2. How to preprocess images for classification
3. How to create good training data
4. How to create and assess a classified image.

---
### Outline
1. QGIS setup
    - Install plugins
2. Image preprocessing
    - Choose study area
    - Download Landsat image
    - Create Band Set 
3. Training
    - Define landcover classes
    - Define ROIs
    - Analyze spectral separability
    - Create classification previews
4. Allocation
    - Test classification algorithms
5. Accuracy Assessment
    - Compare validation samples to classified map

---
### Part 1: QGIS Set-up 

#### 1. Open QGIS

:arrow_right: Create a new project 

#### 2. QGIS Plugins
QGIS plugins allow new features and functions to be added to QGIS, many of which are developed and maintained by members of the QGIS community.

<img src="https://drive.google.com/uc?export=view&amp;id=1vHjNZx7cAkNIfkBhEt5vilCj-n7uGTb4" alt="PlugIns" style="zoom:67%;" />

:arrow_right: Go to **Plugins** in the QGIS menu bar, then click **Manage and Install Plugins**. From here, you can search all available and all currently installed Plugins.

:arrow_right: Search **QuickMapServices** and click **Install Plugin**. QuickMapServices contains a collection of basemaps and may be useful when making training data.

:arrow_right: Search **Semi-Automatic Classification Plugin** (SCP) and click **Install Plugin**. SCP is a widely-used plugin in QGIS for downloading, processing, and supervised classification of remote sensing images.

#### 3. SCP Interface
Once you close the Plugin Manager, you should see:
1. SCP Menu (in the QGIS main menu bar)
2. SCP Toolbar
3. SCP Dock Panel

<img src="https://drive.google.com/uc?export=view&amp;id=1n-mGE86bjUGkMbfcre3mLVxTiT9hhBFy" alt="Interface" style="zoom: 50%;" />

#### 4. QuickMapServices Interface
The QuickMapServices search tools will be located in the QGIS toolbar. 

<img src="https://drive.google.com/uc?export=view&amp;id=1V1cwJrT606jzBUZdF7ktqVq3UqRFNhll" alt="QMS" style="zoom:50%;" />

---
### Part 2: Landsat Image Download and Preprocessing

#### 1. Choose an Image to Classify
**Southern Australia**

<img src="https://drive.google.com/uc?export=view&amp;id=1MSRW8AG1Nsgq59aL66g3mVQDO6SVCBqI" alt="Aus" style="zoom:50%;" />

| MC ID | Land Cover |
| :---: | :--------: |
|   1   |    Crop    |
|   2   |   Shrub    |
|   3   |    Bare    |
|   4   |  Built-up  |
|   5   |   Forest   |

**Southwest USA**

<img src="https://drive.google.com/uc?export=view&amp;id=17BkGNFyluPJFwOsq7f8sNt3ckrsPFmOX" alt="CA" style="zoom:50%;" />

| MC ID |      Land Cover      |
| :---: | :------------------: |
|   1   | Dry / Harvested Crop |
|   2   |     Healthy Crop     |
|   3   |         Bare         |
|   4   |       Built-up       |
|   5   |        Forest        |


#### 2. Find Landsat Imagery via SCP
SCP creates a portal to EarthExplorer allowing you to access the Landsat archive from QGIS. You can search preview, and select image bands to download. 

:arrow_right: Click the **Download Products** icon on the top of the SCP Dock. 

:arrow_right: Go to the **Login Data** tab and enter your EROS credentials (same credentials as EarthExplorer)

<img src="https://drive.google.com/uc?export=view&amp;id=1Xnpp9yRHhwEwn_MC9ObCdQQlcdt_57Z6" alt="EROS"  />

:arrow_right: Go to the **Search** tab.

:arrow_right: Choose an image from the two options below (SE Australia or SW United States) for your classification, and input the search criteria. 

:arrow_right: Select the image that matches the name specified below. Be sure to select the T1 (Tier 1) products, not the RT (Real Time).

**Southern Australia**

- Landsat 8
- September 12, 2019
- UL = 137.81555,-33.54363
- LR = 140.27515, -35.67100
- Cloud Cover = < 1
- ProductID = LC08_L1TP_097084_20190912_20190917_01_T1

**Southwest USA**
- Landsat 8
- August 9, 2019
- UL = -120.77832,  37.07883
- UR = 118.10987, 34.98372
- Cloud Cover = < 1
- ProductID = LC08_L1TP_042035_20190809_20190820_01_T1

#### If you have trouble finding the images...
Unfortunately, this feature doesn't seem to work smoothly 100% of the time. 

:arrow_right: If necessary,​ download the image and then proceed to step 4.

[Australia Image](https://drive.google.com/open?id=10l2KYiC2bfBLGCgrce89rrzj1QTQDCQL)

[California Image](https://drive.google.com/open?id=13XPbigobT7-vcJo9dk2845ceLt2ZfI-u)

#### 3. Download Landsat Imagery

:arrow_right: Click **Display preview of highlighted images in map**  (top of the toolbar to the right of the image thumbnail)

:arrow_right: Minimize the dialog box and examine the displayed image. If it looks good, continue with the download. 

:arrow_right: Unselect **Preprocess Images** at the bottom. This option applies an atmospheric correction and converts to surface reflectance data. You may want to use it the future, but this time we will apply the correction ourselves. 

:arrow_right: Click **Run** and specify an output folder. A status bar should appear at the top of your map as the image downloads.

![SCP Search](https://drive.google.com/uc?export=view&id=1CDFRpIULNwDqMwV9pIcQCQHTmmCKyIcg)

#### 4. Explore Region in Google Earth

Building familiarity (or ideally, expertise) with the region you are classifying is an important part of the classification process. While we wait for the images to download, use the footprint KMLs to explore the landcover using higher resolution images and images from multiple dates. It is recommended to refer back to Google Earth as you create training data.

![GoogleEarth](https://drive.google.com/uc?export=view&id=19y7pKM92lcSoi1HAlNX7mxKaF_YuC2Se)

Download the footprint .kml and shapefile corresponding to your image. Notice that the footprint is smaller than the Landsat scene. We will be using the shapefile to clip the scene in step 7.

[Australia Footprint](https://drive.google.com/open?id=1NVK0rK7Jtd0rY7yzzx2y9qfenhMpdAyv)

[California Footprint](https://drive.google.com/open?id=1YgIFfStnYZWxPk-JuChtZ2jNx-pZ056Q)

#### 5. Apply Atmospheric Correction
There are a couple options for preprocessing. We are interested in converting to surface reflectance, so we will apply the DOS1 (Dark Object Subtraction) atmospheric correction. 

:arrow_right: Click the **Preprocessing** icon on the top of the SCP Dock

:arrow_right: From the **Landsat** tab, click **Select a directory** and point the tool to the folder containing your Landsat data

:arrow_right: Click **Open a file** to select the **MTL text file**

:arrow_right: Select **Apply DOS1 atmospheric correction**

:arrow_right: Select **only to blue and green bands** (this is an option since blue and green are most affected by scattering).

:arrow_right: Unselect **Create Band set and use Band set tools**. This would save you a step, but again for the purposes of the tutorial we walk through the process step-by-step.

:arrow_right: Click **Run** and specify an output folder. A status bar should appear at the top of your map as the image processes. The output image bands will have a "RT_" prefix.

:arrow_right: Pause to compare the corrected images. What, if anything, changed?

![AtmoCorrection](https://drive.google.com/uc?export=view&id=1LEbgfkte1a6FGYMF3NCdOAesoIPK4HvD)

###### Resources:
[SCP Documentation | Landsat image conversion to reflectance and DOS1 atmospheric correction](https://semiautomaticclassificationmanual-v3.readthedocs.io/uk_UA/latest/remote_sensing.html#landsat-conversion-to-reflectance)

#### 6. Create Band Set 1
The image input to SCP is a Band Set. Some of the preprocessing tools also require a Band Set input, for example - the clip tool. We will create Band Set 1 so we can clip the images, and then replace it with a new Band Set that contains the clipped results.

:arrow_right: Click the **Band set** icon on the top of the SCP Dock. 

:arrow_right: Click **Refresh list** in the **Single Band list** section. All single band rasters currently on the map should be added to the list. 

:arrow_right: Select the processed (**RT_\***) bands 2 - 7 and add them to the band set.  

:arrow_right: Select **Landsat 8 OLI [bands 2, 3, 4, 5 ,6 ,7]** from the **Quick wavelength settings** dropdown to automatically set the center wavelength for each band and the wavelength unit, both needed for spectral signature calculation. 

:arrow_right: Click **Run** and specify the output folder.

<img src="https://drive.google.com/uc?export=view&amp;id=1E5mE8NxisntbveeCIeK6Ga5kRRgcFEnj" alt="Bandset1"  />

#### 7. Clip Band Set 1

We will clip Band Set 1 to a smaller extent (approx.100 km x 100 km) to reduce the processing time.

:arrow_right: Add the footprint shapefile (downloaded in Part 1, step 4) to your map by dragging the .shp file to your project (don't worry about the additional fileparts, e.g. .prj, .sbx,... QGIS will find these)

:arrow_right: Open the **SCP Menu**, and go to **Preprocessing** 

:arrow_right: Scroll through the tabs on the top until you find **Clip Multiple Rasters**

:arrow_right: Check the **Use vector for clipping** box, and then **Refresh list** to load your shapefile.  

:arrow_right: Click **Run**

<img src="https://drive.google.com/uc?export=view&amp;id=1NIT_JnoxKdNBAq-kbdw9PzFb0m3yxDXi" alt="ClipBandSet" style="zoom:67%;" />

#### 8. Create Second Band Set

Now, we need to clear the original Band Set and make a new Band Set for the clipped images. This is the Band Set we will be working with for the remainder of the classification.

:arrow_right: Navigate to **Band Set** in the **SCP Menu**

:arrow_right: Click **Reset** to clear your original Band Set

:arrow_right: Downsize the **SCP_Menu** and remove the full size **RT_\*** files from your map layers. Return to the **SCP Menu**

:arrow_right: Use **Refresh list** to load the clipped rasters

:arrow_right: Select the clipped rasters and add them to the Band Set 

:arrow_right: Again, select **Landsat 8 OLI [bands 2, 3, 4, 5 ,6 ,7]** from **Quick wavelength settings**

:arrow_right: Check **Create virtual raster from band set**

:arrow_right: Click **Run**

<img src="https://drive.google.com/uc?export=view&amp;id=1ggKM1-VT7Y2LmIclNr5Hh3h07I9GBCkY" alt="BandSet2" style="zoom:67%;" />

A virtual raster (VRT) will be automatically created when the band set is run. The VRT and Band Set should appear in your **Layers** when complete.  Note that the band numbers in the virtual raster are determined by placement of the bands in the band set, not the original Landsat 8 image.

You can turn off (uncheck) the other clipped Landsat bands for improved render speed, but don't remove them!

#### 9. Quick Composites

:arrow_right: Find the **Select a RGB color composite** dropdown in the **SCP Toolbar** along the top of the map. 

:arrow_right: Click the dropdown, and select **432** from the menu. 

The map quickly changes to a false color composite! (NIR-Red-Green)
- You can add different band composites to the list by typing the band numbers in RGB format into the dropdown field. 
- Quickly switching between composites is very valuable when making training data as it will help you to distinguish objects and to infer the object's composition based on how it appears when differnt bands are included.
- The two buttons to the right of the **RBG Composite** are also useful for quickly adjusting the stretch of the VRT. 

<img src="https://drive.google.com/uc?export=view&amp;id=1TeSYS9cO7oH0qJa95_C0i6Q-tSK96C6v" alt="321" style="zoom:50%;" />

<img src="https://drive.google.com/uc?export=view&amp;id=1ZuQlcu4SnUgorgTmesxANDjVV-AlMgER" alt="432" style="zoom:50%;" />

-- ---
### Part 3: Training
- In SCP training sites are referred to as **ROIs**
- Each ROI is identified by a **Macroclass ID** and a **Class ID** 
- You can think of the **Macroclass** (MC) as the equivalent of the informational class (e.g. vegetation) and **Class** as equivalent to the spectral class (e.g. deciduous trees, coniferous trees).
- We will use one **Macroclass ID** (MC ID) for each informational class, and a different **Class ID** (C ID) for each sample in the MC (we are recognizing that the MC has several spectral subclasses, but we aren't making any associations between samples with the same subclass)

For example:

| Info/Macroclass | MC ID | Spectral Class | C ID |
| :-------------- | :---: | :------------- | :--: |
| Vegetation      |   1   | Deciduous      |  1   |
| Vegetation      |   1   | Deciduous      |  2   |
| Vegetation      |   1   | Deciduous      |  3   |
| Vegetation      |   1   | Coniferous     |  4   |
| Vegetation      |   1   | Coniferous     |  5   |
| Water           |   2   | Clear water    |  6   |

#### 1. Create a Training Input File

:arrow_right: In the **SCP Dock**, go to the **Training input** tab

:arrow_right: Click **Create a new training input** and specify a name for your training data file. 

This creates a SCP file that will store all of your ROIs as vectors. Avoid editing this file with the standard QGIS functions.

<img src="https://drive.google.com/uc?export=view&amp;id=1GPyCN4h_87v2PW-vQXGg9FDqhyAiU6oQ" alt="TrainingInput" style="zoom:67%;" />

#### 2. Create Temporary ROI

:arrow_right: Click the **Create a ROI polygon** icon in the **SCP Toolbar**

:arrow_right: Left click the map to draw vertices and right click to close the polygon. Once you have defined the ROI a semi-transparent orange temporary polygon will be displayed. 

:arrow_right: If the polygon looks good, continue to step 3. If not, you can redraw the temporary polygon until it looks right.

<img src="https://drive.google.com/uc?export=view&amp;id=1P5a0JwyapTzdomDEPBbnXhv1FWvkGrOi" alt="TempPolygon" style="zoom:80%;" />

Tips:

- Use the Pan map tool to move around the image as you select ROIs. 
- The NDVI value is displayed for the pixel under your cursor as you move around the map. 

- Use **Create a ROI polygon** to define the vertices of the ROI manually.

- Use the **Activate ROI pointer**  tool to define the vertices automatically. This tool calculates the spectral similarity between the a selected pixel and it's neighbors, resulting in homogenous ROIs.

  ![autoROI](https://drive.google.com/open?id=1TZZtiapOucqi745WQToc4vcW_n-30fL4)

> What are the advantages and disadvantages of each ROI definition method?

#### 3. Save ROIs

:arrow_right: Click the **Training Input** tab on the right side of the **SCP Dock**, then open the **ROI Signature List** sub-tab.

:arrow_right: At the bottom of the panel, set **MC ID = 1**, **MC Info = Name of your first class** (see above), **C ID = 1**, and **C Info =  ROI Description** (i.e. "Healthy Vegetation").

:arrow_right: Click the **Save temporary ROI to training input**  icon. 

:arrow_right: Continue drawing polygons, labeling, and saving.

:arrow_right: For now, make a few samples for your first MC. Then, continue through **Step 7 - Classification Preview** before creating more ROIs.

**C Info** may be used as a note for your purposes - i.e. when refining training data. It will not affect the classification.

<img src="https://drive.google.com/uc?export=view&amp;id=1jo8BqTmBJpORSnGNWhqhtTK1iaW28gwk" alt="SaveROIs" style="zoom:80%;" />

#### 4. Assess Spectral Signatures
Creating training data is an iterative process, it is important to stop and assess the quality of the samples.

There are several ways to assess the spectral signatures in SCP:

##### Spectral Signature Plot

:arrow_right: With the **ROI Signature list** tab open, select the signatures you have created so far.  

:arrow_right: Click the **Add highlighted signatures to spectral signature plot** icon on the left side of the panel. 

<img src="https://drive.google.com/uc?export=view&amp;id=1YBVvmJRa5-vJ3nOxXHT5rorDXWEOdeSc" alt="SpecSig" style="zoom:80%;" />

- The plot shows the average spectral signature (reflectance in each band) of the pixels in each ROI. 
- The semi-transparent area around each line shows the min/max values of all the pixels in the ROI.
- If the range between min/max is large (i.e. a large semi-transparent area) then the ROI is not a homogenous sample. 
- The min/max values are also printed in the **Signature list** above the plot. 

##### Signature Details

:arrow_right: Click the **Signature details** tab on the left side of the **Spectral Signature Plot** dialog box. 

<img src="https://drive.google.com/uc?export=view&amp;id=1dh4AL92YBq9jN_DrzUX82TqpKEFBbUpp" alt="SigDetails" style="zoom: 50%;" />

This tab contains more information on each ROI, such as the average value at the specified wavelength (based on Landsat bands), the standard deviation from that value, and the number of pixels in each ROI.

##### Spectral Distances

:arrow_right: Click the **Spectral distance** table on the left side of the **Spectral Signature Plot** dialog box.

:arrow_right: Click the **Calculate spectral distances** icon in the top left corner of the dialog box.

<img src="https://drive.google.com/uc?export=view&amp;id=1_sFG2svHsJtkHfGRJqsupaLsbX_mpLfC" alt="SpecDist" style="zoom: 67%;" />

- This will calculate four different measures of similarity for each ROI-pair, i.e. the similarity between ROI 1 & ROI 2, ROI 1 & ROI 3, ... 

- The ROI pair name is given at the top of the table. 

- The different measures are related to different classification algorithms. For example, for an ROI pair of the same MC, if the **Spectral angle** is low but the **Jeffries-Matusita** distance is high, the Spectral Angle classification may preform better than Maximum Likelihood.

##### Spectral Scatter Plot

:arrow_right: Close the **Spectral Signature Plot**

:arrow_right: Make sure your ROI samples are still selected

:arrow_right: Click the **Add highlighted items to scatter plot** icon 

:arrow_right: You can change the bands by adjusting the **Band X** and **Band Y** fields and then clicking **Calculate**

<img src="https://drive.google.com/uc?export=view&amp;id=1KUtN_GGrWuuuw-vrl5CHbNQ12wiBq4Ag" alt="SpectralScatter" style="zoom: 80%;" />

- This plot is a 2D window into the multidimensional dataspace.
- The pixel values for each ROI are plotted for the bands on the X and Y axes. 
- If the results aren't visible after calculating the values for a new band, click the **Automatically fit plot to the data** button in the **Plot** section.
- Ideally, the ROI samples from the same MC will form a cluster on the scatter plot. If the samples are too spread out, we will be training the classifier with inconsistent information about what the MC looks like. 

> How do your signatures look so far? Do you think you've selected a homogenous sample?

###### Resources:

[Spectral Signature Plot| SCP Documentation](https://semiautomaticclassificationmanual-v5.readthedocs.io/en/latest/spectral_signature_plot.html )

[Spectral Distance| SCP Documentation](https://semiautomaticclassificationmanual-v4.readthedocs.io/en/latest/remote_sensing.html#spectral-distance-definition)

[Spectral Scatter Plot | SCP Documentation](https://semiautomaticclassificationmanual-v5.readthedocs.io/en/latest/scatter_plot.html )

#### 5. Assign a Logical Color Scheme

:arrow_right: In the **SCP Dock**, navigate to **Training Input**, then **Macroclass list**. You should see all of the MC IDs that you have created so far. 

:arrow_right: Click the **Color** box to choose a color to represent the class. 

<img src="https://drive.google.com/uc?export=view&amp;id=1EZPHLsQ7m9RFNsH5-Xlkb1KH3etEcTZE" alt="ColorScheme" style="zoom: 67%;" />

#### Classification Preview
Another useful tool for assessing training data is the **Classification preview**. This tool allows you to classify a small region of your image to test the performance of your ROIs and selected algorithm. The results are added to a group of temporary rasters that will be deleted when QGIS is closed. We've already reviewed some classification methods, but the MC ID, C ID, and Land Cover Signature options are specific to SCP. 

#### MC ID & C ID 
- **MC ID** will classify pixels based on the landcover class defined by MC IDs (i.e. will assign pixels to a class based on a group of ROIs belonging to the same MC ID)
- **C ID** will base the classification on each of your ROIs individually (i.e. will assign pixels to whichever ROI is most similar). 
- A **C ID** classification may not be a useful end product, but it can be helpful for gaining insight into how your ROIs are related to the landscape (Is one ROI especially representative? or especially unrepresentative?)

#### Land Cover Signature Classification
- The **Land Cover Signature Classification**(LCS) is a classification method developed in **SCP**, and is based on pixel ranges (thresholds). 

![LCS](https://drive.google.com/uc?export=view&id=1emLha3amIhy9uK52FiHI-c-G8jHygZ5f)

- A pixel belongs to a MC *only if* its spectral signature is completely contained in the spectral region of the MC. Another way to describe it is if the pixel signature falls within the min/max range of the training signature, or within the transparent area around the training signature in the **Spectral Signature Plot**.
- Any pixel that isn't completely contained in a spectral region is will remain unclassified
- Any pixel that is contained by multiple spectral regions will be classified as Overlap.
- Checking the **only overlap** box will use LCS as the primary classifer and the selected algorithm as a backup option when a pixel belongs to more than one spectral region. 
- LCS is very useful for checking the quality of training data as you go, because anything that does not match your class will not be classified. 
- Tip: When viewing the **Spectral Signature Plot** signatures that have overlapping spectral regions are highlighted in orange in the **Signature List**.

#### 6. Create a Classification Preview

Since we have only made training data for a single class, we will try applying SCP to see how well that class is preforming so far. 

:arrow_right: Go to the **Classification** tab in the **SCP Dock**. 

:arrow_right: Select **Use MC ID**. 

:arrow_right: Check Use: **LCS**. Leave the other boxes unchecked. 

:arrow_right: Click **Activate classification preview pointer** in the **SCP Toolbar**. Optionally, adjust the preview size and/or transparency using the adjacent icons on on the **SCP toolbar**.

![PreviewBar](https://drive.google.com/uc?export=view&id=12IJPBnmAtebPsfZEZuDeyVhVKL7rDQah)

:arrow_right: Click a region of the image that has some of the land cover type you have created samples for. 

> How well did your ROIs capture the land cover of interest?

<img src="https://drive.google.com/uc?export=view&amp;id=1y2IyZhaJjT2ovL0Wwo04y4Vu9w4KQu9m" alt="MCID" style="zoom:67%;" />



#### 7. Try a CID Classification Preview

:arrow_right: Go back to the **Classification** tab in the **SCP Dock**. Check the **C ID** box. 

:arrow_right: Click the **Redo the classification at the same point** icon on the **SCP toolbar**. 

> What is the result? Does one ROI (one C ID) explain most of the variation in the preview? Are there any overlap areas (where multiple ROIs capture that landcover)

<img src="https://drive.google.com/uc?export=view&amp;id=1z-3NKXSTsFE2qWfpain84axyXk2hRjhQ" alt="CIDpreview" style="zoom:67%;" />

:arrow_right: Try previewing a few more areas until you get a sense of which ROIs are most representative of the landcover.

:arrow_right: :arrow_right: :arrow_right: Once you have tested the preview, repeat steps 2-7 until you have created a representative collection of ROIs. As you go, test different settings for the classification preview (Change algorithms, LCS, MC ID/ C ID).

> How do the classification previews change as you add more ROIs? 
> What can you learn by looking at each one?   

###### Resources:
[From GIS to Remote Sensing: Land Cover Signature Classification Tutorial](https://fromgistors.blogspot.com/2016/10/land-cover-signature-classification.html)

#### Additional Tips and Examples:

##### MC ID vs CID with a Range of Crop ROIs

Now that there are several (16) ROIs representing crop, we can use the CID classification to see which ROIs are really capturing the landcover and weed out the ones that aren't. In this example of a LCS classification, ROI 16 (gray/pink) is the most similar to the pixels in the preview. ROI 4, on the other hand, is not represented at all. You can use the **Identify** tool to find the pixel value (AKA the C ID value) for your classification preview if it is hard to match the pixels to colors in the legend.  Try several previews before eliminating a ROI that doesn't represent the landcover well. 

![MCvC](https://drive.google.com/uc?export=view&id=1bXs0CSnVValBw2Bu52eeo0-PkSQh4lg0)



##### Spectral Signature Plot with Crop ROIs and Shrub ROIs

The spectral signature plot (below, left) shows the signatures of several crop ROIs and several shrub ROIs (some of which are pictured below, right). The plot is useful for visualizing the variability within a class (healthy vegetation below has a higher peak at 0.9 than the unhealthy vegetation) and distinguishing between classes (although they each have internal variability, the shrub signatures are still distinct from the crop signatures).

![ShrubSig](https://drive.google.com/uc?export=view&id=1P7_OPN809EM6ZWoR4dLj8FKjOf0jZoVL)





##### Consult Google Earth when Necessary

Sometimes, it is hard to know for sure what you are looking at in a Landsat (or any) satellite image. It can be really helpful to have higher resolution images and/or images from multiple dates to identify the land cover. If you get stuck, locate the area in Google Earth and use the time slider to view multiple images of your mystery area.

<img src="https://drive.google.com/uc?export=view&amp;id=1_BSe4_3BjKzj6kY5CLYs4P5KWWPE3_Cb" alt="GoogleEarthHelp" style="zoom:50%;" />

##### Interpreting CID Classifications

If you have too many C IDs to keep track of, it may be helpful to group them by assigning ROIs in the same spectral class a common color. This way, you can see if you are actually represeach spectral class or not. 

<img src="https://drive.google.com/uc?export=view&amp;id=103BjZ9ewW9KYP8Zc_o0yKYtevMrmjcqN" alt="GroupedCIDs" style="zoom:50%;" />

---
 ### Part 4. Allocation

 Now that you are confident in your ROIs, you are ready to allocate the unclassified pixels. Selecting a classifier will be easy - you have already completed 90% of the process in step 5 of the Training section. 

#### 1. Select and Run Algorithm

:arrow_right: Go to the **Classification** tab in the **SCP Dock**

:arrow_right: Check the **MC ID** box at the top - remember we want to group things based on the informational classes for the final map

:arrow_right: Select a classification algorithm. Repeat this step so you can try all of the algorithms.

:arrow_right: Leave the other fields empty and boxes unselected

:arrow_right: Click **Run** and specify a name for the output 

<img src="https://drive.google.com/uc?export=view&amp;id=1ikeHL5YmfJN-j5_Tn6O6g83LHCompP94" alt="classification" style="zoom: 25%;" />

#### 2. Visual Assessment

:arrow_right: Pan around the map and visually inspect the classification.

To change the transparency:

:arrow_right: Click the classified map &rightarrow; **Layer Properties** &rightarrow; **Symbology**

<img src="https://drive.google.com/uc?export=view&amp;id=1wKuhYvrz6W3fsoso-mBC3XXPOb9JHUxD" alt="Classification Examples" style="zoom:50%;" />

---
### Part 5. Accuracy Assessment

Designing an accuracy assessment requires careful consideration of the number and distribution of your validation points. There's a substantial collection of work on sample design, some of the references are included in the resources. One of the main priorities is to include an adequate number of samples per class, even if the class covers a small area.

For the purposes of the tutorial, the validation data were prepared ahead of time. As the samples are for demonstrative purposes only, they were not created following a rigorous statistical method and only include about a tenth of the sample points that should ideally be used.  

Process for producing the validation samples (the tutorial below provides more detail):
1. Create a **Classification Report** in SCP. The report contains the percent cover for each class and statistics to calculate the number of samples. In this case, the proportion was used to estimate a reasonable stratification.
2. Use **Multiple ROI Creation** in SCP to distribute random points for each landcover class, based on output classification. 
3. Export the sample points as a KML, and then use Google Earth to interpret the *actual* landcover. Update the **MC ID** value for the sample points in QGIS as you interpret them in Google Earth.

#### 1. Download the Prepared Sample

:arrow_right: Download the validation sample for your image and save it with your other classification data.



#### 2. Run SCP Accuracy Assessment

The accuracy statistics will be displayed once they are calculated. A csv will be saved with the values in a tab-delimited format. The assessment also produces an error raster that displays the errors on the map, where the pixel values represent a combo of the classification and reference id (identified in the ErrorMatrixCode). The matrix includes several statistics used to estimate the accuracy. The calculation is based on (Olofsson, et al., 2014).

:arrow_right: Open the **SCP Menu** &rightarrow; **Postprocessing** &rightarrow; **Accuracy**

:arrow_right: Add your classified map to the **Select the classification to assess** field

:arrow_right: Add the validation data to the **Select the reference vector or raster** field. In this case, we are 
using vector data. 

:arrow_right: Set **Vector field** to **MC_ID**

<img src="https://drive.google.com/uc?export=view&amp;id=1oOV4ExIE28HOwZIs887qw-4YR9jga06U" alt="AccuracyTool" style="zoom: 50%;" />

#### 3. Interpret Results

![AccuracyOutput](https://drive.google.com/uc?export=view&id=1SGZb409L3HQkriea__8aNIyjyh35ceXn)

> What was the biggest source of error in your map?
> How do you think you could reduce this error if you classified this image again?

###### Resources:
[From GIS to Remote Sensing: Accuracy Assessment of a Land Cover Classification Tutorial](https://fromgistors.blogspot.com/2019/09/Accuracy-Assessment-of-Land-Cover-Classification.html)

[Olofsson et al. (2014) Good practices for estimating area and assessing accuracy of land change]( http://reddcr.go.cr/sites/default/files/centro-de-documentacion/olofsson_et_al._2014_-_good_practices_for_estimating_area_and_assessing_accuracy_of_land_change.pdf )

