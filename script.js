//Calling the DOM elements ----------------------------------------
const btnEncrypt = document.getElementById("btn-encrypt");
const btnUnencrypt = document.getElementById("btn-unencrypt");
const inpMsg = document.getElementById("inp-msg");
const divMsgNotFound = document.getElementById("not-found");
const divMsgFound = document.getElementById("found");
const txtEncryptedMsg = document.getElementById("encrypted-msg");
const btnCopy = document.getElementById("btn-copy");
const copyAdvice = document.getElementById("copy-advice");

//Creating initial global values ----------------------------------
const encryptionRules = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};
const unencryptionRules = generateUnencryptionRules();

function generateUnencryptionRules(){
  const unencryptionRules = {};
  for(var key in encryptionRules){
    {
      unencryptionRules[encryptionRules[key]] = key
    }
  }
  return unencryptionRules
}

//Encrypt and unencyrpt functions -------------------------------------
function encryptMessage(msg) {
  var msgArray = msg.split("");
  var encryptedMsg = "";
  msgArray.forEach((letter) => {
    encryptedMsg += encryptionRules[letter] ?? letter;
  });
  return encryptedMsg;
}
function unencryptMessage(msg) {
  var unencrypted = msg;
  for(key in unencryptionRules){
  unencrypted = unencrypted.replaceAll(key, unencryptionRules[key]);
  }
  return unencrypted;
}

//Functions for the buttons events ---------------------------------------
function handleToggleEncryptClick(e) {
  var msg;
  if (e.target.id === "btn-encrypt") {
    msg = encryptMessage(inpMsg.value);
  } else {
    msg = unencryptMessage(inpMsg.value);
  }
  showMessage(msg);
}
function showMessage(msg) {
  if (msg === "") {
    divMsgFound.classList.add("d-none");
    divMsgNotFound.classList.remove("d-none");
    return;
  }
  divMsgFound.classList.remove("d-none");
  divMsgNotFound.classList.add("d-none");
  txtEncryptedMsg.innerText = msg;
}

//Functions for validation of the message -----------------------------------
function handleOnInput(e) {
  const msg = e.target.value;
  if (!isMessageCorrect(msg)) {
    disableButton(btnEncrypt);
    disableButton(btnUnencrypt);
  } else {
    enableButton(btnEncrypt);
    enableButton(btnUnencrypt);
  }
}
function isMessageCorrect(msg) {
  const regexp = /^[a-z\s]+$/;
  return regexp.test(msg);
}
function disableButton(btn) {
  btn.disabled = true;
  btn.classList.add("disabled");
}
function enableButton(btn) {
  btn.disabled = false;
  btn.classList.remove("disabled");
}

//Function for the copy-text functionality -----------------------------------
function handleCopyClick() {
  const copiedText = txtEncryptedMsg.innerText;
  navigator.clipboard.writeText(copiedText);
  showCopyAdvice();
}

//Función para mostrar alerta
function showCopyAdvice(){
  copyAdvice.classList.remove('hide');
  setTimeout(()=>{copyAdvice.classList.add('hide')}, 2000)
}

//Adding the events to the Dom elements. --------------------------------------
btnEncrypt.onclick = handleToggleEncryptClick;
btnUnencrypt.onclick = handleToggleEncryptClick;
inpMsg.oninput = handleOnInput;
btnCopy.onclick = handleCopyClick;


