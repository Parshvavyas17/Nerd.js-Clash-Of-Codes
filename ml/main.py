import retrieveImage
import imageDetection


def getDetectedImage(url):
    filepath = retrieveImage.getImagePath(url)
    ans = imageDetection.detectFace(filepath)
    print(ans["detected"], ans["filePath"])
    if ans.get('detected'):
        return ans["filePath"]
    else:
        return ""
