let stepLayoutArr: Array<HTMLElement> = [];

this.document.querySelectorAll<HTMLElement>('.bt-step-next').forEach((item: HTMLElement) => {
    item.addEventListener('click', () => {
        console.log('click next');
    });
});

this.document.querySelectorAll<HTMLElement>('.step-control .configuration-layout').forEach((item: HTMLElement) => {
    stepLayoutArr.push(item);
});


function changeLayoutStep(remove: number, add: number) {
    //this.isMoving = true;
    // this.stepLayoutArr[remove].classList.add("prepare-deactive");
    //  this.stepLayoutArr[remove].classList.remove("active");
    // this.element.findFirst('.bt-close-step')?.classList.remove('hide');
    // this.removeToolTips();
    //  this.removePopup3DConfigurationZoom();

    setTimeout(() => {
        // this.stepLayoutArr[remove].classList.remove("prepare-deactive");
    }, 300);
    setTimeout(() => {
        //this.stepLayoutArr[add].classList.add("active");
        // this.scrollStepToTop();
        //  this.isMoving = false;
    }, 400);
}

//   this.changeLayoutStep(this.step, this.step + 1);