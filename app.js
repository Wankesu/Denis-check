const upBtn = document.querySelector('.upp-button')
const downBtn = document.querySelector('.down-button')
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.querySelectorAll('div').length
let activeSlideIndex = 0
sidebar.style.top = `-${slidesCount - 1}vh`

upBtn.addEventListener('click ', () => {
    changeSlide('up')

})

downBtn.addEventListener('click', () => {
    changeSlide('down')
    
})


function changeSlide(direction) {
    if (direction === 'up'){
        activeSlideIndex++
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }

    } else if (direction === 'down'){

        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1 
        }
    }


    const height = container.clientHeight

    mainSlide.style.transform = `-${activeSlideIndex * height}px`

}







