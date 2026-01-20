# Visual Features Research

What needs an API vs what Claude Code can build.

---

## Summary: Build vs API

| Feature | Approach | Why |
|---------|----------|-----|
| Audio-reactive visuals | **BUILD** | Web Audio API + Three.js/Canvas |
| Animated typography | **BUILD** | GSAP/Anime.js + Splitting.js |
| Ambient backgrounds | **BUILD** | WebGL shaders, tsParticles |
| Gradient animations | **BUILD** | balatroShader.js, custom GLSL |
| Particle effects | **BUILD** | tsParticles (free, customizable) |
| Music analysis data | **API** | Spotify Audio Features |
| AI-generated images | **API** | Runway, FLUX, Stable Diffusion |
| Voice synthesis | **API** | ElevenLabs (already planned) |
| Real-time video gen | **API** | Runway GWM (expensive, overkill) |

**Bottom line:** Most visual effects can be built with JavaScript libraries. APIs are only needed for AI generation and Spotify data.

---

## Audio-Reactive Visuals

### Technology: Web Audio API + Canvas/WebGL

**What it does:**
- AnalyserNode gives real-time frequency data (bass, mids, treble)
- Use frequency data to drive visual parameters
- Sync animations to beat, tempo, energy

**Libraries:**
| Library | Use Case | Notes |
|---------|----------|-------|
| Three.js | 3D graphics, particles | Industry standard |
| GSAP | Animation sequencing | Works with shaders |
| OGL | Lightweight WebGL | Good for orbs/blobs |
| P5.js | Creative coding | Easier learning curve |

**Build approach:**
```javascript
// Basic audio-reactive setup
const analyser = audioContext.createAnalyser();
const dataArray = new Uint8Array(analyser.frequencyBinCount);

function animate() {
  analyser.getByteFrequencyData(dataArray);
  const bass = dataArray.slice(0, 10).reduce((a, b) => a + b) / 10;
  // Use bass value to scale/move/color visuals
  requestAnimationFrame(animate);
}
```

