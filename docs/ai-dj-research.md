# AI DJ Research

Competitive landscape and technical approaches for voice-driven AI DJ experiences.

---

## Spotify AI DJ

**Source:** [Spotify Newsroom](https://newsroom.spotify.com/2023-02-22/spotify-debuts-a-new-ai-dj-right-in-your-pocket/)

### How It Works
- Curates songs from user's listening history
- Delivers commentary in a "remarkably lifelike voice"
- English DJ modeled after Xavier "X" Jernigan (Spotify employee)
- Spanish DJ called "Livi"
- Talks between songs like a real radio DJ

### 2025-2026 Updates
- **Voice requests:** "Talk to DJ" button, handles mood/genre/activity requests
- **Text requests:** Type prompts instead of speaking
- **Android Auto:** In-car DJ experience
- **Spanish language support**
- **Personalized prompts:** Learns preferences over time

### What Makes It Work
- Deep listening history (needs data to personalize)
- Premium only (monetization gate)
- Real personality voice clone (not generic TTS)
- Short, punchy commentary (not verbose)

### Limitations
- Only works with Spotify library
- Requires Premium subscription
- Voice is Spotify's personality, not yours
- Limited control over DJ style/personality

**Source:** [Spotify Research on LLMs](https://research.atspotify.com/2024/12/contextualized-recommendations-through-personalized-narratives-using-llms)

---

## Spotify's LLM Architecture

**Source:** [ZenML LLMOps Database](https://www.zenml.io/llmops-database/llm-powered-personalized-music-recommendations-and-ai-dj-commentary)

### Backbone
- Uses Meta's Llama models (fine-tuned)
- Domain adaptation for music/podcast knowledge
- Human-in-the-loop training
- Multi-task fine-tuning

### Results
- 4x higher user engagement with explanations
- 14% improvement on Spotify-specific tasks
- Deployed at scale using vLLM

### Key Requirements
1. **Broad world knowledge** — music, artists, cultural context
2. **Functional versatility** — function calling, content understanding
3. **Safety** — built-in safeguards
4. **Cultural understanding** — genre expertise, listener alignment

### Commentary Approach
- Music editors craft experiences (not pure AI)
- Genre expertise + cultural insight
- Short, contextual commentary

---

## ElevenLabs for DJ Voice

**Source:** [ElevenLabs Voice Library](https://elevenlabs.io/voice-library/radio-dj-voices)

### Capabilities
- Lifelike DJ commentary and announcements
- Adjustable pitch, rhythm, enthusiasm
- Custom voice cloning (your voice)
- API access for integration

### Customization
- Pitch, speed, volume controls
- Custom accents and dialects
- Fine-tune attributes per use case

### Radio Host Features
- Smooth delivery
- Precise tone and pacing control
- Automate segments, announcements, full shows

### Integration
- 5,000+ voices, 70+ languages
- Secure APIs and SDKs
- Programmable access to voice models

**Source:** [ElevenLabs Developers](https://elevenlabs.io/developers)

---

## DIY AI DJ Architecture

**Source:** [Medium - AI Music Curation](https://medium.com/@astropomeai/ai-music-curation-creating-an-ai-dj-assistant-with-langgraph-studio-and-spotify-api-560a492b7c2b)

### Components
1. **LLM Brain** — Interprets prompts, generates commentary
2. **Spotify API** — Search, playback, audio features
3. **TTS Engine** — Convert commentary to speech
4. **Speech Recognition** — Voice input from user
5. **State Management** — Track conversation, mood, history

### LangGraph Approach
- Build as an agent with tools
- Tools: search_spotify, get_audio_features, get_lyrics, etc.
- State: current_mood, recent_tracks, user_preferences

---

## D-Rock Differentiation

| Feature | Spotify DJ | D-Rock |
|---------|------------|--------|
| Voice | Xavier "X" (Spotify's guy) | Derek's cloned voice |
| Personality | Friendly, upbeat | Weathered, moody, honest |
| Output | Voice + text UI | Voice ONLY |
| Music source | Spotify library | Spotify + curated deep cuts |
| Commentary | Informational | Philosophical, raw |
| Target | Mass market | Personal, intimate |

### D-Rock's Edge
1. **Authentic voice** — Not a generic DJ, YOUR voice
2. **Personality** — Not friendly/upbeat, weathered/real
3. **Voice-only** — Commitment to the medium
4. **Curatorial POV** — "The song's still good. Even if they weren't."
5. **Emotional matching** — Reads vibes, not just genres

---

## Technical Stack for D-Rock

```
User Input (voice/text)
       ↓
Web Speech API / Whisper (STT)
       ↓
Claude Haiku (DJ brain + persona)
   - System prompt with D-Rock personality
   - Tools: spotify_search, genius_lyrics, get_audio_features
       ↓
Response text (DJ commentary)
       ↓
ElevenLabs API (Derek's voice clone)
       ↓
Audio playback (D-Rock speaks)
       ↓
Spotify Web Playback SDK
       ↓
Music plays
```

### Key Technical Decisions

1. **Haiku over Sonnet** — Fast, cheap, good enough for persona
2. **ElevenLabs over browser TTS** — Quality + your actual voice
3. **Web Speech API first** — Free, browser-native, fallback to Whisper
4. **Spotify Web Playback SDK** — In-browser playback, no redirect
5. **Serverless functions** — Keep API keys secure

---

## Open Questions

- [ ] How to handle Spotify Premium requirement for playback?
- [ ] Fallback for non-Premium users? (preview clips only?)
- [ ] How much commentary per song? (intro only? between songs?)
- [ ] Cache ElevenLabs responses for common phrases?
- [ ] Rate limiting strategy for API costs?

---

## Sources

- [Spotify AI DJ Announcement](https://newsroom.spotify.com/2023-02-22/spotify-debuts-a-new-ai-dj-right-in-your-pocket/)
- [Spotify DJ Voice Requests](https://newsroom.spotify.com/2025-05-13/dj-voice-requests/)
- [Spotify DJ Text & Spanish](https://newsroom.spotify.com/2025-10-15/dj-spanish-text-requests-update/)
- [Spotify LLM Research](https://research.atspotify.com/2024/12/contextualized-recommendations-through-personalized-narratives-using-llms)
- [ZenML - Spotify LLM Architecture](https://www.zenml.io/llmops-database/llm-powered-personalized-music-recommendations-and-ai-dj-commentary)
- [ElevenLabs DJ Voices](https://elevenlabs.io/voice-library/radio-dj-voices)
- [ElevenLabs API](https://elevenlabs.io/developers)
- [AI DJ Tools 2026](https://www.zipdj.com/blog/best-ai-dj-tools)
- [Medium - LangGraph AI DJ](https://medium.com/@astropomeai/ai-music-curation-creating-an-ai-dj-assistant-with-langgraph-studio-and-spotify-api-560a492b7c2b)
