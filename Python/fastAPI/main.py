# to make a basic fastAPI server all you do is
# make a virtual environment with python -m venv .venv
# activate the environment with source activate
# import the dependencies with pip:
# fastapi, "uvicorn[standard]", multipart (for file uploading)
# make a main.py like below
# run it with uvicorn main:app --reload from the directory where main.py is
# when you make a change to a file it will reload the server.

from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI, UploadFile, File
from PIL import Image
from io import BytesIO
import shutil as shutil

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

def read_imagefile(data) -> Image.Image:
    image = Image.open(BytesIO(data))
    return image

@app.post("/uploadfile/")
async def read_root(file: UploadFile = File(...)):
    with open("./files/"+file.filename, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    return {"filename": file.filename}

    # if you want the file as a numpy array do this:

    # image = read_imagefile(await file.read())

    # process it, or save it for later:
    # np.save("./files/" + file.filename, image)
