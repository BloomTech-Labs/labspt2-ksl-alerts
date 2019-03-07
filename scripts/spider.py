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

# Connect to DB

# Search for input
