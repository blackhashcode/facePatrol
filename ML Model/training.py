import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import numpy as np
import cv2
import tensorflow as tf
from tensorflow.keras.models import Sequential, load_model
from tensorflow.keras.layers import Dense, Conv2D, Flatten, Dropout, MaxPool2D
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.utils import to_categorical

np.random.seed(44)
img_h, img_w = 128, 128
image_size = (128, 128)
nbatch_size = 2
nepochs = 30
nb_classes = 2

def load_data():
    path = 'dataset/train'
    files = os.listdir(path)
    images = []
    labels = []
    for f in files:
        print(os.path.join(path,f))
        img_array = cv2.imread(os.path.join(path,f))
        new_array = cv2.resize(img_array, (img_h, img_w))
        images.append(new_array)

        if 'Tausif' in f:
            labels.append(0)
        elif 'Arshad' in f:
            labels.append(1)

    data = np.array(images)
    data = data.reshape(-1, img_h, img_w, 3)
    labels = np.array(labels)
    labels = to_categorical(labels, 2)
    return data, labels

# Model building
model = Sequential([
    Conv2D(32, kernel_size=(3, 3), input_shape=(img_h, img_w, 3), activation='relu', padding='same'),
    MaxPool2D(pool_size=(2, 2)),
    Dropout(0.3),
    Conv2D(64, kernel_size=(3, 3), activation='relu', padding='same'),
    MaxPool2D(pool_size=(2, 2)),
    Dropout(0.3),
    Conv2D(128, kernel_size=(3, 3), activation='relu', padding='same'),
    MaxPool2D(pool_size=(2, 2)),
    Dropout(0.5),
    Conv2D(128, kernel_size=(3, 3), activation='relu', padding='same'),
    MaxPool2D(pool_size=(2, 2)),
    Dropout(0.5),
    Flatten(),
    Dense(128, activation='relu'),
    Dropout(0.5),
    Dense(2, activation='softmax')
])

model.summary()

# Compilation of the model
print("compile.......")
model.compile(loss='binary_crossentropy', optimizer=Adam(learning_rate=0.0003), metrics=['accuracy'])

# Loading and preprocessing the dataset
print("load_data......")
x_train, y_train = load_data()
x_train = x_train / 255.0
print(x_train.shape, y_train.shape)

# Model training
model.fit(x_train, y_train, batch_size=nbatch_size, epochs=nepochs, verbose=1, validation_split=0.1)

# Model evaluation
print("evaluate......")
score, accuracy = model.evaluate(x_train[:3], y_train[:3], batch_size=nbatch_size)
print('score:', score, 'accuracy:', accuracy)

# Save the entire model (architecture + weights + optimizer state)
model.save('keras_model/my_model.keras')  # SavedModel format

# Additionally, save just the weights in a separate file if needed
model.save_weights('keras_model/my_model.weights.h5')
