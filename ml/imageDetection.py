import cv2
import numpy as np
import matplotlib.pyplot as plt


def convertToRGB(image):
    return cv2.cvtColor(image, cv2.COLOR_BGR2RGB)


face_detector = cv2.CascadeClassifier('./haarcascade_frontalface_default.xml')


def detectFace(filepath):
    img = cv2.imread(filepath)
    temp = img
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    results = face_detector.detectMultiScale(
        img_gray, scaleFactor=1.15, minNeighbors=5, minSize=(34, 35), flags=cv2.CASCADE_SCALE_IMAGE)
    res = dict()
    if (len(results) == 0):
        res['detected'] = False
        res['filePath'] = ""
        res['file'] = ""
        return res
    else:
        for (x, y, w, h) in results:
            cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)
        window_name = 'image'
        cv2.imshow(window_name, img)
        cv2.waitKey(0)
        cv2.destroyAllWindows()
        cv2.imwrite(filepath, img)
        res['detected'] = True
        res['filePath'] = str(filepath)
        res['file'] = img
        return res


# path = './images/img1.jpeg'

# window_name = 'image'

# img = cv2.imread(path)

# # cv2.imshow(window_name, img)

# img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# # cv2.imshow(window_name, img_gray)

# results = face_detector.detectMultiScale(
#     img_gray, scaleFactor=1.15, minNeighbors=5, minSize=(34, 35), flags=cv2.CASCADE_SCALE_IMAGE)

# for (x, y, w, h) in results:
#     cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)

# cv2.imshow(window_name, img)

# cv2.waitKey(0)

# cv2.destroyAllWindows()
