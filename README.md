# LearnHub Mini - Static E-Learning Platform

## 🚀 Live Deployment
[![Bolt New Static Starter](https://img.shields.io/badge/Bolt-Static_Starter-blue)](https://bolt.new)  
**Live Demo**: [bolt.new/~/stackblitz-starters-plx21jmw](https://bolt.new/~/stackblitz-starters-plx21jmw)

## 🎯 Objective  
A lightweight e-learning platform prototype demonstrating core concepts from VibeCoding Week 1, built with HTML/CSS/JS + Bolt New framework

## ✨ Features  
- Course catalog with 3+ sample courses  
- Dynamic course detail modal  
- Progress tracking (localStorage)  
- Responsive design  
- AI-assisted code optimization  

## 🛠️ Setup (Bolt New)  
```bash
# Install dependencies
bolt install

# Start dev server
bolt dev

# Build for production


**📂 Project Structure**
```bash
/
├── index.html       # Main course listing (3 static courses)
├── page2.html       # Course detail page with lessons
├── styles.css       # Styling with hover effects
└── script.js        # Completion toggle functionality
```

## ✨ Key Features
- **Static Content Delivery**
  - Course data hardcoded in HTML
  - Zero database dependencies
- **UI Components**
  - Responsive course cards
  - Hover effects on interactive elements
  - Completion state persistence (localStorage)
- **Lightweight Architecture**
  - Vanilla JavaScript only
  - No external libraries/frameworks

## 🛠️ Development Workflow
```bash
# 1. Clone repository
bolt clone stackblitz-starters-plx21jmw

# 2. Local development
bolt dev

# 3. Production build
bolt build --static
```

## 📦 Deployment Checklist
1. In Bolt New dashboard:
   - Click "Publish" → "Static Starter"
   - Enable "Responsive" mode
2. Verify published URL pattern:
   ```text
   https://bolt.new/~/[your-project-id]
   ```
3. Monitor deployment status:
   ```bash
   bolt logs --production
   ```

## 🎯 Design Constraints
- All course content must be static HTML
- JavaScript limited to UI interactions
- No external API calls permitted
- Max page size: 500KB (Bolt Static limit)
