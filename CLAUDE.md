# CLAUDE.md — D-Rock

**Last updated:** January 20, 2026
**Status:** Initial setup
**Vibe:** Linguistic synthesizer, lyric exploration, typographic bonanza

---

## What Is This

D-Rock is a creative typography playground that synthesizes music, lyrics, and visual experimentation. It pulls from Spotify (what's playing, top tracks, audio features) and Genius (lyrics, annotations) to create a living, breathing word space.

This is not a professional bio. This is the other side — where words move, lyrics hit, and typography does things it's not supposed to do.

---

## Architecture

### Stack (Planned)
| Component | Technology | Notes |
|-----------|------------|-------|
| Frontend | HTML/CSS/JS | Typography-first, experimental |
| Hosting | Netlify | Same pattern as claudewill.io |
| APIs | Spotify Web API | Currently playing, top tracks, audio features |
| | Genius API | Lyrics, annotations |
| Auth | Spotify OAuth | For personalized data |

### Integrations

**Spotify Web API:**
- Currently playing track
- Recently played
- Top artists/tracks (short, medium, long term)
- Audio features (energy, valence, tempo, danceability)
- Playlists

**Genius API:**
- Lyrics lookup by track
- Annotations (the stories behind the lines)
- Artist info

---

## Vision

### The Experience
- Show what D-Rock is listening to right now
- Pull lyrics and display them typographically
- Use audio features to drive visual styling (high energy = bold, low valence = muted)
- Let words breathe, stack, collide, animate
- Curated lines that hit different

### Aesthetic
- Kinetic typography where it serves the words
- Not motion for motion's sake
- Print-poster energy meets web capabilities
- Dark mode default
- Monospace meets display type

---

## Commands

```bash
# Terminal workflow
d-rock           # Start Claude Code session (default)
d-rock help      # Show available modes

# Development
netlify dev      # Local development
```

---

## Session Continuity

Same pattern as claudewill.io:
1. **Start of session** — Read SESSION_CLOSEOUT.md
2. **During session** — Work normally
3. **End of session** — Update SESSION_CLOSEOUT.md

---

## Key Files

| File | Purpose |
|------|---------|
| CLAUDE.md | Project instructions (this file) |
| SESSION_CLOSEOUT.md | Session history |
| index.html | Main page |
| netlify/functions/ | API handlers (Spotify, Genius) |

---

## API Setup (TODO)

### Spotify
1. Create app at https://developer.spotify.com/dashboard
2. Set redirect URI
3. Get Client ID and Client Secret
4. Store in Netlify env vars

### Genius
1. Create app at https://genius.com/api-clients
2. Get access token
3. Store in Netlify env vars

---

## Roadmap

| Phase | What |
|-------|------|
| 1 | Basic page, Spotify auth flow, "now playing" |
| 2 | Genius lyrics integration |
| 3 | Typography experiments, audio feature styling |
| 4 | Curated lyrics collection, personal favorites |

---

*"Words hit different when they move."* — D-Rock
