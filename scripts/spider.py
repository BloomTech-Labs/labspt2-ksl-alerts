"""
KSL-Alerts search spider

Procedure:
    - Do a google search
    - Filter for Utah only listings
    - Parse for the input item

"""

from bs4 import BeautifulSoup as BS4
import requests
from datetime import datetime as DATE

# Core definitions
Item = "Lawn-Mower" # Psudeo variable for what is being searched
clean_item = lambda x : x.replace(' ','%20') # remove spaces, replace with a dash
#start_page = "https://www.google.com/utah-{}".format(clean_item(Item))
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
response_SLC = requests.get(craig_page_SLC, timeout=10)
response_Logan = requests.get(craig_page_Logan, timeout=10)
response_Odgen = requests.get(craig_page_Ogden, timeout=10)
response_Provo = requests.get(craig_page_Provo, timeout=10)
response_StGeo = requests.get(craig_page_StGeo, timeout=10)

# Render Content
#page_content = BS4(page_response.content,"html.parser")
content_SLC = BS4(response_SLC.content, "html.parser")
content_Logan = BS4(response_Logan.content, "html.parser")
content_Odgen = BS4(response_Odgen.content, "html.parser")
content_Provo = BS4(response_Provo.content, "html.parser")
content_StGeo = BS4(response_StGeo.content, "html.parser")

# Predefined list for all items found
Items = list()

# Connect to DB

# Search for input

print("TEST")
