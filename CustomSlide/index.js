"use strict";
var cardList = document.querySelector(".card-list");
var currentSlide = 0;
var cardEle = document.querySelectorAll('.card-list .card');
var timeDelay1 = 50;
var timeDelay2 = 400;
var isMoving = false;
cardList && setCardPosition(cardList);
initCreateBullet();
onClickCard();
onClickNext();
onClickPrev();
function initCreateBullet() {
    var str = '<ul class="bullets">';
    for (var i = 0; i < cardEle.length; i++) {
        str += '<li></li>';
    }
    str += '</ul>';
    var bulletBox = document.querySelector('.bullet-box');
    if (bulletBox) {
        bulletBox.innerHTML = str;
    }
    var lists = document.querySelectorAll('ul.bullets li');
    toggleHTMLClass(lists, 'active', false);
    toggleHTMLClass(lists, 'active', true, 0);
    for (var i = 0; i < lists.length; i++) {
        lists[i].setAttribute('data-value', (i).toString());
    }
    onClickBullet();
}
function onClickBullet() {
    var lists = document.querySelectorAll('ul.bullets li');
    lists.forEach(function (item) {
        item.addEventListener('click', function () {
            var id = item === null || item === void 0 ? void 0 : item.getAttribute('data-value');
            var index = 0;
            if (id) {
                index = getIndexFromId(id);
                gotoSlide(index);
            }
        });
    });
}
function setBullet() {
    var card = document.querySelector('.cards .card-list .card');
    var id = card === null || card === void 0 ? void 0 : card.getAttribute('data-value');
    var bullets = document.querySelectorAll('ul.bullets li');
    for (var i = 0; i < bullets.length; i++) {
        var value = bullets[i].getAttribute('data-value');
        bullets[i].classList.remove('active');
        if (id == value) {
            bullets[i].classList.add('active');
        }
    }
}
function onClickNext() {
    document.querySelectorAll('.bt-next').forEach(function (item) {
        item.addEventListener('click', function () {
            gotoSlide(1);
        });
    });
}
function onClickPrev() {
    document.querySelectorAll('.bt-prev').forEach(function (item) {
        item.addEventListener('click', function () {
            gotoSlide(cardEle.length - 1);
        });
    });
}
function onClickCard() {
    var lists = document.querySelectorAll('.card');
    lists.forEach(function (item) {
        item.addEventListener('click', function () {
            var id = item === null || item === void 0 ? void 0 : item.getAttribute('data-value');
            if (id) {
                var index = getIndexFromId(id);
                gotoSlide(index);
            }
        });
    });
}
function setCardPosition(ele) {
    var lists = ele === null || ele === void 0 ? void 0 : ele.querySelectorAll('.card');
    var startCenter = 580;
    var diff = 290;
    if (lists) {
        if (lists.length >= 5) {
            for (var i = 0; i < lists.length; i++) {
                if (i + 1 == lists.length) {
                    lists[i].style.left = diff + 'px';
                }
                else if (i + 2 == lists.length) {
                    lists[i].style.left = 0 + 'px';
                }
                else if (i + 3 == lists.length) {
                    lists[i].style.left = -(diff) + 'px';
                }
                else {
                    lists[i].style.left = startCenter + 'px';
                    startCenter += diff;
                }
            }
        }
        else {
            for (var i = 0; i < lists.length; i++) {
                lists[i].style.left = startCenter + 'px';
                startCenter += diff;
            }
        }
    }
}
function getIndexFromId(id) {
    var lists = cardList.querySelectorAll(".cards .card-list .card");
    var index = 0;
    for (var i = 0; i < lists.length; i++) {
        if (id == lists[i].getAttribute('data-value')) {
            index = i;
        }
    }
    return index;
}
function gotoSlide(id) {
    if (id) {
        if (id <= 3) {
            moveRigth(id);
        }
        else {
            moveLeft(id);
        }
    }
}
function moveRigth(id) {
    var lists = cardList.querySelectorAll(".cards .card-list .card");
    toggleHTMLClass(lists, 'transition', true);
    toggleHTMLClass(lists, 'transformRight', true);
    setTimeout(function () {
        swapCard(id);
        toggleHTMLClass(lists, 'transition', false);
        toggleHTMLClass(lists, 'transformRight', false);
        setBullet();
    }, timeDelay1);
}
function moveLeft(id) {
    var lists = cardList.querySelectorAll(".cards .card-list .card");
    toggleHTMLClass(lists, 'transition', true);
    toggleHTMLClass(lists, 'transformLeft', true);
    setTimeout(function () {
        swapCard(id);
        toggleHTMLClass(lists, 'transition', false);
        toggleHTMLClass(lists, 'transformLeft', false);
        setBullet();
    }, timeDelay1);
}
function swapCard(index) {
    var lists = document.querySelectorAll('.cards .card-list .card');
    for (var i = 0; i < lists.length; i++) {
        var item = lists[i];
        if (i < index) {
            cardList.removeChild(item);
            cardList.append(item);
        }
    }
    setCardPosition(cardList);
}
function toggleHTMLClass(elements, className, add, index) {
    if (elements && elements.length) {
        for (var i = 0; i < elements.length; i++) {
            if (index == null || index == i) {
                if (!add) {
                    elements[i].classList.remove(className);
                }
                else {
                    elements[i].classList.add(className);
                }
            }
        }
    }
}
