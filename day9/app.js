const btn = document.querySelector('#payment')
const modal = document.querySelector('.modaloff')
btn.addEventListener('click', () => {
  modal.setAttribute('class', 'modal')
  setTimeout(() => {
    modal.setAttribute('class', 'modaloff')
  }, 3000)
})