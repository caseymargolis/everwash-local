
window.onload = function() {
  // Display comfirmation modal on success page load
  document.getElementById("triggerFormConfirmation").click();
  
  // Randomly button display on washowner page banner...
  var buttons = document.querySelectorAll('.cta-options-btn a');
  var randomIndex = Math.floor(Math.random() * buttons.length);
  buttons[randomIndex].style.display = 'block';
  
};

// Prevent resubmission on reload
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

// Enable tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})
