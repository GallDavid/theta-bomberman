let bombermanArr = [
  [' ', ' ', ' ', ' ', '_', '_', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
  [' ', ' ', ' ', '/', ' ', '_', '_', ' ', ')', ' ', '_', '_', '_', '_', ' ', ' ', ' ', '_', '_', '_', '_', ' ', '_', '_', '_', ' ', ' ', ' ', '/', ' ', '/', '_', ' ', ' ', ' ', '_', '_', '_', ' ', ' ', ' ', '_', '_', '_', '_', '_', ' ', '_', '_', '_', '_', ' ', '_', '_', '_', ' ', ' ', ' ', '_', '_', '_', '_', ' ', '_', ' ', '_', '_', '_', '_',],
  [' ', ' ', '/', ' ', '_', '_', ' ', ' ', '|', '/', ' ', '_', '_', ' ', '\\', ' ', '/', ' ', '_', '_', ' ', '`', '_', '_', ' ', '\\', ' ', '/', ' ', '_', '_', ' ', '\\', ' ', '/', ' ', '_', ' ', '\\', ' ', '/', ' ', '_', '_', '_', '/', '/', ' ', '_', '_', ' ', '`', '_', '_', ' ', '\\', ' ', '/', ' ', '_', '_', ' ', '`', '/', '/', ' ', '_', '_', ' ', '\\'],
  [' ', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', ' ', '/', ' ', '/', ' ', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', ' ', '_', '_', '/', '/', ' ', '/', ' ', ' ', ' ', '/', ' ', '/', ' ', '/', ' ', '/', ' ', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', ' ', '/', ' ', '/'],
  ['/', '_', '_', '_', '_', '_', '/', ' ', '\\', '_', '_', '_', '_', '/', '/', '_', '/', ' ', '/', '_', '/', ' ', '/', '_', '/', '/', '_', '.', '_', '_', '_', '/', ' ', '\\', '_', '_', '_', '/', '/', '_', '/', ' ', ' ', ' ', '/', '_', '/', ' ', '/', '_', '/', ' ', '/', '_', '/', ' ', '\\', '_', '_', ',', '_', '/', '/', '_', '/', ' ', '/', '_', '/',],
];
let playArr = [
  [' ', ' ', ' ', ' ', '_', '_', '_', '_', ' ', ' ', ' ', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '/', ' ', '_', '_', ' ', '\\', ' ', '/', ' ', '/', '_', '_', '_', '_', ' ', '_', ' ', '_', '_', ' ', ' ', '_', '_'],
  [' ', ' ', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '/', ' ', '_', '_', ' ', '`', '/', '/', ' ', '/', ' ', '/', ' ', '/'],
  [' ', '/', ' ', '_', '_', '_', '_', '/', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/',],
  ['/', '_', '/', ' ', ' ', ' ', ' ', '/', '_', '/', ' ', '\\', '_', '_', ',', '_', '/', ' ', '\\', '_', '_', ',', ' ', '/', ' ',],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '/', '_', '_', '_', '_', '/', ' ', ' ',]
];
let optionsArr = [
  [' ', ' ', ' ', '_', '_', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_', '_', ' ', ' ', ' ', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
  [' ', ' ', '/', ' ', '_', '_', ' ', '\\', ' ', '_', '_', '_', '_', ' ', ' ', ' ', '/', ' ', '/', '_', ' ', '(', '_', ')', '_', '_', '_', '_', ' ', ' ', ' ', '_', '_', '_', '_', ' ', ' ', ' ', '_', '_', '_', '_', '_'],
  [' ', '/', ' ', '/', ' ', '/', ' ', '/', '/', ' ', '_', '_', ' ', '\\', ' ', '/', ' ', '_', '_', '/', '/', ' ', '/', '/', ' ', '_', '_', ' ', '\\', ' ', '/', ' ', '_', '_', ' ', '\\', ' ', '/', ' ', '_', '_', '_', '/'],
  ['/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '_', ' ', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', ' ', '/', ' ', '/', '(', '_', '_', ' ', ' ', ')',],
  ['\\', '_', '_', '_', '_', '/', '/', ' ', '.', '_', '_', '_', '/', ' ', '\\', '_', '_', '/', '/', '_', '/', ' ', '\\', '_', '_', '_', '_', '/', '/', '_', '/', ' ', '/', '_', '/', '/', '_', '_', '_', '_', '/', ' ',],
  [' ', ' ', ' ', ' ', ' ', '/', '_', '/', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',]
];
let creditsArr = [
  [' ', ' ', ' ', '_', '_', '_', '_', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_', '_', ' ', '_', ' ', ' ', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ',],
  [' ', ' ', '/', ' ', '_', '_', '_', '_', '/', '_', '_', '_', '_', '_', ' ', '_', '_', '_', ' ', ' ', ' ', '_', '_', '_', '_', '/', ' ', '/', '(', '_', ')', '/', ' ', '/', '_', ' ', '_', '_', '_', '_', '_'],
  [' ', '/', ' ', '/', ' ', ' ', ' ', ' ', '/', ' ', '_', '_', '_', '/', '/', ' ', '_', ' ', '\\', ' ', '/', ' ', '_', '_', ' ', ' ', '/', '/', ' ', '/', '/', ' ', '_', '_', '/', '/', ' ', '_', '_', '_', '/'],
  ['/', ' ', '/', '_', '_', '_', ' ', '/', ' ', '/', ' ', ' ', ' ', '/', ' ', ' ', '_', '_', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '/', ' ', '/', '_', ' ', '(', '_', '_', ' ', ' ', ')',],
  ['\\', '_', '_', '_', '_', '/', '/', '_', '/', ' ', ' ', ' ', ' ', '\\', '_', '_', '_', '/', ' ', '\\', '_', '_', ',', '_', '/', '/', '_', '/', ' ', '\\', '_', '_', '/', '/', '_', '_', '_', '_', '/', ' ',]
];
let exitArr = [
  [' ', ' ', ' ', ' ', '_', '_', '_', '_', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_', ' ', ' ', '_', '_',],
  [' ', ' ', ' ', '/', ' ', '_', '_', '_', '_', '/', '_', ' ', ' ', '_', '_', ' ', '(', '_', ')', '/', ' ', '/', '_'],
  [' ', ' ', '/', ' ', '_', '_', '/', ' ', ' ', '|', ' ', '|', '/', '_', '/', '/', ' ', '/', '/', ' ', '_', '_', '/'],
  [' ', '/', ' ', '/', '_', '_', '_', ' ', '_', '>', ' ', ' ', '<', ' ', '/', ' ', '/', '/', ' ', '/', '_', ' ',],
  ['/', '_', '_', '_', '_', '_', '/', '/', '_', '/', '|', '_', '|', '/', '_', '/', ' ', '\\', '_', '_', '/', ' ',]
];
let arrowRight = [
  [' ', ' ', '_', '_', ' ', '_', '_'],
  [' ', '/', ' ', '/', '/', ' ', '/'],
  ['/', ' ', '/', '/', ' ', '/',],
  ['\\', ' ', '\\', '\\', ' ', '\\',],
  [' ', '\\', '_', '\\', '\\', '_', '\\']
];
let arrowLeft = [
  ['_', '_', ' ', '_', '_', ' ',],
  ['\\', ' ', '\\', '\\', ' ', '\\',],
  [' ', '\\', ' ', '\\', '\\', ' ', '\\'],
  [' ', '/', ' ', '/', '/', ' ', '/'],
  ['/', '_', '/', '/', '_', '/',]
];
let backArr = [
  [' ', ' ', ' ', ' ', '_', '_', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_', '_', ' ', ' '],
  [' ', ' ', ' ', '/', ' ', '_', '_', ' ', ')', ' ', '_', '_', '_', '_', ' ', '_', ' ', '_', '_', '_', '_', '_', ' ', '/', ' ', '/', '_', '_'],
  [' ', ' ', '/', ' ', '_', '_', ' ', ' ', '|', '/', ' ', '_', '_', ' ', '`', '/', '/', ' ', '_', '_', '_', '/', '/', ' ', '/', '/', '_', '/'],
  [' ', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '_', '_', ' ', '/', ' ', ',', '<', ' ', ' ',],
  ['/', '_', '_', '_', '_', '_', '/', ' ', '\\', '_', '_', ',', '_', '/', ' ', '\\', '_', '_', '_', '/', '/', '_', '/', '|', '_', '|', ' ',]
];
let soundArr = [
  [' ', ' ', ' ', '_', '_', '_', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_', '_'],
  [' ', ' ', '/', ' ', '_', '_', '_', '/', ' ', '_', '_', '_', '_', ' ', ' ', ' ', '_', '_', ' ', ' ', '_', '_', ' ', '_', '_', '_', '_', ' ', ' ', ' ', '_', '_', '_', '_', '/', ' ', '/'],
  [' ', ' ', '\\', '_', '_', ' ', '\\', ' ', '/', ' ', '_', '_', ' ', '\\', ' ', '/', ' ', '/', ' ', '/', ' ', '/', '/', ' ', '_', '_', ' ', '\\', ' ', '/', ' ', '_', '_', ' ', ' ', '/',],
  [' ', '_', '_', '_', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', ' ', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', ' ',],
  ['/', '_', '_', '_', '_', '/', ' ', '\\', '_', '_', '_', '_', '/', ' ', '\\', '_', '_', ',', '_', '/', '/', '_', '/', ' ', '/', '_', '/', ' ', '\\', '_', '_', ',', '_', '/', ' ', ' ',]
];
let onArr = [
  [' ', ' '],
  [' ', ' ', '_', '_', '_', '_', ' ', ' ', ' ', '_', '_', '_', '_',],
  [' ', '/', ' ', '_', '_', ' ', '\\', ' ', '/', ' ', '_', '_', ' ', '\\'],
  ['/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', ' ', '/', ' ', '/'],
  ['\\', '_', '_', '_', '_', '/', '/', '_', '/', ' ', '/', '_', '/',]
];
let offArr = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_', '_', '_', '_', ' ', '_', '_', '_', '_'],
  [' ', ' ', '_', '_', '_', '_', ' ', ' ', ' ', '/', ' ', '_', '_', '/', '/', ' ', '_', '_', '/'],
  [' ', '/', ' ', '_', '_', ' ', '\\', ' ', '/', ' ', '/', '_', ' ', '/', ' ', '/', '_', ' ',],
  ['/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '_', '_', '/', '/', ' ', '_', '_', '/', ' ',],
  ['\\', '_', '_', '_', '_', '/', '/', '_', '/', ' ', ' ', '/', '_', '/', ' ', ' ', ' ', ' ',]
];
let mapArr = [
  [' ', ' ', ' ', ' ', '_', '_', ' ', ' ', '_', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
  [' ', ' ', ' ', '/', ' ', ' ', '|', '/', ' ', ' ', '/', '_', '_', '_', '_', ' ', '_', ' ', '_', '_', '_', '_',],
  [' ', ' ', '/', ' ', '/', '|', '_', '/', ' ', '/', '/', ' ', '_', '_', ' ', '`', '/', '/', ' ', '_', '_', ' ', '\\'],
  [' ', '/', ' ', '/', ' ', ' ', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/'],
  ['/', '_', '/', ' ', ' ', '/', '_', '/', ' ', '\\', '_', '_', ',', '_', '/', '/', ' ', '.', '_', '_', '_', '/',],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '/', '_', '/', ' ', ' ', ' ', ' ', ' ',]
];
let defaultArr = [
  [' ', ' ', ' ', ' ', '_', '_', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_', '_', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_', '_', ' ', '_', '_',],
  [' ', ' ', ' ', '/', ' ', '_', '_', ' ', '\\', ' ', '_', '_', '_', ' ', ' ', ' ', '/', ' ', '_', '_', '/', '_', '_', '_', '_', ' ', '_', ' ', '_', '_', ' ', ' ', '_', '_', ' ', '/', ' ', '/', '/', ' ', '/', '_'],
  [' ', ' ', '/', ' ', '/', ' ', '/', ' ', '/', '/', ' ', '_', ' ', '\\', ' ', '/', ' ', '/', '_', ' ', '/', ' ', '_', '_', ' ', '`', '/', '/', ' ', '/', ' ', '/', ' ', '/', '/', ' ', '/', '/', ' ', '_', '_', '/'],
  [' ', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', ' ', '_', '_', '/', '/', ' ', '_', '_', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '/', ' ', '/', '_', ' ',],
  ['/', '_', '_', '_', '_', '_', '/', ' ', '\\', '_', '_', '_', '/', '/', '_', '/', ' ', ' ', ' ', '\\', '_', '_', ',', '_', '/', ' ', '\\', '_', '_', ',', '_', '/', '/', '_', '/', ' ', '\\', '_', '_', '/', ' ',],
];
let randomArr = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
  [' ', ' ', ' ', '_', '_', '_', '_', '_', ' ', '_', '_', '_', '_', ' ', '_', ' ', '_', '_', '_', '_', ' ', ' ', ' ', '_', '_', '_', '_', '/', ' ', '/', '_', '_', '_', '_', ' ', ' ', ' ', '_', '_', '_', '_', ' ', '_', '_', '_',],
  [' ', ' ', '/', ' ', '_', '_', '_', '/', '/', ' ', '_', '_', ' ', '`', '/', '/', ' ', '_', '_', ' ', '\\', ' ', '/', ' ', '_', '_', ' ', ' ', '/', '/', ' ', '_', '_', ' ', '\\', ' ', '/', ' ', '_', '_', ' ', '`', '_', '_', ' ', '\\'],
  [' ', '/', ' ', '/', ' ', ' ', ' ', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', ' ', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', ' ', '/', ' ', '/', ' ', '/', ' ', '/'],
  ['/', '_', '/', ' ', ' ', ' ', ' ', '\\', '_', '_', ',', '_', '/', '/', '_', '/', ' ', '/', '_', '/', ' ', '\\', '_', '_', ',', '_', '/', ' ', '\\', '_', '_', '_', '_', '/', '/', '_', '/', ' ', '/', '_', '/', ' ', '/', '_', '/',]
];
let playersArr = [
  [' ', ' ', ' ', ' ', '_', '_', '_', '_', ' ', ' ', ' ', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
  [' ', ' ', ' ', '/', ' ', '_', '_', ' ', '\\', ' ', '/', ' ', '/', '_', '_', '_', '_', ' ', '_', ' ', '_', '_', ' ', ' ', '_', '_', ' ', '_', '_', '_', ' ', ' ', ' ', '_', '_', '_', '_', '_', ' ', '_', '_', '_', '_', '_'],
  [' ', ' ', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '/', ' ', '_', '_', ' ', '`', '/', '/', ' ', '/', ' ', '/', ' ', '/', '/', ' ', '_', ' ', '\\', ' ', '/', ' ', '_', '_', '_', '/', '/', ' ', '_', '_', '_', '/'],
  [' ', '/', ' ', '_', '_', '_', '_', '/', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', '/', '_', '/', ' ', '/', '/', ' ', ' ', '_', '_', '/', '/', ' ', '/', ' ', ' ', ' ', '(', '_', '_', ' ', ' ',')', ' '],
  ['/', '_', '/', ' ', ' ', ' ', ' ', '/', '_', '/', ' ', '\\', '_', '_', ',', '_', '/', ' ', '\\', '_', '_', ',', ' ', '/', ' ', '\\', '_', '_', '_', '/', '/', '_', '/', ' ', ' ', ' ', '/', '_', '_', '_', '_', '/', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '/', '_', '_', '_', '_', '/', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
let oneArr = [
  [' ', ' ', ' ', '_', '_', '_'],
  [' ', ' ', '<', ' ', ' ', '/'],
  [' ', ' ', '/', ' ', '/', ' '],
  [' ', '/', ' ', '/', ' ', ' '],
  ['/', '_', '/', ' ', ' ', ' '],
];
let twoArr = [
  [' ', ' ', ' ', '_', '_', '_', ' '],
  [' ', ' ', '|', '_', '_', ' ', '\\'],
  [' ', ' ', '_', '_', '/', ' ', '/'],
  [' ', '/', ' ', '_', '_', '/', ' '],
  ['/', '_', '_', '_', '_', '/', ' ']
];

module.exports = {
  bombermanArr,
  playArr,
  optionsArr,
  creditsArr,
  exitArr,
  arrowRight,
  arrowLeft,
  backArr,
  soundArr,
  onArr,
  offArr,
  mapArr,
  defaultArr,
  randomArr,
  playersArr,
  oneArr,
  twoArr

};