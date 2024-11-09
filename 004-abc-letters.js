const blocks = [
  ["b", "o"],
  ["x", "k"],
  ["d", "q"],
  ["c", "p"],
  ["n", "a"],
  ["g", "t"],
  ["r", "e"],
  ["t", "q"],
  ["q", "d"],
  ["f", "s"],
  ["j", "w"],
  ["h", "u"],
  ["v", "i"],
  ["a", "n"],
  ["o", "b"],
  ["e", "r"],
  ["f", "s"],
  ["l", "y"],
  ["p", "c"],
  ["z", "m"],
];
function canMakeWord(word) {
  const lowerCaseLettersArray = word.toLowerCase().split("");
  const usedBlocks = [];
  for (let i = 0; i < lowerCaseLettersArray.length; i++) {
    const currLetter = lowerCaseLettersArray[i];
    let isFound = false;
    for (let j = 0; j < blocks.length; j++) {
      if (usedBlocks.includes(j)) {
        continue;
      }
      if (blocks[j].includes(currLetter)) {
        usedBlocks.push(j);
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      return false;
    }
  }
  return true;
}
console.log(canMakeWord('bark'))