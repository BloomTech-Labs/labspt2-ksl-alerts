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
clean_item = lambda x : x.replace(' ','-') # remove spaces, replace with a dash
start_page = "https://www.google.com/utah-{}".format(clean_item(Item))
page_response = requests.get(start_page, timeout=10)
page_content = BS4(page_response.content,"html.parser")


# Predefined list for all items found
Items = list()

# Connect to DB

# Search for input
