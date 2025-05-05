# Clinic Manager App

A **Doctor-Patient Management System** for booking appointments, handling medical queries, and managing patient records. Features include **online slot booking, document uploads, emergency contacts, and doctor dashboards** for viewing appointments and responding to patient queries.

### To Run

```bash
   npm install
   npm run dev
```

## **Tech Stack**

- **[React](https://react.dev/)** (v19)
- **[TypeScript](https://www.typescriptlang.org/)** (v5)
- **[React Router](https://reactrouter.com/)** (v7) – Declarative routing for navigation management.  
- **[Formik](https://formik.org/)** (v2) – Simplifies form handling and validation.  
- **[Yup](https://github.com/jquense/yup)** (v1) – Schema-based validation for form inputs.  
- **[Tailwind CSS](https://tailwindcss.com/)** (v4)
- **[Vite](https://vitejs.dev/)** (v6)
- **[Appwrite](https://cloud.appwrite.io)** - Backend-as-a-service for authentication and database management.

### Folder Structure

```graphql
src/
│── components/ (Reusable UI components)
│   ├── ClinicUI/(Primitive UI elements used in larger components)
│   │   ├── Button/
│   │   │   ├── PrimaryButton.tsx
│   │   │   ├── SecondaryButton.tsx
│   │   │   ├── index.ts (Re-exports buttons for easy imports)
│   │   ├── FormComponents/
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── index.ts (Re-exports form components)
│   │   ├── index.ts(Re-exports all UI components)
│   ├── Logo.tsx
│   ├── ... other components
│
│── pages/ (App pages/screens)
│   ├── Home.tsx
│   ├── SignUp.tsx
│   ├── NotFound.tsx
│   ├── ... other pages
│
│── appwrite/ (Appwrite services)
│   ├── auth.ts
│   ├── config.ts
│   ├── index.ts(Re-exports all appwrite services)
│
│── utils/(Utility functions/helpers)
│   ├── schemas/ (Yup validation schemas)
│   │   ├── loginSchema.ts
│   ├── ... other utility files
│
│── hooks/ (Custom React hooks)
│   ├── ... hooks
│
│── index.css (Global styles, theme variables, and Tailwind setup) 
|
│── router.tsx (Application routing)
│
│── constants/
│   ├── common.ts
│   ├── ... other constant files
|
│── main.tsx 
```

**Note:**

- As of now no hooks are added.

### Path Aliases

- `@clinic-ui`: UI Components Directory
- `@components`: Components Directory
- `@pages`: Pages Directory
- `@utils`: Utils Directory
- `@constants`: Constants Directory


### Currently Developed Screens

- **SignUp Page**

   <img width="1792" alt="signup-page" src="https://github.com/user-attachments/assets/62dca79a-3b1a-4f3e-9c50-f2f7b2b42fee" />

- **Login Page**

   <img width="1792" alt="login-page" src="https://github.com/user-attachments/assets/5f53d477-8a57-48f2-bbf4-7fedf4bac93c" />

- **Home Page** (Will add more components)

   <img width="1791" alt="home-page" src="https://github.com/user-attachments/assets/8ebeb67e-baee-4075-a1ee-72fe31d97325" />

- **Not Found Page**

   <img width="1789" alt="not_found-page" src="https://github.com/user-attachments/assets/ede521a9-cee3-4654-91d5-183867451c2f" />

