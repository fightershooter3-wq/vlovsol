'use client';

import { useState } from 'react';
import { ArrowLeft, Sparkles, Zap, Heart, Activity, Droplet, Brain, Eye } from 'lucide-react';
import Link from 'next/link';

export default function FutureDemo() {
  const [activeDesign, setActiveDesign] = useState(1);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)',
      color: 'white',
      padding: '40px 16px',
      position: 'relative'
    }}>
      {/* Animated Background Particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
        animation: 'pulse 4s ease-in-out infinite',
        pointerEvents: 'none'
      }} />

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.5); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#ef4444',
          textDecoration: 'none',
          marginBottom: '32px',
          fontSize: '16px',
          fontWeight: '500',
          padding: '12px 24px',
          background: 'rgba(239, 68, 68, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '50px',
          border: '1px solid rgba(239, 68, 68, 0.3)'
        }}>
          <ArrowLeft size={20} />
          Back to Current Site
        </Link>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: 'bold',
            marginBottom: '16px',
            background: 'linear-gradient(45deg, #ef4444, #a855f7, #3b82f6, #10b981)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'glow 3s ease-in-out infinite'
          }}>
            <Sparkles style={{ display: 'inline', marginRight: '16px' }} size={48} />
            Future Design Concepts
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '24px', maxWidth: '800px', margin: '0 auto' }}>
            Experience the future of web design - Year 2100 Ready! 🚀
          </p>
        </div>

        {/* Design Selector */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          marginBottom: '48px',
          flexWrap: 'wrap'
        }}>
          {[
            { id: 1, name: 'Glassmorphism Hero', icon: '🔮' },
            { id: 2, name: '3D Holographic Cards', icon: '🌟' },
            { id: 3, name: 'Neon Cyberpunk', icon: '⚡' },
            { id: 4, name: 'AI Health Scanner', icon: '🏥' }
          ].map((design) => (
            <button
              key={design.id}
              onClick={() => setActiveDesign(design.id)}
              style={{
                padding: '16px 32px',
                background: activeDesign === design.id 
                  ? 'linear-gradient(135deg, #ef4444, #a855f7)' 
                  : 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(20px)',
                border: activeDesign === design.id 
                  ? '2px solid #ef4444' 
                  : '1px solid rgba(71, 85, 105, 0.5)',
                borderRadius: '50px',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: activeDesign === design.id 
                  ? '0 10px 40px rgba(239, 68, 68, 0.5)' 
                  : 'none'
              }}
            >
              {design.icon} {design.name}
            </button>
          ))}
        </div>

        {/* Design 1: Glassmorphism Hero */}
        {activeDesign === 1 && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(30px)',
            borderRadius: '32px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '64px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            animation: 'float 6s ease-in-out infinite'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              alignItems: 'center'
            }}>
              <div>
                <h2 style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  marginBottom: '24px',
                  background: 'linear-gradient(135deg, #fff, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Ultra-Modern Glassmorphism
                </h2>
                <p style={{ fontSize: '20px', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '32px' }}>
                  Transparent layers with frosted glass effects create depth and sophistication. 
                  This design uses advanced backdrop filters and layering techniques that will still look cutting-edge in 2100!
                </p>
                <div style={{
                  display: 'flex',
                  gap: '16px'
                }}>
                  <div style={{
                    padding: '16px 32px',
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                    borderRadius: '50px',
                    fontWeight: '600',
                    boxShadow: '0 10px 30px rgba(239, 68, 68, 0.5)'
                  }}>
                    Explore More
                  </div>
                  <div style={{
                    padding: '16px 32px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50px',
                    fontWeight: '600'
                  }}>
                    Learn More
                  </div>
                </div>
              </div>
              <div style={{
                position: 'relative',
                height: '400px'
              }}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      top: `${i * 40}px`,
                      left: `${i * 30}px`,
                      width: '300px',
                      height: '200px',
                      background: `rgba(${i * 80}, ${i * 50}, 255, 0.1)`,
                      backdropFilter: 'blur(20px)',
                      borderRadius: '24px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      animation: `float ${4 + i}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Design 2: 3D Holographic Cards */}
        {activeDesign === 2 && (
          <div>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              marginBottom: '48px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              3D Holographic Channel Cards
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}>
              {[
                { name: 'Garvit More Things', color: '#ef4444', icon: '🎬' },
                { name: 'Carrom With Dadu Ji', color: '#3b82f6', icon: '🎯' },
                { name: 'Arfist', color: '#a855f7', icon: '🎨' }
              ].map((channel, i) => (
                <div
                  key={i}
                  style={{
                    background: `linear-gradient(135deg, ${channel.color}20, ${channel.color}10)`,
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    border: `2px solid ${channel.color}40`,
                    padding: '32px',
                    position: 'relative',
                    transform: 'perspective(1000px) rotateY(0deg)',
                    transition: 'all 0.5s',
                    cursor: 'pointer',
                    boxShadow: `0 20px 60px ${channel.color}30`,
                    animation: 'float 5s ease-in-out infinite',
                    animationDelay: `${i * 0.3}s`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(10deg) translateY(-20px)';
                    e.currentTarget.style.boxShadow = `0 30px 80px ${channel.color}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateY(0)';
                    e.currentTarget.style.boxShadow = `0 20px 60px ${channel.color}30`;
                  }}
                >
                  <div style={{
                    fontSize: '64px',
                    marginBottom: '16px',
                    textAlign: 'center'
                  }}>
                    {channel.icon}
                  </div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    textAlign: 'center',
                    color: channel.color
                  }}>
                    {channel.name}
                  </h3>
                  <div style={{
                    textAlign: 'center',
                    color: '#cbd5e1',
                    fontSize: '16px'
                  }}>
                    400+ Subscribers
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '40px',
                    height: '40px',
                    background: channel.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'rotate 3s linear infinite'
                  }}>
                    <Zap size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Design 3: Neon Cyberpunk */}
        {activeDesign === 3 && (
          <div style={{
            background: 'linear-gradient(135deg, #0a0a0a, #1a0a2e)',
            borderRadius: '32px',
            border: '2px solid #ff00ff',
            padding: '64px',
            boxShadow: '0 0 60px rgba(255, 0, 255, 0.5), inset 0 0 60px rgba(0, 255, 255, 0.2)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)',
              pointerEvents: 'none'
            }} />
            <h2 style={{
              fontSize: '56px',
              fontWeight: 'bold',
              marginBottom: '32px',
              textAlign: 'center',
              color: '#ff00ff',
              textShadow: '0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff',
              fontFamily: 'monospace'
            }}>
              &gt; CYBERPUNK_2100.EXE
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginTop: '48px'
            }}>
              {[
                { label: 'SUBSCRIBERS', value: '1,715', color: '#00ffff' },
                { label: 'VIDEOS', value: '80+', color: '#ff00ff' },
                { label: 'CHANNELS', value: '5', color: '#ffff00' }
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(0, 0, 0, 0.8)',
                    border: `2px solid ${stat.color}`,
                    borderRadius: '16px',
                    padding: '32px',
                    textAlign: 'center',
                    boxShadow: `0 0 30px ${stat.color}80`,
                    animation: 'glow 2s ease-in-out infinite',
                    animationDelay: `${i * 0.3}s`
                  }}
                >
                  <div style={{
                    fontSize: '48px',
                    fontWeight: 'bold',
                    color: stat.color,
                    textShadow: `0 0 20px ${stat.color}`,
                    fontFamily: 'monospace',
                    marginBottom: '8px'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    color: '#cbd5e1',
                    fontSize: '14px',
                    fontFamily: 'monospace',
                    letterSpacing: '2px'
                  }}>
                    [{stat.label}]
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Design 4: AI Health Scanner */}
        {activeDesign === 4 && (
          <div>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '24px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #10b981, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              <Activity style={{ display: 'inline', marginRight: '16px' }} size={48} />
              AI Health Scanner Concept
            </h2>
            <p style={{
              textAlign: 'center',
              color: '#cbd5e1',
              fontSize: '20px',
              marginBottom: '48px',
              maxWidth: '800px',
              margin: '0 auto 48px'
            }}>
              Future AI-powered health monitoring system that can detect heart rate, sugar levels, 
              blood pressure, and more using advanced sensors and machine learning algorithms with 99.9% accuracy!
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px'
            }}>
              {[
                { icon: <Heart size={32} />, name: 'Heart Rate', value: '72 BPM', color: '#ef4444', status: 'Normal' },
                { icon: <Droplet size={32} />, name: 'Blood Sugar', value: '95 mg/dL', color: '#3b82f6', status: 'Optimal' },
                { icon: <Activity size={32} />, name: 'Blood Pressure', value: '120/80', color: '#10b981', status: 'Healthy' },
                { icon: <Brain size={32} />, name: 'Stress Level', value: 'Low', color: '#a855f7', status: 'Good' },
                { icon: <Eye size={32} />, name: 'Sleep Quality', value: '8.5/10', color: '#f59e0b', status: 'Excellent' },
                { icon: <Zap size={32} />, name: 'Energy Level', value: '85%', color: '#ec4899', status: 'High' }
              ].map((metric, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(30, 41, 59, 0.5)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    border: `2px solid ${metric.color}40`,
                    padding: '32px',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    animation: 'float 4s ease-in-out infinite',
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: `linear-gradient(90deg, transparent, ${metric.color}, transparent)`,
                    animation: 'pulse 2s ease-in-out infinite'
                  }} />
                  
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: `${metric.color}20`,
                    border: `2px solid ${metric.color}`,
                    marginBottom: '16px',
                    color: metric.color
                  }}>
                    {metric.icon}
                  </div>
                  
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#cbd5e1',
                    marginBottom: '8px'
                  }}>
                    {metric.name}
                  </h3>
                  
                  <div style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: metric.color,
                    marginBottom: '8px'
                  }}>
                    {metric.value}
                  </div>
                  
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    background: `${metric.color}20`,
                    borderRadius: '12px',
                    fontSize: '12px',
                    color: metric.color,
                    fontWeight: '600'
                  }}>
                    {metric.status}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '48px',
              padding: '32px',
              background: 'rgba(16, 185, 129, 0.1)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '2px solid rgba(16, 185, 129, 0.3)',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#10b981',
                marginBottom: '16px'
              }}>
                🤖 AI-Powered Health Analysis
              </h3>
              <p style={{
                color: '#cbd5e1',
                fontSize: '16px',
                lineHeight: '1.8'
              }}>
                This AI health scanner would use advanced machine learning algorithms, 
                computer vision, PPG (photoplethysmography) sensors, and multi-modal sensor fusion 
                to provide accurate real-time health metrics with 99.9% accuracy. 
                It could integrate with smartphone cameras, wearable devices, and IoT sensors 
                to monitor your health 24/7 and predict potential health issues before they occur!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
