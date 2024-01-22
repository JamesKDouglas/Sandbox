# to make a basic fastAPI server all you do is
# make a virtual environment with python -m venv .venv
# activate the environment with source activate
# import the dependencies with pip:
# fastapi, "uvicorn[standard]", multipart (for file uploading)
# make a main.py like below
# run it with uvicorn main:app --reload from the directory where main.py is
# when you make a change to a file it will reload the server.

from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI, UploadFile, Form, Depends
import shutil as shutil

import cv2
# import cv

from fastapi.responses import FileResponse

# for numpy arrays
from PIL import Image
from io import BytesIO
import numpy as np
import copy

# this helps process the POST request body to include radio button info
from dataclasses import dataclass
@dataclass
class FilterMyPhoto:
    filter: str = Form(...) 
    file: UploadFile = Form(...)

# On with the main bit:
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

@app.post("/uploadfile/")
async def read_root(reqBody: FilterMyPhoto = Depends()):
    
    photo = reqBody.file

    fileNameOriginal = "./files/"+photo.filename
    
    saveAsNumpy(photo)

    with open(fileNameOriginal, "wb") as buffer:
        shutil.copyfileobj(photo.file, buffer)


    if reqBody.filter == "bw":
        # im_gray = cv2.imread(fileNameOriginal, cv2.IMREAD_GRAYSCALE)
        # (thresh, im_bw) = cv2.threshold(im_gray, 255, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)
        
        image = cv2.imread(fileNameOriginal) 
        gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY) 
        cv2.imwrite("./files/"+"f_"+ photo.filename, gray_image)

        # image = cv2.imread(fileNameOriginal) 
        # kernel = np.array([[-1,-1,-1], [-1,9,-1], [-1,-1,-1]])
        # image = cv2.filter2D(image, -1, kernel)

    # now for filtering the image, refer to reqBody.filter. It can be "bw" or "red" right now.
    # should I use OpenCV for the filtering? idk, whatever works. OpenCV seems like overkill
    
    return FileResponse("./files/"+"f_"+photo.filename)
