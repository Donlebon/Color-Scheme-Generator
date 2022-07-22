// Color User Input

let pickerColor = document.querySelector("#picker_color")

// Picker Box

let pickerBox = document.querySelector(".picker_box")

// Picker Scheme

let pickerScheme = document.querySelector(".picker-original")

// Picker Scheme Color Animation

pickerScheme.addEventListener("click", changeColor)


// Color Animation

function changeColor(e){
    e.target.classList.remove("picker-original")
    e.target.classList.add("picker-clicked")
    setTimeout(() => {
        e.target.classList.remove("picker-clicked")
        e.target.classList.add("picker-original")
        }, 100)
}

// Color 

let colorOne = document.querySelector(".color_one")
let colorTwo = document.querySelector(".color_two")
let colorThree = document.querySelector(".color_three")
let colorFour = document.querySelector(".color_four")
let colorFive = document.querySelector(".color_five")

// Color Hex Code

let hexOne = document.querySelector(".caption_color_one")
let hexTwo = document.querySelector(".caption_color_two")
let hexThree = document.querySelector(".caption_color_three")
let hexFour = document.querySelector(".caption_color_four")
let hexFive = document.querySelector(".caption_color_five")

// Seed Color

let seedColor = pickerColor.value.slice(1, 7).toUpperCase()

pickerColor.addEventListener("change", changeSeed)

function changeSeed(){
    colorOne.style.backgroundColor = pickerColor.value
    hexOne.textContent = "#" + seedColor
}

// PickerBox

let defaultMode = pickerBox.options[pickerBox.selectedIndex].text.toLowerCase()

// Change Color and Hex Two

function changeTwo(data){
    colorTwo.style.backgroundColor = data.colors[0].hex.value
    hexTwo.textContent = data.colors[0].hex.value
    colorTwo.classList.remove("color")
    colorTwo.classList.add("colorEmpty")
    setTimeout(() => {
        colorTwo.classList.remove("colorEmpty")
        colorTwo.classList.add("color")
        }, 100)
}

// Change Color and Hex Three
function changeThree(data){
    colorThree.style.backgroundColor = data.colors[1].hex.value
    hexThree.textContent = data.colors[1].hex.value
    colorThree.classList.remove("color")
    colorThree.classList.add("colorEmpty")
    setTimeout(() => {
        colorThree.classList.remove("colorEmpty")
        colorThree.classList.add("color")
        }, 100)
}

// Change Color and Hex Four
function changeFour(data){
    colorFour.style.backgroundColor = data.colors[2].hex.value
    hexFour.textContent = data.colors[2].hex.value
    colorFour.classList.remove("color")
    colorFour.classList.add("colorEmpty")
    setTimeout(() => {
        colorFour.classList.remove("colorEmpty")
        colorFour.classList.add("color")
        }, 100)
}

// Change Color and Hex Five
function changeFive(data){
    colorFive.style.backgroundColor = data.colors[3].hex.value
    hexFive.textContent = data.colors[3].hex.value
    colorFive.classList.remove("color")
    colorFive.classList.add("colorEmpty")
    setTimeout(() => {
        colorFive.classList.remove("colorEmpty")
        colorFive.classList.add("color")
        }, 100)
}

// Website Default Load

fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${defaultMode}&count=4`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(response => response.json())
    .then(data => {
        changeSeed()
        changeTwo(data)
        changeThree(data)
        changeFour(data)
        changeFive(data)
    })
    .catch(console.error)

// User Color Select 

let newSeed = "FF9F29"

pickerColor.addEventListener("change", function(e){
        newSeed = e.target.value.slice(1, 7).toUpperCase()
        colorOne.style.backgroundColor = pickerColor.value
        hexOne.textContent = "#" + newSeed
        return newSeed
})

// User Color Mode

let newMode = ""

pickerBox.addEventListener("change", function(e){
    newMode = pickerBox.options[pickerBox.selectedIndex].text.toLowerCase()
    return newMode
})


// Picker Scheme

pickerScheme.addEventListener("click", function(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${newSeed}&mode=${newMode}&count=4`, {
        method: "GET",
        // body: {
        //     title: "Hello",
        //     body: "practice"
        // }
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        changeTwo(data)
        changeThree(data)
        changeFour(data)
        changeFive(data)
    })
})

// Copy Text

let colorCaptions = document.querySelectorAll(".caption-color")
let allColors = document.querySelectorAll(".color")

for(let i = 0; i < colorCaptions.length; i++){
    allColors[i].addEventListener("click", function(e){
        let copied = colorCaptions[i].textContent
        navigator.clipboard.writeText(copied)
        colorCaptions[i].textContent = "Copied!"
        setTimeout(() => {
            colorCaptions[i].textContent = copied
        }, 200)
    })
    colorCaptions[i].addEventListener("click", function(e){
        let copied = colorCaptions[i].textContent
        navigator.clipboard.writeText(copied)
        colorCaptions[i].textContent = "Copied!"
        setTimeout(() => {
            colorCaptions[i].textContent = copied
        }, 200)
    })
}
