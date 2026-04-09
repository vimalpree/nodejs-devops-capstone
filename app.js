const express = require('express');
const os = require('os');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps Capstone</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f4f6f8;
          color: #222;
          text-align: center;
          padding: 50px;
        }
        .card {
          background: white;
          max-width: 700px;
          margin: auto;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
          color: #0f62fe;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>DevOps Capstone Project</h1>
        <p>Node.js app deployed using Jenkins, Docker, and AWS EC2</p>
        <p><strong>Hostname:</strong> ${os.hostname()}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
