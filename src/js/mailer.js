
window.onload = function() {
  // Randomly button display on washowner page banner...
  var buttons = document.querySelectorAll('.cta-options-btn a');
  if (buttons.length === 0) {
    return;
  }
  buttons.forEach(function(button) {
    button.style.display = 'none';
  });
  var randomIndex = Math.floor(Math.random() * buttons.length);
  buttons[randomIndex].style.display = 'block';
  
  // Display comfirmation modal on success page load
  var confirmationBtn = document.getElementById("triggerFormConfirmation");
  if (confirmationBtn.length === 0) {
    return;
  } else {
    confirmationBtn.click();
  }
};

// Prevent resubmission on reload
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

// Enable tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})
