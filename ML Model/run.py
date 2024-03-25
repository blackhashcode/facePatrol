import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import numpy as np
from keras.models import Sequential, load_model
from keras.optimizers import Adam, SGD
import cv2

detector = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
img_h, img_w = 128,128
model = load_model('keras_model/my_model.keras')
model.load_weights('keras_model/my_model.weights.h5')

sgd = Adam(learning_rate=0.0005)
model.compile(loss='categorical_crossentropy', optimizer=sgd, metrics=['accuracy'])

capture = cv2.VideoCapture(1)

while True:
    ret, frame = capture.read()
    faces = detector.detectMultiScale(frame, scaleFactor=1.3, minNeighbors=5)

    for (x, y, w, h) in faces:
        ROI = frame[y:y + h, x:x + w]
        new_array = cv2.resize(ROI, (img_h, img_w))
        data = np.array(new_array)
        data = np.array(data).reshape(-1, img_h, img_h, 3)
        result = model.predict(data, verbose=0)
        predicted_class = np.argmax(result, axis=1)[0]  
        confidence = np.max(result, axis=1)[0] * 100 

        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
        if predicted_class == 0:
            label = 'Tausif'
        elif predicted_class == 1:
            label = 'Arshad'
        else:
            label = 'Intruder'

        cv2.putText(frame, label, (x, y - 10), cv2.FONT_HERSHEY_COMPLEX, 0.9, (0, 0, 255), 2)

    cv2.imshow("Frame", frame)
    key = cv2.waitKey(1) & 0xFF
    if key == ord("q"):
        break


capture.release()
cv2.destroyAllWindows()
