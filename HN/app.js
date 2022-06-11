const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');

// 가져오는 방식, url, 동기or비동기 (false => 동기처리)
const PRODUCTS_URL = 'http://test.api.weniv.co.kr/mall';
const PRODUCT_URL = 'http://test.api.weniv.co.kr/mall/@id';

// async function getData() {
//     const response = await fetch('http://test.api.weniv.co.kr/mall');
//     const data = await response.json();
//     console.log(data);
//     return data;
// }

// getData().then(data => console.log(data[0]))

ajax.open('GET', PRODUCTS_URL, false);
ajax.send();

// json => 객체 (JSON.parse)
const productList = JSON.parse(ajax.response);

const ul = document.createElement('ul');

window.addEventListener('hashchange', () => {
    const id = location.hash.substring(1);

    ajax.open('GET', PRODUCT_URL.replace('@id', id), false);
    ajax.send();

    const productContent = JSON.parse(ajax.response);
    console.log(productContent);

    const title = document.createElement('h1');
    title.innerHTML = productContent.productName;
    content.appendChild(title);
})

for (let i = 0; i < 7; i++) {
    const li = document.createElement('li');
    const anchor = document.createElement('a');

    anchor.href = productList[i].id;
    anchor.innerText = productList[i].productName;
    // anchor.addEventListener('click', e => {
    //     e.preventDefault();
    // })

    li.appendChild(anchor);
    ul.appendChild(li);
}

container.appendChild(ul);
container.appendChild(content);