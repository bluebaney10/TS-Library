document.querySelectorAll<HTMLElement>(".items .item").forEach((item: HTMLElement) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        let result = item.querySelector(".answer") as HTMLElement;
        if (result) {
            if (!item.classList.contains("active")) {
                result.style.height = 0 + "px";
            } else {
                result.style.height = result.scrollHeight + "px";
            }
        }
    });
});
