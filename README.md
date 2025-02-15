# Blog Application - Next.js & Tailwind CSS

## 🚀 Project Overview
This is a simple **Blog Application** built using **Next.js** and **Tailwind CSS**. The project fetches and displays blog posts from the **JSONPlaceholder API**, uses **static site generation (SSG)** for fast performance, and includes a **hashtag search feature** for filtering posts.

## 🎯 Features
### ✅ **Homepage (`/`):**
- Fetches posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) using **`getStaticProps`**.
- Displays blog post previews in a **responsive grid layout**.
- Each post includes:
  - Clickable **title** leading to the full post.
  - The first **100 characters** of the body.
  - A **"Read More"** button linking to the full post.

### ✅ **Post Details Page (`/post/[id]`):**
- Uses **`getStaticPaths`** and **`getStaticProps`** to statically generate individual post pages.
- Displays full **title, body, author ID, and post ID**.
- Extracts **hashtags dynamically** from post titles.
- Allows users to **filter posts by hashtags**.

### ✅ **Hashtag Search:**
- Extracts keywords from post titles (words longer than 9 characters).
- Clicking a hashtag filters posts containing that word.
- Users can **clear filters** to reset the view.

### ✅ **Pagination:**
- Displays **9 posts per page**.
- Preserves hashtag filtering across pagination.

### ✅ **Navigation:**
-**Navbar** with links to:
  - **Home (`/`)**
  - **About (`/about`)** (Describes the project and its features)

### ✅ **Responsive Design:**
- Mobile-friendly layout using **Tailwind CSS**.

### ✅ **Reusable Components:**
- `PostCard`: Displays post preview.
- `Pagination`: Handles navigation between pages.
- `Button`: Standardized buttons across the app.
- `HashtagFilter`: Filters posts by hashtags.

## 📌 Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/wallbreaker1/blog-interview.git
cd blog-interview
```

### 2️⃣ Install Dependencies
```bash
npm install
# or
yarn install
```

### 3️⃣ Run the Development Server
```bash
npm run dev
# or
yarn dev
```
Then open **[http://localhost:3000](http://localhost:3000)** in your browser.

## 🌐 Deployment
- The project is deployed on **Vercel**.
- Live URL: [Your Vercel Link Here]

## 📖 About This Project
- This project was built as a **technical interview task**.
- **SSG (`getStaticProps` and `getStaticPaths`)** was used for performance optimization.
- Even though `getStaticProps` is now somewhat legacy, the implementation was required for the task.
- The **hashtag search feature** was implemented without predefined hashtags; instead, **repeated words** in post titles were extracted dynamically.
- **Potential improvements:**
  - Implement **server-side rendering (SSR)** for real-time updates.
  - Use **database storage** instead of a static API.

## 🛠 Technologies Used
- **Next.js** (Static Site Generation, Dynamic Routing)
- **Tailwind CSS** (Utility-first styling)
- **TypeScript** (Strongly-typed JavaScript)
- **JSONPlaceholder API** (Mock API for blog posts)
- **Vercel** (Hosting and deployment)

## 📩 Contact
For more projects and collaboration, check out my **[portfolio](https://www.andrei-serban.website/#portfolio)**!

