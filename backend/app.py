from flask import Flask, request, jsonify, render_template
import cv2
import numpy as np
from flask_cors import CORS
import os
from cv2 import imshow

app = Flask(__name__)

CORS(app)


@app.route('/', methods=['POST'])
def index():
    
    file = request.files.get('file')
    # Get the video file name from the query parameter
    filename = request.args.get('filename')
    file.save(os.path.join('uploads',file.filename))

    print("LOOK::", os.path.join('uploads', file.filename))
    video = cv2.VideoCapture(os.path.join('uploads', file.filename))
    if not video.isOpened():
        return jsonify({'error': 'Unable to read video'}), 400

    # Gather video metadata
    frames_count = int(video.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = video.get(cv2.CAP_PROP_FPS)
    

    # Perform operations on the video
    # Example: Calculate the average intensity of each frame
    average_intensities = []
    while True:
        ret, frame = video.read()
        if not ret:
            break

        # Process each frame (calculate average intensity)
        gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        resized_image_0 = cv2.resize(frame, (500, 250))
        resized_image = cv2.resize(gray_frame, (500, 250))
        average_intensity = int(gray_frame.mean())
        average_intensities.append(average_intensity)
        threshold_value = 128  # You can adjust this threshold value based on your preference
        _, binary_image = cv2.threshold(gray_frame, threshold_value, 255, cv2.THRESH_BINARY)
        cv2.imshow('Black and White Video', resized_image)
        cv2.imshow('BWVideo', resized_image_0)
        cv2.imshow('Binary Image', binary_image)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    video.release()
    
    data = [' frames_count: ', frames_count, ' fps: ', fps]
    print("DATA ::: READING")
    print(data)

    # Perform video analysis here using 'file' and 'filename'
    # For demonstration purposes, let's just return "Hello" along with the filename
    return jsonify(data) 


if __name__ == '__main__':
    app.run(port=4000, debug=True)
    
