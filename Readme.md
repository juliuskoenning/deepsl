# DEEPSL - Sign, See, Connect

The goal of this repository is to convert a video input of a person using sign language into the corresponding signs. This project achieves this by employing a frontend, backend and two data science models (detection, recognition).

## Project Description

The project contains an application that will:

1. Recognize video input of sign language gestures.
2. Convert sign language gestures into text and display them as subtitles.
3. Provide a frontend interface for demonstration purposes.
4. Include an API for potential integration with third-party applications.

## Setup

Optional: create a virtual environment with python and activate it

- python -m venv signlanguagevenv

- signlanguagevenv\Scripts\activate (windows) or signlanguagevenv\bin\activate (MacOS, Linux)

Install the required libraries:

- pip install -r requirements.txt

- pip install -q git+https://github.com/tensorflow/docs

- pip install pyyaml h5py

## How to start and use the demo webapp

1. Navigate into 'deepsl/app'.
2. Run 'main.py' (starts the application and server).
3. Open 'frontend.html' to open frontend webapp (preferably with Live Server extension).
6. Insert a video of sign language to the input field.
7. The application now detects and recognizes the sign language using the provided API.
8. The application converts the recognized sign language into text.
9. The converted text is displayed as subtitles in the frontend.

Please note that poor camera quality or unfavorable lighting conditions can impair the recognition of sign language. In this case, the application could potentially not (correctly) detect a given sign.

## Technical Specifications

The application should:

1. Take a given video input in the frontend and send it to the backend.
2. Accurately detect and recognize and convert sign language gestures to text.
4. Offer a secure and reliable API for integration with third-party applications.

## Data Science Notebooks (DS)

For running the Data Science Notebooks which were used to download the videos and to develop the models it is strongly recommended to use Google Colab. 
- The trained EfficientNetB0 model can be found at: https://drive.google.com/drive/folders/1cjPciYMTOEaD2USHd_B94xNLUHVlSKsg?usp=sharing.
- The dataset used to train the model can be found here: https://www.microsoft.com/en-us/research/project/ms-asl/
