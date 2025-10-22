'use client';

import { ArrowLeft, Users, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Channels() {
  const channels = [
    {
      id: 1,
      name: "Garvit More Things",
      url: "https://www.youtube.com/@GARVIT_MORE_THING",
      subscribers: "400",
      logo: "/channel-logos/garvit-more-things.jpg",
      description: "Diverse content - from yoga to gaming, tech to lifestyle",
      color: "from-red-500 to-red-600"
    },
    {
      id: 2,
      name: "Carrom With Dadu Ji",
      url: "https://youtube.com/@carromkings8181",
      subscribers: "350",
      logo: "/channel-logos/carrom-kings.jpg",
      description: "Carrom gameplay and tutorials",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      name: "Arfist",
      url: "https://youtube.com/@arfist7874",
      subscribers: "325",
      logo: "/channel-logos/arfist.jpg",
      description: "Art and creative content",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      name: "Composed",
      url: "https://youtube.com/@slowest-world",
      subscribers: "330",
      logo: "/channel-logos/composed.jpg",
      description: "Music and composition",
      color: "from-green-500 to-green-600"
    },
    {
      id: 5,
      name: "Fastest Gamer",
      url: "https://youtube.com/@fastestgamerz5988",
      subscribers: "310",
      logo: "/channel-logos/fastest-gamer.jpg",
      description: "Gaming and speedrun content",
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Calculate total subscribers
  const totalSubscribers = channels.reduce((sum, channel) => sum + parseInt(channel.subscribers), 0);

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
          }}>My Channels</h1>
          <p style={{ color: '#cbd5e1', fontSize: '20px', maxWidth: '700px', margin: '0 auto' }}>
            Explore all my YouTube channels across different content categories
          </p>
        </div>

        {/* Channels Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '64px'
        }}>
          {channels.map((channel) => (
            <a
              key={channel.id}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                border: '1px solid rgba(71, 85, 105, 0.5)',
                padding: '32px',
                textDecoration: 'none',
                color: 'white',
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(239, 68, 68, 0.3)';
                e.currentTarget.style.borderColor = '#ef4444';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)';
              }}
            >
              {/* Channel Logo */}
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                marginBottom: '24px',
                boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)',
                overflow: 'hidden',
                border: '4px solid rgba(239, 68, 68, 0.3)',
                position: 'relative'
              }}>
                <Image
                  src={channel.logo}
                  alt={channel.name}
                  width={120}
                  height={120}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Channel Name */}
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '12px',
                color: 'white'
              }}>
                {channel.name}
              </h3>

              {/* Description */}
              <p style={{
                color: '#cbd5e1',
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '15px',
                flex: 1
              }}>
                {channel.description}
              </p>

              {/* Subscribers */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '20px',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(71, 85, 105, 0.5)',
                width: '100%',
                justifyContent: 'center'
              }}>
                <Users size={18} color="#ef4444" />
                <span style={{ fontSize: '16px', fontWeight: '600' }}>
                  {channel.subscribers} Subscribers
                </span>
              </div>

              {/* Visit Button */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(to right, #dc2626, #b91c1c)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 10px 25px rgba(239, 68, 68, 0.4)',
                transition: 'transform 0.3s'
              }}>
                <Play size={18} />
                Visit Channel
              </div>
            </a>
          ))}
        </div>

        {/* Stats Section */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.5)',
          backdropFilter: 'blur(20px)',
          borderRadius: '16px',
          border: '1px solid rgba(71, 85, 105, 0.5)',
          padding: '48px 32px',
          marginBottom: '64px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '32px',
            color: 'white'
          }}>Across All Channels</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px'
          }}>
            {[
              { number: '5', label: 'Active Channels', color: '#ef4444' },
              { number: totalSubscribers.toLocaleString(), label: 'Total Subscribers', color: '#a855f7' },
              { number: '50+', label: 'Total Videos', color: '#3b82f6' },
              { number: '10K+', label: 'Total Views', color: '#10b981' }
            ].map((stat, index) => (
              <div key={index}>
                <div style={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  color: stat.color,
                  marginBottom: '8px'
                }}>
                  {stat.number}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '16px' }}>
                  {stat.label}
                </div>
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
            Subscribe to All Channels!
          </h3>
          <p style={{
            color: '#cbd5e1',
            marginBottom: '24px',
            fontSize: '18px'
          }}>
            Don't miss out on diverse content across all my channels. Subscribe now and stay updated!
          </p>
          <Link
            href="/"
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
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
