document.onkeydown = detectFirstKey;
document.permissibleKeys = ["Shift", "CapsLock"];
document.word = {
  List : ["Fish", "apple", "cola", "Confidence in the domination"],
  idxInWord : 0,
  idxInList : 0
};

function detectFirstKey() {
  with (document) {
    var startKey = 's';
    var firstKey = event.key;
    if (firstKey !== undefined && firstKey == startKey) {
      headerElems = getElementsByTagName("header");
      headerElems.item(0).innerHTML = "Start!!";
      wordDiv = getElementById("worddiv");
      wordDiv.innerHTML = word.List[0];
      spanify(wordDiv);   
      onkeydown = analyzeKey; 
    }
  }
}

function analyzeKey() {
  console.log("pushed: " + event.key); 
  with (document) {
    var currentWord = word.List[word.idxInList];
    var key = event.key; 
    var wordDiv = getElementById("worddiv");
    if (key === currentWord[word.idxInWord]) {
      // change the color of current char at current word
      wordDiv.children[word.idxInWord].className="typed";
      (word.idxInWord)++;
      // if last char, start next word typing
      if (word.idxInWord === currentWord.length) {
        (word.idxInList)++;
        // if last word, finish typing
        if (word.idxInList === word.List.length) {
          getElementsByTagName("header").item(0).innerHTML = "Finish";
          onkeydown = null;
          return;
        }
        word.idxInWord = 0;
        wordDiv.innerHTML = word.List[word.idxInList];
        spanify(wordDiv)
      }
    } else if (permissibleKeys.includes(key)) {
      return;
    } else {
      console.log("mis match");
      beep();
      wordDiv.children[word.idxInWord].className="missed";
    }
  }
}



