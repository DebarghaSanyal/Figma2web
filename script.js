const video = document.getElementById('featureVideo');
const playBtn = document.getElementById('playBtn');

video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playBtn.style.display = 'none';
    } else {
        video.pause();
        playBtn.style.display = 'block';
    }
});

playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    video.play();
    playBtn.style.display = 'none';
});

video.addEventListener('pause', () => {
    playBtn.style.display = 'block';
});

video.addEventListener('play', () => {
    playBtn.style.display = 'none';
});


// Testimonials Carousel
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showTestimonial(i) {
    testimonials.forEach((t, idx) => {
        t.classList.toggle("active", idx === i);
        dots[idx].classList.toggle("active", idx === i);
    });
    index = i;
}

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        showTestimonial(Number(dot.dataset.index));
    });
});

setInterval(() => {
    let next = (index + 1) % testimonials.length;
    showTestimonial(next);
}, 5000);


// Contact Form Modal
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting
    document.getElementById("successModal").style.display = "flex";
    document.body.classList.add("modal-open");
    this.reset();
});

document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("successModal").style.display = "none";
    document.body.classList.remove("modal-open");
});
  