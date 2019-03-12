"""
KSL-Alerts search spider

Procedure:
    - Do a google search
    - Filter for Utah only listings
    - Parse for the input item
	- Once a working prototype is built, overhaul script with a big-ol' class

"""

from bs4 import BeautifulSoup as BS4
import requests
from datetime import datetime as DATE

# Core definitions
Item = "Honda" # Psudeo variable for what is being searched
clean_item = lambda x : x.replace(' ','%20') # remove spaces, replace with a dash
def log_flag(x,text):
	print("*" * x)
	print(("#"*x), text,("#"*x))
	print("*" * x)




# Craigslist listing searches
# Salt Lake City
craig_page_SLC = "https://saltlakecity.craigslist.org/search/sss?query={}&sort=rel".format(clean_item(Item))

# Logan
craig_page_Logan = "https://logan.craigslist.org/search/sss?query={}&sort=rel".format(clean_item(Item))

# Ogden
craig_page_Ogden = "https://ogden.craigslist.org/search/sss?query={}&sort=rel".format(clean_item(Item))

# Provo
craig_page_Provo = "https://provo.craigslist.org/search/sss?query={}&sort=rel".format(clean_item(Item))

# St George
craig_page_StGeo = "https://stgeorge.craigslist.org/search/sss?query={}&sort=rel".format(clean_item(Item))

# Responses
#page_response = requests.get(start_page, timeout=10)
log_flag(10,"Starting GET responses")
response_SLC = requests.get(craig_page_SLC, timeout=10)
response_Logan = requests.get(craig_page_Logan, timeout=10)
response_Ogden = requests.get(craig_page_Ogden, timeout=10)
response_Provo = requests.get(craig_page_Provo, timeout=10)
response_StGeo = requests.get(craig_page_StGeo, timeout=10)

# Render Content
#page_content = BS4(page_response.content,"html.parser")
log_flag(10,"Rendering HTML content")
content_SLC = BS4(response_SLC.content, "html.parser")
content_Logan = BS4(response_Logan.content, "html.parser")
content_Odgen = BS4(response_Ogden.content, "html.parser")
content_Provo = BS4(response_Provo.content, "html.parser")
content_StGeo = BS4(response_StGeo.content, "html.parser")

# Predefined list for all items found
Items = list()

# Connect to DB

print("TEST")

##############################################
###### START  TO  PARSE  CONTENT #############
##############################################

# Search for "Honda" on SLC craiglist
for i in content_SLC.find_all("li",{"class":"result-row"}):
	log_flag(20,"Search Result 'Honda' on SLC Craiglist")
	print(i)
	print(i.find_all("a",{"class":"result-title hdrlnk"}))

