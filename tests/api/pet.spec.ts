import { test } from '../fixtures';
import { expect } from '@playwright/test';

test.describe('Pet API Tests', () => {
  test('Upload an image for a pet', async ({ apiClient }) => {
    const petId = 1; // Example pet ID
    const response = await apiClient.pet.uploadFile(petId, {
      additionalMetadata: 'Test metadata',
      file: undefined, // Replace with actual file if needed
    });
    console.log('Upload response:', response);
    expect(response.status).toBe(200);
    expect(response.data.code).toBe(200);
  });

  test('Add a new pet to the store', async ({ apiClient }) => {
    const newPet = {
      name: 'Doggie',
      photoUrls: ['http://example.com/photo.jpg'],
      status: 'available' as 'available',
    };
    const response = await apiClient.pet.addPet(newPet);
    console.log('Add pet response:', response);
    expect(response.status).toBe(405); // Invalid input
    expect(response).toBeUndefined();
  });

  test('Find pets by status', async ({ apiClient }) => {
    const response = await apiClient.pet.findPetsByStatus({ status: ['available'] });
    console.log('Find pets response:', response);
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('Get pet by ID', async ({ apiClient }) => {
    const petId = 1; // Example pet ID
    const response = await apiClient.pet.getPetById(petId);
    console.log('Get pet response:', response);
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Doggie');
  });

  test('Delete a pet', async ({ apiClient }) => {
    const petId = 1; // Example pet ID
    const response = await apiClient.pet.deletePet(petId);
    console.log('Delete pet response:', response);
    expect(response.status).toBe(200);
    expect(response).toBeUndefined();
  });

  test('Add a new pet with valid data', async ({ apiClient }) => {
    const newPet = {
      id: 0,
      name: 'Fluffy',
      category: { id: 0, name: 'Cats' },
      photoUrls: ['http://example.com/photo.jpg'],
      tags: [{ id: 0, name: 'cute' }],
      status: 'available' as 'available',
    };
    const response = await apiClient.pet.addPet(newPet);
    console.log('Add valid pet response:', response);
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Fluffy');
  });

  test('Find pet by ID that does not exist', async ({ apiClient }) => {
    const petId = 9999; // Non-existent pet ID
    const response = await apiClient.pet.getPetById(petId);
    console.log('Find non-existent pet response:', response);
    expect(response.status).toBe(404);
  });

  test('Delete a pet that does not exist', async ({ apiClient }) => {
    const petId = 9999; // Non-existent pet ID
    const response = await apiClient.pet.deletePet(petId);
    console.log('Delete non-existent pet response:', response);
    expect(response.status).toBe(404);
  });
});
