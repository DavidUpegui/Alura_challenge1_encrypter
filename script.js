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

function isMessageCorrect(msg){
  const regexp = /^[a-z\s]+$/
  return regexp.test(msg);
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
}

function handleCopyClick(e){
  const copiedText = txtEncryptedMsg.innerText;
  navigator.clipboard.writeText(copiedText);
  alert(`El texto ha sido copiado en el portapapeles.`);
}

function disableButton(btn){
  btn.disabled = true;
  btn.classList.add('disabled');
}

function enableButton(btn){
  btn.disabled = false;
  btn.classList.remove('disabled');
}

function handleOnInput(e){
  const msg = e.target.value;
  if(!isMessageCorrect(msg)){
    disableButton(btnEncrypt);
    disableButton(btnUnencrypt);
  }else{
    enableButton(btnEncrypt);
    enableButton(btnUnencrypt);
  }
}

function showMessage(msg){
  if(msg === ""){
    divMsgFound.classList.add('hide');
    divMsgNotFound.classList.remove('hide');
    return
  }
  divMsgFound.classList.remove('hide');
  divMsgNotFound.classList.add('hide');
  txtEncryptedMsg.innerText = msg;
}

inpMsg.oninput = handleOnInput;
btnEncrypt.onclick = toggleEncrypt;
btnUnencrypt.onclick = toggleEncrypt;
btnCopy.onclick = handleCopyClick;
