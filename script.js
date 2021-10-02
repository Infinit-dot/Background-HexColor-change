//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','F']
const color = document.querySelector('.color')



button.addEventListener('click', function() {
    let colorHex ='#'
    for (let i = 0; i < 6; i++){
      colorHex += hex[getRandomNum()];
    }
    color.textContent = colorHex;
    body.style.backgroundColor = colorHex
});

const getRandomNum = () => {
       return Math.floor(Math.random() * hex.length)
}
