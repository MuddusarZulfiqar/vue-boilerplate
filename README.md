# 🌟 Vue 3 Boilerplate + Vite

A scalable Vue 3 boilerplate powered by Vite, Vue Router, Pinia, Vuetify, and Vue Query — structured for real-world enterprise-grade applications.

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## 📁 Folder Structure

```

.
├── public/                 # Static public assets
├── src/                    # Main source directory
│   ├── api/                # Axios configuration and API calls
│   ├── assets/             # Images, fonts, and static assets
│   ├── components/         # Global reusable Vue components
│   ├── composables/        # Custom Vue composition functions
│   ├── config/             # App configuration files (env, constants)
│   ├── directives/         # Custom Vue directives
│   ├── layouts/            # Application layout components
│   ├── lib/                # Utility libraries
│   ├── locales/            # i18n translation files
│   ├── pages/              # Route-level components (views)
│   ├── plugins/            # Third-party plugin registrations
│   ├── router/             # Vue Router configuration
│   ├── store/              # Pinia store modules
│   ├── utils/              # Helper utilities
│   ├── App.vue             # Root Vue component
│   ├── i18n.js             # i18n setup
│   └── main.js             # Application entry point
├── .env                    # Environment variables
├── .env.example            # Example env file
├── .gitignore              # Files ignored by Git
├── index.html              # HTML entry point
├── jsconfig.json           # IntelliSense config for JS/TS
├── package.json            # Project metadata and scripts
├── package-lock.json       # Dependency lock file
├── README.md               # Project documentation
└── vite.config.js          # Vite configuration

```

---

## 🚀 Tech Stack

- **Vue 3** + **Vite**
- **Vue Router** – Routing management
- **Pinia** – State management
- **Vuetify 3** – Material Design UI library
- **Vue Query** – Async state and server caching
- **Yup** – Validation schema support
- **vue-i18n** – Internationalization
- **Axios** – HTTP requests
- **nprogress** – Loading bar feedback

---

## ⚙️ Setup & Usage

### 1. Clone the Repo

```bash
git clone https://github.com/MuddusarZulfiqar/vue-boilerplate
cd vue-boilerplate
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## 📦 Environment Variables

Copy `.env.example` to `.env` and adjust values as needed:

```bash
cp .env.example .env
```

---

## 📝 License

MIT © \[Muddusar Zulfiqar]
