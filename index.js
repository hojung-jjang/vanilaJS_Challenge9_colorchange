const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["tomato", "greenyellow", "yellow", "pink", "wheat", "plum", "purple", "e66465", "#9198e5", "darkorchid"
                , "cadetblue", "darkgreen", "darkolivegreen", "hotpink", "orange", "gainsboro"];


function changeColors() {
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
}


button.addEventListener("click", changeColors);
