import retrieveImage
import imageDetection
import uploadToCloud
import os
import detectAge
import testgender


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


def getAge(url):
    filepath = retrieveImage.getImagePath(url)
    age = detectAge.predictAge(filepath)
    os.remove(filepath)
    return age


def getGender(url):
    filepath = retrieveImage.getImagePath(url)
    gender = testgender.predictGender(filepath)
    os.remove(filepath)
    return gender
