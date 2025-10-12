# Frontend - Portfolio Website

This directory contains the frontend for the personal portfolio website. It is a Next.js application built with TypeScript and styled with Tailwind CSS. It provides a responsive and interactive user experience for both public visitors and the portfolio owner.

---

## Features

- **Public Pages (SSG/ISR)**:
  - **Blogs Page**: Displays all blog posts, using Incremental Static Regeneration (ISR) to fetch new content periodically.
  - **Single Blog Page**: Individual blog pages are statically generated at build time and revalidated on-demand.
  - **About Me**: A static page showcasing personal details, skills, and work experience.
  - **Projects Showcase**: Displays a list of personal projects with details, using ISR for dynamic updates.
- **Private Dashboard**:
  - A secure, client-rendered dashboard for the owner to manage portfolio content.
  - **Blog Management**: Create, edit, and delete blog posts using a rich text editor (`React Quill`).
  - **Project Management**: Add, update, and remove projects from the showcase.
- **UI/UX Enhancements**:
  - **Responsive Design**: Fully responsive layout for all devices.
  - **Notifications**: User feedback for actions (success, error) using `react-hot-toast`.
  - **Form Validation**: Robust client-side validation with `react-hook-form` and `zod`.

---

## Technology Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, Lucide Icons
- **State Management**: React Hooks
- **Form Handling**: React Hook Form & Zod
- **Rich Text Editor**: React Quill
- **Notifications**: React Hot Toast

---

## Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/icerahi/assignment-7.git
    cd assignment-7/frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the `frontend` directory and add the following variable:

    ```env
    NEXT_PUBLIC_BACKEND_URL=http://localhost:5000/api/v1
    ```

    _Note: Replace the URL with your deployed backend URL for production builds._

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
npm start
```