**Resources:**
- [MDN Web Audio API Visualizations](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Codrops 3D Audio Visualizer](https://tympanus.net/codrops/2025/06/18/coding-a-3d-audio-visualizer-with-three-js-gsap-web-audio-api/)
- [Awesome Audio Visualization](https://github.com/willianjusten/awesome-audio-visualization)

---

## Animated Typography

### Technology: JavaScript animation libraries

**Libraries:**

| Library | Best For | Notes |
|---------|----------|-------|
| GSAP | Pro-level control | Industry standard, text plugin |
| Anime.js v4 | Text split API | Lightweight, intuitive |
| Splitting.js | Per-character control | CSS glitch effects |
| Textify.js | Typography animations | GSAP-powered |
| Motion (Framer) | React integration | Declarative API |

**What can be built:**
- Kinetic text (words that move/morph)
- Per-character animations
- Text reveals and transitions
- 3D text effects (with Three.js)
- Lyric displays that pulse with beat

**Build approach:**
```javascript
// GSAP text animation
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

const split = new SplitText('.lyrics', { type: 'chars' });
gsap.from(split.chars, {
  opacity: 0,
  y: 50,
  stagger: 0.05,
  duration: 0.8
});
```

**Resources:**
- [GSAP](https://gsap.com/)
- [Anime.js](https://animejs.com/)
- [Codrops Kinetic Typography](https://tympanus.net/codrops/2020/06/02/kinetic-typography-with-three-js/)
- [Textify.js](https://textify-js.vercel.app/)

---

## Ambient Backgrounds

### Technology: WebGL shaders

**Libraries:**

| Library | Best For | Notes |
|---------|----------|-------|
| balatroShader.js | Animated psychedelic bg | 3KB, plug and play |
| Stripe Mesh Gradient | Flowing gradients | WebGL, smooth |
| PixiJS | 2D WebGL effects | Good blur filters |
| Custom GLSL | Full control | Steeper learning curve |

**Shader advantages:**
- Renders in <0.2ms even at 4K
- ~3KB bundle size
- Zero bandwidth after load
- GPU-accelerated

**Build approach:**
```javascript
// balatroShader.js example
import { BalatroShader } from 'balatro-shader';

const shader = new BalatroShader({
  target: document.querySelector('.background'),
  color1: '#0a0a0a',
  color2: '#1a1a2e',
  speed: 0.5
});
```

**Resources:**
- [balatroShader.js](https://www.cssscript.com/balatro-shader-webgl/)
- [Codrops WebGL Backgrounds](https://tympanus.net/codrops/tag/webgl/)
- [Alex Harri WebGL Gradients](https://alexharri.com/blog/webgl-gradients)

---

## Particle Effects

### Technology: tsParticles

**What it does:**
- Particles, confetti, fireworks
- Highly customizable
- Works with React, Vue, vanilla JS
- Presets for quick setup

**Features:**
- Audio-reactive particles
- Mouse/touch interaction
- Multiple particle shapes
- Trail effects
- Noise-based movement

**Build approach:**
```javascript
import { tsParticles } from 'tsparticles';

tsParticles.load('particles', {
  particles: {
    number: { value: 80 },
    color: { value: '#00ff88' },
    move: { enable: true, speed: 2 },
    size: { value: 3 }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'repulse' }
    }
  }
});
```

**Resources:**
- [tsParticles](https://particles.js.org/)
- [GitHub](https://github.com/tsparticles/tsparticles)
- [Confetti Presets](https://confetti.js.org/)

---

## Spotify Audio Features (API Required)

### What Spotify provides:

| Feature | Range | Use Case |
|---------|-------|----------|
| energy | 0-1 | Visual intensity |
| valence | 0-1 | Color mood (happy/sad) |
| tempo | BPM | Animation speed |
| danceability | 0-1 | Particle movement |
| loudness | dB | Scale/pulse effects |

**Segments data:**
- Beats, bars, sections
- Per-segment loudness
- Pitch analysis

**Example:**
```javascript
// Fetch audio features
const features = await fetch(
  `https://api.spotify.com/v1/audio-features/${trackId}`,
  { headers: { Authorization: `Bearer ${token}` }}
).then(r => r.json());

// Use energy to drive visuals
const intensity = features.energy; // 0-1
const mood = features.valence; // 0 = sad, 1 = happy
```

---

## AI-Generated Visuals (API Required)

### When you might need these:

| Use Case | API | Notes |
|----------|-----|-------|
| Album art generation | FLUX, Stable Diffusion | One-time generation |
| Mood-based backgrounds | Runway, Midjourney | Per-session |
| Real-time video | Runway GWM | Expensive, overkill |

**Probably overkill for D-Rock.** Audio-reactive shaders are more performant and fit the aesthetic better.

**If needed:**
- [Runway](https://runwayml.com/) — Gen-4.5 for video, GWM for real-time
- [fal.ai](https://fal.ai/) — Fast API access to multiple models
- [Replicate](https://replicate.com/) — Run any open model via API
- [FLUX](https://blackforestlabs.ai/) — Best open image model (2025)

---

## Kaleidosync (Reference Implementation)

Existing Spotify visualizer worth studying:

**Stack:**
- Vue.js + D3 + Three.js
- Spotify API for audio analysis
- 20+ visualizer modes
- Desktop + mobile compatible

**How it works:**
- Analyzes tempo, pitch, mood, timbre, danceability
- Creates audio-reactive visual effects
- User can switch between modes

**Source:** [Kaleidosync](https://kaleidosync.com/)

---

## D-Rock Visual Stack (Recommended)

```
┌─────────────────────────────────────────┐
│              AUDIO INPUT                │
│  Spotify Playback → Web Audio API       │
│  AnalyserNode → Frequency Data          │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│           VISUAL LAYERS                 │
│                                         │
│  Layer 1: Ambient Background            │
│    → balatroShader.js or custom GLSL    │
│    → Reacts to bass/energy              │
│                                         │
│  Layer 2: Particles (optional)          │
│    → tsParticles                        │
│    → Drift with audio                   │
│                                         │
│  Layer 3: Typography                    │
│    → GSAP + Splitting.js                │
│    → Lyrics pulse with beat             │
│                                         │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│            MOOD MODIFIERS               │
│  Spotify audio features:                │
│  - valence → color palette              │
│  - energy → animation intensity         │
│  - tempo → animation speed              │
└─────────────────────────────────────────┘
```

---

## What Claude Code Can Build

**100% buildable without external APIs:**
- Audio-reactive orb/blob that pulses with music
- Kinetic typography for lyrics
- Gradient backgrounds that shift with mood
- Particle systems that react to voice/audio
- Per-character text animations
- WebGL shader effects
- Beat-synced visual transitions

**Needs API:**
- Spotify playback + audio features
- ElevenLabs voice synthesis
- Genius lyrics (scraping)
- AI-generated images (if wanted)

---

## Sources

### Audio Visualization
- [MDN Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Codrops Audio Visualizer](https://tympanus.net/codrops/2025/06/18/coding-a-3d-audio-visualizer-with-three-js-gsap-web-audio-api/)
- [Awesome Audio Visualization](https://github.com/willianjusten/awesome-audio-visualization)

### Typography
- [GSAP](https://gsap.com/)
- [Anime.js](https://animejs.com/)
- [Motion](https://motion.dev/)
- [Kinetic Typography Trends 2025](https://www.upskillist.com/blog/top-7-kinetic-typography-trends-2025/)

### Backgrounds & Effects
- [tsParticles](https://particles.js.org/)
- [Codrops WebGL](https://tympanus.net/codrops/tag/webgl/)
- [balatroShader.js](https://www.cssscript.com/balatro-shader-webgl/)

### AI Generation
- [Runway](https://runwayml.com/)
- [fal.ai Guide](https://fal.ai/learn/devs/gen-ai-tools)
- [FLUX](https://blackforestlabs.ai/)

### Spotify Visualizers
- [Kaleidosync](https://kaleidosync.com/)
- [Spotify Visualizer GitHub](https://github.com/dariozubi/spotify-visualizer)
