const $modalBtn = $('.modal-btn');
const $modal = $('.modal');

$modalBtn.on('click', () => {
    $modal[0].showModal();
})

$modal.on('click', function(event) {
    const rect = $modal[0].getBoundingClientRect();
    const isInModal = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    if (!isInModal) {
        $modal[0].close();
    }
});