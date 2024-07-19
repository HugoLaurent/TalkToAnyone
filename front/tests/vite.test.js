// tests/mock.test.js
import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';

// Correctly mock axios with default export
vi.mock('axios', () => ({
  __esModule: true, // This tells Vitest that it's an ES module
  default: {
    post: vi.fn(() => Promise.resolve({ data: { content: 'Mocked response' } })),
  },
}));

describe('Mock Test', () => {
  it('should use the mocked axios.post', async () => {
    const response = await axios.post('/test');
    expect(response.data.content).toBe('Mocked response');
  });
});
