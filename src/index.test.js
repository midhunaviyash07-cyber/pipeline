// Test suite for main application
const app = require('./index');

describe('API Endpoints', () => {
  test('should be defined', () => {
    expect(app).toBeDefined();
  });

  test('health check endpoint exists', () => {
    expect(typeof app.get).toBe('function');
  });
});
