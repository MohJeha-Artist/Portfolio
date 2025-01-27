import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector(".scroll-tracker");
const bgscroll = document.querySelector("#bodybg");

const Heroheading = document.querySelector(".Hero-heading");
const Heroheading2 = document.querySelector(".Hero-heading2");

const Herosubheading = document.querySelector(".Hero-subheading");

const HeroImage = document.querySelector(".Hero-Image");
const HeroImageA = document.querySelector(".Hero-ImageA");


const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});

const bgscrollTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});

const HeroheadingTimeline = new ScrollTimeline({
    scrollOffsets: [
        { target: Heroheading, edge: "end", threshold: "1" },
        { target: Heroheading, edge: "start", threshold: "1" }
    ],
});

const Heroheading2Timeline = new ScrollTimeline({
    scrollOffsets: [
        { target: Heroheading2, edge: "end", threshold: "1" },
        { target: Heroheading2, edge: "start", threshold: "1" }
    ],
});

const HerosubheadingTimeline = new ScrollTimeline({
    scrollOffsets: [
        { target: Herosubheading, edge: "end", threshold: "1" },
        { target: Herosubheading, edge: "start", threshold: "1" }
    ],
});

const HeroImageTimeline = new ScrollTimeline({
    scrollOffsets: [
        { target: HeroImage, edge: "end", threshold: "1" },
        { target: HeroImage, edge: "start", threshold: "1" }
    ],
});

const HeroImageATimeline = new ScrollTimeline({
    scrollOffsets: [
        { target: HeroImageA, edge: "end", threshold: "1" },
        { target: HeroImageA, edge: "start", threshold: "1" }
    ],
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

bgscroll.animate(
    {
        transform: ['translateY(0)', 'translateY(-50%)']
    },
    {
        duration: 10,
        timeline: bgscrollTimeline,
    }
);

Heroheading.animate(
    {
        transform: ["translateY(700px)"],
    },
    {
        duration: 1,
        timeline: HeroheadingTimeline,
    }
);

Heroheading2.animate(
    {
        transform: ["translateY(800px)"],
    },
    {
        duration: 1,
        timeline: Heroheading2Timeline,
    }
);

Herosubheading.animate(
    {
        transform: ["translateY(700px)"],
    },
    {
        duration: 1,
        timeline: HerosubheadingTimeline,
    }
);

HeroImage.animate(
    {
        transform: ["translateY(1500px)"],
    },
    {
        duration: 1,
        timeline: HeroImageTimeline,
    }
);

HeroImageA.animate(
    {
        transform: ["translateY(1500px)"],
    },
    {
        duration: 1,
        timeline: HeroImageATimeline,
    }
);
