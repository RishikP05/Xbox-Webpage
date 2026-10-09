// Gets the theme saved in the browser.
const savedTheme = localStorage.getItem("xbox-theme");

// Sets the starting theme when the page loads.
document.documentElement.setAttribute(
    "data-theme",
    savedTheme === "dark" ? "dark" : "light"
);

// Waits for the HTML page to finish loading.
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".theme-toggle");

    // Updates the text on the theme button.
    function updateButton() {
        const theme = document.documentElement.getAttribute("data-theme");

        if (theme === "dark") {
            button.textContent = "Light Mode";
        } else {
            button.textContent = "Dark Mode";
        }
    }

    updateButton();

    // Changes the theme when the button is clicked.
    button.addEventListener("click", function () {
        const currentTheme = document.documentElement.getAttribute("data-theme");

        if (currentTheme === "light") {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("xbox-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("xbox-theme", "light");
        }

        updateButton();
    });
});
