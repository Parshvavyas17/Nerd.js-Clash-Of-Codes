from deepface import DeepFace
import cv2
import matplotlib.pyplot as plt


# img = cv2.imread('jennifer.jfif')
# plt.imshow(img)

obj = DeepFace.analyze(img_path = "sloni.png", actions = [ 'age'])

# if(obj[0]["dominant_gender"] == "Man"):
#     print("Male")
# elif(obj[0]["dominant_gender"] == "Woman"):
#     print("Female")

print(obj[0]['age'])



