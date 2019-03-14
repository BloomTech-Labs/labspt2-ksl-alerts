"""
	CLASSY OVERHAUL OF spider.py
"""

from bs4 import BeautifulSoup as BS4
import requests
from datetime import datetime as DATE
from urllib.request import Request, urlopen # Needed for pretend user on sites

class Alertifi_Spider:
	""" Main class for crawling.
	Grab data from craiglist & KSL official site,
	format and parse into usable data for our backend
	 """

	# Lambda for easy URL formatting
	# Remove white spaces and replace with a '-'
	clean_item = lambda x : x.replace(' ','%20')
	Items = dict()

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

	def ksl_search(self,search):
		''' Find what the user is looking for on the KSL website '''
		
		# Get the main URL (long and greasy)
		ksl_req = Request("https://www.ksl.com/?sid=53574&nid=208&cx=partner-pub-3771868546990559%3Ar955z1-wmf4&cof=FORID%3A9&ie=ISO-8859-1&sa=Search&searchtype=kslcom&x=15&y=19&q={}#gsc.tab=0&gsc.q={}&gsc.page=1".format(search,search), headers={"User-Agent":"Mozilla/5.0"})
		ksl_page = urlopen(ksl_req).read()
		self.log_flag(10,"Searching KSL for {}".format(search))
		# Get the response
		page_response = requests.get(ksl_page, timeout=10)
		rendered_page = BS4(page_response.content,"html.parser")
		# Get first 7 items from a search, when 7 is hit break the loop
		j = 0
		for i in rendered_page.find_all("div",{"class":"search"}):
			self.log_flag(10,"Testing for results")
			print(i)
			print(j)
			j+=1



	def update_items(self, rendered_page):
		''' Find name, cost and image of each item '''
		self.log_flag(10,"Finding item data")

		# Loop for appending the item dictionary
		for i in rendered_page.find_all("li",{"class":"result-row"}):
			self.log_flag(10,"Updating Dictionary with...")
			# Select Item names && costs
			i_name = i.find("a",{"class":"result-title hdrlnk"}).text
			i_cost = i.find("span").text
			print("Item:{}\nCost:{}".format(i_name,i_cost))
			# Update dictionary with current items
			self.Items.update({i_name : i_cost})		



spooder = Alertifi_Spider()
spooder.log_flag(10,"T E S t")
print(spooder.craiglist_url("saltlakecity","Honda"))
spooder.update_items(spooder.craiglist_url("logan","honda"))
print(spooder.ksl_search("storm"))
