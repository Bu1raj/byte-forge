const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

// Import the handler function
const { handler } = require('./handler');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint to handle incoming requests
app.post('/process', async (req, res) => {
    const data = req.body;
    
    // Log the received data
    console.log('Received data:', data);
    
    try {
        // Call the handler function with the received data
        const result = await handler({
            language: data.language,
            code: data.code,
            testCases: data.testcase  // Include testCases here
        });
        
        // Send the handler's response back to the client
        res.status(result.statusCode).send(result.body);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});