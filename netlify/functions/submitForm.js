// submitForm.js
import { cors } from '@netlify/functions';
const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  try {
    // Extract data from the incoming request if needed
    const requestData = JSON.parse(event.body);

    // Replace 'https://external-server.com/api' with the actual API endpoint
    const apiUrl = 'https://go.everwash.com/l/996891/2024-01-05/zf7r';

    // Options for the fetch request (including method, headers, and body)
    const requestOptions = {
      method: 'POST', // or 'GET', 'PUT', etc.
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers required by the external server
      },
      body: JSON.stringify(requestData),
    };

    // Perform the fetch request
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse and return the response data
    const responseData = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(responseData),
    };
  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
  