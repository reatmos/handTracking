from flask import Flask, Response
import cv2
from handTracking import tracking

app01 = Flask(__name__)

def frames():
    for frame in tracking():
        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app01.route('/frame01') # 웹에서 받을 주소
def video():
    return Response(frames(), mimetype='multipart/x-mixed-replace; boundary=frame')