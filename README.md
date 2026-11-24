# 🎓 Quest to the Cap: Modern Graduation Countdown Lock Screen

[![Live Demo](https://img.shields.io/badge/Live%20Demo-lock.pixelthis.app-ffd46c?style=for-the-badge&logo=cloudflare)](https://lock.pixelthis.app/)
[![Mission](https://img.shields.io/badge/Handshake%20×%20Google-AI%20Skills%20Studio-5fe0db?style=for-the-badge)](https://app.joinhandshake.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-65d9b1?style=for-the-badge)](LICENSE)

> **"Your Deadline, Your Design: Create a Countdown Lock Screen with Google"**  
> Official mission submission for the Handshake AI Skills Studio challenge (November 2026).

---

![Quest to the Cap Modern Showcase](assets/quest_to_the_cap_showcase.jpg)

## 🌟 Overview & Design Philosophy

Traditional countdown timers induce **deadline anxiety** or fall victim to **Parkinson's Law**: when students see "142 Days Remaining," the goal feels either comfortably distant (inviting procrastination) or overwhelmingly vast (causing paralysis).

The page previews the deadline, credits and next milestone. Save the campus-night background separately from the timer. On iPhone, install the generated Scriptable widget. On Android, use the saved deadline formula in KLWP and select lock-screen placement if your device offers it. Neither setup requires leaving the webpage open. Changing the date on the site requires updating the installed script or formula.

---

## 🧭 The Reverse-Milestone Architecture

The core of the Handshake × Google challenge is **working backward from a deadline**. Our system maps the journey into four discrete hierarchical gates:

```
[ Gate 1: Foundations ] ──> [ Gate 2: Advanced Electives ] ──> [ Gate 3: Capstone Defense ] ──> [ Gate 4: Graduation Day ]
  12/24 Credits (DONE)       18/24 Credits (ACTIVE NOW)           T - 60 Days (UPCOMING)               T - 0 Days (FINAL BOSS)
```

1. **Gate 4 (T-Minus 0 Days — Graduation Day):** Master graduation ceremony deadline tracked with high-contrast, clean typography (Days, Hours, Minutes, Seconds).
2. **Gate 3 (T-Minus 60 Days — Capstone Defense):** Portfolio verification and thesis review gate.
3. **Gate 2 (T-Minus 142 Days — Current Active Gate):** The immediate active milestone (*"Module 4: Calculus Capstone"*). Surfacing **only** the active goal on the lock screen eliminates cognitive overload.
4. **Credit Progression Bar:** Translates 24 degree credits into a glowing gradient progress pill (`18 / 24 Credits Earned • 75% Level 18 Scholar`), giving instant dopamine for incremental progress.

---

## 📱 Mobile Mockup View

<p align="center">
  <img src="assets/quest_to_the_cap_cover.jpg" width="380" alt="Quest to the Cap Modern Mobile Lock Screen">
</p>

---

## 🤖 AI Co-Creation & Technical Methodology

Prototyped and built in collaboration with **Google AI (Gemini)** and modern generative pipelines:

* **Reverse Velocity Modeling:** Prompted Gemini with academic credit requirements and deadline dates to generate optimal pacing intervals, pacing checkpoints evenly across semesters to prevent end-of-term crunch.
* **Modern Web Audio Chimes:** Generated a zero-dependency Web Audio API sound synthesizer that procedurally crafts soft, harmonic sine-wave chimes for milestone updates and companion interactions.
* **Artwork generation:** The web bundle serves a pre-generated `assets/campus-night.webp`. To generate a new candidate offline with FLUX.2 Pro, set `BFL_API_KEY` and run `node tools/generate-campus.mjs` from outside `dist/`. One invocation submits one paid job. Review the portrait at phone size before promoting it to both asset directories. No key or inference endpoint belongs in the browser.
* **OLED Cognitive Ergonomics:** Engineered an ultra-low power dark theme (`#0b0918`, `#120e28`) utilizing high-translucency glassmorphism, 92% low-draw OLED pixels, and glowing mint (`#65d7af`) and gold (`#ffd46c`) accents for instant sunlight readability.
* **Storybook Companion (Ellie):** Integrated high-resolution in-app illustrated artwork for **Ellie** (the cape-wearing elephant with her star wand), providing contextual study encouragement right above the lock screen home swipe bar.

---

## ✨ Features in the Live Demo

Visit the **[Live Interactive Demo (lock.pixelthis.app)](https://lock.pixelthis.app/)**:

* **Wallpaper download:** A 1080×1920 WebP with room for the system clock. No time, date or credit count is baked into it.
* **🔊 Procedural Ambient Audio:** In-browser Web Audio synthesizer for pleasant harmonic chimes without loading external audio files.
* **⭐ Interactive Progress Leveling:** Tap the progress bar to advance credits, play chime audio, and trigger particle confetti.
* **🐘 Mascot Companion:** Tap mascot Ellie for contextual study encouragement, reactive animations, and expression changes.
* **Preview status pill:** Tracks days to the target in the browser. This is not an installed iOS Live Activity.

---

## 📄 License

Distributed under the [MIT License](LICENSE).
Made with 💜 for the **Handshake AI Skills Studio** challenge.
