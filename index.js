var getFirstWords = function (sentence) {
  if (!sentence) return false

  var splitSentence = sentence.split(' ')
  var word = splitSentence[0]

  return word
}

module.exports = getFirstWords
