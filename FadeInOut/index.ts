const layout1 = this.document.querySelector('.layout1');
const layout2 = this.document.querySelector('.layout2');

this.document.querySelectorAll<HTMLElement>('.bt-next').forEach((item: HTMLElement) => {
    item.addEventListener('click', () => {
        console.log('click next');
        layout1?.classList.remove('relate');
        layout1?.classList.remove('active');

        layout2?.classList.add('active');
        setTimeout(() => {
            layout2?.classList.add('relate');
        }, 1000);
    });
});

this.document.querySelectorAll<HTMLElement>('.bt-back').forEach((item: HTMLElement) => {
    item.addEventListener('click', () => {
        console.log('click back');
        layout2?.classList.remove('relate');
        layout2?.classList.remove('active');

        layout1?.classList.add('active');
        setTimeout(() => {
            layout1?.classList.add('relate');
        }, 500);
    });
});
