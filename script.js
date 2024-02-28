// Get the modal element
const modal = document.getElementById('modal');

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName('close')[0];

// Get the elements inside the modal
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');

// Add a click event listener to each ball item
const ballItems = document.querySelectorAll('.store_list li');
ballItems.forEach(function (item) {
  item.addEventListener('click', function () {
    // Get the ball information from the data-* attributes
    const title = item.getAttribute('data-title');
    const image = item.getAttribute('data-image');

    // Set the modal content
    modalTitle.textContent = title;
    modalImage.src = image;

    // Display the modal
    modal.style.display = 'block';
  });
});

// Add a click event listener to the close button
closeBtn.addEventListener('click', function () {
  // Hide the modal
  modal.style.display = 'none';
});

// Add a click event listener to the window to close the modal if clicked outside the modal content
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});