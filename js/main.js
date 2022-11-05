const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];
let currentImgIndex = 0;

const btnContainerEl = document.querySelector(".buttons-container")

const sliderImgEl = document.querySelector(".slider-img")
sliderImgEl.src = images [ currentImgIndex ];

// Bottone top per andare indietro
const prevBtnEl = document.createElement("button")
prevBtnEl.classList.add("prev-btn")
prevBtnEl.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`

// Bottone bottom per andare avanti
const nextBtnEl = document.createElement("button")
nextBtnEl.classList.add("next-btn")
nextBtnEl.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`
console.log(prevBtnEl, nextBtnEl);

// Inserisco i buttons nel loro container
btnContainerEl.appendChild(prevBtnEl)
btnContainerEl.appendChild(nextBtnEl)

// Funzione sul next-button per scrollare in avanti
nextBtnEl.addEventListener( "click", function () {
    currentImgIndex++;
    const lastIndex = images.length - 1;
    console.log(currentImgIndex);

    // BONUS 1 
    if ( currentImgIndex > lastIndex ) {
        currentImgIndex = 0;
      }
      console.log(currentImgIndex);    
      sliderImgEl.src = images[ currentImgIndex ];
})

// Funzione sul prev-button per scrollare in avanti
prevBtnEl.addEventListener( "click", function () {
    currentImgIndex--;
    console.log(currentImgIndex);

    // BONUS 1
    if ( currentImgIndex < 0 ) {
        currentImgIndex = 4;
      }
      console.log(currentImgIndex);    
      sliderImgEl.src = images[ currentImgIndex ];
})