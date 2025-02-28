let slider = document.getElementsByClassName("slide");
let nums = document.getElementsByTagName("li");
let start_top = 0;
let select_slide = 0;
let timer;

Array.from(slider).forEach(slide => slide.style.top = slide.clientHeight + "px");

Array.from(nums).forEach((num, index) => {
    num.addEventListener("click", function() {
        clearTimeout(timer);
        Array.from(slider).forEach(slide => slide.style.display = "none");
        select_slide = index;
        slider[select_slide].style.display = "flex";
        start_top = slider[select_slide].clientHeight;
        animate_slide();
    });
});

function animate_slide() {
    start_top = Math.max(0, start_top - 1);
    slider[select_slide].style.top = start_top + "px";
    if (start_top > 0) timer = setTimeout(animate_slide, 1);
}

timer = setTimeout(animate_slide, 1);
