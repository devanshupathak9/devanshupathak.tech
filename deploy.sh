#!/bin/bash
# deploy.sh — Build and push to VPS
# Usage: ./deploy.sh user@your-vps-ip

set -e

VPS="${1:-user@your-vps-ip}"
REMOTE_PATH="/var/www/devanshupathak.tech"

echo "Building..."
npm run build

echo "Deploying to $VPS:$REMOTE_PATH ..."
rsync -avz --delete dist/ "$VPS:$REMOTE_PATH/"

echo "Done! Site is live."
