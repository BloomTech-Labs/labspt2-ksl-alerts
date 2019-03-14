from bs4 import BeautifulSoup as BS4
import requests
from urllib.request import Request, urlopen

def ksl_search(search):
	''' Find what the user is looking for on the KSL website '''
	
	# Get the main URL (long and greasy)
	ksl_req = Request("https://www.ksl.com/?sid=53574&nid=208&cx=partner-pub-3771868546990559%3Ar955z1-wmf4&cof=FORID%3A9&ie=ISO-8859-1&sa=Search&searchtype=kslcom&x=15&y=19&q={}#gsc.tab=0&gsc.q={}&gsc.page=1", headers={"User-Agent":"Mozilla/5.0"})
	ksl_page = urlopen(ksl_req).read()
	# Get the response
	page_response = requests.get(ksl_page, timeout=10)
	rendered_page = BS4(page_response.content,"html.parser")
	print(rendered_page)
	print(page_response)

ksl_search("storm")
