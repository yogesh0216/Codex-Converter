// Morse code dictionary
const morseMap = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-",
  5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----."
};

// Reverse Morse map
const reverseMorseMap = {};
for (let key in morseMap) {
  reverseMorseMap[morseMap[key]] = key;
}

// Main convert function
function convert() {
  const mode = document.getElementById("mode").value;
  const input = document.getElementById("input").value.trim();
  let output = "";

  try {
    switch (mode) {
      case "text-morse":
        output = textToMorse(input);
        break;

      case "morse-text":
        output = morseToText(input);
        break;

      case "text-binary":
        output = textToBinary(input);
        break;

      case "binary-text":
        output = binaryToText(input);
        break;

      case "binary-hex":
        output = binaryToHex(input);
        break;

      case "hex-binary":
        output = hexToBinary(input);
        break;

      default:
        output = "Invalid mode selected";
    }
  } catch (e) {
    output = "Error: Invalid input format";
  }

  document.getElementById("output").value = output;
}

// ---- Conversion Functions ----

function textToMorse(text) {
  return text.toUpperCase().split("").map(char => {
    if (char === " ") return "/";
    return morseMap[char] || "";
  }).join(" ");
}

function morseToText(morse) {
  return morse.split(" ").map(code => {
    if (code === "/") return " ";
    return reverseMorseMap[code] || "";
  }).join("");
}

function textToBinary(text) {
  return text.split("").map(c =>
    c.charCodeAt(0).toString(2).padStart(8, "0")
  ).join(" ");
}

function binaryToText(binary) {
  return binary.split(" ").map(bin =>
    String.fromCharCode(parseInt(bin, 2))
  ).join("");
}

function binaryToHex(binary) {
  return binary.split(" ").map(bin =>
    parseInt(bin, 2).toString(16).toUpperCase()
  ).join(" ");
}

function hexToBinary(hex) {
  return hex.split(" ").map(h =>
    parseInt(h, 16).toString(2).padStart(8, "0")
  ).join(" ");
}