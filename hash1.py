
## to convert hex to ascii characters.

cipher_text1 = '161d0c56130b17493e2145625800514555596b52140116457942115d2c0b071b'

# Function to convert hex to ASCII
def convert_hex_to_ascii(hex_string):
    ascii_string = ''
    for i in range(0, len(hex_string), 2):
        ascii_string += chr(int(hex_string[i:i+2], 16))
    return ascii_string

# Convert the given hexadecimal string to ASCII
ascii_string = convert_hex_to_ascii(cipher_text1)

# Print the result
print("ASCII Output:")
print(ascii_string)


### to covert 
def caesar_cipher(plaintext, shift):
    encrypted_text = ''
    for char in plaintext:
        if char.isalpha():  # Check if the character is an alphabet letter
            # Shift character and wrap around using modulo
            offset = 65 if char.isupper() else 97
            encrypted_text += chr((ord(char) + shift - offset) % 26 + offset)
        else:
            # If it's not a letter, just append it as is
            encrypted_text += char
    return encrypted_text

# Example usage
plaintext = input("Text to be ciphered:")
shift = 3  # Number of positions to shift each character
ciphertext = caesar_cipher(plaintext, shift)
print("Ciphertext:", ciphertext)
