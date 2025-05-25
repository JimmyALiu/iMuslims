
export function headerChangeOnScroll() {
    window.addEventListener("scroll", (e) => {
        // get the scroll position
        let scrollPos = window.scrollY;

        if (scrollPos > 5) {
            transition("#784390", "#fffcf7");
        } else {
            transition("#fffcf7", "#784390");
        }
    })

}

// helper functions
function transition(bgColor, textColor) {
    const headerEl = document.querySelector("header");
    const navBtns = document.querySelectorAll("nav a");

    headerEl.style.backgroundColor = bgColor;
    navBtns.forEach((element) => {
        element.style.color = textColor;
    });
}