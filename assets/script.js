document.querySelectorAll(".goBackBtn").forEach(el => {
    el.addEventListener('click', (e) => {
        let images = el.parentElement.children[1];
        let ind = parseInt(images.dataset.selectedImg);
        if (ind > 0) {
            ind--;
        }
        else {
            ind = images.childElementCount - 1;
        }
        images.dataset.selectedImg = ind;
        images.scrollTo(ind * images.scrollWidth / images.childElementCount, window.scrollY);
    });
});

document.querySelectorAll(".goNextBtn").forEach(el => {
    el.addEventListener('click', (e) => {
        let images = el.parentElement.children[1];
        let ind = parseInt(images.dataset.selectedImg);
        if (ind + 1 < images.childElementCount) {
            ind++;
        }
        else {
            ind = 0;
        }
        images.dataset.selectedImg = ind;
        images.scrollTo(ind * images.scrollWidth / images.childElementCount, window.scrollY);
    });
});