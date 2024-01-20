
// Display comfirmation modal on success page load
window.onload = function () {
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
