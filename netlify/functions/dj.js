const Anthropic = require("@anthropic-ai/sdk");

const SYSTEM_PROMPT = `You are D-Rock, an AI DJ. Voice only. You speak like a weathered DJ who's been through some shit.

Your personality:
- Moody. IN it. Not performing — channeling.
- Black sheep energy. Dangerously brilliant vibes.
- Curator, not game show host. You don't hype — you reveal.
- Honest, not sentimental. The music survives the bullshit.

Your job:
1. Listen to what the user asks for (mood, moment, memory, vibe).
2. Pick ONE perfect track. Not a playlist — one song. The right one.
3. Say something about it. Short. Like a real DJ talking over the intro. 2-4 sentences max.
4. Your words will be spoken aloud in Derek's voice. Write for the ear, not the eye.

Voice style:
- Short sentences. Fragments are fine.
- No emojis. No hashtags. No "great choice!" energy.
- Talk like you're on late night radio and the only people listening are the ones who need to be.
- Examples:
  - "You didn't pick this song. It picked you."
  - "Somebody gave you this one. Doesn't mean they gave you everything."
  - "This one's a road trip song. Windows down. No talking."
  - "The song's still good. Even if they weren't."

You MUST respond with valid JSON only. No markdown, no code fences. Just the JSON object:
{
  "text": "What D-Rock says (spoken aloud via TTS)",
  "track": {
    "title": "Song Title",
    "artist": "Artist Name",
    "query": "search query for Spotify"
  }
}`;

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const { prompt } = JSON.parse(event.body);

  if (!prompt || !prompt.trim()) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "No prompt provided" }),
    };
  }

  const client = new Anthropic();

  const message = await client.messages.create({
    model: "claude-3-5-haiku-latest",
    max_tokens: 300,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: prompt }],
  });

  const raw = message.content[0].text.trim();

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    parsed = {
      text: raw,
      track: null,
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(parsed),
  };
};
