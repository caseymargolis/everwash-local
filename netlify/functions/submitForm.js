// submitForm.js
//import { cors } from '@netlify/functions';
const https = require('https');

exports.handler = async function (event, context) {
  try {
    // Your data to be sent in the POST request
    const parsedData = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(parsedData)
    };
    const postData = new URLSearchParams(parsedData).toString();

    // API endpoint details
    const options = {
      hostname: 'go.everwash.com', // Replace with your API domain
      port: 443, // Default HTTPS port
      path: '/l/996891/2024-01-05/zf7r', // Replace with your API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length,
        // Add any additional headers required by the API
      },
    };

    // Perform the HTTPS POST request
    const response = await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let responseData = '';

        res.on('data', (chunk) => {
          responseData += chunk;
        });

        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: responseData,
          });
        });
      });

      req.on('error', (error) => {
        reject({
          statusCode: 500,
          body: JSON.stringify({ error: error.message }),
        });
      });

      // Send the POST request with the data
      req.write(postData);
      req.end();
    });

    return {
      statusCode: 200,
      body: JSON.stringify(parsedData)
    };
  } catch (error) {
    console.error('Error in Netlify function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

// exports.handler = async function (event, context) {
//   try {
//     // Extract data from the incoming request if needed
//     const requestData = JSON.parse(event.body);
//     const data = JSON.stringify(requestData);

//     const options = {
//       hostname: 'go.everwash.com',
//       port: 443,
//       path: '/l/996891/2024-01-05/zf7r',
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': data.length,
//         // Add any additional headers required by the API
//       },
//     };

//     const req = https.request(options, (res) => {
//       let responseData  = '';
    
//       // A chunk of data has been received.
//       res.on('data', (chunk) => {
//         responseData  += chunk;
//       });
    
//       // The whole response has been received.
//       res.on('end', () => {
//         console.log(responseData);
//             return {
//             statusCode: 200,
//             body: responseData,
//           };
//       });
//     });
    
//     req.on('error', (error) => {
//       return {
//         statusCode: 200,
//         body: JSON.stringify({
//           error: error.message || "Something went wrong with 3rd party API"
//         }),
//       };

      
//     });
    
//     // Send the POST request with the data
//     req.write(data);
//     req.end();

//     // // Replace 'https://external-server.com/api' with the actual API endpoint
//     // const apiUrl = 'https://go.everwash.com/l/996891/2024-01-05/zf7r';

//     // // Options for the fetch request (including method, headers, and body)
//     // const requestOptions = {
//     //   method: 'POST', // or 'GET', 'PUT', etc.
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //     // Add any additional headers required by the external server
//     //   },
//     //   body: JSON.stringify(requestData),
//     // };

//     // // Perform the fetch request
//     // const response = await fetch(apiUrl, requestOptions);

//     // if (!response.ok) {
//     //   throw new Error(`HTTP error! Status: ${response.status}`);
//     // }

//     // // Parse and return the response data
//     // const responseData = await response.json();

//     // return {
//     //   statusCode: 200,
//     //   body: JSON.stringify(responseData),
//     // };
//   } catch (error) {
//     console.error('Error processing form submission:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: error.message }),
//     };
//   }
// };
  