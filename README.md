# Clinic Manager App

A **Doctor-Patient Management System** for booking appointments, handling medical queries, and managing patient records. Features include **online slot booking, document uploads, emergency contacts, and doctor dashboards** for viewing appointments and responding to patient queries.

### To Run

```bash
   npm install
   npm run dev
```

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
│── constants/
│   ├── common.ts
│   ├── ... other constant files
│
│── utils/(Utility functions/helpers)
│   ├── schemas/ (Yup validation schemas)
│   │   ├── loginSchema.ts
│   ├── ... other utility files
│
│── hooks/ (Custom React hooks)
│   ├── ... hooks
│── index.css (Global styles, theme variables, and Tailwind setup) 
│── main.tsx 
│── router.tsx (Application routing)
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

- **Home Page** (Will add more components)

   <img width="1791" alt="home-page" src="https://github.com/user-attachments/assets/8ebeb67e-baee-4075-a1ee-72fe31d97325" />

- **Not Found Page**

   <img width="1789" alt="not_found-page" src="https://github.com/user-attachments/assets/ede521a9-cee3-4654-91d5-183867451c2f" />

