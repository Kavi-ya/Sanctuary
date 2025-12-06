# The Wild | Interactive Sanctuary 🦁

A premium, immersive wildlife conservation website featuring stunning parallax scrolling, SVG stroke animations, and interactive galleries. Built with pure HTML, CSS, and JavaScript to showcase endangered species protection efforts.

![Hero Section](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### Visual Excellence
- **Multi-Layer Parallax Scrolling** - Depth-based image layers creating immersive 3D effect
- **SVG Stroke Animation** - Animated text that draws itself on page load
- **Cinematic Video Integration** - Background video with custom overlay
- **Smooth Scroll Reveal** - Elements fade in as you scroll
- **Premium Aesthetics** - Glassmorphism effects and golden accent colors

### Interactive Elements
- **Horizontal Scrolling Gallery** - Showcasing wildlife residents
- **Custom Slider Controls** - Large, accessible navigation buttons
- **Smooth Anchor Navigation** - Seamless section transitions
- **Floating Parallax Decorations** - Dynamic background elements

### Technical Highlights
- **Zero Dependencies** - Pure vanilla JavaScript, no frameworks
- **Modular Architecture** - Separated CSS and JavaScript files
- **Fully Responsive** - Mobile-first design with breakpoints
- **Performance Optimized** - CSS animations, hardware acceleration
- **Semantic HTML5** - Accessible and SEO-friendly structure

## 📁 File Structure

```
Sanctuary/
├── Assets/
│   ├── index.html                    # Main HTML structure
│   ├── styles.css                    # All CSS styling (~600 lines)
│   ├── script.js                     # All JavaScript (~90 lines)
│   ├── Background.jpeg               # Hero background layer
│   ├── Middle Ground.jpeg            # Hero middle parallax layer
│   ├── Foreground.jpeg               # Hero foreground layer
│   ├── Leopard.jpeg                  # Wildlife gallery images
│   ├── Elephant.jpeg
│   ├── Macaw.jpeg
│   ├── Section Background 1.jpeg     # Parallax divider backgrounds
│   ├── Section Background 2.jpeg
│   └── Whisk.mp4  # Video
└── README.md                         # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for best experience)

### Installation

1. **Clone or download** this repository
   ```bash
   git clone <repository-url>
   cd Sanctuary
   ```

2. **Open the website**
   
   **Option A: Direct File Opening**
   - Navigate to `Assets/index.html`
   - Double-click to open in your default browser

   **Option B: Local Server (Recommended)**
   ```bash
   # Using Python 3
   cd Assets
   python -m http.server 8000
   
   # Using Node.js with http-server
   npx http-server Assets -p 8000
   ```
   Then visit `http://localhost:8000`

3. **Enjoy!** The page should load with all animations and effects

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --color-bg: #0a0f0d;        /* Background */
    --color-text: #e0e0e0;      /* Text */
    --color-accent: #d4af37;    /* Golden accent */
    --color-green: #1b3a28;     /* Green accent */
}
```

### Fonts
The project uses Google Fonts (Cinzel & Lato). To change:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Content
- **Hero Text**: Edit SVG text elements in `index.html` (lines 30-45)
- **Statistics**: Update in the About section (lines 80-90)
- **Gallery Items**: Modify animal cards (lines 145-175)

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Styling, animations, and effects
  - CSS Grid & Flexbox for layouts
  - CSS Custom Properties (variables)
  - Keyframe animations
  - Media queries for responsiveness
- **JavaScript (ES6+)** - Interactivity
  - Parallax scroll effects
  - Scroll-triggered reveal animations
  - Gallery slider navigation
  - Smooth scroll behavior

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE 11 (limited support, no SVG animations)

## 🎯 Conservation Mission

**WILD.IO Sanctuary** is dedicated to preserving natural habitats and protecting endangered species:
- 🌍 **150+ Species Protected**
- 🌳 **2.5k Acres Preserved**
- 💚 **Focus Areas**: Africa, Asia, South America

## 📸 Screenshots

### Hero Section with SVG Animation
The animated "Into the Wonders" text draws itself using stroke-dasharray animation.

### Parallax Scrolling
Three-layer parallax effect creates depth as you scroll.

### Wildlife Gallery
Horizontal scrolling gallery with custom navigation controls.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Google Fonts** - Cinzel & Lato typefaces
- **Design Inspiration** - Modern parallax websites and conservation organizations
- **Wildlife Photography** - All images used for educational purposes

## 📧 Contact

For questions, suggestions, or collaboration opportunities:
- 🌐 Website: [https://kavi-ya.github.io/Sanctuary/](#)
- 📧 Email: contact@wild.io
- 🐦 Twitter: [@WildSanctuary](#)

---

**Made with 💚 for wildlife conservation**

*Last Updated: December 2024*
