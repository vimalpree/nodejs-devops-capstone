const express = require('express');
const app = express();
const os = require('os');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>DevOps Capstone Project</h1>
    <p>Node.js app deployed with Jenkins, Docker, and AWS EC2</p>
    <p>Hostname: ${os.hostname()}</p>
    <p>Time: ${new Date().toISOString()}</p>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
