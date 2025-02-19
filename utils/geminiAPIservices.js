import { GoogleGenerativeAI } from "@google/generative-ai";

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

export async function getAiAssistanceForCode(
  error,
  question,
  code,
  testCase,
  isLogicalError
) {
  const promptForNormalError = `A user has written the following code to solve the following problem
  Problem: ${question}
  Code:
  ${code} 
  The user is facing the following error for the following test case 
  Test Case: 
  Input: ${testCase.input} 
  Expected Output: ${testCase.expectedOutput} 
  Error faced: ${error} 
  Please communicate to the user what the error means (in 1 or 2 sentences) and provide subtle hints(1 or 2 hints) to get rid of the error.
  Note that this a learning platform so do not generate the code for the user but help the user to learn. 
  Keep it brief and to the point, also take care of the formatting.`;

  const promptForLogicalErrors = `A user has written the following code to solve the following problem
  Problem: ${question}
  Code:
  ${code}
  The user is getting the following output for the following test case
  
  test case input: ${testCase.input}
  
  user's output: ${testCase.actualOutput}
  
  But the expected output is 
  test case expected output: ${testCase.expectedOutput}

  Please help the user why this is happening by providing subtle hints and debugging tips(if required).
  Note that this a learning platform so do not generate the code for the user but help the user to learn.
  Keep it brief and to the point, also take care of the formatting.`;

  if (isLogicalError) {
    return await getAiResponse(promptForLogicalErrors);
  }
  return await getAiResponse(promptForNormalError);
}
