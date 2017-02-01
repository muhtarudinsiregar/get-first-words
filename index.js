var getFirstWords = function (sentence) {
  var splitSentence = sentence.split(" ");
  var word = splitSentence[0].toUpperCase();

  return word;
}

module.exports = getFirstWords;
