
// Display comfirmation modal on success page load
window.onload = function () {
  document.getElementById("triggerFormConfirmation").click();
  // setTimeout(function(){ 
  //   document.getElementById("triggerFormConfirmation").click();
  // }, 1000);

  // Randomly button display on washowner page banner...
  var buttons = document.querySelectorAll('.cta-options-btn a');
  if (buttons.length === 0) {
    console.log('No buttons found!');
    return; // Exit if no buttons are found
  }
  buttons.forEach(function(button) {
    button.style.display = 'none';
  });
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
