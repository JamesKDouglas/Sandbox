import cv2 as cv
inputImage = cv.imread("candledark.jpg", -1) # import the image
retina = cv.bioinspired_Retina.create((inputImage.shape[1], inputImage.shape[0])) #make a container for the Retina objecct.
retina.setup('retinaParams.xml') #load parameters
cv.imshow('input frame', inputImage)
retina.run(inputImage) #so it just keeps the data of the new image inside an object.
retinaOut_parvo=retina.getParvo()
cv.imshow('retina parvo out', retinaOut_parvo)
cv.waitKey(0)