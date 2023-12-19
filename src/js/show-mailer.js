function newEmailSubject(){ 
    const name = document.getElementById("name");
    const emailSubject = document.getElementById('emailSubject');
    
    emailSubject.setAttribute('value', 'Mailer Form Submission from: ' + name.value);
  
  };

  function submitBtn(){
      newEmailSubject();
  };

  if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }

//   window.onload = function(){
//       document.getElementById('modalBtn').click();
//   }