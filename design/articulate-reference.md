# Sharpline — Brand & Design Reference (v2)

Source of truth for the orange/blue identity (logo, palette, type) across the marketing site and the app. This **supersedes** the earlier rust/terracotta "Articulate" reference — reproduce this, don't reinterpret it: same hex values, same two-typeface pairing (plus mono), same logo mark, everywhere.

Built from Jane's uploaded logo/palette artwork (22 Sep 2026).

## 1. Logo mark

Five rounded vertical bars, alternating heights, like a waveform/equalizer. Colors left→right: orange, blue, light-orange, deep-blue, light-blue.

```svg
<svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="0" y="10.4" width="5" height="15.6" rx="2.5" fill="#F57B3C"/>
  <rect x="7.25" y="0" width="5" height="26" rx="2.5" fill="#0B73BC"/>
  <rect x="14.5" y="5.72" width="5" height="20.28" rx="2.5" fill="#F89449"/>
  <rect x="21.75" y="0" width="5" height="26" rx="2.5" fill="#055AAA"/>
  <rect x="29" y="13.52" width="5" height="12.48" rx="2.5" fill="#A6C4DE"/>
</svg>
```

Wordmark: SHARPLINE, IBM Plex Sans, weight 800, letter-spacing ~0.01em, color `brand.orange`. Always paired with the bar mark, bar mark on the left.

Tagline (when shown): "Stay sharp. Win more." — Newsreader italic, `brand.textMuted` color, not the orange.

**Flag**: this tagline matches the one already found on the existing sharplineapp.com / Sharpline Converting Inc. trademark search noted in the original production spec. Worth resolving alongside the name before this ships publicly — still an open backlog item.

Favicon: the bar mark alone (no wordmark), square SVG.

## 2. Color tokens

Named `brand.*` (e.g. `brand-orange`) everywhere — marketing site, app UI, PDF export all pull from the same names.

### Light (default)
| Token | Hex | Use |
|---|---|---|
| `brand.bg` | `#F6F3EE` | Page background |
| `brand.surface` | `#FFFFFF` | Cards, panels |
| `brand.surfaceAlt` | `#EEE9E0` | Alternating section backgrounds |
| `brand.text` | `#1B2430` | Headings, primary text |
| `brand.textMuted` | `#5B6472` | Body copy, secondary text |
| `brand.border` | `#E4DDD1` | Hairlines, card borders |
| `brand.orange` | `#F57B3C` | Primary accent — CTAs, wordmark, active states |
| `brand.orangeLight` | `#F89449` | Secondary accent |
| `brand.blueDeep` | `#055AAA` | Secondary accent, dark surfaces |
| `brand.blue` | `#0B73BC` | Links, secondary accent |
| `brand.blueLight` | `#A6C4DE` | Tints, tags |
| `brand.bluePale` | `#D8E6F1` | Pills/badges background |

### Dark
| Token | Hex |
|---|---|
| `brand.bg` | `#14181D` |
| `brand.surface` | `#1D232A` |
| `brand.surfaceAlt` | `#20262D` |
| `brand.text` | `#EDEFF1` |
| `brand.textMuted` | `#9BA6B1` |
| `brand.border` | `#2C333B` |
| `brand.orange` | `#FF8C52` |
| `brand.orangeLight` | `#FFA46B` |
| `brand.blueDeep` | `#4C9EE0` |
| `brand.blue` | `#5FB0EE` |
| `brand.blueLight` | `#2E4A63` |
| `brand.bluePale` | `#233240` |

Not specified by this brief, kept as separate/derived tokens rather than reusing brand.orange (to avoid conflating "primary CTA" with "something's wrong" or "success"):
- `warn` (errors/hedge flags) — unchanged from the pre-v2 palette: `#B8432D` light / `#E2694B` dark.
- `good` (success states) — unchanged: `#3F7A54` light / `#6FBF87` dark.
- `brand.orangeInk` (text color on top of a `brand.orange` button/surface) — `#FFFFFF` light / `brand.bg` dark, mirroring the old accent-ink pattern.

## 3. Typography

| Role | Typeface | Weights used |
|---|---|---|
| Display / headings | Newsreader (serif) | 400, 500, 600, italic 400/500 |
| Body / UI | IBM Plex Sans | 400, 500, 600, 700, 800 |
| Numeric / data (word counts, streaks, prices, step numbers) | IBM Plex Mono | 500, 600 |

This is a continuation of the pairing already used across the app — the only changes are adding IBM Plex Mono for anything numeric, and retiring the old rust/terracotta accent in favor of the orange/blue pair above. Self-hosted via `@fontsource/*` packages (not the Google Fonts CDN, which is blocked in this project's dev environment) — mapped to the standard Tailwind `--font-sans` / `--font-serif` / `--font-mono` theme keys, not a custom `display` key, to match the rest of the codebase's existing utility usage.

## 4. Applying this

Both `sharpline` (the app) and `sharpline-site` (the marketing site) reproduce this reference exactly - same tokens, same logo, same fonts. Layout and structure are unchanged; only color, type, and the logo mark move to this palette.
