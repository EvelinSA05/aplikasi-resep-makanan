# Food Recipe Application (Aplikasi Resep Makanan)

A modern web application to manage and browse food recipes, built with React and Tailwind CSS.

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/REST_API-005571?style=for-the-badge&logo=api&logoColor=white" alt="REST API" />
</p>

## ✨ Features

- User and admin authentication (login, register, logout)
- Browse, search, and view recipe details
- Create, edit, and delete recipes (admin)
- Approve recipes (admin)
- Save/bookmark recipes
- User and admin dashboards
- History and suggestions (saran) feature
- Responsive and modern UI with Tailwind CSS

## 🚀 Technologies

- React
- Tailwind CSS
- React Router
- REST API (Laravel backend recommended)
- Axios

## ⚙️ How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/EvelinSA05/aplikasi-resep-makanan.git
   cd aplikasi-resep-makanan
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

> **Note:**  
> This app expects a running backend REST API (such as [laravel-recipe](https://github.com/EvelinSA05/laravel-recipe)) at `http://127.0.0.1:8000/api/`.

## 📂 Main Structure

- `src/App.js` - Main app and route definitions
- `src/components/` - All UI components and pages
- `src/Context/ResepContext.js` - Context for recipes and state management
- `src/index.js` - Entry point
- `src/index.css` / `src/App.css` - Global and app styles

## 📝 Customization

- You can add or edit components in `src/components/` for custom pages or features.
- To use a different backend, change the API base URL in `src/Context/ResepContext.js`.

## 🤝 Contribution

Pull requests are welcome! Feel free to fork and submit improvements or bugfixes.

## 📬 Contact

- [GitHub - EvelinSA05](https://github.com/EvelinSA05)

---

> **For more details and source code, visit the [GitHub repository](https://github.com/EvelinSA05/aplikasi-resep-makanan).**
