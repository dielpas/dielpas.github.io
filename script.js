document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in")

  for (let i = 0; i < fadeElements.length; i++) {
    const element = fadeElements[i]
    element.classList.add("visible")
  }
})
