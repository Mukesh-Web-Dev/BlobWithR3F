# 🫧 Blob With R3F — Interactive 3D Blob Art

> An interactive 3D blob animation built with React Three Fiber and custom GLSL shaders. The blob morphs organically using Perlin noise displacement, creating a mesmerizing, ever-changing organic shape that responds to user interaction.

## 🔗 Live Demo

**[▶ View Live Project](https://Mukesh-Web-Dev.github.io/BlobWithR3F)**

---

## 📖 About

This project renders a real-time animated blob sphere in the browser using WebGL. The blob's surface is deformed by **Classic Perlin 3D Noise** running in a custom vertex shader, creating smooth, organic undulations that evolve over time. When the user hovers over the blob, the distortion intensity increases — making it feel alive and responsive.

### ✨ Key Features

- 🎨 **Custom GLSL Shaders** — Vertex and fragment shaders with Perlin noise for procedural surface displacement
- 🖱️ **Hover Interaction** — Blob distortion intensity reacts to mouse hover
- 🔄 **Auto-Rotation** — Continuous orbit rotation for a dynamic viewing experience
- ⚡ **High Performance** — Icosahedron geometry with 20 subdivisions for smooth surface detail
- 🎭 **Dynamic Coloring** — Fragment shader generates colors based on UV coordinates and displacement

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI framework |
| [Three.js](https://threejs.org/) | 3D rendering engine |
| [React Three Fiber](https://r3f.docs.pmnd.rs/) | React renderer for Three.js |
| [React Three Drei](https://drei.docs.pmnd.rs/) | Useful helpers (OrbitControls) |
| [GLSL Shaders](https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)) | Custom vertex & fragment shaders |
| [Vite](https://vite.dev/) | Build tool & dev server |

---

## 📁 Project Structure

```
BlobWithR3F/
├── public/                        # Static assets
├── dist/                          # Production build output
├── src/
│   ├── main.jsx                   # React entry point
│   ├── App.jsx                    # Main app — Canvas setup, OrbitControls, camera
│   ├── App.css                    # App-specific styles
│   ├── index.css                  # Global styles (fullscreen canvas layout)
│   ├── blobs/
│   │   └── BlobSphere.jsx         # Blob mesh component with shader material & hover interaction
│   └── shaders/
│       ├── vertexSphereShader.glsl    # Vertex shader — Perlin noise displacement
│       └── fragmentSphereShader.glsl  # Fragment shader — Dynamic color from UV + displacement
├── index.html                     # HTML entry point
├── vite.config.js                 # Vite config (base path for GitHub Pages)
├── eslint.config.js               # ESLint configuration
├── package.json                   # Dependencies & scripts
├── package-lock.json              # Dependency lock file
└── .gitignore                     # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mukesh-Web-Dev/BlobWithR3F.git
   cd BlobWithR3F
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to the local URL shown in the terminal (typically `http://localhost:5173/BlobWithR3F/`).

---

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deploy to GitHub Pages

This project is pre-configured for GitHub Pages deployment using the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package.

```bash
npm run deploy
```

This command will:
1. Run `npm run build` automatically (via the `predeploy` script)
2. Push the `dist/` folder to the `gh-pages` branch
3. Make the project live at `https://Mukesh-Web-Dev.github.io/BlobWithR3F`

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Start Vite dev server with HMR |
| `build` | `npm run build` | Build for production |
| `preview` | `npm run preview` | Preview production build locally |
| `lint` | `npm run lint` | Run ESLint |
| `deploy` | `npm run deploy` | Deploy to GitHub Pages |

---

## 📄 License

This project is open source and available for learning and experimentation.
