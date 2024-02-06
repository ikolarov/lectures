const accordionHeader = document.querySelectorAll('.accordion__header');

accordionHeader.forEach(item => {
	item.addEventListener('click', function() {
  	const accordion = item.closest('.accordion');
    accordion.classList.toggle('is-active')
  })
})