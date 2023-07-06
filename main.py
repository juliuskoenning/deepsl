from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import json
from utils.detect_sign import predict_one_path, setup_prediction_model

setup_prediction_model()

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5500",
    "http://127.0.0.1",
    "http://127.0.0.1:5500"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/videos")
async def upload_video(video: UploadFile = File(...)):
    # video_data ist das Video mit dem das Modell ab hier arbeitet
    video_data = await video.read()

    results = predict_one_path(video)

    return {"subtitle": results}
