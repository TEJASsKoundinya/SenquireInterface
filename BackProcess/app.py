import os
from flask import Flask, jsonify, request
from flask_cors import CORS
import cv2
import numpy as np

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})
# Endpoint to fetch file names from a folder


@app.route('/api/files', methods=['GET'])
def get_file_names():
    # Replace with the actual path to your folder
    folder_path = './camera-traffic-generator-test-data/Video Repo Protect/CCTV'
    file_names = os.listdir(folder_path)
    return jsonify(file_names)


@app.route('/api/process', methods=['POST'])
def process_file():
    data = request.get_json()
    selected_file = data.get('selectedFile')
    print("LOOK::", os.path.join('camera-traffic-generator-test-data/Video Repo Protect/CCTV', selected_file))
    video = cv2.VideoCapture(os.path.join('camera-traffic-generator-test-data/Video Repo Protect/CCTV', selected_file))
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
        _, binary_image = cv2.threshold(
            gray_frame, threshold_value, 255, cv2.THRESH_BINARY)
        resized_image_1 = cv2.resize(binary_image, (500, 250))
        cv2.imshow('Black and White Video', resized_image)
        cv2.imshow('BWVideo', resized_image_0)
        cv2.imshow('Binary Image', resized_image_1)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    video.release()

    data = [' frames_count: ', frames_count, ' fps: ', fps]
    print("DATA ::: READING")
    print(data)


    # Perform your operation on the selected file here
    # Replace the following print statement with your actual operation
    print(f"Processing file: {selected_file}")

    return jsonify({'message': data})

if __name__ == '__main__':
    app.run(debug=True)
