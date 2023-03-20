"use strict";
var stepLayoutArr = [];
this.document.querySelectorAll('.bt-step-next').forEach(function (item) {
    item.addEventListener('click', function () {
        console.log('click next');
    });
});
this.document.querySelectorAll('.step-control .configuration-layout').forEach(function (item) {
    stepLayoutArr.push(item);
});
function changeLayoutStep(remove, add) {
    //this.isMoving = true;
    // this.stepLayoutArr[remove].classList.add("prepare-deactive");
    //  this.stepLayoutArr[remove].classList.remove("active");
    // this.element.findFirst('.bt-close-step')?.classList.remove('hide');
    // this.removeToolTips();
    //  this.removePopup3DConfigurationZoom();
    setTimeout(function () {
        // this.stepLayoutArr[remove].classList.remove("prepare-deactive");
    }, 300);
    setTimeout(function () {
        //this.stepLayoutArr[add].classList.add("active");
        // this.scrollStepToTop();
        //  this.isMoving = false;
    }, 400);
}
//   this.changeLayoutStep(this.step, this.step + 1);
