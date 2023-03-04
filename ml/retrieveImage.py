import urllib.request
import generateUniqueId


def getImagePath(url):
    filename = generateUniqueId.getUniqueId()
    filepath = './createdImages/' + str(filename) + '.png'
    urllib.request.urlretrieve(url, filepath)
    return filepath

# from PIL import Image
# urllib.request.urlretrieve(
#     "https://media.gq.com/photos/5ec6b66f7f77785a5117fbbc/master/w_2000,h_1333,c_limit/brooksbrosmask.jpg",
#     "./createdImages/temp1.png")

# img = Image.open("./createdImages/temp1.png")

# img.show()


# import cv2
# import requests


# window_name = 'image'
# url = "https://media.gq.com/photos/5ec6b66f7f77785a5117fbbc/master/w_2000,h_1333,c_limit/brooksbrosmask.jpg"
# im = Image.open(requests.get(url, stream=True).raw)

# img = cv2.imread("./temp1.png")

# cv2.imshow(window_name, img)

# cv2.waitKey(0)

# cv2.destroyAllWindows()


# im = Image.open(requests.get(url, stream=True).raw)
