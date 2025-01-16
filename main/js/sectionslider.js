const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");

const return1 = document.getElementById("return1");
const return2 = document.getElementById("return2");

const box0 = document.getElementById("box0");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");


slide1.addEventListener("click", function() {
  box0.style.transform = "translateX(-103%)";  // Move box1 to the left
  box1.style.transform = "translateX(0%)";    // Bring box2 into view
});

slide2.addEventListener("click", function() {
  box0.style.transform = "translateX(-103%)";  // Move box1 to the left
  box2.style.transform = "translateX(0%)";    // Bring box2 into view
});

return1.addEventListener("click", function() {
  box0.style.transform = "translateX(0%)";  // Move box1 to the left
  box1.style.transform = "translateX(103%)";    // Bring box2 into view
});

return2.addEventListener("click", function() {
  box0.style.transform = "translateX(0%)";  // Move box1 to the left
  box2.style.transform = "translateX(103%)";    // Bring box2 into view
});