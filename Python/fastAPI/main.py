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
from PIL import Image, ExifTags
from io import BytesIO
import numpy as np
import os as os
# import copy

from sql_app import main as db

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
    

    # put it into the database
    # @app.post("/users/", response_model=schemas.User)
    # def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    #     db_user = crud.get_user_by_email(db, email=user.email)
    #     if db_user:
    #         raise HTTPException(status_code=400, detail="Email already registered")
    #     return crud.create_user(db=db, user=user)

    print(filename, filter_param)
    fileNameOriginal = "./static/filesOriginal/"+filename
    saveAsNumpy(file)

    # save original
    with open(fileNameOriginal, "wb") as file_object:
        file_object.write(file.file.read())

    image = cv2.imread(fileNameOriginal) 
    
    if filter_param == "bw":
        image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY) 

        filename = "./files/"+ "bw_" + filename
        path = "./static/" + filename
        cv2.imwrite(path, image)

        return {"message":filename}

    elif filter_param == "red":
        # BGR 012
        image[:,:, 0]= 0
        image[:,:, 1]= 0
        image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY) 
        
        filename = "./files/"+ "bw_red" + filename
        path = "./static/" + filename
        cv2.imwrite(path, image)
        
        # This is required because the JS retrieves the image with this.
        return {"message":filename}

@app.get("/api/images/")
async def get_filenames(orientation: str = Query(None), id: str = Query(None)):
    # There are no imputs, we just retrieve all filenames
    # return an object of objects, one for each file 
    # as 
    # {{id:(filename), size:, width:, height:, area:}{}}
    # Ok that means we need to create an id. 
    # Filenames must also be unique if the directory is the same
    # Now, I'm also suppose to just upload the image. 
    from os import listdir
    from os.path import isfile, join
    import json 

    onlyfiles = [f for f in listdir("./static/filesOriginal/") if isfile(join("./static/filesOriginal/", f))]

    print(onlyfiles)
    fileDict = {}
    for file in onlyfiles:
        # img = Image.open("./static/filesOriginal/"+file)
        # exif = { ExifTags.TAGS[k]: v for k, v in img._getexif().items() if k in ExifTags.TAGS }
        
        # this doesn't actually read the image, so it's fairly quick
        im = Image.open("./static/filesOriginal/"+file)
        width, height = im.size
        file_stats = os.stat("./static/filesOriginal/"+file)

        obj = {"id": file, "size": file_stats.st_size, "width": width, "height": height, "area": width*height }
        if orientation == "landscape":
            # If this is specified then return only landscape ones
            if obj["width"]>obj["height"]:
                fileDict[file] = obj
        elif orientation == "portrait":
            # If this is specified then return only portrait ones
            if obj["height"]>obj["width"]:
                fileDict[file] = obj
        else:
            # Otherwise, return all of them
            fileDict[file] = obj

    if id != Query(None):
        # If just 1 file is requested, discard the rest
        fileDict = fileDict[id]

    jsonFileList = json.dumps(fileDict)
    
    return jsonFileList

    # if orientation == "landscape":
    #     # filter our only landscape ones
    #     newList = []
    #     for f in fileDict:
    #         print(f)
    #         if f.width>f.height:
    #             newList.append(f)
    #     jsonLandscapeOnly = json.dumps(newList)
    #     return jsonLandscapeOnly
    # else:
        # return jsonFileList