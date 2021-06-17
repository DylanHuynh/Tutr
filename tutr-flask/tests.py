import unittest
import os
import hashlib

import auth

# auth.py
class TestAuth(unittest.TestCase):
    # Test that hashstrings are created and verified correctly
    def test_hashing(self):
        passwd ="this is a testing password!" 
        hashstring = auth.create_hashstring(passwd)
        self.assertTrue(auth.verify_password(passwd, hashstring))

if __name__ == '__main__':
    unittest.main()