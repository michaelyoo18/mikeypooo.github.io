function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
  var modal = document.getElementById('projectModal');
  var closeModal = document.getElementsByClassName('close')[0];
  var descriptionButtons = document.querySelectorAll('.description-btn');
  descriptionButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      var title = this.closest('.details-container').querySelector('.project-title').textContent;
      var descriptionText = this.getAttribute('data-description');
      var descriptionList = descriptionText.split('||').map(item => `<li>${item}</li>`).join('');
      
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalDescription').innerHTML = `<ul>${descriptionList}</ul>`;
      
      modal.style.display = 'block';
    });
  });
  
  closeModal.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
});
