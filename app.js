// fetch container
const container = document.getElementById('container');
let rows = 15;
let cols = 15;

let circleArr = [];

// create circles
for(let i=0;i<cols;i++) {
  circleArr[i] = [];
  for(let j=0; j<rows; j++) {
    // create div with class circle and append it to container
    const circle = document.createElement('div');
    circle.classList.add('circle');
    container.appendChild(circle);
    // now push the created circle to empty array
    circleArr[i].push(circle);
  }
}

// add event listener click on circle
circleArr.forEach((cols, i) => {
  cols.forEach((circle, j) => {
    circle.addEventListener('click', ()=> {
      growCircles(i, j);
    })
  })
});


// growcircles function
function growCircles(i, j) {
  // see whether the class for scaling circle is present, if not add
  if(circleArr[i] && circleArr[i][j]) {
    if(!circleArr[i][j].classList.contains('grow')) {
      circleArr[i][j].classList.add('grow');

      setTimeout(() => {
        growCircles(i-1, j)
        growCircles(i+1, j)
        growCircles(i, j-1)
        growCircles(i, j+1)
      }, 100)

      setTimeout(()=> {
        circleArr[i][j].classList.remove('grow')
      }, 300)
    }
  }
}