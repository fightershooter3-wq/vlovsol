'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Youtube, Mail, ExternalLink, ArrowRight, Play, Users, Zap, Instagram, Twitter, Linkedin, Bot, MessageSquare, Sparkles, Moon, Sun, Code2, Cpu, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const videos = [
    {
      id: 1,
      title: 'Jeevan Ke Rang',
      videoId: 'NgZz1AN5iK4',
      url: 'https://youtu.be/NgZz1AN5iK4?si=OU554dvAkXD1ShS7',
      thumbnail: 'https://img.youtube.com/vi/NgZz1AN5iK4/hqdefault.jpg'
    },
    {
      id: 2,
      title: 'Yoga Se Hi Hoga',
      videoId: '8QcFC50NkYc',
      url: 'https://youtu.be/8QcFC50NkYc?si=WRHXuQYHz1be0imI',
      thumbnail: 'https://img.youtube.com/vi/8QcFC50NkYc/hqdefault.jpg'
    },
    {
      id: 3,
      title: 'Reduce Pollution, Save Lives, War Between a Hero and a Villain',
      videoId: 'L7gnSW7N-bE',
      url: 'https://youtu.be/L7gnSW7N-bE?si=iLdtd4Y_mBSzIT-5',
      thumbnail: 'https://img.youtube.com/vi/L7gnSW7N-bE/hqdefault.jpg'
    },
    {
      id: 4,
      title: 'Gaming Ka Deewana',
      videoId: 'gsOMCpOQl3E',
      url: 'https://youtu.be/gsOMCpOQl3E?si=gwr3Z81HYEOLZ2Xk',
      thumbnail: 'https://img.youtube.com/vi/gsOMCpOQl3E/hqdefault.jpg'
    }
  ];

  const chatbots = [
    {
      id: 1,
      name: 'EternalG AI - The Ultimate AI Assistant',
      description: 'The most advanced AI combining ChatGPT-4o and Google Gemini. Solves JEE Advanced, Gaokao, and any complex problem. Supports text, voice, and image inputs. Better than any AI in the world!',
      icon: '✨',
      color: 'from-cyan-400 via-blue-500 to-purple-600',
      chatUrl: '/eternalg-ai',
      features: ['ChatGPT-4o + Gemini Pro', 'Solves JEE/Gaokao Exams', 'Voice & Image Support', 'World Knowledge', 'Math & Science Expert', 'Developed by Garvit Sharma']
    },
    {
      id: 2,
      name: 'PrimeG AI BOT FOR DOPAMINE CLEANING',
      description: 'Your AI assistant for dopamine detox and productivity enhancement. Get personalized advice and strategies to reduce digital distractions.',
      icon: '🧠',
      color: 'from-purple-500 via-pink-500 to-red-500',
      chatUrl: 'https://chat.lindy.ai/home/?templateId=68f640a13d97445e1ccad835',
      features: ['Dopamine Detox Tips', 'Productivity Coaching', '24/7 Availability', 'Personalized Strategies']
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: darkMode 
        ? '#000000'
        : '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes neonPulse {
          0%, 100% {
            text-shadow: 0 0 10px rgba(0, 255, 255, 0.8),
                         0 0 20px rgba(0, 255, 255, 0.6),
                         0 0 30px rgba(0, 255, 255, 0.4);
          }
          50% {
            text-shadow: 0 0 20px rgba(0, 255, 255, 1),
                         0 0 30px rgba(0, 255, 255, 0.8),
                         0 0 40px rgba(0, 255, 255, 0.6);
          }
        }

        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(0, 255, 255, 0.5),
                        0 0 10px rgba(0, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.8),
                        0 0 20px rgba(0, 255, 255, 0.5);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .neon-text {
          animation: neonPulse 2s ease-in-out infinite;
        }

        .border-glow {
          animation: borderGlow 2s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .hide-mobile {
            display: none !important;
          }
        }
      `}</style>

      {/* Animated Grid Background - Hidden on mobile for performance */}
      <div className="hide-mobile" style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        opacity: darkMode ? 0.15 : 0.05,
        backgroundImage: darkMode
          ? 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)'
          : 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        animation: 'gridMove 20s linear infinite'
      }}></div>

      {/* Mouse Follow Glow - Hidden on mobile */}
      <div className="hide-mobile" style={{
        position: 'fixed',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: darkMode
          ? 'radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(0, 200, 255, 0.1) 0%, transparent 70%)',
        left: mousePosition.x - 300,
        top: mousePosition.y - 300,
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'left 0.3s ease, top 0.3s ease',
        filter: 'blur(40px)'
      }}></div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          background: darkMode 
            ? 'rgba(0, 0, 0, 0.95)'
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: darkMode
            ? '1px solid rgba(0, 255, 255, 0.2)'
            : '1px solid rgba(0, 136, 255, 0.2)',
          zIndex: 50,
          boxShadow: darkMode
            ? '0 4px 20px rgba(0, 255, 255, 0.1)'
            : '0 4px 20px rgba(0, 136, 255, 0.1)'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 16px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '64px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: darkMode
                    ? 'linear-gradient(135deg, #00ffff, #0088ff)'
                    : 'linear-gradient(135deg, #0088ff, #00ccff)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: darkMode
                    ? '0 0 15px rgba(0, 255, 255, 0.5)'
                    : '0 0 15px rgba(0, 136, 255, 0.5)'
                }}>
                  <Terminal size={20} color="#000" />
                </div>
                <div style={{
                  fontSize: window.innerWidth < 768 ? '16px' : '20px',
                  fontWeight: '700',
                  color: darkMode ? '#00ffff' : '#0088ff',
                  letterSpacing: '0.5px',
                  textShadow: darkMode
                    ? '0 0 10px rgba(0, 255, 255, 0.5)'
                    : '0 0 10px rgba(0, 136, 255, 0.5)'
                }}>We Love Solutions</div>
              </div>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  display: window.innerWidth < 768 ? 'flex' : 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: darkMode ? '#00ffff' : '#0088ff'
                }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop Menu */}
              <div style={{
                display: window.innerWidth < 768 ? 'none' : 'flex',
                gap: '32px',
                alignItems: 'center'
              }}>
                <a href="/about" style={{
                  color: darkMode ? '#ffffff' : '#000000',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s'
                }}>About</a>
                <a href="#videos" style={{
                  color: darkMode ? '#ffffff' : '#000000',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s'
                }}>Videos</a>
                <a href="#chatbots" style={{
                  color: darkMode ? '#ffffff' : '#000000',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s'
                }}>AI Chatbots</a>
                <a href="#contact" style={{
                  color: darkMode ? '#ffffff' : '#000000',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s'
                }}>Contact</a>
                <a href="/channels" style={{
                  color: darkMode ? '#ffffff' : '#000000',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s'
                }}>Channels</a>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    background: darkMode
                      ? 'rgba(0, 255, 255, 0.1)'
                      : 'rgba(0, 136, 255, 0.1)',
                    border: darkMode
                      ? '1px solid rgba(0, 255, 255, 0.3)'
                      : '1px solid rgba(0, 136, 255, 0.3)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun size={18} color="#00ffff" /> : <Moon size={18} color="#0088ff" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
              <div style={{
                display: window.innerWidth < 768 ? 'flex' : 'none',
                flexDirection: 'column',
                gap: '16px',
                padding: '16px 0',
                borderTop: darkMode
                  ? '1px solid rgba(0, 255, 255, 0.2)'
                  : '1px solid rgba(0, 136, 255, 0.2)'
              }}>
                <a href="/about" style={{
                  color: darkMode ? '#ffffff' : '#000000',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '8px 0'
                }}>About</a>
                <a href="#videos" style={{
                  color: darkMode ? '#ffffff' : '#000000',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '8px 0'
                }} onClick={() => setMobileMenuOpen(false)}>Videos</a>
                <a href="#chatbots" style={{
                  color: darkMode ? '#ffffff' : '#000000',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '8px 0'
                }} onClick={() => setMobileMenuOpen(false)}>AI Chatbots</a>
                <a href="#contact" style={{
                  color: darkMode ? '#ffffff' : '#000000',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '8px 0'
                }} onClick={() => setMobileMenuOpen(false)}>Contact</a>
                <a href="/channels" style={{
                  color: darkMode ? '#ffffff' : '#000000',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '8px 0'
                }}>Channels</a>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  style={{
                    padding: '12px',
                    borderRadius: '6px',
                    background: darkMode
                      ? 'rgba(0, 255, 255, 0.1)'
                      : 'rgba(0, 136, 255, 0.1)',
                    border: darkMode
                      ? '1px solid rgba(0, 255, 255, 0.3)'
                      : '1px solid rgba(0, 136, 255, 0.3)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    color: darkMode ? '#00ffff' : '#0088ff',
                    fontWeight: '600',
                    fontSize: '14px'
                  }}
                >
                  {darkMode ? <><Sun size={18} /> Light Mode</> : <><Moon size={18} /> Dark Mode</>}
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section style={{
          paddingTop: '120px',
          paddingBottom: '80px',
          padding: '120px 16px 80px',
          minHeight: window.innerWidth < 768 ? 'auto' : '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }} className="fade-in-up">
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            width: '100%'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              <div style={{
                display: 'inline-block',
                padding: '6px 16px',
                background: darkMode
                  ? 'rgba(0, 255, 255, 0.1)'
                  : 'rgba(0, 136, 255, 0.1)',
                border: darkMode
                  ? '1px solid rgba(0, 255, 255, 0.3)'
                  : '1px solid rgba(0, 136, 255, 0.3)',
                borderRadius: '50px',
                marginBottom: '24px',
                boxShadow: darkMode
                  ? '0 0 20px rgba(0, 255, 255, 0.2)'
                  : '0 0 20px rgba(0, 136, 255, 0.2)'
              }}>
                <span style={{
                  color: darkMode ? '#00ffff' : '#0088ff',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  <Code2 size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                  Next-Gen Content Platform
                </span>
              </div>
              
              <h1 style={{
                fontSize: window.innerWidth < 768 ? '36px' : '64px',
                fontWeight: '800',
                color: darkMode ? '#ffffff' : '#000000',
                marginBottom: '16px',
                lineHeight: '1.1',
                letterSpacing: '-1px'
              }}>
                Welcome to{' '}
                <span className="neon-text" style={{
                  color: darkMode ? '#00ffff' : '#0088ff',
                  display: 'block',
                  marginTop: '12px'
                }}>
                  We Love Solutions
                </span>
              </h1>
              
              <p style={{
                fontSize: window.innerWidth < 768 ? '16px' : '20px',
                color: darkMode ? '#a0a0a0' : '#666666',
                marginBottom: '32px',
                maxWidth: '800px',
                margin: '0 auto 32px',
                lineHeight: '1.6',
                fontWeight: '400',
                padding: '0 16px'
              }}>
                Creating diverse, entertaining, and engaging content powered by cutting-edge technology. From trailers to lifestyle videos, experience the future of digital content.
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: '16px', 
                justifyContent: 'center', 
                flexWrap: 'wrap',
                padding: '0 16px'
              }}>
                <a
                  href="https://www.youtube.com/@GARVIT_MORE_THING"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-glow"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: darkMode
                      ? 'linear-gradient(135deg, #00ffff, #0088ff)'
                      : 'linear-gradient(135deg, #0088ff, #00ccff)',
                    color: '#000000',
                    padding: window.innerWidth < 768 ? '14px 24px' : '16px 32px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: window.innerWidth < 768 ? '14px' : '16px',
                    letterSpacing: '0.5px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase'
                  }}
                >
                  <Youtube size={18} />
                  Subscribe Now
                </a>
                <button style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'transparent',
                  color: darkMode ? '#00ffff' : '#0088ff',
                  padding: window.innerWidth < 768 ? '14px 24px' : '16px 32px',
                  borderRadius: '8px',
                  border: darkMode
                    ? '2px solid rgba(0, 255, 255, 0.5)'
                    : '2px solid rgba(0, 136, 255, 0.5)',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontSize: window.innerWidth < 768 ? '14px' : '16px',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase'
                }}
                onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Content
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Tech Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginTop: '60px',
              padding: '0 16px'
            }}>
              {[
                { icon: <Users size={28} />, value: '1,715', label: 'Subscribers', color: darkMode ? '#00ffff' : '#0088ff' },
                { icon: <Play size={28} />, value: '80+', label: 'Videos', color: darkMode ? '#00ffff' : '#0088ff' },
                { icon: <Cpu size={28} />, value: 'AI', label: 'Powered', color: darkMode ? '#00ffff' : '#0088ff' }
              ].map((stat, index) => (
                <div
                  key={index}
                  style={{
                    background: darkMode
                      ? 'rgba(0, 255, 255, 0.05)'
                      : 'rgba(0, 136, 255, 0.05)',
                    border: darkMode
                      ? '1px solid rgba(0, 255, 255, 0.2)'
                      : '1px solid rgba(0, 136, 255, 0.2)',
                    borderRadius: '12px',
                    padding: '24px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    color: stat.color,
                    marginBottom: '12px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontSize: '36px',
                    fontWeight: '800',
                    color: darkMode ? '#ffffff' : '#000000',
                    marginBottom: '8px',
                    letterSpacing: '-1px'
                  }}>{stat.value}</div>
                  <div style={{
                    fontSize: '13px',
                    color: darkMode ? '#808080' : '#666666',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" style={{
          padding: window.innerWidth < 768 ? '60px 16px' : '100px 24px',
          position: 'relative'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{
                fontSize: window.innerWidth < 768 ? '32px' : '48px',
                fontWeight: '800',
                color: darkMode ? '#ffffff' : '#000000',
                marginBottom: '16px',
                letterSpacing: '-1px'
              }}>
                Latest <span style={{ color: darkMode ? '#00ffff' : '#0088ff' }}>Content</span>
              </h2>
              <div style={{
                width: '80px',
                height: '4px',
                background: darkMode
                  ? 'linear-gradient(90deg, #00ffff, #0088ff)'
                  : 'linear-gradient(90deg, #0088ff, #00ccff)',
                margin: '0 auto',
                borderRadius: '2px',
                boxShadow: darkMode
                  ? '0 0 20px rgba(0, 255, 255, 0.5)'
                  : '0 0 20px rgba(0, 136, 255, 0.5)'
              }}></div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              {videos.map((video) => (
                <a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: darkMode
                      ? 'rgba(0, 255, 255, 0.05)'
                      : 'rgba(0, 136, 255, 0.05)',
                    border: darkMode
                      ? '1px solid rgba(0, 255, 255, 0.2)'
                      : '1px solid rgba(0, 136, 255, 0.2)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    display: 'block'
                  }}
                >
                  <div style={{
                    position: 'relative',
                    height: '180px',
                    background: '#000',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '50px',
                      height: '50px',
                      background: darkMode
                        ? 'rgba(0, 255, 255, 0.9)'
                        : 'rgba(0, 136, 255, 0.9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: darkMode
                        ? '0 0 30px rgba(0, 255, 255, 0.6)'
                        : '0 0 30px rgba(0, 136, 255, 0.6)'
                    }}>
                      <Play size={24} color="#000" fill="#000" />
                    </div>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: darkMode ? '#ffffff' : '#000000',
                      marginBottom: '12px',
                      lineHeight: '1.4'
                    }}>{video.title}</h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: darkMode ? '#00ffff' : '#0088ff',
                      fontSize: '13px',
                      fontWeight: '600'
                    }}>
                      Watch Now
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* AI Chatbots Section */}
        <section id="chatbots" style={{
          padding: window.innerWidth < 768 ? '60px 16px' : '100px 24px',
          background: darkMode
            ? 'rgba(0, 255, 255, 0.02)'
            : 'rgba(0, 136, 255, 0.02)'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{
                fontSize: window.innerWidth < 768 ? '32px' : '48px',
                fontWeight: '800',
                color: darkMode ? '#ffffff' : '#000000',
                marginBottom: '16px',
                letterSpacing: '-1px'
              }}>
                AI <span style={{ color: darkMode ? '#00ffff' : '#0088ff' }}>Chatbots</span>
              </h2>
              <div style={{
                width: '80px',
                height: '4px',
                background: darkMode
                  ? 'linear-gradient(90deg, #00ffff, #0088ff)'
                  : 'linear-gradient(90deg, #0088ff, #00ccff)',
                margin: '0 auto 24px',
                borderRadius: '2px',
                boxShadow: darkMode
                  ? '0 0 20px rgba(0, 255, 255, 0.5)'
                  : '0 0 20px rgba(0, 136, 255, 0.5)'
              }}></div>
              <p style={{
                fontSize: window.innerWidth < 768 ? '16px' : '18px',
                color: darkMode ? '#a0a0a0' : '#666666',
                maxWidth: '700px',
                margin: '0 auto',
                padding: '0 16px'
              }}>
                Powered by advanced AI technology to assist you 24/7
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '24px'
            }}>
              {chatbots.map((bot) => (
                <div
                  key={bot.id}
                  style={{
                    background: darkMode
                      ? 'rgba(0, 255, 255, 0.05)'
                      : 'rgba(0, 136, 255, 0.05)',
                    border: darkMode
                      ? '1px solid rgba(0, 255, 255, 0.2)'
                      : '1px solid rgba(0, 136, 255, 0.2)',
                    borderRadius: '16px',
                    padding: '32px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    fontSize: '40px',
                    marginBottom: '20px'
                  }}>{bot.icon}</div>
                  
                  <h3 style={{
                    fontSize: window.innerWidth < 768 ? '20px' : '22px',
                    fontWeight: '800',
                    color: darkMode ? '#ffffff' : '#000000',
                    marginBottom: '16px',
                    letterSpacing: '-0.5px',
                    lineHeight: '1.3'
                  }}>{bot.name}</h3>
                  
                  <p style={{
                    color: darkMode ? '#a0a0a0' : '#666666',
                    marginBottom: '24px',
                    lineHeight: '1.6',
                    fontSize: '14px'
                  }}>
                    {bot.description}
                  </p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(2, 1fr)',
                    gap: '10px',
                    marginBottom: '28px'
                  }}>
                    {bot.features.map((feature, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: darkMode ? '#808080' : '#666666',
                          fontSize: '12px',
                          fontWeight: '500'
                        }}
                      >
                        <span style={{ color: darkMode ? '#00ffff' : '#0088ff', fontSize: '14px' }}>✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={bot.chatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      background: darkMode
                        ? 'linear-gradient(135deg, #00ffff, #0088ff)'
                        : 'linear-gradient(135deg, #0088ff, #00ccff)',
                      color: '#000000',
                      padding: '14px 28px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: '700',
                      fontSize: '14px',
                      letterSpacing: '0.5px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      boxShadow: darkMode
                        ? '0 10px 30px rgba(0, 255, 255, 0.3)'
                        : '0 10px 30px rgba(0, 136, 255, 0.3)'
                    }}
                  >
                    <MessageSquare size={18} />
                    Launch Chat
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{
          padding: window.innerWidth < 768 ? '60px 16px' : '100px 24px'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: window.innerWidth < 768 ? '32px' : '48px',
              fontWeight: '800',
              color: darkMode ? '#ffffff' : '#000000',
              marginBottom: '16px',
              letterSpacing: '-1px'
            }}>
              Get In <span style={{ color: darkMode ? '#00ffff' : '#0088ff' }}>Touch</span>
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: darkMode
                ? 'linear-gradient(90deg, #00ffff, #0088ff)'
                : 'linear-gradient(90deg, #0088ff, #00ccff)',
              margin: '0 auto 40px',
              borderRadius: '2px',
              boxShadow: darkMode
                ? '0 0 20px rgba(0, 255, 255, 0.5)'
                : '0 0 20px rgba(0, 136, 255, 0.5)'
            }}></div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(2, 1fr)',
              gap: '16px',
              marginTop: '40px',
              maxWidth: '600px',
              margin: '40px auto 0'
            }}>
              {[
                { icon: <Youtube size={20} />, label: 'YouTube', url: 'https://www.youtube.com/@GARVIT_MORE_THING' },
                { icon: <Instagram size={20} />, label: 'Instagram', url: 'https://instagram.com/iamthesharma29' },
                { icon: <Twitter size={20} />, label: 'Twitter', url: 'https://twitter.com/FighterSho97816' },
                { icon: <Mail size={20} />, label: 'Email', url: 'mailto:fightershooter3@gmail.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '14px 24px',
                    background: darkMode
                      ? 'rgba(0, 255, 255, 0.05)'
                      : 'rgba(0, 136, 255, 0.05)',
                    border: darkMode
                      ? '1px solid rgba(0, 255, 255, 0.2)'
                      : '1px solid rgba(0, 136, 255, 0.2)',
                    borderRadius: '8px',
                    color: darkMode ? '#00ffff' : '#0088ff',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  {social.icon}
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          background: darkMode
            ? 'rgba(0, 0, 0, 0.8)'
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          borderTop: darkMode
            ? '1px solid rgba(0, 255, 255, 0.2)'
            : '1px solid rgba(0, 136, 255, 0.2)',
          padding: window.innerWidth < 768 ? '32px 16px' : '48px 24px',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: window.innerWidth < 768 ? '18px' : '22px',
              fontWeight: '700',
              color: darkMode ? '#00ffff' : '#0088ff',
              marginBottom: '12px',
              letterSpacing: '0.5px'
            }}>We Love Solutions</div>
            <p style={{
              color: darkMode ? '#808080' : '#666666',
              fontSize: '13px'
            }}>
              © 2025 We Love Solutions. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
