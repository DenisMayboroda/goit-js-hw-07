
const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

nameInput.addEventListener(`input`, () =>
{
    const trimName = nameInput.value.trim();
    nameOutput.textContent = trimName || `Anonymous`;
});

nameInput.addEventListener(`blur`, () =>
{
    nameInput.value = ``;
    nameOutput.textContent = "Anonymous";
});