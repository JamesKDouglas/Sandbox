# This dispenses with the custom data class and uses the default data types 

# This method requires the ?filename= prefix in the URL. Main4 requires that prefix to be removed.
# also in main4 there was a complaint from trying to use the Query datatype. But it works fine here.

# Does this method take information from the body of the request or the URL?

# to make a basic fastAPI server all you do is
# make a virtual environment with python -m venv .venv
# activate the environment with source activate
# import the dependencies with pip:
# fastapi, "uvicorn[standard]", multipart (for file uploading)
# make a main.py like below
# run it with uvicorn main:app --reload from the directory where main.py is
# when you make a change to a file it will reload the server.

from fastapi import File, UploadFile, Query

from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI, UploadFile, Form, Depends
import shutil as shutil
import cv2
from fastapi.responses import FileResponse

# for numpy arrays
from PIL import Image
from io import BytesIO
import numpy as np
# import copy

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

def saveAsNumpy(data):
    image = read_imagefile(data.file.read())
    np.save("./files/" + data.filename, image)
    # after reading a file remember to close it if you want to read it again!
    data.file.seek(0)
    return

def read_imagefile(data) -> Image.Image:
    image = Image.open(BytesIO(data))
    return image

def adjust_contrast_brightness(img, contrast:float=1.0, brightness:int=0):
    """
    Adjusts contrast and brightness of an uint8 image.
    contrast:   (0.0,  inf) with 1.0 leaving the contrast as is
    brightness: [-255, 255] with 0 leaving the brightness as is
    """
    brightness += int(round(255*(1-contrast)/2))
    return cv2.addWeighted(img, contrast, img, 0, brightness)


@app.post("/uploadfile/")
async def upload_file(file: UploadFile = File(...), filter_param: str = Query(...), filename: str = Query(...)):
    
    print(filename, filter_param)
    photo = file
    fileNameOriginal = "./files/"+photo.filename
    saveAsNumpy(photo)

    with open(fileNameOriginal, "wb") as buffer:
        shutil.copyfileobj(photo.file, buffer)

    image = cv2.imread(fileNameOriginal) 
    
    if filter_param == "bw":
        image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY) 

        filename = "./files/"+ "bw_" + photo.filename
        path = "./static/" + filename
        cv2.imwrite(path, image)

        print(path)

        return {"message":filename}

    elif filter_param == "red":
        # BGR 012
        image[:,:, 0]= 0
        image[:,:, 1]= 0
        image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY) 
        
        filename = "./files/"+ "bw_red" + photo.filename
        path = "./static/" + filename
        cv2.imwrite(path, image)

        print(path)
        
        # This is required because the JS retrieves the image with this.
        return {"message":filename}
