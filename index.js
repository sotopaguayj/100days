import data from './projects.json' with { type: 'json' }

const challenges = document.getElementById('challenges')

data.forEach((e) => {
  if (e.done) {
    challenges.innerHTML += `<a class="chall" href="day${e.day}/index.html" >
    <span class="eday">Day ${e.day}</span>
    <span class="ename">${e.name}</span>
    </a>`;
  }
});
