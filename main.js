let studint = [
    {
        fristname: "Sulaiman",
        age: 23,
        url: "./image.png",
        gaender: "male"
    },
    {
        fristname: "Ahmed",
        age: 23,
        url: "./img2.jpeg",
        gaender: "male"

    },
    {
        fristname: "nawal",
        age: 23,
        url: "./img3.jpeg",
        gaender: "female"

    },
]

let body = document.body


studint.forEach((curr) => {
    let img = document.createElement("img")
    let fname = document.createElement("p")
    img.src = curr.url
    img.style.height = "20%"
    img.style.width = "20%"
    fname.innerText = `the name is ${curr.fristname} and the age is ${curr.age}`
    if (curr.gaender === "male") {
        fname.style.backgroundColor = "blue"
    } else {
        fname.style.backgroundColor = "pink"
    }
    body.appendChild(fname)
    body.appendChild(img)
})

