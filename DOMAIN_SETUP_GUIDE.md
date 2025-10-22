# 🚀 Connect vlovsol.com to Your Portfolio - SIMPLE GUIDE

## ⚠️ IMPORTANT: Your site is currently on Lindy.ai
The site at `ready-knives-divide.lindy.site` cannot use custom domains directly.

## 🎯 EASIEST SOLUTION: Deploy to Vercel (FREE)

### Step 1: Create Vercel Account
1. Go to: https://vercel.com/signup
2. Sign up with GitHub (or email)
3. It's 100% FREE

### Step 2: Deploy Your Site
1. Download your portfolio code from: /home/code/fighter-shooter-portfolio
2. Push it to GitHub (or upload directly to Vercel)
3. Click "Import Project" on Vercel
4. Select your repository
5. Click "Deploy" (Vercel auto-detects Next.js)

### Step 3: Add Custom Domain on Vercel
1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add: vlovsol.com
4. Add: www.vlovsol.com
5. Vercel will show you DNS records

### Step 4: Update DNS on Hostinger
1. Login to Hostinger: https://hpanel.hostinger.com
2. Go to Domains → vlovsol.com → DNS Settings
3. DELETE any existing A records
4. ADD these records (Vercel will give you exact values):

**For vlovsol.com:**
- Type: A
- Name: @
- Value: 76.76.21.21 (Vercel's IP)

**For www.vlovsol.com:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

### Step 5: Wait 1-2 Hours
DNS takes time to propagate. Your site will be live at vlovsol.com!

---

## 🔥 ALTERNATIVE: Use Hostinger Hosting

If you want to use Hostinger (since you already bought domain there):

### Step 1: Upload Files to Hostinger
1. Login to Hostinger
2. Go to "File Manager"
3. Upload your Next.js build files
4. Configure Node.js hosting

### Step 2: Domain Already Connected
Since you bought domain from Hostinger, it should auto-connect!

---

## 📞 NEED HELP?

I cannot access your Hostinger account directly. You need to:
1. Either follow Vercel steps above (RECOMMENDED - easier)
2. Or contact Hostinger support to help connect domain

Vercel is MUCH easier and FREE! 🚀
