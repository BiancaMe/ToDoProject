export default function print() {
  const arr = [{ description: 'Feed Dogs', bool: false, number: 1 },
    { description: 'Feed Catss', bool: false, number: 7 },
    { description: 'Feed Sheeps', bool: true, number: 3 }];

  arr.sort((a, b) => a.number - b.number);

  arr.forEach((element) => {
    const child = document.createElement('li');
    child.setAttribute('class', 'item itemList');
    if (element.bool) {
      child.innerHTML = `<input class='check' type='checkbox'  checked>
      <label class="itemText">${element.description}</label> <span class="dots">&#8942;</span> `;
    } else {
      child.innerHTML = `<input class='check' type='checkbox'>
      <label class="itemText"> ${element.description} </label>  <span class="dots">&#8942;</span>`;
    }

    document.querySelector('.list').appendChild(child);
  });
}
