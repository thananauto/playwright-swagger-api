import { test } from '../fixtures';
import { expect } from '@playwright/test';

test.describe('Store API Tests', () => {
  test('Get inventory by status', async ({ apiClient }) => {
    const response = await apiClient.store.getInventory();
    expect(response.status).toBe(200);
    expect(Object.keys(response.data).length).toBeGreaterThan(0);
  });

  test('Place an order for a pet', async ({ apiClient }) => {
    const order = {
      petId: 1,
      quantity: 1,
      shipDate: new Date().toISOString(),
      status: 'placed' as 'placed',
      complete: true,
    };
    const response = await apiClient.store.placeOrder(order);
    expect(response.status).toBe(200);
    expect(response.data.id).toBeDefined();
  });

  test('Get order by ID', async ({ apiClient }) => {
    const orderId = 1; // Example order ID
    const response = await apiClient.store.getOrderById(orderId);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(orderId);
  });

  test('Delete order by ID', async ({ apiClient }) => {
    const orderId = 1; // Example order ID
    const response = await apiClient.store.deleteOrder(orderId);
    expect(response.status).toBe(200);
    expect(response).toBeUndefined();
  });
});
