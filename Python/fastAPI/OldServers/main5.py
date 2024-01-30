# made by chatGPT. This is the third try. The first time it tried to use FileResponse with bytesIO, which is not allowed:
# The second time, it mostly worked but the file does not appear in the browser as it should.
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse, StreamingResponse
from PIL import Image
from io import BytesIO
import os
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

def process_image(file_content: bytes) -> bytes:
    # Open the image using PIL
    image = Image.open(BytesIO(file_content))

    # Convert the image to grayscale
    grayscale_image = image.convert('L')

    # Save the processed image to a BytesIO object
    processed_image_content = BytesIO()
    grayscale_image.save(processed_image_content, format="JPEG")

    return processed_image_content.getvalue()

@app.post("/uploadfile/")
async def upload_and_process_image(file: UploadFile = File(...)):
    # Read the uploaded image content
    file_content = await file.read()

    # Process the image to grayscale
    processed_image_content = process_image(file_content)

    # Save the processed image to a temporary file
    temp_filename = "/tmp/processed_image.jpg"  # Use an appropriate temporary directory
    with open(temp_filename, "wb") as temp_file:
        temp_file.write(processed_image_content)

    # Set additional headers
    headers = {
        "Content-Disposition": f"inline; filename=processed_image.jpg",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
    }

    # Return the processed image as a StreamingResponse with headers
    print(temp_filename)
    return StreamingResponse(open(temp_filename, "rb"), media_type="image/jpeg", headers=headers) 

