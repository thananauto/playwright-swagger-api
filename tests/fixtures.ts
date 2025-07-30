import { test as base, expect } from '@playwright/test';
import { Api } from '../Api';

// Create a Playwright fixture for the Api client
export const test = base.extend<{
  apiClient: Api<unknown>;
}>({
  apiClient: async ({}, use) => {
    const client = new Api();
    await use(client);
    
  },
});
