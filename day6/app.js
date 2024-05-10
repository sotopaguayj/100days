import categories from './data.json' with { type: 'json' }

const categoriesCont = document.querySelector('.categories')
const score = document.querySelector('.scorex')

let res = categories.reduce((acc, cat) => acc + cat.score, 0);
score.innerHTML = Math.floor(res / categories.length);

categories.forEach((score) => {
  categoriesCont.innerHTML += `
  <div style="background-color:${score.bg}" class="catItem">
    <div class="cat">
      <img src="${score.icon}"/>
      <span style="color:${score.color}" class="category">${score.category}</span>
    </div>
    <p>
      <span class="score">${score.score}</span>
      <span class="total"> / 100</span>
    </p>
  </div>
  `
})
