# Complete Setup Guide: Garvit More Things Website

## 🎯 Your Complete Roadmap

This guide will help you:
1. Get a free domain (garvitmorethings.tk)
2. Deploy your website to your own server
3. Connect everything together
4. Go live!

---

## PART 1: Get Your Free Domain (15 minutes)

### Step 1.1: Register Domain on Freenom
1. Visit https://www.freenom.com
2. Search for: **garvitmorethings**
3. Select **.tk** (free option)
4. Click "Get it now" → "Checkout"
5. Choose "12 Months FREE"
6. Create account and verify email
7. ✅ Domain registered!

### Step 1.2: Note Your Domain
- **Your domain:** garvitmorethings.tk
- **Keep this safe!** You'll need it later

---

## PART 2: Prepare Your Server (30 minutes)

### Step 2.1: Server Requirements
You need:
- A Linux server (Ubuntu 20.04 or newer recommended)
- SSH access to your server
- Your server's IP address (e.g., 123.45.67.89)

### Step 2.2: Connect to Your Server
```bash
ssh user@your-server-ip
# Enter your password when prompted
```

### Step 2.3: Install Required Software
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx
sudo apt install -y nginx

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Certbot (for SSL)
sudo apt install -y certbot python3-certbot-nginx
```

### Step 2.4: Create Website Directory
```bash
sudo mkdir -p /var/www/garvit-more-things
sudo chown -R $USER:$USER /var/www/garvit-more-things
cd /var/www/garvit-more-things
```

---

## PART 3: Upload Your Website (10 minutes)

### Step 3.1: Download Website Files
The website files are in: `/home/code/fighter-shooter-portfolio/`

Compressed file: `garvit-website.tar.gz` (91KB)

### Step 3.2: Upload to Server
From your local machine:
```bash
scp /home/code/fighter-shooter-portfolio/garvit-website.tar.gz user@your-server-ip:/var/www/garvit-more-things/
```

### Step 3.3: Extract Files on Server
```bash
cd /var/www/garvit-more-things
tar -xzf garvit-website.tar.gz
ls -la  # Verify files are there
```

---

## PART 4: Install & Build Website (15 minutes)

### Step 4.1: Install Dependencies
```bash
cd /var/www/garvit-more-things
npm install
```

### Step 4.2: Build for Production
```bash
npm run build
```

### Step 4.3: Start with PM2
```bash
pm2 start npm --name "garvit-website" -- start
pm2 startup
pm2 save
```

✅ Website is now running on your server!

---

## PART 5: Set Up Nginx (10 minutes)

### Step 5.1: Create Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/garvitmorethings.tk
```

### Step 5.2: Paste This Configuration
```nginx
server {
    listen 80;
    server_name garvitmorethings.tk www.garvitmorethings.tk;

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

### Step 5.3: Enable Configuration
```bash
sudo ln -s /etc/nginx/sites-available/garvitmorethings.tk /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## PART 6: Connect Your Domain (5 minutes)

### Step 6.1: Get Your Server IP
```bash
hostname -I
# Note the IP address (e.g., 123.45.67.89)
```

### Step 6.2: Update Freenom DNS
1. Log into https://www.freenom.com
2. Go to "My Domains"
3. Click "Manage Domain" for garvitmorethings.tk
4. Go to "Management Tools" → "Custom Nameservers"
5. Add your server's IP address as A record
6. Save changes

### Step 6.3: Wait for DNS Propagation
- DNS can take 24 hours to propagate
- Check status: `nslookup garvitmorethings.tk`

---

## PART 7: Set Up SSL Certificate (5 minutes)

### Step 7.1: Install SSL Certificate
```bash
sudo certbot --nginx -d garvitmorethings.tk -d www.garvitmorethings.tk
```

### Step 7.2: Follow Prompts
- Enter your email
- Agree to terms
- Choose to redirect HTTP to HTTPS

✅ SSL certificate installed!

---

## PART 8: Verify Everything Works

### Step 8.1: Test Your Website
After DNS propagates (24 hours):
1. Open Chrome: https://garvitmorethings.tk
2. Check all sections load
3. Test YouTube subscribe button
4. Test email link
5. Check mobile view

### Step 8.2: Check Server Status
```bash
pm2 status
pm2 logs garvit-website
```

---

## 🎉 You're Live!

Your website is now live at: **https://garvitmorethings.tk**

---

## Maintenance Commands

```bash
# View logs
pm2 logs garvit-website

# Restart website
pm2 restart garvit-website

# Stop website
pm2 stop garvit-website

# Update website (after pulling new code)
cd /var/www/garvit-more-things
git pull  # or re-upload files
npm install
npm run build
pm2 restart garvit-website
```

---

## Troubleshooting

### Website not loading?
```bash
pm2 logs garvit-website
# Check for errors
```

### Nginx not working?
```bash
sudo nginx -t
sudo systemctl status nginx
```

### Domain not resolving?
```bash
nslookup garvitmorethings.tk
# Should show your server IP
```

### Port 3000 in use?
```bash
lsof -i :3000
kill -9 <PID>
```

---

## Need Help?

1. Check server logs: `pm2 logs garvit-website`
2. Check Nginx: `sudo systemctl status nginx`
3. Verify domain: `nslookup garvitmorethings.tk`
4. Test connectivity: `curl http://localhost:3000`

---

## Summary

✅ Free domain: garvitmorethings.tk
✅ Website deployed to your server
✅ Nginx reverse proxy configured
✅ SSL certificate installed
✅ Live and accessible worldwide!

**Total time: ~90 minutes**

---

Built with Next.js 15.5.3 | Deployed with ❤️
