'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      color: 'white',
      padding: '80px 16px'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#ef4444',
          textDecoration: 'none',
          marginBottom: '32px',
          fontSize: '16px',
          fontWeight: '500'
        }}>
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '16px',
          background: 'linear-gradient(to right, #ef4444, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Privacy Policy</h1>
        
        <p style={{ color: '#94a3b8', marginBottom: '48px' }}>
          Last Updated: October 21, 2025
        </p>

        <div style={{ lineHeight: '1.8', color: '#cbd5e1' }}>
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              1. Introduction
            </h2>
            <p>
              Welcome to Garvit More Things ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              2. Information We Collect
            </h2>
            <p style={{ marginBottom: '12px' }}>We may collect, use, store and transfer different kinds of personal data about you:</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '12px' }}>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system</li>
              <li><strong>Usage Data:</strong> Information about how you use our website</li>
              <li><strong>Contact Data:</strong> Email address if you contact us</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              3. How We Use Your Information
            </h2>
            <p style={{ marginBottom: '12px' }}>We use your information to:</p>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Provide and maintain our website</li>
              <li>Improve user experience</li>
              <li>Analyze website usage and trends</li>
              <li>Display relevant advertisements through Google AdSense</li>
              <li>Respond to your inquiries</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              4. Cookies and Tracking Technologies
            </h2>
            <p style={{ marginBottom: '12px' }}>
              We use cookies and similar tracking technologies to track activity on our website. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p style={{ marginBottom: '12px' }}><strong>Types of cookies we use:</strong></p>
            <ul style={{ paddingLeft: '24px' }}>
              <li><strong>Essential Cookies:</strong> Required for the website to function</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Advertising Cookies:</strong> Used by Google AdSense to display relevant ads</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              5. Google AdSense
            </h2>
            <p style={{ marginBottom: '12px' }}>
              We use Google AdSense to display advertisements on our website. Google uses cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#ef4444' }}>Google Ads Settings</a>.
            </p>
            <p>
              For more information about how Google uses data, please visit <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={{ color: '#ef4444' }}>Google's Privacy & Terms</a>.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              6. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites (YouTube, Instagram, Twitter, etc.). We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              7. Data Security
            </h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              8. Your Rights
            </h2>
            <p style={{ marginBottom: '12px' }}>You have the right to:</p>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              9. Children's Privacy
            </h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              10. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              11. Contact Us
            </h2>
            <p style={{ marginBottom: '12px' }}>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Email: <a href="mailto:fightershooter3@gmail.com" style={{ color: '#ef4444' }}>fightershooter3@gmail.com</a></li>
              <li>YouTube: <a href="https://www.youtube.com/@GARVIT_MORE_THING" target="_blank" rel="noopener noreferrer" style={{ color: '#ef4444' }}>@GARVIT_MORE_THING</a></li>
            </ul>
          </section>

          <div style={{
            marginTop: '48px',
            padding: '24px',
            background: 'rgba(239, 68, 68, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(239, 68, 68, 0.3)'
          }}>
            <p style={{ fontSize: '14px', color: '#cbd5e1' }}>
              By using our website, you consent to our Privacy Policy and agree to its terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
