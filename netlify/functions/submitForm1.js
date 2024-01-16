// submitForm.js
import { cors } from '@netlify/functions';

exports.handler = cors(async function (event, context) {
  try {
    const formData = JSON.parse(event.body);
        // Process the initial form data or perform any additional actions here
    console.log('here is the formdata submitted from frontend', formData);
      // Send additional data to the external server
    const externalServerResponse = await fetch('https://go.everwash.com/l/996891/2024-01-05/zf7r', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(Object.fromEntries(formData)),
        body: JSON.stringify(formData)
      });

      // Check if the external server request was successful
      if (externalServerResponse.ok) {
        console.log('Form submitted successfully to Netlify and external server.');
        // Optionally redirect or perform other actions
      } else {
        console.error('Error submitting to external server:', externalServerResponse.statusText);
        throw new Error(`HTTP error! Status: ${externalServerResponse.status}`);
      }
      

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully!', formData: formData }),
    };
  } catch (error) {
    console.error('Error processing form submission:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
});
  