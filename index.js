const colorInput = document.getElementById("color-input")

const colorOption = document.getElementById("color-option")

const colorBtn = document.getElementById("color-btn")

let colorValue = colorInput.value.toUpperCase().slice(1, 7)

// button to render colorHtml
colorBtn.addEventListener("click", function () {
  newColorHtml()
})

// renderHtml
function renderHtml(data) {
  let html = ""
  html += `<div class="color-img" style="background-image: url('${
    data.image.bare
  }')"></div>
        <div class="show-color">
        ${getColor(data)}
         </div>`

  document.getElementById("main").innerHTML = html
}

//   get color html
function getColor(data) {
  let html = ""
  for (color of data.colors) {
    html += `
      <span id="color-hex" class="color-hex">${color.hex.value}</span>
    `
  }
  return html
}

// renderColor Html

function newColorHtml() {
  const colorValue = colorInput.value.toUpperCase().slice(1, 7)
  const modeValue = colorOption.value

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${modeValue}`
  )
    .then((res) => res.json())
    .then((data) => {
      renderHtml(data)
    })
}

// render default colorHtml

fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}`)
  .then((res) => res.json())
  .then((data) => {
    renderHtml(data)
  })
