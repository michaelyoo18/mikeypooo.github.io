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
  function toggleArrowVisibility(shouldHide) {
    var arrows = document.querySelectorAll('.slider-arrow');
    arrows.forEach(function(arrow) {
      arrow.style.display = shouldHide ? 'none' : 'block';
    });
  }
  descriptionButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      var title = this.closest('.details-container').querySelector('.project-title').textContent;
      var descriptionText = this.getAttribute('data-description');
      var descriptionList = descriptionText.split('||').map(item => `<li>${item}</li>`).join('');
      
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalDescription').innerHTML = `<ul>${descriptionList}</ul>`;
      
      modal.style.display = 'block';
      toggleArrowVisibility(true);
    });
  });
  
  closeModal.onclick = function() {
    modal.style.display = 'none';
    toggleArrowVisibility(false);
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      toggleArrowVisibility(false);
    }
  }
});

function toggleProjects() {
  var firstSet = document.getElementById('first-set-of-projects');
  var secondSet = document.getElementById('second-set-of-projects');

  if (firstSet.style.display === "block" || firstSet.style.display === "") {
    firstSet.style.display = "none";
    secondSet.style.display = "block";
  } else {
    firstSet.style.display = "block";
    secondSet.style.display = "none";
  }
}