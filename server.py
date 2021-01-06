import os, time, json

with open('test', 'r', 1) as f:
  while True:
    chunk = f.read(1)
    if chunk == '':
      time.sleep(1)
      continue

    # read and append the rest of the data
    data = chunk + f.read()
    res = json.loads(data)
    print(res)
    break

  # for line in iter(f.readline, ''):