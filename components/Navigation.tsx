'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navigation({ darkMode, setDarkMode }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: darkMode 
        ? 'rgba(15, 23, 42, 0.8)'
        : 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: darkMode 
        ? '1px solid rgba(71, 85, 105, 0.5)'
        : '1px solid rgba(203, 213, 225, 0.5)',
      zIndex: 50,
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px'
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <div style={{ fontSize: '24px' }}>🎬</div>
            <div style={{
              fontSize: '20px',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #ef4444, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Garvit More Things</div>
          </Link>
          
          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
            color: darkMode ? '#cbd5e1' : '#475569'
          }} className="desktop-nav">
            <Link href="/about" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }}>About</Link>
            <Link href="/blog" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }}>Blog</Link>
            <Link href="/portfolio" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }}>Portfolio</Link>
            <Link href="/services" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }}>Services</Link>
            <Link href="/#chatbots" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }}>AI Chatbots</Link>
            <Link href="/#contact" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                padding: '8px',
                borderRadius: '8px',
                background: darkMode ? 'rgba(71, 85, 105, 0.5)' : 'rgba(203, 213, 225, 0.5)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} color="#fbbf24" /> : <Moon size={20} color="#6366f1" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '8px',
              borderRadius: '8px',
              background: darkMode ? 'rgba(71, 85, 105, 0.5)' : 'rgba(203, 213, 225, 0.5)',
              border: 'none',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} color={darkMode ? '#cbd5e1' : '#334155'} /> : <Menu size={24} color={darkMode ? '#cbd5e1' : '#334155'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            display: 'none',
            flexDirection: 'column',
            gap: '16px',
            padding: '16px 0',
            borderTop: darkMode ? '1px solid rgba(71, 85, 105, 0.5)' : '1px solid rgba(203, 213, 225, 0.5)'
          }} className="mobile-menu">
            <Link href="/about" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }} onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/blog" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }} onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/portfolio" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }} onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
            <Link href="/services" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }} onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/#chatbots" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }} onClick={() => setMobileMenuOpen(false)}>AI Chatbots</Link>
            <Link href="/#contact" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
