// toggles the nav menu in mobile layout

let toggleNavStatus = false;

let toggleNav = function () {
    let getNavMenu = document.querySelector(".nav")

    if(toggleNavStatus === false) {
        getNavMenu.style.visibility = "visible";

        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        getNavMenu.style.visibility = "collapse";

        toggleNavStatus = false;
    }
}

