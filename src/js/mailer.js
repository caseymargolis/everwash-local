
// Display comfirmation modal on success page load
window.onload = function() {
  var buttons = document.querySelectorAll('.cta-options-btn a');
  if (buttons.length === 0) {
    console.error('No buttons found!');
    return; // Exit if no buttons are found
  }
  buttons.forEach(function(button) {
    button.style.display = 'none';
  });
  var randomIndex = Math.floor(Math.random() * buttons.length);
  buttons[randomIndex].style.display = 'block';

  document.getElementById("triggerFormConfirmation").click();
};

// Prevent resubmission on reload
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

// Enable tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})
