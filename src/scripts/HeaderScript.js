import styles from '../components/Navbar.module.css';

let bgColor, textColor, hoverTextColor;

export function headerChangeOnScroll() {
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
        element.addEventListener("mouseover", (e) => {
            element.style.color = hoverTextColor;
        });

        element.addEventListener("mouseleave", (e) => {
            element.style.color = textColor;
        });
    });
}

// helper functions
function transitionHeader() {
    const headerEl = document.querySelector("header");
    const navBtns = document.querySelectorAll("nav a");
    // issue, selected is scoped to navbar
    // const selected = document.querySelectorAll(`.${styles.selected}`);

    headerEl.style.backgroundColor = bgColor;
    navBtns.forEach((element) => {
        element.style.color = textColor;
    });
    // selected.forEach((element) => {
    //     element.style.color = hoverTextColor
    // })
}