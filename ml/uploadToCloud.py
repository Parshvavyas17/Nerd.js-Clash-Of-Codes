import cloudinary
import cloudinary.uploader

cloudinary.config(
  cloud_name = "dtgthce4i",
  api_key = "318433949989198",
  api_secret = "_UMD9234Qbg_vlgZLurZbT99VUE",
)

response = cloudinary.uploader.upload("./images/anime.jpeg")

print(response["secure_url"])
