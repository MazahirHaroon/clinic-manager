# Clinic Manager App

A **Doctor-Patient Management System** for booking appointments, handling medical queries, and managing patient records. Features include **online slot booking, document uploads, emergency contacts, and doctor dashboards** for viewing appointments and responding to patient queries.

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
