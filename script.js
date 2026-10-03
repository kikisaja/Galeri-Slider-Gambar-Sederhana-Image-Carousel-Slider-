// --- 1. AMBIL ELEMEN DOM ---
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const dotsContainer = document.getElementById("dots-container");
const carouselWrapper = document.getElementById("carousel-wrapper");
const btnTogglePlay = document.getElementById("btn-toggle-play");
const autoplayStatus = document.getElementById("autoplay-status");

// Variabel Kontrol State
let currentIndex = 0;
let slideInterval = null;
let isAutoplayActive = true;
const slideDelay = 3500; // Berpindah setiap 3.5 detik

// --- 2. GENERATE INDIKATOR DOTS ---
function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");

        // Klik dot untuk pindah slide
        dot.addEventListener("click", () => {
            goToSlide(index);
            resetAutoplayTimer();
        });

        dotsContainer.appendChild(dot);
    });
}

// --- 3. FUNGSI UPDATE TAMPILAN SLIDE ---
function updateSlidePosition() {
    // Sembunyikan semua slide dan nonaktifkan semua dots
    slides.forEach((slide) => slide.classList.remove("active"));
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => dot.classList.remove("active"));

    // Tampilkan slide dan dot yang aktif
    slides[currentIndex].classList.add("active");
    if (dots[currentIndex]) {
        dots[currentIndex].classList.add("active");
    }
}

function goToSlide(index) {
    currentIndex = index;
    updateSlidePosition();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
}

// --- 4. AUTOPLAY CONTROLLER ---
function startAutoplay() {
    if (!slideInterval && isAutoplayActive) {
        slideInterval = setInterval(nextSlide, slideDelay);
        autoplayStatus.textContent = "ON";
    }
}

function stopAutoplay() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
        autoplayStatus.textContent = "OFF";
    }
}

function resetAutoplayTimer() {
    stopAutoplay();
    startAutoplay();
}

// --- 5. EVENT LISTENERS ---
nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoplayTimer();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoplayTimer();
});

// Pause saat mouse diarahkan ke dalam carousel, jalankan lagi saat keluar
carouselWrapper.addEventListener("mouseenter", stopAutoplay);
carouselWrapper.addEventListener("mouseleave", () => {
    if (isAutoplayActive) startAutoplay();
});

// Tombol manual Toggle Play / Pause
btnTogglePlay.addEventListener("click", () => {
    isAutoplayActive = !isAutoplayActive;
    if (isAutoplayActive) {
        btnTogglePlay.textContent = "⏸ Jeda Slider";
        btnTogglePlay.style.backgroundColor = "#4ade80"; // Hijau
        startAutoplay();
    } else {
        btnTogglePlay.textContent = "▶ Mainkan Slider";
        btnTogglePlay.style.backgroundColor = "#facc15"; // Kuning
        stopAutoplay();
    }
});

// --- 6. INISIALISASI AWAL ---
createDots();
startAutoplay();
