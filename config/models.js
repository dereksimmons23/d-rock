// Centralized Claude model IDs. Bump here when Anthropic ships or retires a model —
// not at each call site. Verified monthly by the-standard/scripts/verify-models.mjs.
// Last verified: 2026-07-03

const MODELS = {
  cheap: 'claude-haiku-4-5',  // D-Rock DJ brain
}

module.exports = { MODELS }
