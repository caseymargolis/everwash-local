
window.onload = function() {
  // Display comfirmation modal on success page load
  document.getElementById("triggerFormConfirmation").click();
};

document.addEventListener("DOMContentLoaded", function() {
  // Random button display on washowner page banner...
  var buttons = document.querySelectorAll('.cta-options-btn a');
  if (buttons.length > 0) {
    buttons.forEach(function(button) {
      button.style.display = 'none';
    });
    var randomIndex = Math.floor(Math.random() * buttons.length);
    buttons[randomIndex].style.display = 'block';
  }
});

// Prevent resubmission on reload
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

// Enable tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})
