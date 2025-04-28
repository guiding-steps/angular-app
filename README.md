# Prerequisites:
- Node.js (v18+ recommended)
- npm (comes with Node.js)
- Angular CLI (v19+)

# Step by Step Implementation:
## Step 1: Create a new angular application
```bash
ng new angular-material-app --standalone --style=css --routing=false
cd angular-material-app
```

## Step 2: Add Angular Material
```bash
ng add @angular/material
```
During installation, choose a theme (e.g., "Azure/Blue").

## Step 3: Create the components
```bash
ng generate component components/header --standalone --inline-style --skip-tests
ng generate component components/body --standalone --inline-style --skip-tests
ng generate component components/footer --standalone --inline-style --skip-tests
```

## Step 4: Reproduce the following files
- src/main.ts
- src/app/app.config.ts
- src/app/components/header/header.component.ts
- src/app/components/header/header.component.html
- src/app/components/body/body.component.ts
- src/app/components/body/body.component.html
- src/app/components/footer/footer.component.ts
- src/app/components/footer/footer.component.html
- src/app/app.component.ts
- src/styles.css

## Step 5: Run the application
```bash
ng serve -o
```
Now open your browser to http://localhost:4200 and you should see:

- A Material-themed header at the top

- A body with 3 Material cards (some with images)

- A fixed footer at the bottom


## Key Features of This Implementation:
- Standalone Components: All components are standalone as recommended for Angular 19+

- Angular Material: Uses Material components like toolbar, cards

- Type Safety: Strong typing with interfaces for card data

- Responsive Design: Cards are wrapped and centered

- Modern Structure: Clean component separation

You can now extend this by adding routing, services, or more Material components as needed.
