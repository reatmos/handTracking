import cv2
import numpy as np

def output():
    import handTracking
    while True:
        img = np.zeros((1080, 1920, 3), np.uint8)
        img.fill(255)
        cv2.putText(img, handTracking.sentence, (270, 130), cv2.FONT_HERSHEY_SIMPLEX, 4, (0, 0, 0), 3)
        print(handTracking.sentence)

        yield img
