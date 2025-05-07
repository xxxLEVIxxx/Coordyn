# Coordyn 🗓️

**Coordyn** is a modern web-based single-page application that helps groups coordinate activities, select options collaboratively, and streamline decision-making. Built with React, TypeScript, and Redux Toolkit, it's designed for speed, clarity, and collaboration.

## 🚀 Features

- 📆 Schedule group activities with ease
- ✅ Real-time voting on preferred times or options
- 🧩 Modular architecture using feature-based folder structure
- ⚡ Fast performance with Vite and SWC
- 📱 Fully responsive UI

## 🏗️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS (or SCSS / Styled Components if used)
- **Build Tool**: Vite + SWC
- **Testing**: Vitest + React Testing Library

## 📁 Folder Structure (Feature-Based)

```
src/
├── app/ # Global store and hooks
├── features/
│ ├── activity/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── activitySlice.ts
│ │ └── services.ts
├── shared/ # Shared components, hooks, types
├── main.tsx # App entry point
├── App.tsx
```

## 📦 Getting Started

```bash
pnpm install // install the packages
pnpm dev     // run the dev server
pnpm build   // build the production bundle
```

## 🧪 Testing

- Unit + integration tests using Vites
- Located alongside source files (e.g., Component.test.tsx)

## 📄 License

MIT

## 🙌 Contributions

Pull requests and issues are welcome. Please file bugs or ideas in the issues sections.
