import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});



scrollTracker.animate(
    {
        transform: ['scaleX(0)', 'scaleX(1)']
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
);



// Scroll Trigger 
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".sect1-head, .sect1-grid, .wrk-fgrid, .sect5-title, .sect5-title2, .scroller"); // Select multiple elements

    function checkVisibility() {
        elements.forEach(element => { // Loop through each element
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
                element.classList.add("animate");
            } else {
                element.classList.remove("animate"); // Remove class when out of view
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run on page load to check initial visibility
});

