import retrieveImage
import imageDetection
import uploadToCloud


def getDetectedImage(url):
    filepath = retrieveImage.getImagePath(url)
    ans = imageDetection.detectFace(filepath)
    print(ans["detected"], ans["filePath"])
    if ans.get('detected'):
        res = uploadToCloud.getCloudUrl(ans.get('detected'))
        return res
    else:
        return ""


ans = getDetectedImage(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKZ-8HrcuU-PEqjF2EBmUARWNanJx-zI3lw&usqp=CAU')

print(ans)
