function vigenereEncrypt(plainText, key) {
  plainText = plainText.toUpperCase(); //capitalizing
  key = key.toUpperCase(); //capitalizing
  let encryptedText = ''; //result section

  for (let i = 0, j = 0; i < plainText.length; i++) {
    const char = plainText[i]; //check the text length

    if (char === ' ') {
      encryptedText += ' '; //add space if there is a space
    } else {
      const plainCharCode = char.charCodeAt(0) - 'A'.charCodeAt(0);
      const keyCharCode = key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
      const encryptedCharCode = (plainCharCode + keyCharCode) % 26 + 'A'.charCodeAt(0);
      encryptedText += String.fromCharCode(encryptedCharCode);
      j++;
    }
  }

  return encryptedText;
}

function vigenereDecrypt(encryptedText, key) {
  encryptedText = encryptedText.toUpperCase();
  key = key.toUpperCase();
  let decryptedText = '';

  for (let i = 0, j = 0; i < encryptedText.length; i++) {
    const char = encryptedText[i];

    if (char === ' ') {
      decryptedText += ' ';
    } else {
      const encryptedCharCode = char.charCodeAt(0) - 'A'.charCodeAt(0);
      const keyCharCode = key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
      const decryptedCharCode = (encryptedCharCode - keyCharCode + 26) % 26 + 'A'.charCodeAt(0);
      decryptedText += String.fromCharCode(decryptedCharCode);
      j++;
    }
  }

  return decryptedText;
}

function processPhrase() {

  let inputPhrase = document.getElementById('inputPhrase').value;

  let inputKey = document.getElementById('inputKey').value; // Use 0 if the key is not a valid number

  // Encrypt the phrase
  let encryptedPhrase = encrypt(inputPhrase);

  let encryptedKey = encrypt(inputKey);

  let newEncryptedPhrase = combine(inputKey, inputPhrase);
  document.getElementById('newEncryptedPhrase').textContent = newEncryptedPhrase;

  // Decrypt the encrypted phrase
  let decryptedPhrase = decrypt(inputKey, encryptedPhrase);
  document.getElementById('decrypted').textContent = decryptedPhrase;

  // Example usage:
  const plainText = "HELLO WORLD";
  const key = "KEY";

  const encryptedText = vigenereEncrypt(plainText, key);
  console.log("Encrypted Text:", encryptedText);

  const decryptedText = vigenereDecrypt(encryptedText, key);
  console.log("Decrypted Text:", decryptedText);
  }
