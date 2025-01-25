import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function getAiResponse(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);

    // the text is in result.response.text()
    return result.response.text();

  } catch (error) {
    console.error("Error fetching AI response", error);
    throw new Error("Failed to fetch AI response");
  }
}

export async function getAiAssistanceForCode(error, question, code, testCase) {
  const prompt = `A user has written the following code to solve the following problem \n Problem: ${question} \n Code: \n ${code} \n The user is facing the following error for the following test case \n Test Case: \n Input: ${testCase.input} \n Expected Output: ${testCase.expectedOutput}\n Error faced: ${error} \n Please tell the user what the error means (in 1 or 2 sentences) and provide subtle hints (1 or 2 hints) to solve. Note that this a learning platform so do not generate the code for the user but help the user to learn.`;
  return await getAiResponse(prompt);
}
