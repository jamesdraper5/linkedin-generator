interface AIResponse {
  choices: { message: { content: string } }[];
}

export default async function fetchGeneratedPostFromAI(
  content: string
): Promise<AIResponse> {
  const prompt: string = `Generate an insightful LinkedIn post about the contents of this blog post: ${content}. It should refer to the blog post directly by saying something like "interesting post here on X" be a maximum of 3 sentences.`;

  const response: Response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPEN_AI_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content:
              "You are an experienced software engineering manager with over 10 years experience. You have a wealth of software engineering knowledge and are an excellent people manager and strategic thinker.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = (await response.json()) as AIResponse;
  return data;
}
