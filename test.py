import requests
import datetime
import json

url = 'http://localhost:5000/api/'
dates=datetime.datetime.now()
date_time = dates.strftime("%m/%d/%Y, %H:%M:%S")


print(date_time)
data = {'temperature': 76, 'humidity': 82, 'time': date_time}
print (data)
print (json.dumps(data))
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
r = requests.post(url, data=json.dumps(data), headers=headers)
print('test')
print(r.text)

#"humidity":63,
   # "date": dates,