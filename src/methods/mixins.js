export function getCardArray() {
  this.isConfirmed = true;
  this.awardArray.forEach((item) => {
    const arr = Array(item.number).fill(item);
    this.cardArray = this.cardArray.concat(arr);
  });
  this.cardArray = this.getRandomCardsArray(this.cardArray);
}

export function getRandomCardsArray(newArray) {
  const inputArray = newArray;
  for (let index = inputArray.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [inputArray[index], inputArray[randomIndex]] = [
      inputArray[randomIndex],
      inputArray[index],
    ];
  }
  return inputArray;
}

export function getTotalNumber() {
  let count = 0;
  this.awardArray.forEach((award) => {
    count += award.number;
  });
  return count;
}

export function getRemainAwards(item) {
  this.getArray.push(item);
  localStorage.setItem('awards', JSON.stringify(this.getArray));
  this.awardArray.forEach((award) => {
    if (award.title === item.title) {
      award.number -= 1;
    }
  });
}
