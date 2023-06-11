"use strict";
var layout1 = this.document.querySelector('.layout1');
var layout2 = this.document.querySelector('.layout2');
this.document.querySelectorAll('.bt-next').forEach(function (item) {
    item.addEventListener('click', function () {
        console.log('click next');
        layout1 === null || layout1 === void 0 ? void 0 : layout1.classList.remove('relate');
        layout1 === null || layout1 === void 0 ? void 0 : layout1.classList.remove('active');
        layout2 === null || layout2 === void 0 ? void 0 : layout2.classList.add('active');
        setTimeout(function () {
            layout2 === null || layout2 === void 0 ? void 0 : layout2.classList.add('relate');
        }, 1000);
    });
});
this.document.querySelectorAll('.bt-back').forEach(function (item) {
    item.addEventListener('click', function () {
        console.log('click back');
        layout2 === null || layout2 === void 0 ? void 0 : layout2.classList.remove('relate');
        layout2 === null || layout2 === void 0 ? void 0 : layout2.classList.remove('active');
        layout1 === null || layout1 === void 0 ? void 0 : layout1.classList.add('active');
        setTimeout(function () {
            layout1 === null || layout1 === void 0 ? void 0 : layout1.classList.add('relate');
        }, 500);
    });
});
