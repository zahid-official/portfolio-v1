<div align="center">

# Personal Portfolio Website

A modern, scroll-based portfolio built with Next.js, TypeScript and Tailwind CSS - designed to showcase projects, skills and professional identity with a premium, high-contrast aesthetic and fluid animations.

[![Live Demo](https://img.shields.io/badge/▶_Live_Demo-zahid--portfolio.vercel.app-00C853?style=for-the-badge&logo=vercel&logoColor=white)](https://zahid-official.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zahid-official/portfolio-v1)
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Motion-FF4154?style=for-the-badge&logo=framer&logoColor=white" alt="Motion" />

</div>

<br/>

## 🔍 Overview

This portfolio is a single-page, multi-section personal portfolio designed to make a confident first impression. It features a clean black-and-white core palette, smooth scroll-triggered animations, dark/light theme support and a responsive layout that adapts beautifully from mobile to desktop. Each section - from Hero to Projects - is crafted for visual impact and seamless user experience.

> _Where code meets design - a portfolio that speaks before you do._

<br/>

## ✨ Key Features

### 🎨 Design & Interface

<table align="center">
<thead>
<tr><th align="left">Feature</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><b>Premium Aesthetic</b></td><td>High-contrast black & white palette with curated grayscale tints for a sleek, modern look</td></tr><code>next-themes</code> with smooth transitions</td></tr>
<tr><td><b>Responsive Layout</b></td><td>Mobile-first design fully optimized for phone, tablet and desktop viewports</td></tr>
<tr><td><b>Custom Typography</b></td><td>Suisse International (local) + Barlow Condensed (Google Fonts) for premium type hierarchy</td></tr>
</tbody>
</table>

### 🚀 Interactions & Motion

<table align="center">
<thead>
<tr><th align="left">Feature</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><b>Scroll Animations</b></td><td>Fluid, scroll-triggered motion effects powered by the <code>motion</code> library</td></tr>
<tr><td><b>Micro-Interactions</b></td><td>Hover effects, button lifts and subtle transitions for a polished, dynamic feel</td></tr>
<tr><td><b>Smooth Navigation</b></td><td>Sticky navbar with blur backdrop and section-linked smooth scrolling</td></tr>
<tr><td><b>Toast Notifications</b></td><td>Rich feedback via <code>sonner</code> for user actions</td></tr>
</tbody>
</table>

### 📄 Content Sections

<table align="center">
<thead>
<tr><th align="left">Section</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><b>Hero</b></td><td>Name, designation, intro, CTAs (Download Resume / View Projects) and social links</td></tr>
<tr><td><b>About</b></td><td>Personal story, programming journey and professional interests</td></tr>
<tr><td><b>Skills</b></td><td>Categorized skill cards with icons - Frontend, Backend, Tools & Platforms</td></tr>
<tr><td><b>Projects</b></td><td>Grid of project cards with images, tech stacks, live demos and GitHub links</td></tr>
<tr><td><b>Project Details</b></td><td>Dedicated dynamic route pages with full project breakdowns and challenges</td></tr>
</tbody>
</table>

<br/>

## 🛠️ Tech Stack

<table align="center">
<thead>
<tr><th align="left">Technology</th><th align="center">Version</th><th align="left">Purpose</th></tr>
</thead>
<tbody>
<tr><td><b>Next.js</b></td><td align="center"><code>16.1.1</code></td><td>React framework with App Router, SSR and file-based routing</td></tr>
<tr><td><b>React</b></td><td align="center"><code>19.2.3</code></td><td>Component-based UI development</td></tr>
<tr><td><b>TypeScript</b></td><td align="center"><code>^5</code></td><td>Static type safety across the codebase</td></tr>
<tr><td><b>Tailwind CSS</b></td><td align="center"><code>^4</code></td><td>Utility-first CSS framework</td></tr>
<tr><td><b>Motion</b></td><td align="center"><code>^11.0.0</code></td><td>Production-grade animation library</td></tr>
</tbody>
</table>

<br/>

## 🏗️ Architecture

<div>
<pre>
                                ┌──────────────────────────────────────────────────────────────┐
                                │                         Browser                              │
                                ├──────────────────────────────────────────────────────────────┤
                                │  Next.js App (App Router)                                    │
                                │  ┌────────────────┐  ┌────────────────┐  ┌───────────────┐   │
                                │  │  RootLayout    │  │  ThemeProvider │  │  Toaster      │   │
                                │  │                │  │  (next-themes) │  │  (sonner)     │   │
                                │  └───────┬────────┘  └────────────────┘  └───────────────┘   │
                                │          │                                                   │
                                │  ┌───────▼───────────────────────────────────────────────┐   │
                                │  │                    Pages                              │   │
                                │  │   /(Home)                   /projects/[slug]          │   │
                                │  │  ┌───────────────────┐      ┌──────────────────────┐  │   │
                                │  │  │ Hero   │ About    │      │ ProjectDetailsClient │  │   │
                                │  │  │ Skills │ Projects │      │ ProjectStack         │  │   │
                                │  │  └───────────────────┘      └──────────────────────┘  │   │
                                │  └───────────────────────────────────────────────────────┘   │
                                │                                │                             │
                                │  ┌─────────────────────────────▼─────────────────────────┐   │
                                │  │                     Shared Components                 │   │
                                │  │      Navbar │ Footer │ ThemeToggler │ UI (shadcn)     │   │
                                │  └───────────────────────────────────────────────────────┘   │
                                ├──────────────────────────────────────────────────────────────┤
                                │   Static Data: projects.ts   │   Assets: fonts, images, PDF  │
                                └──────────────────────────────────────────────────────────────┘
</pre>
</div>

<br/>

## 📂 Project Structure

```
portfolio-v1/
│
├── package.json                   # Dependencies and scripts
├── next.config.ts                 # Next.js configuration
├── tsconfig.json                  # TypeScript configuration
├── components.json                # shadcn/ui configuration
├── postcss.config.mjs             # PostCSS configuration
├── eslint.config.mjs              # ESLint configuration
│
├── public/                        # Static public assets
│   └── assets/                   # Public images and media
│
└── src/
    ├── app/
    │   ├── layout.tsx             # Root layout (fonts, theme, metadata)
    │   ├── page.tsx               # Home page entry point
    │   ├── globals.css            # Global styles and Tailwind config
    │   └── projects/[slug]/      # Dynamic project detail pages
    │
    ├── assets/                    # Source assets
    │   ├── fonts/                # Suisse International font files
    │   ├── icons/                # Custom icon assets
    │   ├── images/               # Section images and backgrounds
    │   ├── pdf/                  # Resume and downloadable files
    │   └── projectsDetails/      # Project screenshot images
    │
    ├── components/
    │   ├── home/                 # Home page orchestrator and sections
    │   │   └── sections/         # Hero, About, Skills, Projects
    │   ├── projects/             # Project detail page components
    │   ├── shared/               # Navbar, Footer, ThemeToggler
    │   └── ui/                   # shadcn/ui primitives (Button, Card, etc.)
    │
    ├── data/
    │   └── projects.ts           # Project dataset and metadata
    │
    ├── lib/
    │   └── utils.ts              # Utility functions (cn helper)
    │
    ├── provider/
    │   └── theme-provider.tsx    # next-themes provider wrapper
    │
    └── types/
        └── global.d.ts           # Global TypeScript declarations
```

<br/>

## 🚀 Getting Started

### Prerequisites

<table align="center">
<thead>
<tr><th align="left">Requirement</th><th align="left">Details</th></tr>
</thead>
<tbody>
<tr><td><b>Node.js</b></td><td>v18 or higher recommended</td></tr>
<tr><td><b>pnpm</b></td><td>Package manager (preferred for this project)</td></tr>
<tr><td><b>Modern Browser</b></td><td>Chrome, Firefox, Safari, or Edge</td></tr>
</tbody>
</table>

<br/>

## ⚙️ How It Works

<div>
<pre>
                                User lands on Home ──► Scrolls through sections ──► Discovers Projects
                                                                                        │
                                                            ┌───────────────────────────┘
                                                            ▼
                                                    Clicks "View More"
                                                            │
                                                            ▼
                                                    Dynamic Route: /projects/[slug]
                                                            │
                                                            ▼
                                                    Full Project Breakdown
                                                    (Tech Stack, Live Demo,
                                                    GitHub Repo, Challenges)
                                                            │
                                                            ▼
                                                    Explore More Projects
                                                    or Return to Home
                                </pre>
</div>

1. **Landing** - Visitors are greeted by a Hero section with name, designation, intro and CTAs.
2. **Discovery** - Smooth scrolling reveals About, Skills and Projects sections with animated transitions.
3. **Project Showcase** - Project cards display thumbnails, tech stacks and quick-access links.
4. **Deep Dive** - Clicking a project card navigates to a dedicated detail page with full breakdown.
5. **Theme Preference** - Users can toggle between dark and light mode, with the choice persisted across sessions.

<br/>

## 🌟 Author

<div align="center">
  <a href="https://github.com/zahid-official">
    <img src="https://github.com/zahid-official.png" width="100" height="100" style="border-radius: 50%;" alt="Zahid Official" />
  </a>

  <h3>Zahidul Islam</h3>
  <p><b>Web Developer | Tech Enthusiast</b></p>

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zahid-official)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/zahid-web)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:zahid.official8@gmail.com)

  <p>Creating impactful digital experiences with passion and purposeful design</p>
</div>

<br/>

<p align="center"><b>Portfolio</b> - <i>Where code meets design and every pixel tells a story.</i></p>
