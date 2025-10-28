/**
Challenge:

1. Google for "how to use fetch with json"
2. Should find a top result from MDN
3. MANUALLY copy over the fetch, but using the URL below 👇
    https://dog.ceo/api/breeds/image/random
*/
// async function getData() {
//   const url = "https://dog.ceo/api/breeds/image/random";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// getData();



// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json())
//     .then(data => document.querySelector("body").innerHTML = `<img src=${data.message} width=400 >`)


//////////////////////////////////////////////////////////////////////////

// const heading = document.querySelector(".heading")

// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data["activity"])
//         heading.innerHTML = `<h1>${data["activity"]}</h1>`
//         }
//     )
        

//////////////////////////////////////////////////////////////////////////

const body = document.querySelector("body");
const boredBtn = document.querySelector(".bored-btn");
const idea = document.querySelector(".idea");
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
    body.style.backgroundImage = bgColors[Math.floor(Math.random() * 10)]
})


























