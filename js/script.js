const arr = [{
  title: 'Pineapple',
  img: 'img/pineapple.jpg',
  details: 'The pineapple (Ananas comosus) is a tropical plant with an edible fruit; it is the most economically significant plant in the family Bromeliaceae. The pineapple is indigenous to South America, where it has been cultivated for many centuries. The introduction of the pineapple to Europe in the 17th century made it a significant cultural icon of luxury. Since the 1820s, pineapple has been commercially grown in greenhouses and many tropical plantations. Pineapples grow as a small shrub; the individual flowers of the unpollinated plant fuse to form a multiple fruit. The plant normally propagates from the offset produced at the top of the fruit or from a side shoot, and typically matures within a year.'
}];

const doc = document;
const container = doc.querySelector('.container');

container.innerHTML = `
    <h1 class="title">${arr[0].title}</h1>
    <img src="${arr[0].img}" alt="" class="fruit">
    <button class="btn">Open</button>
    <details class="details">
      <summary>Заголовок</summary>
      <div class="box">${arr[0].details}</div>
    </details>
`;

const btn = doc.querySelector('.btn');
const details = doc.querySelector('.details');
let open = true;

detailsOpen(open);

btn.onclick = function(){
  open = !open;
  detailsOpen(open);
};

function detailsOpen(button){
  if(!button){
    btn.innerHTML = 'Close';
    details.setAttribute('open', '');
  } else {
    btn.innerHTML = 'Open';
    details.removeAttribute('open');
  }
};








