![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-95%25-blue)
<p align="center">
  <img src="https://cdn.prod.website-files.com/625fff2abe443df4ebc4e672/626002a1e6eb58119b978753_The%20Agile%20Monkeys%20Logo-01.svg" alt="Cursor Practice Logo" width="200" height="auto">
</p>

# Cursor Practice

A small JavaScript project to **practice Cursor’s AI** features.  

You’ll fix broken tests using:  

1. **Inline Edit** (⌘ + K)
2. **Chat With Codebase** (⌘ + L)
3. **Composer** (⌘ + I)

## 1. Prerequisites

- **Node.js** and **npm**:

  ### macOS

  1. Using Homebrew (recommended):

     ```bash
     brew install node
     ```

  2. Or download the macOS installer (.pkg) from [nodejs.org](https://nodejs.org)
  3. Verify installation in Terminal:

     ```bash
     node --version
     npm --version
     ```

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

Scenario: The code returns 10 for any input, but the test expects dynamic calculation.

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

- Use **Inline Edit** + **Chat** together: Combine AI features for better results
- Add context by including multiple files in your prompts
- When stuck, include the entire codebase in your prompt for better AI understanding
- Run `npm test` frequently to catch any unintended side effects
- Review AI suggestions carefully before applying them
- Don’t forget to commit your changes to track progress.

Happy coding with Cursor!
