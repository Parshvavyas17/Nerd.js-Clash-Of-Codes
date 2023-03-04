import retrieveImage
import imageDetection
import uploadToCloud
import os


def getDetectedImage(url):
    filepath = retrieveImage.getImagePath(url)
    ans = imageDetection.detectFace(filepath)
    print(ans["detected"], ans["filePath"])
    if ans.get('detected'):
        temp = ans.get('filePath')
        res = uploadToCloud.getCloudUrl(str(temp))
        os.remove(temp)
        return res
    else:
        return ""
