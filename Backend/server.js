const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const { handler } = require('./handler');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json());

app.post('/process', async (req, res) => {
    const data = req.body;
    
    console.log('Received data:', data);
    
    try {
        const result = await handler({
            language: data.language,
            code: data.code,
            testCases: data.testcase
        });
        
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