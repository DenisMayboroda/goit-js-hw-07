
const categories = document.querySelectorAll(`.item`);

console.log(`number of categories: ${categories.length}`);

categories.forEach((category) =>
{
    const CategoryName = category.querySelector(`h2`).textContent;

    const CategoryCounter = category.querySelectorAll(`li`).length;

    console.log(`Category: ${CategoryName}`);
    console.log(`Elements: ${CategoryCounter}`);
}

)