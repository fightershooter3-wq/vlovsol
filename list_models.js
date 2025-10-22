const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI('AIzaSyDOkvObXxo7YKaJuETHHPATHU9YQ8pr-eA');

async function listModels() {
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyDOkvObXxo7YKaJuETHHPATHU9YQ8pr-eA');
    const data = await response.json();
    console.log('Available models:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
}

listModels();
