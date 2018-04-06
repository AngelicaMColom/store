const products = [];
const addContentHtml = document.querySelector('.content__photos');

let mInit = {  method: 'GET',
               cache: 'default'
              };

let myRequest = new Request('data.json', mInit);

fetch('data.json')
.then(response => response.json())
.then(data => {
  products.push(...data);
  getImagAndPrice(products);
})
.catch(error => console.log(error));


function getImagAndPrice(products) {
  const html = products.map(product => {
    const { name, price, img } = product;
    return templateByArray (name, price, img);
  }).join('');
  addContentHtml.innerHTML = html;
}

function templateByArray (name, price, img) {
  return `
  <aside class="content__photos__image ${name}">
    <img src=${img} alt="Product">
    <div class="photos__image__hover">
      <p>Name of reference<br>Product here</p>
      <h2>price</h2>
      <button class="button__big--1">+ More</button>
    </div>
  </aside>
  `
}
