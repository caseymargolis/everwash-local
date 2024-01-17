// submitForm.js
//import { cors } from '@netlify/functions';

exports.handler = async function (event, context) {
  try {
    // Parse the form data from the request body
    const formData = JSON.parse(event.body);

    // Process the initial form data or perform any additional actions here
    // const requestData = JSON.parse(event.body);
    // fetch('https://go.everwash.com/l/996891/2024-01-05/zf7r', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       // Add any additional headers required by the API
    //     },
    //     body: JSON.stringify(requestData),
    //   })
    //     .then(response => {
    //       if (response.ok) {
    //         // Form submitted successfully, redirect to the success page
    //         window.location.href = '/wash-owners-success#partnerCalc'; // Replace with your actual success page URL
    //       } else {
    //         // Handle the case where the server responds with an error
    //         console.error('Form submission failed:', response.status, response.statusText);
    //         // Redirect to an error page or display an error message
    //       }
    //     })
    //     .catch(error => {
    //       console.error('Error during form submission:', error);
    //       // Redirect to an error page or display an error message
          
    //     });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully!' }),
    };
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error!' }),
    };
  }
};
  