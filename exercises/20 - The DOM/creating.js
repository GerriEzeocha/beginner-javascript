const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('Special');

const ulList = document.createElement('ul');
const liItem = document.createElement('li');
liItem.textContent = 'two';
ulList.appendChild(liItem);
document.body.insertAdjacentElement('afterbegin', ulList)