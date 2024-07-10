document.getElementById("encryptButton").addEventListener("click", encryptText);
document.getElementById("decryptButton").addEventListener("click", decryptText);

function encryptText() {
    const textInput = document.getElementById("textInput").value;
    const encryptedText = textInput
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    displayOutput(encryptedText);
}

function decryptText() {
    const textInput = document.getElementById("textInput").value;
    const decryptedText = textInput
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    displayOutput(decryptedText);
}

function displayOutput(text) {
    const outputElement = document.getElementById("textOutput");
    const placeholderElement = document.getElementById("outputPlaceholder");

    if (text) {
        outputElement.style.display = "block";
        placeholderElement.style.display = "none";
        outputElement.textContent = text;
    } else {
        outputElement.style.display = "none";
        placeholderElement.style.display = "block";
    }
}
