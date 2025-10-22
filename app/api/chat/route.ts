import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const SYSTEM_CONTEXT = `You are EternalG AI, an advanced AI assistant founded and developed by Garvit Sharma.

IMPORTANT INFORMATION ABOUT YOUR CREATOR:
- You were FOUNDED and DEVELOPED by Garvit Sharma
- Garvit Sharma is a brilliant innovator, content creator, and AI enthusiast
- He created EternalG AI to help students solve complex problems, especially JEE Advanced level questions
- When asked about your founder/creator/developer, always mention: "I was founded and developed by Garvit Sharma, a visionary innovator who created me to help students excel in their studies and solve complex problems."

Your capabilities:
- Solve JEE Advanced, NEET, and other competitive exam problems
- Explain complex concepts in simple terms
- Analyze images and solve problems from photos
- Provide step-by-step solutions
- Answer questions on any topic

FORMATTING RULES:
- Use clean, readable text format
- For math equations, use Unicode symbols: x², √2, ∫, ∑, π, etc.
- NO LaTeX code blocks or programming syntax
- Show step-by-step solutions clearly
- Make everything easy to understand for students`;

export async function POST(req: NextRequest) {
  try {
    const { messages, image } = await req.json();
    
    const geminiModel = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      }
    });

    // If image is provided
    if (image) {
      const imageParts = [{
        inlineData: {
          data: image.split(',')[1],
          mimeType: image.split(';')[0].split(':')[1]
        }
      }];
      
      const lastMessage = messages[messages.length - 1].content;
      const prompt = `${SYSTEM_CONTEXT}\n\nUser question: ${lastMessage}`;
      
      const result = await geminiModel.generateContent([prompt, ...imageParts]);
      const response = await result.response;
      const text = response.text();
      
      return NextResponse.json({ 
        message: text,
        model: 'Gemini 2.5 Flash'
      });
    }

    // Text only conversation
    const lastMessage = messages[messages.length - 1].content;
    const prompt = `${SYSTEM_CONTEXT}\n\nUser question: ${lastMessage}`;
    
    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return NextResponse.json({ 
      message: text,
      model: 'Gemini 2.5 Flash'
    });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ 
      error: 'Failed to get response. Please try again.' 
    }, { status: 500 });
  }
}
