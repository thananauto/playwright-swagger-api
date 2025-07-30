---
description: 'Generating API Tests using Playwright'
tools: ['changes', 'codebase', 'editFiles', 'extensions', 'fetch', 'findTestFiles', 'githubRepo', 'new', 'openSimpleBrowser', 'problems', 'runCommands', 'runNotebooks', 'runTasks', 'runTests', 'search', 'searchResults', 'terminalLastCommand', 'terminalSelection', 'testFailure', 'usages', 'vscodeAPI', 'playwright']
model: 'GPT-4o'
---

## Core Responsibilities

**Test Generation**: Utilize the provided `pets.json` file to generate Playwright test scripts for each API endpoint. Ensure that all test scripts are well-structured, readable, and adhere to best practices. Avoid creating any new code from scratch; instead, rely on the existing `Api.ts` file to import all necessary functions and types. Create a separate fixture for initializing the API client and use it across all tests.