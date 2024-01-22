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
    return

def read_imagefile(data) -> Image.Image:
    image = Image.open(BytesIO(data))
    return image

@app.post("/uploadfile/")
async def read_root(reqBody: FilterMyPhoto = Depends()):
    
    photo = reqBody.file
    photo2 = copy.deepcopy(photo)
    photo3 = copy.deepcopy(photo)

    # this reading as a numpy array seems to mess up the saving as a jpeg. Why can't they coexist?

    saveAsNumpy(photo2)
    
    with open("./files/"+photo.filename, "wb") as buffer:
        shutil.copyfileobj(photo.file, buffer)


    # now for filtering the image, refer to reqBody.filter. It can be "bw" or "red" right now.
    # should I use OpenCV for the filtering? idk, whatever works. OpenCV seems like overkill
    
    return FileResponse("./files/"+photo.filename)
