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


# getDetectedImage(
#     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfEe01MNxepu8emMWUIYU3sC6c7nhCp6otnQ&usqp=CAU")
