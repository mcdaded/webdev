#%%
# imports
import requests
base_url = "http://127.0.0.1:5000"

#%%
# Mine block
response = requests.get(f'{base_url}/mine_block')
print(response.json())

#%%
# Get chain
response = requests.get(f'{base_url}/get_chain')
print(response)

#%%
# Chain valid
response = requests.get(f'{base_url}/valid')
print(response)