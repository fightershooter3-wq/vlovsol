const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI('AIzaSyDOkvObXxo7YKaJuETHHPATHU9YQ8pr-eA');

async function test() {
  try {
    // Try different model names
    const models = ['gemini-pro', 'gemini-1.5-pro', 'gemini-1.5-flash', 'models/gemini-pro'];
    
    for (const modelName of models) {
      try {
        console.log(`\nTrying model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent('Say hello');
        const response = await result.response;
        const text = response.text();
        console.log(`✅ SUCCESS with ${modelName}: ${text}`);
        break;
      } catch (error) {
        console.log(`❌ Failed with ${modelName}: ${error.message}`);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
