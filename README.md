# FormMolecule - React + Next.js Project

This project is an interactive form built with **React** and **Next.js**, allowing users to create and manage articles with multiple attributes such as type, customer, brand, color, size, certification, unit, price, box measurements, and more. Data can be saved to **LocalStorage** and is fully controlled via React state.

## Technologies Used

- React 18+
- Next.js 13+
- Axios
- Shadcn
- Tailwind CSS
- Lucide Icons

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/lubias/desafio-wip.git
cd your-repository
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Start the development server
```bash
npm run dev
# or
yarn dev
```
The server will start at http://localhost:3000.

### 4. Access the form
Once the project is running, open the browser and go to the main page (/) to view the form.

### 5. Features
1. Select article type, customer, brand, color, size, and certification.
2. Controlled inputs for number of pairs, packs per box, coefficient, unit price, box measurements, and weight.
3. Automatic code generation based on selected fields.
4. Validation of required fields.
5. Save data to LocalStorage.
6. Reset all fields after saving.

### 6. Check LocalStorage
Open the browser console and run:
```js
JSON.parse(localStorage.getItem("formData"))
```
To see the data saved by the form.
