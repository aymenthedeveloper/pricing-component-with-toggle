const toggleBtn = document.getElementById('toggle-input');
const priceContainers = document.querySelectorAll('main .pricing-cards .card .price');

toggleBtn.addEventListener('click', (e)=> {
  toggleBtn.classList.toggle('annually')
  
  for (let i = 0; i < 3; i++) {
    const priceNode = priceContainers[i];
    const {from, to, plan} = priceNode.dataset;
    if (plan == 'monthly'){
      countUp(priceNode, +from, +to, 2)
      priceNode.dataset.plan = 'annually';
    } else if (plan == 'annually'){
      countUp(priceNode, +from, +to, 2, 'down')
      priceNode.dataset.plan = 'monthly';
    }
  }
})

function countUp(target, from, to, time, direction="up") {
  if (time <= 0) return 'error';
  time = time * 1000
  const diff = to - from;
  const startTime = performance.now(); // Use high-resolution timestamp
  function animate(currentTime) {
    const elapsed = currentTime - startTime; // Time elapsed since animation started
    const progress = Math.min(elapsed / time, 1); // Ensure progress doesn't exceed 1
    const easeOut = 1 - (1 - progress)**3; // Ease-in effect
    const value = direction == 'up'? from + diff * easeOut: to - diff * easeOut;
    target.firstChild.textContent = value.toFixed(2); 
    if (progress < 1) {
      requestAnimationFrame(animate); // Continue the animation
    }
  }
  requestAnimationFrame(animate); // Start the animation
}