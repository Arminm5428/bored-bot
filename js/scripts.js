
const body = document.querySelector("body");
const boredBtn = document.querySelector(".bored-btn");
const idea = document.querySelector(".idea");
const title = document.querySelector(".heading");
const bgColors = [
    "radial-gradient( #CD2C58, #FFE6D4)",
    "radial-gradient( #016B61, #9ECFD4)",
    "radial-gradient( #3C467B, #6E8CFB)",
    "radial-gradient( #6B3F69, #DDC3C3)",
    "radial-gradient( #3E1E68, #E45A92)",
    "radial-gradient( #476EAE, #A7E399)",
    "radial-gradient( #DC143C, #F7CAC9)",
    "radial-gradient( #556B2F, #C6D870)",
    "radial-gradient( #124170, #67C090)",
    "radial-gradient( #B12C00, #FFCC00)",
]


boredBtn.addEventListener("click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(res => res.json())
        .then(data => {
            idea.textContent = data["activity"];
        })
    boredBtn.blur();
    title.textContent = "HappyBot";
    body.style.backgroundImage = bgColors[Math.floor(Math.random() * 10)];
})

boredBtn.addEventListener("touchend", () => {
    boredBtn.blur();
})


























