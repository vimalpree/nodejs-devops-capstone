const express = require('express');
const os = require('os');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>DevOps Capstone Project</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #f4f7fb;
        color: #1f2937;
      }
      .hero {
        background: #0f172a;
        color: white;
        text-align: center;
        padding: 60px 20px;
      }
      .hero h1 {
        margin-bottom: 10px;
        font-size: 40px;
      }
      .hero p {
        font-size: 18px;
        margin: 0 auto;
        max-width: 700px;
      }
      .container {
        width: 90%;
        max-width: 1100px;
        margin: 30px auto;
      }
      .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 20px;
      }
      .card {
        background: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
      }
      .card h3 {
        margin-top: 0;
        color: #2563eb;
      }
      .info {
        background: white;
        margin-top: 25px;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
      }
      .footer {
        text-align: center;
        padding: 20px;
        color: #6b7280;
        font-size: 14px;
      }
      .btn {
        display: inline-block;
        margin-top: 20px;
        padding: 12px 20px;
        background: #22c55e;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <section class="hero">
      <h1>DevOps Capstone Project</h1>
      <p>End-to-end CI/CD pipeline for a Node.js application using GitHub, Jenkins, Docker, AWS EC2, Prometheus, and Grafana.</p>
      <a class="btn" href="/health">Check Health</a>
    </section>

    <div class="container">
      <div class="card-grid">
        <div class="card">
          <h3>Source Control</h3>
          <p>Git and GitHub used for version control and webhook-based pipeline triggers.</p>
        </div>
        <div class="card">
          <h3>CI/CD</h3>
          <p>Jenkins automates build, test, Docker image creation, push, and deployment.</p>
        </div>
        <div class="card">
          <h3>Containerization</h3>
          <p>The application is packaged as a Docker image and deployed on AWS EC2.</p>
        </div>
        <div class="card">
          <h3>Monitoring</h3>
          <p>Prometheus, Node Exporter, and Grafana track system and application health.</p>
        </div>
      </div>

      <div class="info">
        <h2>Live Server Details</h2>
        <p><strong>Hostname:</strong> ${os.hostname()}</p>
        <p><strong>Current Time:</strong> ${new Date().toISOString()}</p>
        <p><strong>Status:</strong> Application is running successfully.</p>
      </div>
    </div>

    <div class="footer">
      <p>Node.js DevOps Capstone | Deployed with Jenkins, Docker, and AWS EC2</p>
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
