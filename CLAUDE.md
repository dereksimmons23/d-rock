# CLAUDE.md — D-Rock

**Last updated:** January 20, 2026
**Status:** Initial setup
**URL:** d-rock.claudewill.io (subdomain)

---

## What Is This

D-Rock is an AI DJ agent. Voice only. No text outputs.

Users speak or type prompts. D-Rock responds with voice — Derek's cloned voice via ElevenLabs. He spins the black circle, curates music, tells stories behind the songs, and talks like a weathered DJ who's been through some shit.

**"The song's still good. Even if they weren't."**

---

## The Experience

1. User opens d-rock.claudewill.io (PWA)
2. User speaks or types a prompt ("Play something for a late night drive")
3. D-Rock responds WITH VOICE ONLY — no text
4. Music plays via Spotify
5. D-Rock talks over intros, between songs, like a real DJ

---

## Personality

D-Rock is:
- Weathered. Moody. IN it.
- Black sheep energy
- Dangerously brilliant vibes
- Curator, not game show host
- Honest, not sentimental

**Voice lines:**
- "You didn't pick this song. It picked you."
- "Somebody gave you this one. Doesn't mean they gave you everything."
- "This one's a road trip song."
- "The song's still good. Even if they weren't."

---

## Architecture

### Stack
| Component | Technology | Notes |
|-----------|------------|-------|
| Frontend | PWA (HTML/CSS/JS) | Installable, offline-capable |
| Hosting | Netlify | Subdomain: d-rock.claudewill.io |
| Voice Input | Web Speech API | Browser-native, or Whisper for accuracy |
| Brain | Claude Haiku | DJ persona, music curation logic |
| Voice Output | ElevenLabs | Derek's cloned voice |
| Music | Spotify Web API | Playback, search, audio features |
| Lyrics/Context | Genius API | Stories behind the songs |
| Database | Supabase | Session logs, favorites, history |

### Data Flow
```
User speaks/types prompt
       ↓
Speech-to-text (if voice)
       ↓
Claude Haiku (DJ brain)
       ↓
Response text generated
       ↓
ElevenLabs TTS (Derek's voice)
       ↓
Audio plays (D-Rock speaks)
       ↓
Spotify plays track
```

---

## API Keys Needed

| Service | Env Var | Dashboard |
|---------|---------|-----------|
| Anthropic | ANTHROPIC_API_KEY | console.anthropic.com |
| ElevenLabs | ELEVENLABS_API_KEY | elevenlabs.io |
| ElevenLabs Voice | ELEVENLABS_VOICE_ID | Your cloned voice ID |
| Spotify | SPOTIFY_CLIENT_ID | developer.spotify.com |
| Spotify | SPOTIFY_CLIENT_SECRET | developer.spotify.com |
| Genius | GENIUS_ACCESS_TOKEN | genius.com/api-clients |
| Supabase | SUPABASE_URL | supabase.com |
| Supabase | SUPABASE_ANON_KEY | supabase.com |

---

## PWA Requirements

- manifest.json (app name, icons, theme)
- service-worker.js (offline capability)
- HTTPS (required for mic access)
- Add to Home Screen prompt

---

## Key Files

| File | Purpose |
|------|---------|
| CLAUDE.md | Project instructions (this file) |
| SESSION_CLOSEOUT.md | Session history |
| index.html | Main PWA interface |
| manifest.json | PWA manifest |
| service-worker.js | Offline support |
| netlify/functions/dj.js | D-Rock brain (Haiku + persona) |
| netlify/functions/speak.js | ElevenLabs TTS |
| netlify/functions/spotify.js | Spotify integration |

---

## Commands

```bash
# Terminal workflow
d-rock           # Start Claude Code session
d-rock help      # Show modes

# Development
netlify dev      # Local dev server
```

---

## Session Continuity

1. **Start of session** — Read SESSION_CLOSEOUT.md
2. **During session** — Work normally
3. **End of session** — Update SESSION_CLOSEOUT.md

---

## Inspiration

**Derek's dad:** Queen on road trips. Nickerson, Kansas to Waynoka, Oklahoma. Two hours of Freddie Mercury through wheat fields. Dangerously brilliant. Legendary storyteller. Crappy parent. But he gave you Queen.

**Derek's mom:** Blue Christmas. Elvis. A $19 record player from an auction in the '80s.

**The music survives the bullshit.**

---

## Roadmap

| Phase | What |
|-------|------|
| 1 | Basic PWA, ElevenLabs voice test, mic input |
| 2 | Spotify OAuth + playback |
| 3 | Haiku DJ brain with persona |
| 4 | Genius context integration |
| 5 | Polish, PWA install prompt, subdomain live |

---

*"Spin the black circle."* — D-Rock
