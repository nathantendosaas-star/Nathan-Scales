# Nathan Scales Digital Studio & Growth Agency

An enterprise-grade, high-converting digital platform and portfolio application for **Nathan Scales**. Built with React 19, Vite, Tailwind CSS v4, Motion (Framer Motion), and Lenis smooth scrolling.

---

## 🚀 About Nathan Scales

**Nathan Scales** is a business-first digital studio and engineering capability. We bridge the gap between design, digital acquisition, and operational software—engineering commercial web presences, targeted lead acquisition pipelines, and custom business systems built around measurable client growth.

### Operating Philosophy
> *"From first impression to internal workflow, design is only useful when it makes the business easier to understand, trust, and scale."*

Rather than acting as a traditional creative agency focused solely on aesthetics, Nathan Scales constructs digital presences as core commercial assets directly tied to revenue, lead intake, and operational efficiency.

---

## 🛠️ Core Service Capabilities

Nathan Scales operates across three integrated practice areas:

### 1. Websites & Digital Presences
- **High-Conversion Web Design**: Bespoke layout architectures engineered from scratch for brand authority and mobile excellence.
- **Conversion Rate Optimization (CRO)**: Content hierarchy and messaging structured for immediate audience clarity and inquiry intake.
- **Performance & SEO**: Ultra-fast load performance, clean semantic HTML, and search-optimized site architecture.

### 2. Digital Growth & Lead Acquisition
- **Targeted Acquisition Funnels**: Custom landing pages and campaign architectures designed around specific high-intent offers.
- **Multi-Signal Lead Research & Verification**: Automated qualification pipelines that verify business operating signals, digital activity, and budget capacity before routing leads.
- **B2B Outreach Playbooks**: Structured outreach strategies tailored for regional market dynamics (e.g., enterprise construction, commercial services).

### 3. Custom Software & Business Systems
- **Internal Dashboards & Portals**: Operational platforms designed around proprietary client workflows.
- **In-Page Client Intake Systems**: Non-disruptive, interactive discovery overlays for qualifying project inquiries without interrupting user browsing.
- **Integrations & Automation**: Seamless data synchronization between web forms, Google Workspace, CRM webhooks, and email delivery platforms (Resend API).

---

## 📁 Featured Systems & Case Studies

- **Lead Research & CRM Verification Pipeline**: Custom automated intelligence engine that filters B2B prospect accounts using verifiable capacity signals (operating status, digital ad spend, and business scale) before syncing into sales queues.
- **Commercial Construction & Engineering Portal**: High-converting web portal for enterprise contractors to showcase major project portfolios and streamline tender inquiry submissions.
- **Client Discovery Intake Module**: Accessible, keyboard-navigable in-page discovery overlay that captures structured project parameters and routes inquiries to review channels.

---

## 💻 Tech Stack & Architecture

- **Frontend Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) + Custom Editorial System
- **Animations & Smooth Scroll**: Motion (`framer-motion`) + Lenis (`lenis`)
- **Icons**: Lucide React (`lucide-react`)
- **Backend & APIs**: Express + Node.js + Google GenAI SDK (`@google/genai`)
- **Deployment**: Vercel (Single-Page Application configuration)

---

## ⚙️ Development & Local Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nathantendosaas-star/Nathan-Scales.git
   cd Nathan-Scales
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Copy `.env.example` to `.env` if custom API keys or credentials are required:
   ```bash
   cp .env.example .env
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The local application will be available at `http://localhost:3000`.

---

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server on port 3000.
- `npm run build`: Compiles TypeScript and builds production artifacts into `dist/`.
- `npm run lint`: Runs TypeScript compiler check (`tsc --noEmit`).
- `npm run preview`: Previews the production build locally.
- `npm run clean`: Cleans up build artifacts (`dist` and `server.js`).

---

## 🌐 Deployment

This application is optimized for deployment on **Vercel**.

- **Vercel Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **SPA Routing**: Handled via `vercel.json` rewrites to ensure single-page client routing (`/services`, `/work`, `/about`, `/contact`).

---

© Nathan Scales Digital Studio. All rights reserved.
