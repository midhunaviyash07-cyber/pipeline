# 🚀 Complete Web Development Pipeline

A comprehensive CI/CD pipeline setup for web development with automated testing, linting, building, and deployment.

## 📋 Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Pipeline Stages](#pipeline-stages)
- [API Endpoints](#api-endpoints)
- [Configuration Files](#configuration-files)
- [GitHub Actions](#github-actions)
- [Troubleshooting](#troubleshooting)

## ✨ Features

- ✅ **Automated Testing** - Jest with code coverage
- ✅ **Code Linting** - ESLint for code quality
- ✅ **Code Formatting** - Prettier for consistent style
- ✅ **Bundling** - Webpack for production builds
- ✅ **Security Scanning** - npm audit and Snyk integration
- ✅ **CI/CD Pipeline** - GitHub Actions workflow
- ✅ **Express Server** - RESTful API endpoints
- ✅ **Artifact Upload** - Build output preservation

## 📦 Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- GitHub account

## 🔧 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/midhunaviyash07-cyber/pipeline.git
cd pipeline
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Verify Installation
```bash
npm run test
```

## 📖 Usage

### Development

```bash
# Watch mode for development
npm run dev

# Start the server
npm start

# Run tests in watch mode
npm run test:watch
```

### Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Code Quality

```bash
# Run linter
npm run lint

# Format code
npm run format

# Run tests with coverage
npm run test
```

## 🔄 Pipeline Stages

### Stage 1: Quality Checks
- **ESLint** - Detects code quality issues
- **Prettier** - Checks code formatting
- **Jest Tests** - Runs unit tests with coverage

### Stage 2: Build
- **Webpack** - Bundles JavaScript
- **Artifact Upload** - Stores dist/ folder

### Stage 3: Security
- **npm audit** - Checks for vulnerabilities
- **Snyk** - Security vulnerability scanning

### Stage 4: Status Report
- Final pipeline summary
- Next steps guidance

### Stage 5: Deploy (Optional)
- Commented out by default
- Enable for production deployments

## 🌐 API Endpoints

### Health Check
```
GET /health
```
Response:
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### Calculator API

#### Add
```
GET /api/add?a=5&b=3
```
Response:
```json
{
  "a": 5,
  "b": 3,
  "result": 8,
  "operation": "add"
}
```

#### Subtract
```
GET /api/subtract?a=10&b=4
```

#### Multiply
```
GET /api/multiply?a=6&b=7
```

#### Divide
```
GET /api/divide?a=20&b=4
```

## 📁 Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `.eslintrc.json` | ESLint rules |
| `.prettierrc.json` | Prettier formatting rules |
| `webpack.config.js` | Webpack bundler config |
| `.babelrc` | Babel transpiler config |
| `.github/workflows/complete-pipeline.yml` | GitHub Actions workflow |
| `.gitignore` | Git ignore patterns |

## 🔨 GitHub Actions

The pipeline runs automatically on:
- **Push** to `main` or `develop` branches
- **Pull requests** to `main` or `develop` branches

### View Pipeline Status
1. Go to `https://github.com/midhunaviyash07-cyber/pipeline/actions`
2. Click on the latest workflow run
3. View individual stage logs

## 📊 Project Structure

```
pipeline/
├── src/
│   ├── index.js              # Main application logic
│   └── index.test.js         # Unit tests
├── dist/                     # Build output (generated)
├── coverage/                 # Test coverage (generated)
├── .github/
│   └── workflows/
│       └── complete-pipeline.yml  # CI/CD pipeline
├── package.json              # Dependencies
├── webpack.config.js         # Bundler config
├── .eslintrc.json           # Linter config
├── .prettierrc.json         # Formatter config
├── server.js                # Express server
├── .babelrc                 # Babel config
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🧪 Testing

### Run All Tests
```bash
npm run test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Generate Coverage Report
```bash
npm run test
# Coverage report in coverage/lcov-report/index.html
```

## 🐛 Troubleshooting

### Issue: Tests Fail
**Solution:** Ensure all dependencies are installed
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: ESLint Errors
**Solution:** Auto-fix linting errors
```bash
npm run lint
```

### Issue: Build Fails
**Solution:** Check for syntax errors and rebuild
```bash
npm run build
```

### Issue: Server Won't Start
**Solution:** Check if port 3000 is in use
```bash
# Change port
PORT=3001 npm start
```

## 📝 Next Steps

1. **Customize** the pipeline for your needs
2. **Add deployment** configuration
3. **Set branch protection** rules
4. **Configure secrets** for API keys
5. **Monitor** pipeline performance

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Push and create a pull request
4. Pipeline will run automatically
5. Merge after approval

## 📄 License

ISC

## 📞 Support

For issues or questions, check GitHub Issues or documentation.

---

**Last Updated:** 2024
**Status:** ✅ Active
