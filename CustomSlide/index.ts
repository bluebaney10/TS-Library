let cardList = document.querySelector(".card-list") as HTMLElement;
let currentSlide = 0;
let cardEle = document.querySelectorAll<HTMLElement>('.card-list .card');
let timeDelay1 = 50;
let timeDelay2 = 400;
let isMoving = false;

cardList && setCardPosition(cardList);
initCreateBullet();
onClickCard();
onClickNext();
onClickPrev();

function initCreateBullet() {
    let str = '<ul class="bullets">';
    for (let i = 0; i < cardEle.length; i++) {
        str += '<li></li>';
    }

    str += '</ul>';

    const bulletBox = document.querySelector('.bullet-box');
    if (bulletBox) {
        bulletBox.innerHTML = str;
    }

    const lists = document.querySelectorAll<HTMLElement>('ul.bullets li');
    toggleHTMLClass(lists, 'active', false);
    toggleHTMLClass(lists, 'active', true, 0);

    for (let i = 0; i < lists.length; i++) {
        lists[i].setAttribute('data-value', (i).toString());
    }

    onClickBullet();
}

function onClickBullet() {
    const lists = document.querySelectorAll<HTMLElement>('ul.bullets li');
    lists.forEach((item: HTMLElement) => {
        item.addEventListener('click', () => {

            let id = item?.getAttribute('data-value');
            let index = 0;

            if (id) {
                index = getIndexFromId(id);
                gotoSlide(index);
            }
        })
    });
}

function setBullet() {
    let card = document.querySelector('.cards .card-list .card');
    let id = card?.getAttribute('data-value');

    const bullets = document.querySelectorAll<HTMLElement>('ul.bullets li');
    for (let i = 0; i < bullets.length; i++) {
        let value = bullets[i].getAttribute('data-value');
        bullets[i].classList.remove('active');

        if (id == value) {
            bullets[i].classList.add('active');
        }
    }
}

function onClickNext() {
    document.querySelectorAll<HTMLElement>('.bt-next').forEach((item: HTMLElement) => {
        item.addEventListener('click', () => {
            gotoSlide(1);
        });
    });
}

function onClickPrev() {
    document.querySelectorAll<HTMLElement>('.bt-prev').forEach((item: HTMLElement) => {
        item.addEventListener('click', () => {
            gotoSlide(cardEle.length - 1);
        });
    });
}


function onClickCard() {
    const lists = document.querySelectorAll<HTMLElement>('.card');
    lists.forEach((item: HTMLElement) => {
        item.addEventListener('click', () => {
            let id = item?.getAttribute('data-value');

            if (id) {
                let index = getIndexFromId(id);
                gotoSlide(index);
            }
        })
    });
}

function setCardPosition(ele?: HTMLElement) {
    const lists = ele?.querySelectorAll<HTMLElement>('.card');
    let startCenter = 580;
    let diff = 290;

    if (lists) {
        if (lists.length >= 5) {
            for (let i = 0; i < lists.length; i++) {
                if (i + 1 == lists.length) {
                    lists[i].style.left = diff + 'px';
                } else if (i + 2 == lists.length) {
                    lists[i].style.left = 0 + 'px';
                } else if (i + 3 == lists.length) {
                    lists[i].style.left = -(diff) + 'px';
                } else {
                    lists[i].style.left = startCenter + 'px';
                    startCenter += diff;
                }
            }
        } else {
            for (let i = 0; i < lists.length; i++) {
                lists[i].style.left = startCenter + 'px';
                startCenter += diff;
            }
        }
    }

}

function getIndexFromId(id: string) {
    var lists = cardList.querySelectorAll(".cards .card-list .card");
    let index = 0;
    for (let i = 0; i < lists.length; i++) {
        if (id == lists[i].getAttribute('data-value')) {
            index = i;
        }
    }
    return index;
}

function gotoSlide(id?: number) {
    if (id) {

        if (id <= 3) {
            moveRigth(id);
        } else {
            moveLeft(id);
        }
    }
}

function moveRigth(id: number) {
    var lists = cardList.querySelectorAll(".cards .card-list .card");
    toggleHTMLClass(lists, 'transition', true);
    toggleHTMLClass(lists, 'transformRight', true);
    setTimeout(() => {
        swapCard(id);
        toggleHTMLClass(lists, 'transition', false);
        toggleHTMLClass(lists, 'transformRight', false);
        setBullet();
    }, timeDelay1);
}

function moveLeft(id: number) {
    var lists = cardList.querySelectorAll(".cards .card-list .card");
    toggleHTMLClass(lists, 'transition', true);
    toggleHTMLClass(lists, 'transformLeft', true);
    setTimeout(() => {
        swapCard(id);
        toggleHTMLClass(lists, 'transition', false);
        toggleHTMLClass(lists, 'transformLeft', false);
        setBullet();
    }, timeDelay1);
}

function swapCard(index: number) {
    let lists = document.querySelectorAll<HTMLElement>('.cards .card-list .card');

    for (let i = 0; i < lists.length; i++) {
        let item = lists[i];
        if (i < index) {
            cardList.removeChild(item);
            cardList.append(item);
        }
    }

    setCardPosition(cardList);
}

function toggleHTMLClass(
    elements: NodeListOf<Element>,
    className: string,
    add: boolean,
    index?: number
) {
    if (elements && elements.length) {
        for (let i = 0; i < elements.length; i++) {
            if (index == null || index == i) {
                if (!add) {
                    elements[i].classList.remove(className);
                } else {
                    elements[i].classList.add(className);
                }
            }
        }
    }
}