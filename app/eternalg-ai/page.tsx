'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Mic, Image as ImageIcon, Sparkles, ArrowLeft, Trash2, Copy, Volume2, Camera } from 'lucide-react';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  model?: string;
  image?: string;
}

export default function EternalGAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I am EternalG AI, powered by Google Gemini 2.5 Flash. I can help you solve JEE Advanced problems, explain complex concepts, and answer any questions. Upload images or take photos of your doubts!\n\n✨ Founded by Garvit Sharma',
      model: 'EternalG AI'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Speech Recognition Setup
  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert('Voice input not supported in your browser');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() && !selectedImage) return;

    const userMessage: Message = {
      role: 'user',
      content: input || 'Please explain this image',
      image: selectedImage || undefined
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    const imageToSend = selectedImage;
    setSelectedImage(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          })),
          image: imageToSend
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        model: data.model
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, I encountered an error. Please try again.`,
        model: 'Error'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{
      role: 'assistant',
      content: 'Chat cleared! How can I help you?\n\n✨ Founded by Garvit Sharma',
      model: 'EternalG AI'
    }]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '20px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link href="/" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#10b981',
              textDecoration: 'none',
              fontSize: '14px'
            }}>
              <ArrowLeft size={20} />
              Back
            </Link>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(102, 126, 234, 0.5)'
              }}>
                <Sparkles size={28} />
              </div>
              <div>
                <h1 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  margin: 0,
                  background: 'linear-gradient(to right, #667eea, #764ba2, #f093fb)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  EternalG AI
                </h1>
                <p style={{
                  fontSize: '12px',
                  color: '#94a3b8',
                  margin: 0
                }}>
                  Powered by Gemini 2.5 Flash • Founded by Garvit Sharma
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={clearChat}
            style={{
              padding: '8px 16px',
              background: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid rgba(239, 68, 68, 0.5)',
              borderRadius: '8px',
              color: '#ef4444',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px'
            }}
          >
            <Trash2 size={16} />
            Clear
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '24px 16px',
        maxWidth: '1000px',
        width: '100%',
        margin: '0 auto'
      }}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              marginBottom: '24px',
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start'
            }}
          >
            {/* Avatar */}
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: message.role === 'user' 
                ? 'linear-gradient(135deg, #3b82f6, #2563eb)'
                : 'linear-gradient(135deg, #667eea, #764ba2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: message.role === 'assistant' ? '0 0 20px rgba(102, 126, 234, 0.5)' : 'none'
            }}>
              {message.role === 'user' ? '👤' : <Sparkles size={20} />}
            </div>

            {/* Message Content */}
            <div style={{ flex: 1 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px'
              }}>
                <span style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: message.role === 'user' ? '#3b82f6' : '#667eea'
                }}>
                  {message.role === 'user' ? 'You' : 'EternalG AI'}
                </span>
                {message.model && (
                  <span style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    background: 'rgba(102, 126, 234, 0.2)',
                    borderRadius: '4px',
                    color: '#a78bfa'
                  }}>
                    {message.model}
                  </span>
                )}
              </div>
              
              {message.image && (
                <img
                  src={message.image}
                  alt="User upload"
                  style={{
                    maxWidth: '300px',
                    maxHeight: '300px',
                    borderRadius: '8px',
                    marginBottom: '12px',
                    border: '2px solid rgba(59, 130, 246, 0.3)'
                  }}
                />
              )}
              
              <div style={{
                background: message.role === 'user' 
                  ? 'rgba(59, 130, 246, 0.1)'
                  : 'rgba(102, 126, 234, 0.1)',
                padding: '16px',
                borderRadius: '12px',
                border: `1px solid ${message.role === 'user' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(102, 126, 234, 0.3)'}`,
                fontSize: '15px',
                lineHeight: '1.6',
                color: '#e2e8f0',
                whiteSpace: 'pre-wrap'
              }}>
                {message.content}
              </div>

              {message.role === 'assistant' && (
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  marginTop: '8px'
                }}>
                  <button
                    onClick={() => copyToClipboard(message.content)}
                    style={{
                      padding: '6px 12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '6px',
                      color: '#94a3b8',
                      cursor: 'pointer',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Copy size={14} />
                    Copy
                  </button>
                  <button
                    onClick={() => speakText(message.content)}
                    style={{
                      padding: '6px 12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '6px',
                      color: '#94a3b8',
                      cursor: 'pointer',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Volume2 size={14} />
                    Speak
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'pulse 2s infinite'
            }}>
              <Sparkles size={20} />
            </div>
            <div style={{
              background: 'rgba(102, 126, 234, 0.1)',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid rgba(102, 126, 234, 0.3)'
            }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#667eea',
                  animation: 'bounce 1s infinite'
                }} />
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#667eea',
                  animation: 'bounce 1s infinite 0.2s'
                }} />
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#667eea',
                  animation: 'bounce 1s infinite 0.4s'
                }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '20px 16px',
        position: 'sticky',
        bottom: 0
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {selectedImage && (
            <div style={{
              marginBottom: '12px',
              position: 'relative',
              display: 'inline-block'
            }}>
              <img
                src={selectedImage}
                alt="Upload preview"
                style={{
                  maxWidth: '200px',
                  maxHeight: '200px',
                  borderRadius: '8px',
                  border: '2px solid rgba(102, 126, 234, 0.5)'
                }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(239, 68, 68, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ×
              </button>
            </div>
          )}

          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-end'
          }}>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            
            <input
              type="file"
              ref={cameraInputRef}
              accept="image/*"
              capture="environment"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
              title="Upload Image"
              style={{
                padding: '12px',
                background: 'rgba(102, 126, 234, 0.2)',
                border: '1px solid rgba(102, 126, 234, 0.5)',
                borderRadius: '12px',
                color: '#667eea',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: isLoading ? 0.5 : 1
              }}
            >
              <ImageIcon size={20} />
            </button>

            <button
              onClick={() => cameraInputRef.current?.click()}
              disabled={isLoading}
              title="Take Photo"
              style={{
                padding: '12px',
                background: 'rgba(16, 185, 129, 0.2)',
                border: '1px solid rgba(16, 185, 129, 0.5)',
                borderRadius: '12px',
                color: '#10b981',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: isLoading ? 0.5 : 1
              }}
            >
              <Camera size={20} />
            </button>

            <button
              onClick={toggleVoiceInput}
              disabled={isLoading}
              title="Voice Input"
              style={{
                padding: '12px',
                background: isListening ? 'rgba(239, 68, 68, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                border: `1px solid ${isListening ? 'rgba(239, 68, 68, 0.5)' : 'rgba(102, 126, 234, 0.5)'}`,
                borderRadius: '12px',
                color: isListening ? '#ef4444' : '#667eea',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: isLoading ? 0.5 : 1,
                animation: isListening ? 'pulse 1s infinite' : 'none'
              }}
            >
              <Mic size={20} />
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
              placeholder="Ask anything or upload/take a photo of your doubt..."
              disabled={isLoading}
              style={{
                flex: 1,
                padding: '16px 20px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                color: 'white',
                fontSize: '15px',
                outline: 'none'
              }}
            />

            <button
              onClick={sendMessage}
              disabled={isLoading || (!input.trim() && !selectedImage)}
              style={{
                padding: '16px 24px',
                background: isLoading || (!input.trim() && !selectedImage)
                  ? 'rgba(102, 126, 234, 0.3)'
                  : 'linear-gradient(135deg, #667eea, #764ba2)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                cursor: isLoading || (!input.trim() && !selectedImage) ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '15px',
                fontWeight: '600',
                boxShadow: isLoading || (!input.trim() && !selectedImage) 
                  ? 'none' 
                  : '0 0 20px rgba(102, 126, 234, 0.5)',
                transition: 'all 0.3s'
              }}
            >
              <Send size={18} />
              Send
            </button>
          </div>

          <p style={{
            marginTop: '12px',
            fontSize: '12px',
            color: '#64748b',
            textAlign: 'center'
          }}>
            EternalG AI • Powered by Gemini 2.5 Flash • Founded by Garvit Sharma
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
