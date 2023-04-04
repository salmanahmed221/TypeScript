"use strict";
// Get Books
Object.defineProperty(exports, "__esModule", { value: true });
// async function getdata() {
//   let response = await fetch('https://simple-books-api.glitch.me/books');
//   let res = await response.json();
//   console.log(res);
// }
// getdata();
// Get Order
// let url = 'https://simple-books-api.glitch.me/orders';
// async function getdata() {
//   let Order = await fetch(url, {
//     headers: {
//       Authorization: `Bearer 92e856fbe22473a06f2b482e4faab7a95c380bd6c92a5d57784deb9bfb7019ba`,
//     },
//   });
//   let res = await Order.json();
//   console.log(res);
// }
// getdata();
// Post request Generate Token
// let url = 'https://simple-books-api.glitch.me/api-clients/';
// async function getdata() {
//   let token = await fetch(url, {
//     method: 'Post',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       clientName: 'Ali',
//       clientEmail: 'Ali121@gamil.com',
//     }),
//   });
//   let response = await token.json();
//   console.log(response);
// }
// getdata();
const url = 'https://simple-books-api.glitch.me/orders';
async function getBooks() {
    const res = await fetch(url, {
        headers: {
            Authorization: 'Bearer 396143f3e9e4da51072ec6b06984c284b35b2bb560e067841b9c5913ba87cd5b',
        },
    });
    const b = await res.json();
    console.log(b);
}
getBooks();
