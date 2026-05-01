# LuxStay Nexus | Premium Hotel Experience

LuxStay Nexus is a high-fidelity hotel booking platform designed with a modern glassmorphism aesthetic. It features hyper-personalized stays, ambient room control, and a seamless user experience.

## Features

- **Real-time Personalization**: Adjust room settings (lighting, temperature, music) before arrival.
- **Curated Dining**: Browse award-winning menus with dietary synchronization.
- **Zero-Touch Check-in**: Secure and frictionless mobile key access.
- **Glassmorphism UI**: A premium, immersive design system.

## Tech Stack

- **Framework**: Next.js 16 (Turbopack)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Database**: Supabase
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/barathsk-424/hotel_.git
   cd hotel_
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy `.env.local.example` to `.env.local` and fill in your credentials.

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured for automatic deployment to **GitHub Pages** via GitHub Actions.

### Setup GitHub Pages

1. Go to your repository settings on GitHub.
2. Navigate to **Pages** in the sidebar.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. The site will automatically deploy whenever you push to the `main` branch.

### Manual Deployment (Legacy)

The previously used `docs` folder deployment method has been replaced by GitHub Actions for a cleaner repository structure. You can safely remove the `docs` folder once the GitHub Action is enabled.
