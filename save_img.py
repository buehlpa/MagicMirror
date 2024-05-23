
import requests
from PIL import Image
import time
from io import BytesIO



save_path = r'C:\Users\buehl\repos\Magic'
url='https://www.teleport.io/api/v2/frame-get?feedid=boghgvrf7zcl22v15s0m&sizecode=x1080'


while True:
    response = requests.get(url, timeout=5, verify=False)
    img = Image.open(BytesIO(response.content))
    img.save(save_path+'\\'+str(time.time())+'.jpg')
    time.sleep(300)
    