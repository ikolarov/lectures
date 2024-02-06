function callback(entries, observer) {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target);
        }
    })
}

const intersectonObserver = new IntersectionObserver(callback, {
    rootMargin: "0px 0px 0%"
})

$('.section').each((i, el) => {
    intersectonObserver.observe(el);
});

