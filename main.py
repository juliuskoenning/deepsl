from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

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

    return {"subtitle": "Placeholder"}
