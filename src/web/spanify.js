// Separate a word into individual charactors
//
function spanify(wordDiv) {
  var currentWord = wordDiv.innerHTML;  // save word
  wordDiv.innerHTML = null;
  // change space char
  currentWord.split('').forEach( function(char) {
    if (char === ' ') {
      console.log("space char detected.");
      // char = "&#9251;"
      // char = "&#x2423;"
      char = "&bbrk;"
    }
    wordDiv.innerHTML += "<span class='untyped'>" + char + "</span>"
  })
}
