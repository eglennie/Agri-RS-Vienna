### Landsat 8 Band Characteristics and Combinations

#### Landsat Band Characteristics 
| Band # | Wavelength | Resolution | Characteristics |
| :---:  | :--------: | :--------:| :----------------|
| 1 | 0.433-0.453| 30 m | **Deep blues and violet.** It is hard to collect energy at this wavelength due to atmospheric scattering. However, this band is useful for shallow water imaging and tracking fine air particles.|
| 2 | 0.450-0.515 | 30 m | **Visible blue.**  Like band 1, this band is also affected by atmospheric scattering. Still, it can be used for bathymetry, detecting haze/smoke/clouds, and seperating clouds from snow and rock |
| 3 | 0.525-0.600 | 30 m | **Visible green.** In the visible range, peak vegetation reflectance is in green band - hence why it appears green. This band can be used to assess plant vigor and tubid water.|
| 4 | 0.630-0.680 | 30 m | **Visible red.** Tropical soils, the built environment, and geological features generally contain red in their spectral signatures. Vegetation absorbs red (and blue) light.|
| 5 | 0.845-0.885 | 30 m | **Near infrared (NIR).** Healthy vegetation strongly reflects NIR energy - the water in their leaves scatters it back to the sky. The Normalized Difference Vegetation Index (NDVI) - one of the most effective and widely used vegetation indicators- is based on the contrast between vegetation's absorbtion of red light and reflectance of NIR light. NIR is completely absorbed by water.|
| 6 | 1.560-1.660 | 30 m | **Shortwave infrared (SWIR).** Sensitive to moisture content in soil and vegetation, and useful for differentiating rocks and mineral. Less affected by the atmosphere, so can more easily penetrate light clouds and haze than the visible bands (VIS).|
| 7 | 2.100-2.300 | 30 m | **SWIR.**  Similar to band 6, band 7 is primarily used for imaging soil types, geological features, minerals, and vegetation water content.|
| 8 | 0.500-0.680 | 15 m | **Panchromatic (Pan).** Collects all visible reflected light into a single channel. Since more energy is returned, the sample area (pixel) can be smaller. Combine color information with the pan band to 'pansharpen' your image|
| 9 | 1.360-1.390 | 30 m | **Cirrus.** The atmosphere absorbs almost all the cirrus band, so the gorund is barefly visible. Instead this band picks up on high-altitude clouds, which are useful for quality assessment.|
| 10 | 10.6-11.2 | 100 m | **Thermal (TIRS-1).** This band sees emitted, rather than reflected, radiation, and is therefore used to see heat. |
| 11 | 11.5-12.5 | 100 m | **Thermal (TIRS-2).** This band sees emitted, rather than reflected, radiation, and is therefore used to see heat.|

Source:

[Spectral Signature Cheatsheet - Spectral Bands in Remote Sensing - GIS Geography](https://gisgeography.com/spectral-signature/)

#### Landsat Band Combinations

| Bands (Mapped to RGB channels) | Name | Description |
|:---: | :---: | :--- |
| 432 | Natural Color | This composite maps the RGB bands to the RGB channels, and is therefore as close as you can get to a "true color" composite using Landsat 8 |
| 543 | Color Infrared (CIR)| Healthy vegetation appears vibrant red. Coniferous trees generally appear in a darker red than deciduous. Lighter reds indicate grass or sparse vegetation. Urban areas appear in cyan and soils appear in shades of brown. Ice, snow, and clouds are white or light cyan. |
| 764 | False Color (urban) | Urban areas will appear white/cyan/purple, vegetation appears green, water appears dark blue/black. Using the SWIR bands helps avoid effects of scattering/ haze.|
| 632 | False color (bare Earth) | This combination is well suited to discerning variations in a landscape that has minimal vegetation. It is good for geologic applications |
| 652 | Agriculture| This combination is useful for monitoring crops, which appears vibrant green. Non-crop vegetation will apear in more subdued shades of green, and bare Earth will be magenta |
| 564 | Land/Water | Land appears in shades of orange and green, water appears in shades of blue, and ice is a vibrant magenta. |

Sources:

[The Many Band Combinations of Landsat 8 - L3Harris Geospatial Solutions](https://www.harrisgeospatial.com/Learn/Blogs/Blog-Details/ArtMID/10198/ArticleID/15691/The-Many-Band-Combinations-of-Landsat-8)

[Band Combinations for Landsat 8](https://www.esri.com/arcgis-blog/products/product/imagery/band-combinations-for-landsat-8/)
