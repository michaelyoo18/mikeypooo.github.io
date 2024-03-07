function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
  // Get the modal
  var modal = document.getElementById('projectModal');
  
  // Get the <span> element that closes the modal
  var closeModal = document.getElementsByClassName('close')[0];
  
  // Get all buttons that open the modal
  var descriptionButtons = document.querySelectorAll('.description-btn');

  // Function to open modal and populate with project info
  descriptionButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      var title = this.closest('.details-container').querySelector('.project-title').textContent;
      var descriptionText = this.getAttribute('data-description'); // Get the description from data attribute
      var descriptionList = descriptionText.split('||').map(item => `<li>${item}</li>`).join(''); // Create list items
      
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalDescription').innerHTML = `<ul>${descriptionList}</ul>`; // Use innerHTML to render the list
      
      modal.style.display = 'block';
    });
  });
  
  

  // When the user clicks on <span> (x), close the modal
  closeModal.onclick = function() {
    modal.style.display = 'none';
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
});
