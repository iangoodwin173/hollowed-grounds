// Function to update the content based on screen width
function updateContent() {
    const pElement = document.getElementById('bubble-text');
    const screenWidth = window.innerWidth;
  
    if (screenWidth >= 768) {
      pElement.innerHTML = 'Click my speech bubble to <br> contact the undead...';
    } else {
      pElement.innerHTML = 'Click <a href="https://mail.google.com/mail/?view=cm&fs=1&to=legionofhollowmen@gmail.com" target="_blank" id="contact-anchor">here</a> to contact the undead...';
    }
  }
  
  // Initial call to set content based on screen width when the page loads
  updateContent();
  
  // Event listener to update content when the window is resized
  window.addEventListener('resize', updateContent);
  