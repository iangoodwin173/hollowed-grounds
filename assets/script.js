// Function to update the content based on screen width
function updateContent() {
    const pElement = document.getElementById('bubble-text');
    const screenWidth = window.innerWidth;
  
    if (screenWidth >= 768) {
      pElement.innerHTML = 'Click my speech bubble to <br> contact the undead...';
    } else {
      pElement.innerHTML = 'Please switch to desktop view to <br> contact the undead...or manually copy <br> and paste our email here: <br> legionofhollowmen@gmail.com';
    }
  }
  
  // Initial call to set content based on screen width when the page loads
  updateContent();
  
  // Event listener to update content when the window is resized
  window.addEventListener('resize', updateContent);
  