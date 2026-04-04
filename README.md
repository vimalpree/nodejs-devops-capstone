# Node.js DevOps Capstone Project

## Project Overview
This project demonstrates an end-to-end DevOps pipeline for a Node.js web application using GitHub, Jenkins, Docker, AWS EC2, Prometheus, Grafana, Bash, and Cron.

## Tech Stack
- Git + GitHub
- Jenkins
- Docker + Docker Hub
- AWS EC2 (Ubuntu)
- Node.js + Express
- Prometheus
- Grafana
- Bash scripting
- Cron jobs

## Project Architecture
Developer -> GitHub -> Jenkins -> Docker Hub -> App EC2 -> Prometheus/Grafana

## Local Setup
```bash
npm install
npm start
```

## Docker Setup
```bash
docker build -t nodejs-devops-capstone .
docker run -d -p 3000:3000 nodejs-devops-capstone
```

## Jenkins Flow
1. Pull source from GitHub
2. Install dependencies
3. Run tests
4. Build Docker image
5. Push image to Docker Hub
6. Deploy container on AWS EC2
7. Verify deployment

## Monitoring
Prometheus scrapes Node Exporter metrics.
Grafana visualizes CPU, RAM, disk, and network usage.

## Automation
Cron jobs back up Docker logs and clean old logs/images.

## Author
Preetha 

