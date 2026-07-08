// Test suite for main application
const app = require('./index');

describe('Express App', () => {
  test('app should be defined', () => {
    expect(app).toBeDefined();
  });

  test('app should have get method', () => {
    expect(typeof app.get).toBe('function');
  });

  test('app should have post method', () => {
    expect(typeof app.post).toBe('function');
  });

  test('app should have use method for middleware', () => {
    expect(typeof app.use).toBe('function');
  });
});
