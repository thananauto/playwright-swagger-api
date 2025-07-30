import { test } from '../fixtures';
import { expect } from '@playwright/test';

test.describe('User API Tests', () => {
  test('Create a user', async ({ apiClient }) => {
    const user = {
      id: 1,
      username: 'testuser',
      firstName: 'Test',
      lastName: 'User',
      email: 'testuser@example.com',
      password: 'password123',
      phone: '1234567890',
      userStatus: 1,
    };
    const response = await apiClient.user.createUser(user);
    expect(response.status).toBe(200);
    expect(response).toBeUndefined();
  });

  test('Get user by username', async ({ apiClient }) => {
    const username = 'testuser';
    const response = await apiClient.user.getUserByName(username);
    expect(response.status).toBe(200);
    expect(response.data.username).toBe(username);
  });

  test('Update a user', async ({ apiClient }) => {
    const username = 'testuser';
    const updatedUser = {
      id: 1,
      username: 'testuser',
      firstName: 'Updated',
      lastName: 'User',
      email: 'updateduser@example.com',
      password: 'newpassword123',
      phone: '0987654321',
      userStatus: 1,
    };
    const response = await apiClient.user.updateUser(username, updatedUser);
    expect(response.status).toBe(200);
    expect(response).toBeUndefined();
  });

  test('Delete a user', async ({ apiClient }) => {
    const username = 'testuser';
    const response = await apiClient.user.deleteUser(username);
    expect(response.status).toBe(200);
    expect(response).toBeUndefined();
  });

  test('Login a user', async ({ apiClient }) => {
    const response = await apiClient.user.loginUser({
      username: 'testuser',
      password: 'password123',
    });
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  test('Logout a user', async ({ apiClient }) => {
    const response = await apiClient.user.logoutUser();
    expect(response.status).toBe(200);
    expect(response).toBeUndefined();
  });
});
