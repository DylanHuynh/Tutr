import hashlib
import os

# Verify a password against a hash and salt
def verify_password(password, hashstring):
    salt = bytes.fromhex(hashstring.split("$")[0])
    hash = bytes.fromhex(hashstring.split("$")[1])
    hash2 = hashlib.scrypt(bytes(password, 'utf-8'), salt=salt, n=16384, r=8, p=1)
    if hash == hash2:
        return True
    return False

# Hashes a password, and combines it with the salt in order to be stored.
def create_hashstring(password):
    salt = bytes(os.urandom(16))
    return salt.hex() + "$" + hashlib.scrypt(bytes(password, 'utf-8'), salt=salt, n=16384, r=8, p=1).hex()