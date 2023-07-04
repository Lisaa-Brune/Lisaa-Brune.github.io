// Trigger animation if element scrolls into view:

//Flip:
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const el = entry.target.querySelector('.flip-inner');

        if (entry.isIntersecting) {
            el.classList.add('flip-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        el.classList.remove('flip-animation');
    });
});

observer.observe(document.querySelector('.flip-animation-wrapper-0'));
observer.observe(document.querySelector('.flip-animation-wrapper-1'));
observer.observe(document.querySelector('.flip-animation-wrapper-2'));
observer.observe(document.querySelector('.flip-animation-wrapper-3'));
observer.observe(document.querySelector('.flip-animation-wrapper-4'));
observer.observe(document.querySelector('.flip-animation-wrapper-5'));