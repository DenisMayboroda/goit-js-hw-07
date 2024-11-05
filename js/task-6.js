function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector(`#controls`)
const input = controls.querySelector(`input`)
const btnCreate = controls.querySelector(`[data-create]`)
const btnDestroy = controls.querySelector(`[data-destroy]`)
const boxesContainer = document.querySelector(`#boxes`)

btnCreate.addEventListener(`click`, () =>
{
  const amount = input.value;
  if (amount >= 1 && amount <= 100) 
  {
    createBoxes(amount);
    input.value = ``;
  }
  else
  {
    alert("Please enter a number between 1 and 100");
  }
});

btnDestroy.addEventListener(`click`, destroyBoxes);

function createBoxes(amount)
{
  boxesContainer.innerHTML = ``;

  const boxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement(`div`);
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    boxSize += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() 
{
  boxesContainer.innerHTML = ``;
}

