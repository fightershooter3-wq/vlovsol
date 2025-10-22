'use client';

import { ArrowLeft, Video, Bot, Megaphone, Edit, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: <Video size={40} />,
      title: "Video Content Creation",
      description: "Professional video production for YouTube, social media, and marketing campaigns. From concept to final edit, I bring your vision to life.",
      features: [
        "YouTube video production",
        "Social media content",
        "Promotional videos",
        "Trailer creation"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Bot size={40} />,
      title: "AI Chatbot Development",
      description: "Custom AI-powered chatbots designed to solve specific problems. From productivity tools to customer service bots, I create intelligent solutions.",
      features: [
        "Custom chatbot development",
        "AI integration",
        "Productivity tools",
        "24/7 automated assistance"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Megaphone size={40} />,
      title: "Social Media Management",
      description: "Grow your online presence with strategic content planning, posting schedules, and engagement strategies across multiple platforms.",
      features: [
        "Content strategy",
        "Post scheduling",
        "Audience engagement",
        "Analytics & reporting"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Edit size={40} />,
      title: "Video Editing Services",
      description: "Transform raw footage into polished, professional videos. Expert editing with attention to pacing, color grading, and storytelling.",
      features: [
        "Professional editing",
        "Color grading",
        "Sound design",
        "Motion graphics"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Users size={40} />,
      title: "Content Consultation",
      description: "One-on-one guidance for aspiring content creators. Learn strategies, techniques, and best practices to grow your channel.",
      features: [
        "Channel strategy",
        "Content planning",
        "Growth tactics",
        "Personalized advice"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Sparkles size={40} />,
      title: "Brand Collaborations",
      description: "Partner with me for authentic brand promotions and sponsored content that resonates with my engaged audience.",
      features: [
        "Sponsored videos",
        "Product reviews",
        "Brand integration",
        "Authentic promotion"
      ],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      color: 'white',
      padding: '80px 16px'
    }}>
      <div style={{
        maxWidth: '1200px',
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

        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '16px',
            background: 'linear-gradient(to right, #ef4444, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Services</h1>
          <p style={{ color: '#cbd5e1', fontSize: '20px', maxWidth: '700px', margin: '0 auto' }}>
            Professional content creation and digital services to help you grow your brand and reach your audience
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px',
          marginBottom: '64px'
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                border: '1px solid rgba(71, 85, 105, 0.5)',
                padding: '32px',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(168, 85, 247, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                background: `linear-gradient(135deg, ${service.color})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)'
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: 'white'
              }}>
                {service.title}
              </h3>

              <p style={{
                color: '#cbd5e1',
                marginBottom: '24px',
                lineHeight: '1.6',
                fontSize: '16px'
              }}>
                {service.description}
              </p>

              <div style={{
                borderTop: '1px solid rgba(71, 85, 105, 0.5)',
                paddingTop: '20px'
              }}>
                <h4 style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#94a3b8',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  What's Included:
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '8px',
                      color: '#cbd5e1',
                      fontSize: '15px'
                    }}>
                      <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Me */}
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
          }}>Why Work With Me?</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                title: "Proven Experience",
                description: "380+ subscribers and 32 published videos demonstrate my commitment to quality content."
              },
              {
                title: "Diverse Expertise",
                description: "From yoga to gaming, tech to lifestyle - I understand multiple content niches."
              },
              {
                title: "Fast Turnaround",
                description: "Efficient workflow ensures your projects are completed on time without compromising quality."
              },
              {
                title: "Authentic Approach",
                description: "I believe in genuine storytelling that connects with audiences on a personal level."
              }
            ].map((item, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ef4444, #a855f7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>
                  {index + 1}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginBottom: '12px',
                  color: 'white'
                }}>
                  {item.title}
                </h3>
                <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                  {item.description}
                </p>
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
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: 'white'
          }}>
            Ready to Get Started?
          </h3>
          <p style={{
            color: '#cbd5e1',
            marginBottom: '24px',
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Let's discuss your project and create something amazing together. Reach out today for a free consultation!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:fightershooter3@gmail.com"
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
              Contact Me
            </a>
            <Link
              href="/portfolio"
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
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
