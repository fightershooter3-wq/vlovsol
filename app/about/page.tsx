'use client';

import { ArrowLeft, Youtube, Target, Heart, Zap, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      color: 'white',
      padding: '80px 16px'
    }}>
      <div style={{
        maxWidth: '1000px',
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
        }}>About Me</h1>
        
        <p style={{ color: '#94a3b8', marginBottom: '48px', fontSize: '20px' }}>
          Content Creator | YouTuber | AI Enthusiast
        </p>

        {/* Profile Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
          marginBottom: '64px'
        }}>
          <div>
            <div style={{
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '1',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '4px solid #ef4444',
              boxShadow: '0 20px 50px rgba(239, 68, 68, 0.5)',
              margin: '0 auto'
            }}>
              <img
                src="/images/garvit-photo.jpg"
                alt="Garvit Sharma"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '24px',
              color: 'white'
            }}>
              Hi, I'm Garvit Sharma
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#cbd5e1',
              lineHeight: '1.8',
              marginBottom: '16px'
            }}>
              I'm a passionate content creator and the face behind <strong style={{ color: '#ef4444' }}>Garvit More Things</strong>. My journey in content creation started with a simple idea: create diverse, entertaining content that resonates with people from all walks of life.
            </p>
            <p style={{
              fontSize: '18px',
              color: '#cbd5e1',
              lineHeight: '1.8',
              marginBottom: '16px'
            }}>
              With over <strong style={{ color: '#a855f7' }}>380 subscribers</strong> and <strong style={{ color: '#a855f7' }}>32 videos</strong>, I've built a community that appreciates variety and authenticity. My motto is simple: <em>"Any Thing! You Want"</em> - because great content shouldn't be limited to just one category.
            </p>
            <p style={{
              fontSize: '18px',
              color: '#cbd5e1',
              lineHeight: '1.8'
            }}>
              Beyond YouTube, I'm also exploring the world of AI and technology, creating tools like my <strong style={{ color: '#3b82f6' }}>PrimeG AI BOT</strong> to help people improve their digital wellness and productivity.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '64px'
        }}>
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '12px',
            padding: '32px',
            textAlign: 'center'
          }}>
            <Target size={48} color="#ef4444" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>My Mission</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
              To create diverse, high-quality content that entertains, educates, and inspires people to explore new interests and perspectives.
            </p>
          </div>

          <div style={{
            background: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '12px',
            padding: '32px',
            textAlign: 'center'
          }}>
            <Heart size={48} color="#a855f7" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>My Values</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
              Authenticity, creativity, and community. I believe in staying true to myself while constantly evolving and learning from my audience.
            </p>
          </div>

          <div style={{
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '12px',
            padding: '32px',
            textAlign: 'center'
          }}>
            <Zap size={48} color="#3b82f6" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>My Approach</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
              Experiment fearlessly, learn continuously, and never limit creativity to a single box. Diversity is my strength.
            </p>
          </div>
        </div>

        {/* What I Do */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.5)',
          backdropFilter: 'blur(20px)',
          borderRadius: '16px',
          border: '1px solid rgba(71, 85, 105, 0.5)',
          padding: '48px 32px',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '32px',
            textAlign: 'center',
            color: 'white'
          }}>What I Do</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px'
          }}>
            <div>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Youtube size={32} color="white" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>YouTube Content</h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                Creating engaging videos on diverse topics - from lifestyle and yoga to gaming and social awareness campaigns.
              </p>
            </div>

            <div>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #a855f7, #9333ea)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Zap size={32} color="white" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>AI Development</h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                Building AI-powered chatbots and tools to help people improve their productivity and digital wellness.
              </p>
            </div>

            <div>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <TrendingUp size={32} color="white" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>Community Building</h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                Growing an engaged community of viewers who appreciate diverse content and authentic storytelling.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '32px',
            textAlign: 'center',
            color: 'white'
          }}>Milestones & Achievements</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}>
            {[
              { icon: <Youtube size={32} />, number: '380+', label: 'Subscribers' },
              { icon: <Award size={32} />, number: '32', label: 'Videos Published' },
              { icon: <Heart size={32} />, number: '1000+', label: 'Total Views' },
              { icon: <TrendingUp size={32} />, number: '62%', label: 'To YT Partner' }
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(30, 41, 59, 0.5)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '12px',
                  border: '1px solid rgba(71, 85, 105, 0.5)',
                  padding: '32px 24px',
                  textAlign: 'center',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ color: '#ef4444', marginBottom: '12px' }}>{stat.icon}</div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px', color: 'white' }}>
                  {stat.number}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '14px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          padding: '48px 32px',
          background: 'rgba(239, 68, 68, 0.1)',
          borderRadius: '12px',
          border: '1px solid rgba(239, 68, 68, 0.3)'
        }}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: 'white'
          }}>
            Let's Connect!
          </h3>
          <p style={{
            color: '#cbd5e1',
            marginBottom: '24px',
            fontSize: '18px'
          }}>
            Join me on this creative journey. Subscribe, follow, and let's create something amazing together!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                boxShadow: '0 10px 25px rgba(239, 68, 68, 0.5)',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Youtube size={20} />
              Subscribe on YouTube
            </a>
            <Link
              href="/#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
