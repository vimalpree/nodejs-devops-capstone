#!/bin/bash
set -e

APP_NAME="nodejs-capstone-app"
IMAGE_NAME="$1"
PORT="3000"

echo "Stopping old container if exists..."
if sudo docker ps -a --format '{{.Names}}' | grep -w "$APP_NAME"; then
  sudo docker stop "$APP_NAME" || true
  sudo docker rm "$APP_NAME" || true
fi

echo "Pulling latest image..."
sudo docker pull "$IMAGE_NAME"

echo "Running new container..."
sudo docker run -d \
  --name "$APP_NAME" \
  --restart always \
  -p 3000:3000 \
  "$IMAGE_NAME"

echo "Deployment completed."
