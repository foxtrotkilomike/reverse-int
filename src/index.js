module.exports = function reverse (n) {
  let numStr = n.toString();
  numStr = numStr.includes('-') ? numStr.replace('-','') : numStr;
  numStr = [...numStr];
  let numReverse = '';

  for (let i = numStr.length; i > 0; i--) {
    numReverse += numStr[i - 1];
  }

  return +numReverse;
}
