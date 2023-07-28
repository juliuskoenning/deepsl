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

1. Navigate into 'deepsl/app'
2. 'python main.py' (starts the application and server)
3. Click the given link to open frontend webapp.
4. Insert a video of sign language to the input field.
5. The application now detects and recognizes the sign language using the provided API.
6. The application converts the recognized sign language into text.
7. The converted text is displayed as subtitles in the frontend.

Please note that poor camera quality or unfavorable lighting conditions can impair the recognition of sign language. In this case, the application could potentially not (correctly) detect a given sign.

## Technical Specifications

The application should:

1. Take a given video input in the frontend and send it to the backend.
2. Accurately detect and recognize and convert sign language gestures to text.
4. Offer a secure and reliable API for integration with third-party applications.
