import rasterio
import matplotlib.pyplot as plt
import numpy as np
import spectral

file = "/Volumes/Seagate/SpectralImaging/wheatMoghimi2018/CS.bip"
header_file = "/Volumes/Seagate/SpectralImaging/wheatMoghimi2018/CS.bip.hdr"

with rasterio.open(file) as src:
    hyperspectral_data = src.read()

    nir = src.read(120)
    red = src.read(172)

    # print('shape of hyperspectral data:', hyperspectral_data.shape)
    print('number of bands:', src.count)

img = spectral.open_image(header_file)

wavelengths = img.bands.centers

print('Shape of hyperspectral data (img),', img.shape)
print('Number of bands (img)', img.shape[2])
print('Wavelengths:', wavelengths)

ind = wavelengths.index(770.2624)
plt.imshow(hyperspectral_data[ind,:,:])
plt.show();

ind = wavelengths.index(649.1472)
plt.imshow(hyperspectral_data[ind,:,:])
plt.show();

#false color
# img = np.zeros([687,637,3], np.float32)

# ind1 = wavelengths.index(770.2624)
# ind2 = wavelengths.index(649.1472)
# ind3 = wavelengths.index(811.3184)

# img[:,:,2] = hyperspectral_data[ind1,:,:]
# img[:,:,1] = hyperspectral_data[ind2,:,:]
# img[:,:,0] = hyperspectral_data[ind3,:,:]

#ndvi
# img = np.zeros([687,637,1], np.float32)

# nir = wavelengths.index(770.2624)
# red = wavelengths.index(649.1472)

# nir = src.read(770.2624)
# red = src.read(649.1472)

np.seterr(divide = "ignore", invalid = "ignore")

ndvi = (nir-red)/(nir+red)

# Set pixels whose values are outside the NDVI range (-1, 1) to NaN
# Likely due to errors
# ndvi[ndvi > 1] = np.nan
# ndvi[ndvi < -1] = np.nan

# img[:,:,0] = hyperspectral_data[ndvi,:,:]

plt.imshow(ndvi)
plt.title("NDVI from hypercube")
plt.show()

exit()