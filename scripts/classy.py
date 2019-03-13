"""
	CLASSY OVERHAUL OF spider.py
"""

from bs4 import BeautifulSoup as bs4
import requests
from datetime import datetime as DATE

class Alertifi_Spider:
	""" Main class for crawling.
	Grab data from craiglist & KSL official site,
	format and parse into usable data for our backend
	 """

	# Lambda for easy URL formatting
	# Remove white spaces and replace with a '-'
	clean_item = lambda x : x.replace(' ','%20')

	def log_flag(self, x, text):
		''' Used for clean consol logs '''
		stars = '*' * x
		pound = '#' * x
		print(stars)
		print(pound, text, pound)
		print(stars)


	def craiglist_url(self, city, search):
		craig_page = "https://{}.craiglist.org/search/sss?query={}&sort=rel".format(city, clean_item(search))
		self.log_flag(10,"Getting response for {} in {}".format(city, search))
		page_response = requests.get(craig_page, timeout=10)

		return page_response
			

spooder = Alertifi_Spider()
spooder.log_flag(10,"T E S t")

