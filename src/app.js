// const Router = require('./Router');
// const Home = require('');

// let currentPage;
// let body;

// const showPage = function(newPage) {
//     if (currentPage) currentPage.teardown();
//     currentPage = newPage;
//     body.innerHTML = '';
//     currentPage.render(body);
//     currentPage.on('navigation.goto', function(e, route) {
//         Router.navigate(route);
//     });

//     window.currentPage = currentPage;
//     if (typeof window.onAppReady !== 'undefined') {
//         window.onAppReady();
//     }
// }

// window.onload = function () {
//     body = document.querySelector('body .container');
// }
