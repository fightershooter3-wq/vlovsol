# Freenom Free Domain Setup Guide

## Step 1: Register Your Free Domain

1. Go to https://www.freenom.com
2. In the search box, type: **garvitmorethings**
3. Select **.tk** domain (free option)
4. Click "Get it now"
5. Choose "12 Months FREE"
6. Complete checkout (create account if needed)
7. Verify your email

## Step 2: Get Your Domain Details

After registration:
1. Log into Freenom
2. Go to "My Domains"
3. Click "Manage Domain" for garvitmorethings.tk
4. Go to "Management Tools" → "Nameservers"
5. You'll see the current nameservers

## Step 3: Point Domain to Your Server

You have two options:

### Option A: Using A Record (Simpler)
1. In Freenom, go to "Management Tools" → "Custom Nameservers"
2. Enter your server's IP address in the A record
3. Save changes
4. Wait 24 hours for DNS propagation

### Option B: Using Nameservers (If you have hosting)
1. Get nameservers from your hosting provider
2. In Freenom, replace the nameservers with your hosting provider's
3. Save changes
4. Wait 24 hours

## Step 4: Verify Domain is Working

After 24 hours:
```bash
# Check if domain resolves to your server
nslookup garvitmorethings.tk
# Should show your server's IP address
```

## Important Notes
- Free .tk domains require renewal every 12 months
- Keep your Freenom account active
- Set up auto-renewal to avoid losing the domain
- Some email services may flag .tk domains as spam

## Next Steps
Once domain is set up:
1. Deploy website to your server
2. Set up Nginx reverse proxy
3. Install SSL certificate with Certbot
4. Your site will be live at https://garvitmorethings.tk
