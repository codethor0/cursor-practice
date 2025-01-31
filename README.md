# Cursor Practice

A small JavaScript project to **practice Cursor’s AI** features.  

You’ll fix broken tests using:  

1. **Inline Edit**
2. **Chat With Codebase**
3. **Composer**

## 1. Prerequisites

- **Node.js** and **npm**. Download from [nodejs.org](https://nodejs.org) if you don’t have them.
- A code editor with **Cursor** installed (the AI-integrated IDE).

## 2. Project Setup

1. **Clone** this repository into a folder on your machine.  
2. Open the folder with Cursor.
3. Run `npm install` to install dependencies.

## 3. Running Tests

```bash
npm test
```

## 4. Activities

### 1. Inline Edit (Shipping Calculator)

- File: [./src/shippingCalculator.js](./src/shippingCalculator.js)
- Test: [./test/shippingCalculator.test.js](./test/shippingCalculator.test.js)

Scenario: The code returns 10 for any input, but the test expects a formula:

> Base cost = 5 + (2 * weight)

### 2. Chat With Codebase (Messy Function)

- File: [./src/main.js](./src/main.js)
- Test: [./test/main.test.js](./test/main.test.js)

Scenario: The function works but is messy. Using the Chat, ask cursor to explain the code and then refactor it.

### 3. Composer (Rename a Function in Multiple Files)

- Files:
  - [./src/composer.js](./src/composer.js)
  - [./src/composerUsageOne.js](./src/composerUsageOne.js)
  - [./src/composerUsageTwo.js](./src/composerUsageTwo.js)
- Test: [./test/composerUsage.test.js](./test/composerUsage.test.js)

Scenario: The test imports a function named multiply, but the code still calls it multiplyComposerNumbers.

## 5. Final Tips

- You can combine inline edits and chat instructions in any file.
- If you break something else, run `npm test` to see which test fails.
- Don’t forget to commit your changes to track progress.

Happy coding with Cursor!
