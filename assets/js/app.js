/* hero slider start */

// image sources array
const heroImages = [
    "http://127.0.0.1:5500/assets/images/hero/loq.png",
    "http://127.0.0.1:5500/assets/images/hero/tuf.png"
];

let currentIndex = 0;

// get image element
const heroImage = document.getElementById("heroImage");

// set initial image
heroImage.src = heroImages[currentIndex];

// change image every 3 seconds
setInterval(() => {
    currentIndex++;

    // loop back to first image
    if (currentIndex >= heroImages.length) {
        currentIndex = 0;
    }

    heroImage.src = heroImages[currentIndex];
}, 3000);

/* hero slider end */