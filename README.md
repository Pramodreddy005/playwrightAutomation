# 🚀 Playwright Automation Framework (TypeScript)

A scalable and modular **UI Test Automation Framework** built using **Playwright with TypeScript**, 
implementing real-world automation scenarios with reusable components, data-driven testing, and CI integration.

---

## 📌 Project Overview

This framework demonstrates:

- End-to-End UI automation
- Data-driven testing using JSON
- Reusable helper-based architecture
- Parallel execution and retry mechanisms
- CI/CD integration using GitHub Actions

---

## 🧰 Tech Stack

- **Automation Tool:** Playwright  
- **Language:** TypeScript  
- **Test Runner:** Playwright Test  
- **Design Approach:** Modular + Helper-based (similar to POM)  
- **CI/CD:** GitHub Actions  
- **Reporting:** Playwright HTML Reports
  
## 📂 Project Structure
```
playwrightAutomation/
│── tests/
│   ├── test/
│   │   ├── advantageDemo/
│   │   │   ├── cartFunctionality.spec.ts
│   │   │   ├── signUpTest.spec.ts
│   │   ├── misc/
│   │       ├── login-functionality.spec.ts
│   │       ├── example.spec.ts
│   │
│   ├── helpers/
│   │   ├── baseSetup.ts        # Custom test setup & fixtures
│   │   ├── dataHelper.ts       # Data handling utilities
│   │   ├── signInHelper.ts     # Reusable business flows
│   │
│   ├── data/
│       ├── data.json           # Test data
│
│── playwright.config.ts        # Framework configuration
│── .github/workflows/          # CI pipeline
│── package.json
```

````

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Pramodreddy005/playwrightAutomation.git
cd playwrightAutomation
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run all tests

```bash
npm test
```

### Run in headed mode

```bash
npm run test:headed
```

### Debug tests

```bash
npm run test:debug
```

### Run with UI mode

```bash
npm run test:ui
```

---

## 📊 Reporting

After execution:

```bash
npx playwright show-report
```

### Report Features:

* HTML dashboard
* Screenshot on failure
* Trace viewer for debugging

---

## ⚡ Key Features

* ✅ Modular helper-based framework (reusable business flows)
* ✅ Data-driven testing using JSON
* ✅ Parallel execution for faster runs
* ✅ Retry mechanism for flaky tests
* ✅ CI integration with GitHub Actions
* ✅ Real-world scenarios (Cart, Login, Signup, Window handling)

---

## 🧪 Sample Test Flow

Example

```ts
test("Add To cart", async ({page}) => {
    await addToCart(page);
});
```

👉 Business logic is abstracted into reusable helpers:

* `addToCart()`
* `checkOut()`
* `contactUs()`

---

## 🔄 CI/CD Integration

GitHub Actions is configured:

📂 `.github/workflows/playwright.yml`

This enables:

* Automated test execution on push
* Continuous testing pipeline
* Faster feedback for code changes

---

## 📈 Future Enhancements

* Add Page Object Model (POM) layer (optional enhancement)
* Integrate Allure Reports
* Add API + UI combined testing
* Dockerize test execution
* Environment-based configuration

---

## 👨‍💻 Author

**Pramod Reddy**
QA Automation Engineer

* 🔗 GitHub: [https://github.com/Pramodreddy005](https://github.com/Pramodreddy005)
* 🔗 LinkedIn: [https://linkedin.com/in/pramodbairi](https://linkedin.com/in/pramodbairi)
