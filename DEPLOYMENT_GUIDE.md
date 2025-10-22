# Deployment Guide for Garvit More Things Website

## Overview
Your website has been built and is ready to deploy to your own server. This guide will help you deploy it.

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- A server with SSH access
- A domain name (primeg.com)

## Step 1: Prepare Your Server

### On Your Server:
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js (if not already installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Create a directory for your website
mkdir -p /var/www/garvit-more-things
cd /var/www/garvit-more-things
```

## Step 2: Upload Your Website Files

### Option A: Using Git (Recommended)
```bash
# Initialize git repo locally (if not done)
cd /home/code/fighter-shooter-portfolio
git init
git add .
git commit -m "Initial commit"

# On your server, clone the repository
cd /var/www/garvit-more-things
git clone <your-repo-url> .
```

### Option B: Using SCP
```bash
# From your local machine
scp -r /home/code/fighter-shooter-portfolio/* user@your-server:/var/www/garvit-more-things/
```

## Step 3: Install Dependencies and Build

```bash
cd /var/www/garvit-more-things

# Install dependencies
npm install

# Build the project
npm run build
```

## Step 4: Set Up PM2 (Process Manager)

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start your application
pm2 start npm --name "garvit-website" -- start

# Make PM2 start on boot
pm2 startup
pm2 save
```

## Step 5: Set Up Nginx (Reverse Proxy)

```bash
# Install Nginx
sudo apt install -y nginx

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/primeg.com
```

### Paste this configuration:
```nginx
server {
    listen 80;
    server_name primeg.com www.primeg.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/primeg.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Step 6: Set Up SSL Certificate (HTTPS)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d primeg.com -d www.primeg.com

# Auto-renewal is set up automatically
```

## Step 7: Update GoDaddy DNS

1. Log into your GoDaddy account
2. Go to your domain (primeg.com)
3. Click "Manage DNS"
4. Update the A record to point to your server's IP address
5. Wait for DNS propagation (can take up to 24 hours)

## Step 8: Verify Everything Works

- Visit https://primeg.com in Chrome and Google
- Check that all pages load correctly
- Test the YouTube subscribe button
- Test the email link
- Check mobile responsiveness

## Maintenance Commands

```bash
# View logs
pm2 logs garvit-website

# Restart application
pm2 restart garvit-website

# Stop application
pm2 stop garvit-website

# Update website (after pulling new code)
git pull
npm install
npm run build
pm2 restart garvit-website
```

## Troubleshooting

### Port 3000 already in use
```bash
lsof -i :3000
kill -9 <PID>
```

### Nginx not working
```bash
sudo systemctl status nginx
sudo nginx -t
```

### PM2 not starting on boot
```bash
pm2 startup
pm2 save
```

## Support
For issues, check the logs with `pm2 logs garvit-website`
