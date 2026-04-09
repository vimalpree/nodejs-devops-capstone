#!/bin/bash
set -e

BACKUP_DIR=/home/ubuntu/backups
mkdir -p "$BACKUP_DIR"

docker logs grafana 2>/dev/null | gzip > "$BACKUP_DIR/grafana-$(date +%F).log.gz" || true
docker logs prometheus 2>/dev/null | gzip > "$BACKUP_DIR/prometheus-$(date +%F).log.gz" || true

find "$BACKUP_DIR" -name "*.log.gz" -mtime +7 -delete
echo "Backup completed at $(date)"
