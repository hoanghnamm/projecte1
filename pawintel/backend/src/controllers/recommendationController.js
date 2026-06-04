const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

exports.getRecommendations = async (req, res) => {
  try {
    const { homeSize, lifestyle, activityLevel, climate, familyType } = req.body;
    
    if (!homeSize || !lifestyle || !activityLevel || !climate || !familyType) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const prompt = `You are an expert dog breeder and AI assistant for PawIntel AI Portal.
Based on the following user preferences, recommend exactly 3 suitable dog breeds.
- Home size: ${homeSize}
- Lifestyle: ${lifestyle}
- Activity level: ${activityLevel}
- Climate: ${climate}
- Family type: ${familyType}

Return ONLY a valid JSON array with max 3 objects. Do not include any markdown, backticks, or extra text.
Format each object EXACTLY like this:
{
  "breedName": "Name of breed",
  "score": 95,
  "description": "Short explanation of why it fits (max 2 sentences)",
  "size": "Small/Medium/Large",
  "energyLevel": "Low/Medium/High",
  "trainability": "Low/Medium/High"
}
Make sure it is strictly valid JSON starting with [ and ending with ].`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a JSON-producing AI assistant for dog recommendations. Always output pure, valid JSON.'
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'llama3-8b-8192',
      temperature: 0.3,
    });

    const responseContent = chatCompletion.choices[0]?.message?.content || '[]';
    
    // Parse the JSON (clean up markdown if the LLM leaked any)
    const jsonString = responseContent.replace(/```json\n?|```/g, '').trim();
    const recommendations = JSON.parse(jsonString);

    res.status(200).json({ matches: recommendations });
  } catch (error) {
    console.error('Groq API Error:', error);
    res.status(500).json({ error: 'Failed to generate recommendations. Please check API key or try again later.' });
  }
};
