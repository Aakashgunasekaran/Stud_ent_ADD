# Student Admission Portal

A React-based Student Admission Portal with three pages: Home, About, and Registration.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── App.js                    # Root component + routing
├── App.css                   # Navbar + shared button styles
├── index.js                  # React entry point
├── index.css                 # CSS variables + global reset
└── components/
    ├── Home.js               # Landing page with stats
    ├── Home.css
    ├── About.js              # College info + pillars
    ├── About.css
    ├── Registration.js       # Student registration form
    └── Registration.css
```

## Features
- Home page with stats grid
- About page with college pillars
- Registration form with name, email, age, course, gender, skills, address
- Live progress sidebar on registration
- Success modal on form submission
- Fully responsive
