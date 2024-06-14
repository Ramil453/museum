const leftArrow = document.querySelector('.arrow1')
const rightArrow = document.querySelector('.arrow2')
const image1 = document.querySelector('.img1')
const image2 = document.querySelector('.img2')
const image3 = document.querySelector('.img3')
let counter = 1;
rightArrow.onclick = function () {
	 if (counter == 0) {
    image1.style.display = 'flex'
    counter++
	} else if (counter == 1) {
    image2.style.display = "flex"
    image1.style.display = "none"
    console.log(counter++)
  } else if (counter == 2) {
    image2.style.display = "none"
    image3.style.display = "flex"
    console.log(counter)
  }
}

leftArrow.onclick = function () {
  if(counter == 2) {
    image3.style.display = "none"
    image2.style.display = "flex"
    counter--
  } else if(counter == 1) {
    image2.style.display = "none"
    image1.style.display = "flex"
    counter--
  }
}

document.querySelector('.expositions-link').onclick = function() {
  document.querySelector('.expositions-title').scrollIntoView({ behavior: 'smooth' })
}