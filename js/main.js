function getRandomInt(min, max = 1) {
  if (typeof min === 'string' || min === undefined) {
    throw new Error('Параметры должны быть числами!');
  }

  return Math.abs(Math.floor(Math.random() * (max - min + 1) + min));
}

function getMaxLengthString(string, maxLength) {
  return string.length <= maxLength;
}

getRandomInt(9, 10);
getMaxLengthString('', 140);
