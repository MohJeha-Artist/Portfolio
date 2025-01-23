<h1 class="Hero-heading">Hello World</h1>

  // Function to wrap after the 3rd letter
  function wrapAfterThirdLetter() {
    const heading = document.querySelector('.Hero-heading');
    const text = heading.innerText;

    // Only apply wrapping for mobile screens (768px or smaller)
    if (window.innerWidth <= 768) {
      const newText = text.slice(0, 3) + '<br>' + text.slice(3); // Insert <br> after the 3rd letter
      heading.innerHTML = newText;
    } else {
      heading.innerHTML = text; // Remove the line break for larger screens
    }
  }

  // Call function on page load and on window resize
  wrapAfterThirdLetter();
  window.addEventListener('resize', wrapAfterThirdLetter);

