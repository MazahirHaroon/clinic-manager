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
│── pages/(App pages/screens)
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
│   ├── schemas/                 # Yup validation schemas
│   │   ├── loginSchema.ts
│   ├── ... other utility files
│
│── hooks/(Custom React hooks)
│   ├── ... hooks
│
│── main.tsx
│── router.tsx (Application routing)
```

**Note:**

- As of now, we have a separate file along with the components for the styles. We will soon be using TailwindCSS so those will be deleted.
- As of now no hooks are added.

### Path Aliases

- `@clinic-ui`: UI Components Directory
- `@components`: Components Directory
- `@pages`: Pages Directory
- `@utils`: Utils Directory
- `@constants`: Constants Directory


### Currently Developed Screens

- **SignUp Page**

   <img width="1792" alt="signup-page" src="https://github.com/user-attachments/assets/e2b6039f-c46b-49d3-b8a0-97f7bc437a69" />

- **Home Page** (Will add more components)

   <img width="1792" alt="home-page" src="https://github.com/user-attachments/assets/935de846-8823-4b8a-bb79-e0bf8e10da61" />

- **Not Found Page**

   <img width="1792" alt="not_found-page" src="https://github.com/user-attachments/assets/570e3a98-088f-4ecd-b916-8bdc32712d96" />

