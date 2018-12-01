// Separate a word into individual charactors
//
function spanify(wordDiv) {
  var currentWord = wordDiv.innerHTML;  // save word
  wordDiv.innerHTML = null;
  // change space char
  currentWord.split('').forEach( function(char) {
    // Change original space char into visible symbol that could be intepreted as space
    if (char === ' ') {
      console.log("space char detected.");
      // char = "&#9251;"
      // char = "&#x2423;"
      char = "&bbrk;"
    }
    wordDiv.innerHTML += "<span class='untyped'>" + char + "</span>"
  })
}
