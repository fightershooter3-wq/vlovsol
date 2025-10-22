'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Youtube, Mail, ExternalLink, ArrowRight, Play, Users, Zap, Instagram, Twitter, Linkedin, Bot, MessageSquare, Sparkles, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      color: 'from-purple-600 via-pink-500 to-blue-500',
      chatUrl: '/eternalg-ai',
      features: ['ChatGPT-4o + Gemini Pro', 'Solves JEE/Gaokao Exams', 'Voice & Image Support', 'World Knowledge', 'Math & Science Expert', 'Developed by Garvit Sharma']
    },
    {
      id: 2,
      name: 'PrimeG AI BOT FOR DOPAMINE CLEANING',
      description: 'Your AI assistant for dopamine detox and productivity enhancement. Get personalized advice and strategies to reduce digital distractions.',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      chatUrl: 'https://chat.lindy.ai/home/?templateId=68f640a13d97445e1ccad835',
      features: ['Dopamine Detox Tips', 'Productivity Coaching', '24/7 Availability', 'Personalized Strategies']
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: darkMode 
        ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
        : 'linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 50%, #bcccdc 100%)',
      position: 'relative',
      
      transition: 'background 0.5s ease'
    }}>
      <style jsx global>{`
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

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .scroll-reveal {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s ease-out;
        }

        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Animated background effects with parallax */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        transform: `translateY(${scrollY * 0.5}px)`
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: '-16px',
          width: '384px',
          height: '384px',
          background: darkMode 
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'blob 7s infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0,
          right: '-16px',
          width: '384px',
          height: '384px',
          background: darkMode
            ? 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'blob 7s infinite 2s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-32px',
          left: '80px',
          width: '384px',
          height: '384px',
          background: darkMode
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'blob 7s infinite 4s'
        }}></div>
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Navigation */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ fontSize: '24px' }}>🎬</div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(to right, #ef4444, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Garvit More Things</div>
              </div>
              <div style={{
                display: 'flex',
                gap: '32px',
                alignItems: 'center',
                color: darkMode ? '#cbd5e1' : '#475569'
              }}>
                <a href="/about" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }}>About</a>
                <a href="#videos" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }}>Videos</a>
                <a href="#chatbots" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }}>AI Chatbots</a>
                <a href="#contact" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
                <a href="/channels" style={{ color: darkMode ? '#cbd5e1' : '#334155', textDecoration: 'none', fontWeight: '500' }}>Channels</a>
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
            </div>
          </div>
        </nav>

        {/* Hero Section with Video Background */}
        <section style={{
          position: 'relative',
          paddingTop: '128px',
          paddingBottom: '80px',
          padding: '128px 16px 80px',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden'
        }} className="fade-in-up">
          {/* Video Background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden'
          }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                minWidth: '100%',
                minHeight: '100%',
                width: 'auto',
                height: 'auto',
                transform: 'translate(-50%, -50%)',
                objectFit: 'cover',
                filter: darkMode ? 'brightness(0.3)' : 'brightness(0.5)'
              }}
            >
              <source src="/videos/hero-background.mp4" type="video/mp4" />
            </video>
            {/* Dark gradient overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: darkMode
                ? 'linear-gradient(135deg, rgba(26, 26, 46, 0.85) 0%, rgba(22, 33, 62, 0.8) 50%, rgba(15, 52, 96, 0.85) 100%)'
                : 'linear-gradient(135deg, rgba(240, 244, 248, 0.9) 0%, rgba(217, 226, 236, 0.85) 50%, rgba(188, 204, 220, 0.9) 100%)'
            }}></div>
          </div>

          <div style={{
            maxWidth: '1152px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}>
              <div>
                <h1 style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: darkMode ? 'white' : '#0f172a',
                  marginBottom: '24px',
                  lineHeight: '1.2',
                  textShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.5)' : '0 2px 10px rgba(255, 255, 255, 0.8)'
                }}>
                  Welcome to{' '}
                  <span style={{
                    background: 'linear-gradient(to right, #ef4444, #a855f7, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Garvit More Things
                  </span>
                </h1>
                <p style={{
                  fontSize: '20px',
                  color: darkMode ? '#e2e8f0' : '#1e293b',
                  marginBottom: '32px',
                  lineHeight: '1.6',
                  textShadow: darkMode ? '0 2px 10px rgba(0, 0, 0, 0.5)' : '0 1px 3px rgba(255, 255, 255, 0.8)',
                  fontWeight: '500'
                }}>
                  Creating diverse, entertaining, and engaging content. From trailers to lifestyle videos, I bring you "Any Thing! You Want" on my channel.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <a
                    href="https://www.youtube.com/@GARVIT_MORE_THING"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'linear-gradient(to right, #dc2626, #b91c1c)',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '500',
                      boxShadow: '0 10px 25px rgba(239, 68, 68, 0.5)',
                      transition: 'transform 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <Youtube size={20} />
                    Subscribe on YouTube
                  </a>
                  <button style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(15, 23, 42, 0.8)',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: darkMode ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(15, 23, 42, 0.9)',
                    cursor: 'pointer',
                    fontWeight: '500',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.background = darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(15, 23, 42, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(15, 23, 42, 0.8)';
                  }}>
                    Explore Videos
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'relative' }}>
                  {/* Animated Neon Glow Effect */}
                  <div style={{
                    position: 'absolute',
                    inset: '-8px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #ef4444, #a855f7, #3b82f6, #10b981, #ef4444)',
                    backgroundSize: '300% 300%',
                    animation: 'neonGlow 3s ease infinite, rotate 8s linear infinite',
                    filter: 'blur(20px)',
                    opacity: 0.8,
                    zIndex: 0
                  }}></div>
                  
                  {/* Secondary Glow Layer */}
                  <div style={{
                    position: 'absolute',
                    inset: '-4px',
                    borderRadius: '50%',
                    background: 'linear-gradient(90deg, #ef4444, #f59e0b, #10b981, #3b82f6, #a855f7, #ef4444)',
                    backgroundSize: '400% 400%',
                    animation: 'neonGlow 2s ease infinite reverse',
                    filter: 'blur(10px)',
                    opacity: 0.9,
                    zIndex: 1
                  }}></div>
                  
                  {/* Photo Container with Border */}
                  <div style={{
                    position: 'relative',
                    width: '256px',
                    height: '256px',
                    borderRadius: '50%',
                    border: '4px solid rgba(255, 255, 255, 0.9)',
                    boxShadow: '0 0 30px rgba(239, 68, 68, 0.6), 0 0 60px rgba(168, 85, 247, 0.4), 0 0 90px rgba(59, 130, 246, 0.3)',
                    overflow: 'hidden',
                    zIndex: 2,
                    animation: 'borderPulse 2s ease infinite'
                  }}>
                    <img
                      src="/images/garvit-photo.jpg"
                      alt="Garvit Sharma"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{
          padding: '64px 16px',
          background: darkMode 
            ? 'rgba(15, 23, 42, 0.5)'
            : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          borderTop: darkMode 
            ? '1px solid rgba(71, 85, 105, 0.5)'
            : '1px solid rgba(203, 213, 225, 0.5)',
          borderBottom: darkMode 
            ? '1px solid rgba(71, 85, 105, 0.5)'
            : '1px solid rgba(203, 213, 225, 0.5)'
        }} className="scroll-reveal">
          <div style={{
            maxWidth: '1152px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ef4444, #a855f7)',
                  marginBottom: '16px'
                }}>
                  <Users size={40} color="white" />
                </div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: darkMode ? 'white' : '#0f172a',
                  marginBottom: '8px'
                }}>1,715</div>
                <div style={{ color: darkMode ? '#94a3b8' : '#475569', fontWeight: '500' }}>Subscribers</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ef4444, #a855f7)',
                  marginBottom: '16px'
                }}>
                  <Play size={40} color="white" />
                </div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: darkMode ? 'white' : '#0f172a',
                  marginBottom: '8px'
                }}>80+</div>
                <div style={{ color: darkMode ? '#94a3b8' : '#475569', fontWeight: '500' }}>Videos</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ef4444, #a855f7)',
                  marginBottom: '16px'
                }}>
                  <Zap size={40} color="white" />
                </div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: darkMode ? 'white' : '#0f172a',
                  marginBottom: '8px'
                }}>Diverse</div>
                <div style={{ color: darkMode ? '#94a3b8' : '#475569', fontWeight: '500' }}>Content Focus</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{
          position: 'relative',
          zIndex: 1,
          padding: '80px 16px'
        }} className="scroll-reveal">
          <div style={{
            maxWidth: '1152px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: darkMode ? 'white' : '#0f172a',
              marginBottom: '48px',
              background: 'linear-gradient(to right, #ef4444, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>About Me</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '48px'
            }}>
              <div>
                <p style={{
                  fontSize: '18px',
                  color: darkMode ? '#cbd5e1' : '#334155',
                  marginBottom: '24px',
                  lineHeight: '1.6',
                  fontWeight: '400'
                }}>
                  I'm Garvit, a content creator passionate about bringing diverse and entertaining videos to my audience. My channel, "Garvit More Things," is all about exploring different topics and creating content that resonates with viewers.
                </p>
                <p style={{
                  fontSize: '18px',
                  color: darkMode ? '#cbd5e1' : '#334155',
                  marginBottom: '24px',
                  lineHeight: '1.6',
                  fontWeight: '400'
                }}>
                  With over 380 subscribers and 32 videos, I've built a community of people who enjoy varied content - from trailers and lifestyle videos to creative projects. My mission is simple: deliver quality content that entertains and engages.
                </p>
                <p style={{
                  fontSize: '18px',
                  color: darkMode ? '#cbd5e1' : '#334155',
                  lineHeight: '1.6',
                  fontWeight: '400'
                }}>
                  Whether it's celebrating milestones with my subscribers or exploring new creative directions, I'm committed to growing and improving my craft every day.
                </p>
              </div>
              <div style={{
                background: darkMode 
                  ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(241, 245, 249, 0.95))',
                borderRadius: '8px',
                padding: '32px',
                border: darkMode 
                  ? '1px solid rgba(71, 85, 105, 0.5)'
                  : '1px solid rgba(203, 213, 225, 0.5)',
                boxShadow: darkMode 
                  ? '0 20px 50px rgba(0, 0, 0, 0.3)'
                  : '0 20px 50px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: darkMode ? 'white' : '#0f172a',
                  marginBottom: '24px'
                }}>Channel Highlights</h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    'Diverse content covering multiple genres',
                    'Growing community of engaged subscribers',
                    'Regular uploads and consistent quality',
                    'Creative storytelling and production'
                  ].map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '16px'
                    }}>
                      <span style={{
                        color: '#ef4444',
                        fontWeight: 'bold',
                        fontSize: '20px'
                      }}>✓</span>
                      <span style={{ color: darkMode ? '#cbd5e1' : '#334155', fontWeight: '400' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" style={{
          position: 'relative',
          zIndex: 1,
          padding: '80px 16px',
          background: darkMode 
            ? 'rgba(15, 23, 42, 0.3)'
            : 'rgba(255, 255, 255, 0.5)'
        }} className="scroll-reveal">
          <div style={{
            maxWidth: '1152px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: darkMode ? 'white' : '#0f172a',
              marginBottom: '48px',
              background: 'linear-gradient(to right, #ef4444, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Latest Videos</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px'
            }}>
              {videos.map((video) => (
                <a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: darkMode 
                      ? 'rgba(30, 41, 59, 0.5)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '8px',
                    border: darkMode 
                      ? '1px solid rgba(71, 85, 105, 0.5)'
                      : '1px solid rgba(203, 213, 225, 0.5)',
                    
                    cursor: 'pointer',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    textDecoration: 'none',
                    display: 'block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(239, 68, 68, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    position: 'relative',
                    height: '192px',
                    
                    background: '#000'
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
                      width: '60px',
                      height: '60px',
                      background: 'rgba(239, 68, 68, 0.9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s'
                    }}>
                      <Play size={28} color="white" fill="white" />
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: darkMode ? 'white' : '#0f172a',
                      marginBottom: '12px',
                      lineHeight: '1.4'
                    }}>{video.title}</h3>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        fontSize: '14px',
                        color: darkMode ? '#94a3b8' : '#475569',
                        fontWeight: '500'
                      }}>Watch on YouTube</span>
                      <ExternalLink size={18} color={darkMode ? '#94a3b8' : '#475569'} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div style={{
              marginTop: '48px',
              textAlign: 'center'
            }}>
              <a
                href="https://www.youtube.com/@GARVIT_MORE_THING"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: darkMode 
                    ? '1px solid rgba(71, 85, 105, 0.5)'
                    : '1px solid rgba(203, 213, 225, 0.5)',
                  color: darkMode ? 'white' : '#0f172a',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  background: darkMode 
                    ? 'rgba(51, 65, 85, 0.5)'
                    : 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.background = darkMode ? 'rgba(71, 85, 105, 0.5)' : 'rgba(241, 245, 249, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = darkMode ? 'rgba(51, 65, 85, 0.5)' : 'rgba(255, 255, 255, 0.8)';
                }}
              >
                View All Videos on YouTube
              </a>
            </div>
          </div>
        </section>

        {/* AI Chatbots Section */}
        <section id="chatbots" style={{
          position: 'relative',
          zIndex: 1,
          padding: '80px 16px'
        }} className="scroll-reveal">
          <div style={{
            maxWidth: '1152px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: darkMode ? 'white' : '#0f172a',
                marginBottom: '16px',
                background: 'linear-gradient(to right, #ef4444, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>AI Chatbots</h2>
              <p style={{
                fontSize: '20px',
                color: darkMode ? '#cbd5e1' : '#334155',
                maxWidth: '700px',
                margin: '0 auto',
                fontWeight: '400'
              }}>
                Interact with my AI-powered chatbots designed to help you with various tasks and provide intelligent assistance.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '32px'
            }}>
              {chatbots.map((bot) => (
                <div
                  key={bot.id}
                  style={{
                    background: darkMode 
                      ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(241, 245, 249, 0.95))',
                    borderRadius: '16px',
                    padding: '32px',
                    border: darkMode 
                      ? '1px solid rgba(71, 85, 105, 0.5)'
                      : '1px solid rgba(203, 213, 225, 0.5)',
                    boxShadow: darkMode 
                      ? '0 20px 50px rgba(0, 0, 0, 0.3)'
                      : '0 20px 50px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s, box-shadow 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(168, 85, 247, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = darkMode ? '0 20px 50px rgba(0, 0, 0, 0.3)' : '0 20px 50px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '24px'
                  }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      background: `linear-gradient(135deg, ${bot.color})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)'
                    }}>
                      {bot.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: darkMode ? 'white' : '#0f172a',
                        marginBottom: '4px',
                        lineHeight: '1.3'
                      }}>{bot.name}</h3>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#a855f7',
                        fontSize: '14px'
                      }}>
                        <Sparkles size={14} />
                        <span>AI Powered</span>
                      </div>
                    </div>
                  </div>

                  <p style={{
                    color: darkMode ? '#cbd5e1' : '#334155',
                    marginBottom: '24px',
                    lineHeight: '1.6',
                    fontSize: '16px',
                    fontWeight: '400'
                  }}>
                    {bot.description}
                  </p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px',
                    marginBottom: '24px'
                  }}>
                    {bot.features.map((feature, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: darkMode ? '#94a3b8' : '#475569',
                          fontSize: '14px'
                        }}
                      >
                        <span style={{ color: '#a855f7' }}>✓</span>
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
                      gap: '8px',
                      background: `linear-gradient(135deg, ${bot.color})`,
                      color: 'white',
                      padding: '14px 24px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '16px',
                      boxShadow: '0 10px 25px rgba(168, 85, 247, 0.4)',
                      transition: 'all 0.3s',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(168, 85, 247, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(168, 85, 247, 0.4)';
                    }}
                  >
                    <MessageSquare size={20} />
                    Chat Now
                  </a>

                  <p style={{
                    textAlign: 'center',
                    color: '#64748b',
                    fontSize: '12px',
                    marginTop: '16px'
                  }}>
                    Developed by Garvit Sharma
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '48px',
              textAlign: 'center',
              padding: '32px',
              background: 'rgba(168, 85, 247, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(168, 85, 247, 0.3)'
            }}>
              <Bot size={48} color="#a855f7" style={{ marginBottom: '16px' }} />
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: darkMode ? 'white' : '#0f172a',
                marginBottom: '12px'
              }}>More Chatbots Coming Soon!</h3>
              <p style={{
                color: darkMode ? '#cbd5e1' : '#334155',
                fontSize: '16px',
                fontWeight: '400'
              }}>
                I'm working on creating more AI assistants to help you with different aspects of life and productivity.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{
          position: 'relative',
          zIndex: 1,
          padding: '80px 16px',
          background: darkMode 
            ? 'rgba(15, 23, 42, 0.3)'
            : 'rgba(255, 255, 255, 0.5)'
        }} className="scroll-reveal">
          <div style={{
            maxWidth: '1152px',
            margin: '0 auto'
          }}>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: darkMode ? 'white' : '#0f172a',
                marginBottom: '24px',
                background: 'linear-gradient(to right, #ef4444, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Get In Touch</h2>
              <p style={{
                fontSize: '20px',
                color: darkMode ? '#cbd5e1' : '#334155',
                marginBottom: '48px',
                fontWeight: '400'
              }}>
                Have a collaboration idea or just want to say hello? I'd love to hear from you!
              </p>
              
              {/* Social Media Links */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '32px',
                marginBottom: '32px'
              }}>
                <a
                  href="https://www.youtube.com/@GARVIT_MORE_THING"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#ef4444',
                    fontSize: '18px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Youtube size={24} />
                  YouTube
                </a>

                <a
                  href="https://instagram.com/iamthesharma29"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#a855f7',
                    fontSize: '18px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Instagram size={24} />
                  Instagram
                </a>

                <a
                  href="https://twitter.com/FighterSho97816"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#3b82f6',
                    fontSize: '18px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Twitter size={24} />
                  Twitter
                </a>

                <a
                  href="mailto:fightershooter3@gmail.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: darkMode ? '#cbd5e1' : '#334155',
                    fontSize: '18px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = darkMode ? 'rgba(203, 213, 225, 0.1)' : 'rgba(51, 65, 85, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Mail size={24} />
                  Email
                </a>
              </div>

              <p style={{
                fontSize: '14px',
                color: darkMode ? '#94a3b8' : '#64748b',
                marginTop: '24px'
              }}>
                Click on any platform to connect with me!
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          background: darkMode 
            ? 'rgba(15, 23, 42, 0.8)'
            : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          borderTop: darkMode 
            ? '1px solid rgba(71, 85, 105, 0.5)'
            : '1px solid rgba(203, 213, 225, 0.5)',
          color: darkMode ? 'white' : '#0f172a',
          padding: '48px 16px'
        }}>
          <div style={{
            maxWidth: '1152px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
              marginBottom: '32px'
            }}>
              <div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ fontSize: '24px' }}>🎬</span>
                  <span style={{
                    background: 'linear-gradient(to right, #ef4444, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Garvit More Things</span>
                </h3>
                <p style={{ color: darkMode ? '#94a3b8' : '#475569' }}>
                  Creating diverse content for everyone. Any Thing! You Want.
                </p>
              </div>
              <div>
                <h4 style={{
                  fontWeight: '600',
                  marginBottom: '16px'
                }}>Quick Links</h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  color: darkMode ? '#94a3b8' : '#475569'
                }}>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="/about" style={{ color: darkMode ? '#94a3b8' : '#475569', textDecoration: 'none', cursor: 'pointer' }}>About</a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#videos" style={{ color: darkMode ? '#94a3b8' : '#475569', textDecoration: 'none', cursor: 'pointer' }}>Videos</a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#chatbots" style={{ color: darkMode ? '#94a3b8' : '#475569', textDecoration: 'none', cursor: 'pointer' }}>AI Chatbots</a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="#contact" style={{ color: darkMode ? '#94a3b8' : '#475569', textDecoration: 'none', cursor: 'pointer' }}>Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 style={{
                  fontWeight: '600',
                  marginBottom: '16px'
                }}>Connect</h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  color: darkMode ? '#94a3b8' : '#475569'
                }}>
                  <li style={{ marginBottom: '8px' }}>
                    <a
                      href="https://www.youtube.com/@GARVIT_MORE_THING"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: darkMode ? '#94a3b8' : '#475569', textDecoration: 'none', cursor: 'pointer' }}
                    >
                      YouTube
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="https://instagram.com/iamthesharma29" target="_blank" rel="noopener noreferrer" style={{ color: darkMode ? '#94a3b8' : '#475569', textDecoration: 'none', cursor: 'pointer' }}>
                      Instagram
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="https://twitter.com/FighterSho97816" target="_blank" rel="noopener noreferrer" style={{ color: darkMode ? '#94a3b8' : '#475569', textDecoration: 'none', cursor: 'pointer' }}>
                      Twitter
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="mailto:fightershooter3@gmail.com" style={{ color: darkMode ? '#94a3b8' : '#475569', textDecoration: 'none', cursor: 'pointer' }}>
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{
              borderTop: darkMode 
                ? '1px solid rgba(71, 85, 105, 0.5)'
                : '1px solid rgba(203, 213, 225, 0.5)',
              paddingTop: '32px',
              textAlign: 'center',
              color: darkMode ? '#94a3b8' : '#64748b'
            }}>
              <p>© 2025 Garvit More Things. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes neonGlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes borderPulse {
          0%, 100% {
            box-shadow: 0 0 30px rgba(239, 68, 68, 0.6), 0 0 60px rgba(168, 85, 247, 0.4), 0 0 90px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(239, 68, 68, 0.8), 0 0 80px rgba(168, 85, 247, 0.6), 0 0 120px rgba(59, 130, 246, 0.5);
          }
        }
      `}</style>

      {/* Scroll Reveal Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const reveals = document.querySelectorAll('.scroll-reveal');
            
            const revealOnScroll = () => {
              reveals.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                  element.classList.add('revealed');
                }
              });
            };
            
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();
          });
        `
      }} />
    </div>
  );
}
