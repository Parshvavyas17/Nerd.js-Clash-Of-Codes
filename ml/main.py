import retrieveImage
import imageDetection
import uploadToCloud
import os


def getDetectedImage(url):
    filepath = retrieveImage.getImagePath(url)
    ans = imageDetection.detectFace(filepath)
    if ans.get('detected'):
        temp = ans.get('filePath')
        res = uploadToCloud.getCloudUrl(str(temp))
        os.remove(temp)
        return res
    else:
        os.remove(filepath)
        return ""


ans = getDetectedImage(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8EKMK7YRQ4EUAtthGEOtbYyKPvGfggGbmw&usqp=CAU')
