"use strict";
document.querySelectorAll(".items .item").forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('active');
        var result = item.querySelector(".answer");
        if (result) {
            if (!item.classList.contains("active")) {
                result.style.height = 0 + "px";
            }
            else {
                result.style.height = result.scrollHeight + "px";
            }
        }
    });
});
