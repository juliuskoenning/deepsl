import json
import os
import tempfile

import uvicorn
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from utils.detect_sign import predict_one_path, setup_prediction_model

app = FastAPI()

UPLOAD_DIR = "/upload_directory"

setup_prediction_model()

origins = [
    "http://localhost",
    "http://localhost:5500",
    "http://127.0.0.1",
    "http://127.0.0.1:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# @app.post("/api/videos")
# async def upload_video(video: UploadFile = File(...)):
#     # video_data ist das Video mit dem das Modell ab hier arbeitet
#     video_data = await video.read()
#
#     results = predict_one_path(video_data)
#
#     return {"subtitle": results}


@app.post("/api/videos")
async def upload_video(video: UploadFile = File(...)):
    # Create the upload directory if it doesn't exist
    os.makedirs(UPLOAD_DIR, exist_ok=True)

    # Generate a unique filename for the uploaded video
    filename = f"video_{video.filename}"
    file_path = os.path.join(UPLOAD_DIR, filename)

    # Save the uploaded video to the server
    with open(file_path, "wb") as f:
        f.write(await video.read())

    results = predict_one_path(file_path)

    return {"subtitle": results}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
