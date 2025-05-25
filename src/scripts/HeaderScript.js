let bgColor, textColor, hoverTextColor;

export function headerChangeOnScroll() {
    bgColor = "#fffcf7";
    textColor = "#784390";
    hoverTextColor = "#29104e";

    window.addEventListener("scroll", (e) => {
        // get the scroll position
        let scrollPos = window.scrollY;

        if (scrollPos > 5) {
            bgColor = "#784390";
            textColor = "#fffcf7";
            hoverTextColor = "#ede6da";
        } else {
            bgColor = "#fffcf7";
            textColor = "#784390";
            hoverTextColor = "#29104e";
        }
        transitionHeader();
    })

}

export function navBtnChangeOnHover() {
    const navBtns = document.querySelectorAll("nav a");

    navBtns.forEach((element) => {
        element.style.color = textColor;
        element.style.textShadow = "-0.5px -0.1px 0.8px " + textColor;

        element.addEventListener("mouseover", (e) => {
            element.style.color = hoverTextColor;
            element.style.textShadow = "-0.5px -0.1px 0.8px " + hoverTextColor;
        });

        element.addEventListener("mouseleave", (e) => {
            element.style.color = textColor;
            element.style.textShadow = "-0.5px -0.1px 0.8px " + textColor;
        });
    });
}

// helper functions
function transitionHeader() {
    const headerEl = document.querySelector("header");
    const navBtns = document.querySelectorAll("nav a");

    headerEl.style.backgroundColor = bgColor;
    navBtns.forEach((element) => {
        element.style.color = textColor;
    });
}