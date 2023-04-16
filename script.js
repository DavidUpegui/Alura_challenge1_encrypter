//Creating the DOM elements
const btnEncrypt = document.getElementById("btn-encrypt");
const btnUnencrypt = document.getElementById("btn-unencrypt");
const inpMsg = document.getElementById("inp-msg");
const divMsgNotFound = document.getElementById("not-found");
const divMsgFound = document.getElementById("found");
const txtEncryptedMsg = document.getElementById("encrypted-msg");
const btnCopy = document.getElementById("btn-copy");

function encryptMessage(msg) {
  var msgArray = msg.split('');
  var encryptedMsg = "";
  msgArray.forEach((letter) => {
    switch (letter) {
      case "a":
        encryptedMsg += "ai";
        break;
      case "e":
        encryptedMsg += "enter";
        break;
      case "i":
        encryptedMsg += "imes";
        break;
      case "o":
        encryptedMsg += "ober";
        break;
      case "u":
        encryptedMsg += "ufat";
        break;
      default:
        encryptedMsg += letter;
        break;
    }
  });
  return encryptedMsg;
}

function getMessage() {
  return inpMsg.value;
}

function handleEncryptedClick() {
  var encryptedMsg = encryptMessage(getMessage());
  console.log(encryptedMsg);
}

btnEncrypt.onclick = handleEncryptedClick;
