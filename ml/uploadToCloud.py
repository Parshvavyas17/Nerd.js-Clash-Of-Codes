import cloudinary
import cloudinary.uploader
import cloudinary.api

cloudinary.config(
    cloud_name="xxxx",
    api_key="xxxxxxxxxxxx",
    api_secret="xxxxxxxxxxx",
    api_proxy="http://proxy.server:9999"
)
