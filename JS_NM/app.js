// Access HTML from JS
// When start event, run function.
const title = document.querySelector(".hello h1");

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
}


title.addEventListener("click", handleTitleClick);