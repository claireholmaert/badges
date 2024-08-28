// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
document.addEventListener('DOMContentLoaded', function () {
    const badges = document.querySelectorAll('.badge');
  
    // Change badge size on click
    badges.forEach(badge => {
      badge.addEventListener('click', function () {
        const currentSize = this.getAttribute('data-size');
        const newSize = currentSize === 'small' ? 'medium' : currentSize === 'medium' ? 'large' : 'small';
        this.setAttribute('data-size', newSize);
      });
    });
  });