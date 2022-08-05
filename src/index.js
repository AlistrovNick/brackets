module.exports = function check(str, bracketsConfig) {
  let pairBrackets = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    let pair = bracketsConfig[i][0] + bracketsConfig[i][1];
    pairBrackets.push(pair);
  }
  let isPairExist = false;
  let currentStr = str;
  while (currentStr.length > 0) {
    for (let i = 0; i < pairBrackets.length; i++) {
      if (currentStr.indexOf(pairBrackets[i]) !== -1) {
        currentStr = currentStr.replaceAll(pairBrackets[i], '');
        isPairExist = true;
      }
    }
    if (!isPairExist) {
      return false;
    } else {
      isPairExist = false;
    }
  }
  return true;
}