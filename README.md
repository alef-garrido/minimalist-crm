# Minimalist CRM for Small Businesses

**Minimalist CRM** is a minimalist web application designed for small businesses, enabling efficient contact management through CRUD operations (Create, Read, Update, Delete). This project is built using **React**, **React Router v7**, **Vite**, and **Tailwind CSS**, with the goal of showcasing modern frontend development skills.

---

## 🌟 **Main Features**

- **Contact CRUD:** Allows creating, reading, updating, and deleting contacts.
- **Search and Filtering:** Facilitates searching for contacts by name or category.
- **Responsive Design:** Built with **Tailwind CSS** for a seamless user experience on all devices.
- **Dynamic Routing:** Implemented with **React Router v7** for declarative and efficient navigation.
- **Rapid Development:** Optimized with **Vite** for fast server startup and real-time updates (HMR).
- **Safety and Scalability:** Written in **TypeScript** to ensure type safety and ease scalability.

---

## 🛠️ **Technologies Used**

- **React:** Primary library for building the user interface.
- **React Router v7:** For dynamic routing and navigation management.
- **Vite:** Toolchain for fast compilation and development.
- **Tailwind CSS:** CSS framework for quick and modern design.
- **Context API:** Global state management for the application.
- **TypeScript:** Programming language with type safety.
- **Axios/Fetch:** For handling HTTP requests to a simulated or real API.

---

## 🚀 **Getting Started**

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/minimalist-crm.git
   cd minimalist-crm
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 📂 **Project Structure**

The project is organized into a clear and logical directory structure to facilitate development and maintenance. Below is the directory structure of the project:

```
root/
├── app/
│   ├── routes/
│   │   └── ... (route configurations)
│   ├── home.tsx
│   ├── welcome/
│   │   └── ... (welcome page components)
│   ├── app.css
│   ├── root.tsx
│   └── routes.ts
├── node_modules/
├── public/
│   └── favicon.ico
├── .dockerignore
├── .gitignore
├── Dockerfile
├── Dockerfile.bun
├── Dockerfile.pnpm
├── LICENSE
├── package-lock.json
├── package.json
├── react-router.config.ts
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 📝 **Key Functionalities**

### **1. Create Contact**
- Users can add new contacts with details like name, phone number, email, and address.

### **2. Read Contact**
- Contacts are displayed in a list or card view, with full details accessible.

### **3. Update Contact**
- Users can edit the information of existing contacts.

### **4. Delete Contact**
- Users can delete contacts no longer needed.

### **5. Search and Filter**
- Users can search for contacts by name or filter them by categories.

---

## 🧪 **Testing**

This project includes unit and integration tests to ensure code quality. To run the tests:

```bash
npm test
```

---

## 🌐 **Deployment**

### **Production**

1. Build the project for production:
   ```bash
   npm run build
   ```

2. Preview the production build locally:
   ```bash
   npm run preview
   ```

### **Deploying with Docker**

1. Build the Docker image:
   ```bash
   docker build -t minimalist-crm .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 minimalist-crm
   ```

### **Deployment Platforms**

The project can be deployed to any platform that supports static web applications or containers, such as:

- **Vercel**
- **Netlify**
- **AWS Amplify**
- **Heroku**
- **Railway**

---

## 🤝 **Contributions**

Contributions are welcome! If you find a bug or have an improvement idea, please open an **issue** or submit a **pull request**.

---

## 📄 **License**

This project is licensed under the **MIT** License. See the `LICENSE` file for details.

---

## 📞 **Contact**

If you have any questions or suggestions, feel free to reach out:

- **Name:** Alef Lemat
- **Email:** aleflemat@proton.me
- **LinkedIn:** [My Profile](www.linkedin.com/in/oscar-alef)
- **GitHub:** [Alef Garrido Lemat](https://github.com/alef-garrido)
