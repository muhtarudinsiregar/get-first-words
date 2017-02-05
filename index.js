var getFirstWords = function (sentence) {
  if (!sentence) return false;

  var splitSentence = sentence.split(" ");
  var word = splitSentence[0].toUpperCase();

  return word;
}

module.exports = getFirstWords;
