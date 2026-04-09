const express = require('express');
const app = express();
const os = require('os');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Node.js Marketing App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f4f7fb;
            color: #222;
            text-align: center;
          }
          .hero {
            padding: 60px 20px;
            background: linear-gradient(135deg, #0f172a, #1d4ed8);
            color: white;
          }
          .hero h1 {
            font-size: 42px;
            margin-bottom: 15px;
          }
          .hero p {
            font-size: 18px;
            max-width: 700px;
            margin: 0 auto 20px;
          }
          .btn {
            display: inline-block;
            padding: 12px 24px;
            background: #22c55e;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
          }
          .section {
            padding: 40px 20px;
          }
          .footer {
            margin-top: 30px;
            font-size: 14px;
            color: #555;
          }
        </style>
      </head>
      <body>
        <div class="hero">
          <h1>Launch Faster with Smart Marketing Automation</h1>
          <p>
            A lightweight Node.js application deployed with Jenkins, Docker, and AWS EC2
            to demonstrate a complete DevOps pipeline for modern web delivery.
          </p>
          <a class="btn" href="/health">Check App Health</a>
        </div>

        <div class="section">
          <h2>Why this project matters</h2>
          <p>It combines CI/CD, containerization, cloud deployment, monitoring, and automation in one real-world workflow.</p>
        </div>

        <div class="section">
          <h2>Project Highlights</h2>
          <p>GitHub integration, Jenkins pipeline, Docker image deployment, AWS EC2 hosting, Prometheus monitoring, and Grafana dashboards.</p>
        </div>

        <div class="footer">
          <p>Hostname: ${os.hostname()}</p>
          <p>Server Time: ${new Date().toISOString()}</p>
        </div>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.listen(PORT, () => {
  console.log(\`App running on port \${PORT}\`);
});
