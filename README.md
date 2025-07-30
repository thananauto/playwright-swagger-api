# Playwright API Testing Framework - Swagger JSON + Github Copilot

This framework is built to show case how quickly we can generate the runnable API test scripts using `Swagger.json` and [`swagger-typescript-api`](https://github.com/acacode/swagger-typescript-api) with help of Playwright test runner.

## Prerequisites

1. **Node.js**: Ensure Node.js is installed on your system.
2. **Playwright**: Install Playwright globally or locally in your project.
3. **Dependencies**: Install project dependencies using `npm install`.

## Setup Instructions
1. Clone the repository:
   ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Add the swagger json file and run the following command
    `npx swagger-typescript-api generate --path ./<swagger.json>`

4. Now the `Api.ts` client file get generated
5. Add the prompt to the path `.github/prompts/**`
6. Open github copilot chat and run the prompt

## Running Tests

1. Run all tests:
   ```bash
   npx playwright test
   ```
2. Run a specific test file:
   ```bash
   npx playwright test tests/api/<test-file>.spec.ts
   ```

3. View the HTML report:
   ```bash
   npx playwright show-report
   ```
## Debugging
1. Add debugging logs in test files to capture intermediate values:
   ```typescript
   console.log('Response:', response);
   ```

## Test Structure

- **Fixtures**: The `tests/fixtures.ts` file initializes the API client.
- **Test Files**: Each API endpoint has a corresponding test file in `tests/api`.
- **Assertions**: Tests include assertions for response status codes and data validation.

## Example Test

```typescript
import { test } from '../fixtures';
import { expect } from '@playwright/test';

test('Get pet by ID', async ({ apiClient }) => {
  const petId = 1;
  const response = await apiClient.pet.getPetById(petId);
  console.log('Response:', response);
  expect(response.status).toBe(200);
  expect(response.data.name).toBe('Doggie');
});
```

## Additional Notes

- Ensure the `pets.json` file is up-to-date with the latest API definitions.
- Use the Swagger Petstore base URL (`https://petstore.swagger.io/v2`) for API requests.

## References

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Swagger Petstore](https://petstore.swagger.io/)
