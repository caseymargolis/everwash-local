// submitForm.js
exports.handler = async function (event, context) {
    try {
        // Process the form data or perform any additional actions here
        const formData = new FormData(event.target);
        fetch('https://go.everwash.com/l/996891/2024-01-05/zf7r', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        })
        .then(response => response.json())
        .then(externalServerResponse => {
            console.log('External Server Response:', externalServerResponse);
            // Redirect or perform other actions based on the external server response
        })
        .catch(error => {
            console.error('Error submitting to external server:', error);
            // Handle error accordingly
        });
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Form submitted successfully!' }),
        };
    } catch (error) {
        console.error('Error processing form submission:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error' }),
        };
    }
};