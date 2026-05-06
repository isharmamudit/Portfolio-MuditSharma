# 🌌 Mudit Sharma's 3D Interactive Portfolio

A hyper-immersive, highly interactive personal portfolio built by a 16-year-old developer to push the limits of frontend web design. This project focuses on a seamless, cinematic user experience powered by a custom vanilla JavaScript space engine and cutting-edge DOM interactions.

---

## 🔗 Links
- **Live Site:** [Insert Vercel Link Here]
- **Developer:** [Mudit Sharma](https://github.com/isharmamudit)

---

## ✨ Key Technical Features

### 1. Custom 2D Particle Space Engine (`<canvas>`)
- **Black Hole Gravity Physics:** Clicking and holding inside the galaxy section dynamically manipulates the velocity vectors of particles, pulling them into a swirling gravitational well.
- **Repulsion Shockwaves:** Releasing the click triggers a shockwave ripple that mathematically calculates proximity and forcefully repels particles outward.
- **Dynamic Constellations:** Proximity-based line drawing between "stars" that responds directly to cursor distance and interaction state.
- **Shooting Stars:** A lightweight rendering layer that adds high-velocity streak assets to the background array.

### 2. High-End Micro-Interactions & UI
- **Pill-Style Magnetic Buttons:** Call-to-action buttons feature custom logic that tracks the cursor bounding box and applies a 3D magnetic "pull", alongside a smooth color-inverting icon container.
- **Intersection Observer Animations:** Content dynamically unfurls on scroll using high-performance CSS `clip-path` transitions to prevent DOM layout thrashing.
- **3D Parallax Typography:** Text shadows and 3D tilting calculate positional vectors from the center of the viewport to create physical depth tracking.

### 3. Core Technologies & Architecture
- **HTML5 & CSS3:** Completely vanilla and modular. No tailwind, no heavy CSS frameworks. 
- **Vanilla JavaScript (ES6+):** Pure, optimized `requestAnimationFrame` game-loop logic.
- **Three.js:** Handles complex 3D object rendering in dedicated scenes.
- **Cinematic Rendering:** Uses SVG noise overlays and CSS mix-blend-modes to create an authentic film grain texture across the viewport.

---

## 🚀 Local Development

Since this project avoids heavy frameworks and uses pure HTML/JS/CSS, launching it locally is incredibly fast.

1. Clone the repository:
   ```bash
   git clone https://github.com/isharmamudit/Portfolio-MuditSharma.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Portfolio-MuditSharma
   ```
3. Use any local server to run the project. For example, if you have `npx` installed:
   ```bash
   npx serve .
   ```
4. Open `http://localhost:3000` in your browser.

---

## 👨‍💻 Author

**Mudit Sharma**
- GitHub: [@isharmamudit](https://github.com/isharmamudit)
