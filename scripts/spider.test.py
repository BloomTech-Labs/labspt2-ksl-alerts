from classy import Alertifi_Spider
import unittest


class TestSpider(unittest.TestCase):
	""" Test class for the spider """
	spooder = Alertifi_Spider()

	'''
	def test_log_flag(self, spooder.log_flag(3,"Test"):
		print("Test is up and running")
		pass '''
		
	def setUp(self):
		pass

	def test_link_not_null(self):
		''' Test that request worked properly '''
		#self.assertEqual( spider web response test)
		pass
		
	def test_elements(self):
		''' Test that required element are within the HTML '''
		pass

	def test_item_content(self):
		''' Test for item values && properties '''
		#self.assertEqual( item stuff )
		pass


if __name__ == '__main__':
	unittest.main()
