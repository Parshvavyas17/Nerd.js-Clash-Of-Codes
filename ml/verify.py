from deepface import DeepFace
import cv2
import matplotlib.pyplot as plt


def verify(img1_path, img2_path, model_name):
    img1 = cv2.imread(img1_path)
    img2 = cv2.imread(img2_path)
    # plt.imshow(img1[:,:,::-1])
    # plt.show()
    # plt.imshow(img2[:,:,::-1])
    # plt.show()
    output = DeepFace.verify(img1_path, img2_path, model_name=model_name)
    print(output)
    verification = output['verified']

    if verification:
        print('They are the same ')
    else:
        print('They are not the same')

# verify('ronaldo2.jfif', 'ronaldo1.jfif', model_name = "SFace")
