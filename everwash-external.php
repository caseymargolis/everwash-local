<?php
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Get the request data from the body
        $requestData = json_decode(file_get_contents('php://input'), true);

        // Check if data is received
        if (!empty($requestData)) {
            $fname = $requestData['fname'];
            $lname = $requestData['lname'];
            $washemail = $requestData['washemail'];
            $washphone = $requestData['washphone'];
            $carwashname = $requestData['carwashname'];
            $washtype = $requestData['washtype'];
            $carwashstate = $requestData['carwashstate'];
            $carwashzip = $requestData['carwashzip'];

            // Target URL where you want to send the POST request
            $targetUrl = 'https://go.everwash.com/l/996891/2024-01-05/zf7r';

            // Data to be sent in the POST request
            $postData = array(
                'name' => $fname,
                'last-name' => $lname,
                'email' => $washemail,
                'phone' => $washphone,
                'car-wash-name' => $carwashname,
                'wash-type' => $washtype,
                'car-wash-state' => $carwashstate,
                'car-wash-zipcode' => $carwashzip,
            );

            // Initialize cURL session
            $ch = curl_init($targetUrl);

            // Set cURL options
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            // Execute cURL session and get the response
            $response = curl_exec($ch);

            // Check for cURL errors
            if (curl_errno($ch)) {
                $response = array('status' => 'error!!!', 'message' => curl_error($ch));
            } else {
                $response = array('status' => 'success!!!', 'message' => 'Data received successfully!');
            }

            // Close cURL session
            curl_close($ch);
        
        } else {
            $response = array('status' => 'error!!!', 'message' => 'No data received!');
        }
    } else {
        $response = array('status' => 'error', 'message' => 'Invalid request method.');
    }
    echo json_encode($response);
?>