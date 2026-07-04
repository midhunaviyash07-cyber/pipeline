/**
 * Express Server Configuration
 */

const express = require('express');
const { add, subtract, multiply, divide } = require('./src/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// API Routes
app.get('/api/add', (req, res) => {
  const { a, b } = req.query;
  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Parameters a and b are required' });
  }
  try {
    const result = add(Number(a), Number(b));
    res.json({ a: Number(a), b: Number(b), result, operation: 'add' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/subtract', (req, res) => {
  const { a, b } = req.query;
  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Parameters a and b are required' });
  }
  try {
    const result = subtract(Number(a), Number(b));
    res.json({ a: Number(a), b: Number(b), result, operation: 'subtract' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/multiply', (req, res) => {
  const { a, b } = req.query;
  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Parameters a and b are required' });
  }
  try {
    const result = multiply(Number(a), Number(b));
    res.json({ a: Number(a), b: Number(b), result, operation: 'multiply' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/divide', (req, res) => {
  const { a, b } = req.query;
  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Parameters a and b are required' });
  }
  try {
    const result = divide(Number(a), Number(b));
    res.json({ a: Number(a), b: Number(b), result, operation: 'divide' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`📊 Health Check: http://localhost:${PORT}/health`);
    console.log(`🧮 Calculator API:`);
    console.log(`   - Add: http://localhost:${PORT}/api/add?a=5&b=3`);
    console.log(`   - Subtract: http://localhost:${PORT}/api/subtract?a=10&b=4`);
    console.log(`   - Multiply: http://localhost:${PORT}/api/multiply?a=6&b=7`);
    console.log(`   - Divide: http://localhost:${PORT}/api/divide?a=20&b=4`);
  });
}

module.exports = app;
