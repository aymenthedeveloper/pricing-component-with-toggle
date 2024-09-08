const toggleBtn = document.getElementById('toggle-input');
const cardsContainer = document.querySelector('main .pricing-cards');

toggleBtn.addEventListener('click', (e)=> {
  if (e.target.checked){
    cardsContainer.classList.add('annually')
  } else{
    cardsContainer.classList.remove('annually')
  }
  toggleBtn.classList.toggle('annually')
})