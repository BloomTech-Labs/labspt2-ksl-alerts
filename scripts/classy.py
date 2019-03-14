"""
	CLASSY OVERHAUL OF spider.py
"""

from bs4 import BeautifulSoup as BS4
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
	items = list()

	def log_flag(self, x, text):
		''' Used for clean consol logs '''
		stars = '*' * x
		pound = '#' * x
		print(stars)
		print(pound, text, pound)
		print(stars)


	def craiglist_url(self, city, search):
		''' Generate the response page for a cities craigslist '''
		
		# Format the url and store in craig_page
		craig_page = "https://{}.craigslist.org/search/sss?query={}&sort=rel".format(city, search)
		# A console log for what is happening
		self.log_flag(10,"Getting response for {} in {}".format(city, search))
		# Get the page response 
		page_response = requests.get(craig_page, timeout=10)
		rendered_page = BS4(page_response.content,"html.parser")
		
		return rendered_page

	def find_items(self, rendered_page):
		''' Find name, cost and image of each item '''
		self.log_flag(10,"Finding item data")
		for i in rendered_page.find_all("li",{"class":"result-row"}):
			self.Items.append(i.find("a",{"class":"result-title hdrlnk"}).text)
			print(i)



spooder = Alertifi_Spider()
spooder.log_flag(10,"T E S t")
print(spooder.craiglist_url("saltlakecity","Honda"))

