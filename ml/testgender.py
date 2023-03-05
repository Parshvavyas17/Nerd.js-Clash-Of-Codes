import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model


model = load_model('ml\model.h5')

# test_image = image.load_img('richa.png', target_size=(64, 64))
# test_image = image.img_to_array(test_image)
# test_image = np.expand_dims(test_image, axis=0)
# C:\Users\preet\OneDrive\Desktop\pyhton\ronaldo1.jfif
# result = model.predict(test_image)

# if result[0][0] == 1:
#     prediction = 'female'
# else:
#     prediction = 'male'

# print(prediction)


def predictGender(filepath):
    test_image = image.load_img(filepath, target_size=(64, 64))
    img_test = image.img_to_array(test_image)
    img = np.expand_dims(img_test, axis=0)
    result = model.predict(img)
    if result[0][0] == 1:
        return 'Male'
    else:
        return 'Female'
