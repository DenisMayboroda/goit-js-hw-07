function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(`.change-color`);
const spanColor = document.querySelector(`.color`);
const body = document.body;

changeColorBtn.addEventListener(`click`, () => 
{
  const rendomColor = getRandomHexColor();

  body.style.backgroundColor = rendomColor;

  spanColor.textContent = rendomColor;
});
