var englishWords = [];
var rusWords     = [];
var rand         =0;

while(true) {
  var enterEnglish = prompt("Enter English word");
    if(enterEnglish===null) {
      alert('Vocabulary is ready for studying');
      break;
    }
  var enterRus = prompt("Enter translation of previous English word");
    if(enterRus===null) {
      alert('Vocabulary is ready for studying');
      break;
    }
  englishWords.push(enterEnglish);
  rusWords.push(enterRus);
}
for (var i = 0; i < englishWords.length; i++) {
  for (var j = 0; j <= rusWords.length; j++) {
    if (i===j) {
      console.log(englishWords[i]+ " : " +rusWords[j]);
      break;
    }
  }
}
outer:while (true) {
  rand = Math.floor(Math.random()*(englishWords.length));
  var englishWord = prompt('How to translate: ' + englishWords[rand] + "?");
  if(englishWord===null) {
    alert('Goodbye');
    break;
  }
  if(englishWord!==rusWords[rand]) {
    while (englishWord!==rusWords[rand]) {
      var englishWord = prompt('INCORRECT,try again. How to translate: ' + englishWords[rand] + "?");
      if(englishWord===null) {
        alert('Goodbye');
        break outer;
      }
      if (englishWord==rusWords[rand]) {
        alert('Correct! Translation is: ' + rusWords[rand]);
      }
    }
  }else {
    alert('Correct! Translation is: ' + rusWords[rand]);
  }
}
