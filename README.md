# App Basics
This portfolio project uses React, Typescript and Vite. This project runs on node 20.9.0. It is advised you use `npx` to quickly install and switch between different node versions.

# Getting Started

`cd` into this project and run `npm i` or `npm install` to install node modules. Ensure you are running node 20.9.0

To run the project locally, run `npm run dev`.

# Styling

Tailwind is used for CSS styles. Find additional info about Tailwind in the [Documentation](https://tailwindcss.com/docs/installation).

# Testing

For testing, playwright is installed

# Code Formatting

Prettier is used for formatting code

# Linting

ESLint is used to catch coding problems, such as unused variables or shorter function syntax. 


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
