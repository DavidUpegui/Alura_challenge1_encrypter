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

function unencryptMessage(msg){
  var unencrypted = msg;
  unencrypted = unencrypted.replaceAll('ai', 'a'); 
  unencrypted = unencrypted.replaceAll('enter', 'e'); 
  unencrypted = unencrypted.replaceAll('imes', 'i'); 
  unencrypted = unencrypted.replaceAll('ober', 'o'); 
  unencrypted = unencrypted.replaceAll('ufat', 'u'); 
  return unencrypted
}

function toggleEncrypt(e) {
  var msg;
  if(e.target.id === 'btn-encrypt'){
    msg = encryptMessage(inpMsg.value);
  }else{
    msg = unencryptMessage(inpMsg.value);
  }
  showMessage(msg);
  console.log(msg);
}

function showMessage(msg){
  if(msg === ""){
    divMsgFound.classList.add('hide');
    divMsgNotFound.classList.remove('hide');
    return
  }
  divMsgFound.classList.remove('hide');
  divMsgNotFound.classList.add('hide');
  txtEncryptedMsg.innerHTML = msg;
}

btnEncrypt.onclick = toggleEncrypt;
btnUnencrypt.onclick = toggleEncrypt;
