# GitHub Repository Setup Guide

This guide explains how to set up the Cypress BDD test project on GitHub and configure CI/CD.

## Prerequisites

- GitHub account
- Git installed on your machine
- VS Code with GitHub integration
- Node.js 18.x installed

## Step 1: Create GitHub Repository

### Method 1: Using VS Code

1. Open the cypress-tests folder in VS Code
2. Open Source Control panel (Ctrl+Shift+G)
3. Click **"Initialize Repository"**
4. Click **"Publish to GitHub"**
5. Select **"Publish to GitHub public repository"**
6. Enter repository name: **cypress-project-2**
7. Choose to publish
8. Wait for confirmation

### Method 2: Using GitHub Web Interface

1. Go to https://github.com/new
2. Repository name: `cypress-project-2`
3. Description: "Cypress BDD Test Suite with Cucumber"
4. Select **Public** repository
5. Initialize with README (optional)
6. Click **Create repository**

## Step 2: Initial Git Configuration

If using web method, clone locally:
```bash
git clone https://github.com/YOUR_USERNAME/cypress-project-2.git
cd cypress-project-2
```

## Step 3: Add Project Files

```bash
# Stage all files
git add .

# Commit with message
git commit -m "Initial commit: Cypress BDD test suite with POM architecture"

# Push to GitHub
git push origin main
```

## Step 4: Verify GitHub Repository Structure

After pushing, verify on GitHub:

```
cypress-project-2/
├── cypress/
│   ├── e2e/                    ✓ Feature files
│   ├── support/
│   │   ├── pom/               ✓ Page Object Models
│   │   ├── step_definitions/  ✓ Gherkin steps
│   │   ├── e2e.js
│   │   └── commands.js
│   ├── screenshots/
│   ├── videos/
│   └── reports/
├── .github/
│   └── workflows/
│       └── cypress-tests.yml   ✓ GitHub Actions
├── cypress.config.ts
├── tsconfig.json
├── .cypress-cucumber-preprocessorrc.json
├── .gitignore
├── package.json
├── README.md
└── GITHUB_SETUP.md
```

## Step 5: Verify GitHub Actions Workflow

1. Go to repository on GitHub
2. Click **Actions** tab
3. Verify **"Cypress BDD Tests"** workflow appears
4. Click on workflow to view details

### Workflow Configuration

The `.github/workflows/cypress-tests.yml` includes:

```yaml
Triggers:
  • Push to main/master/develop branches
  • Pull requests to main/master/develop
  • Daily schedule at 2 AM UTC (0 2 * * *)

Environment:
  • Ubuntu latest
  • Node.js 18.x

Steps:
  1. Checkout code
  2. Setup Node.js
  3. Install npm dependencies
  4. Run Cypress tests (npm run cy:run)
  5. Upload screenshots (on failure)
  6. Upload videos (always)
  7. Upload Cucumber reports (always)
```

## Step 6: First Workflow Run

### Trigger Manually

1. Go to **Actions** tab
2. Select **"Cypress BDD Tests"** workflow
3. Click **"Run workflow"** button
4. Select branch: **main**
5. Click **"Run workflow"**

### Wait for Completion

1. Workflow appears in history
2. Click to view details
3. Watch real-time log output
4. Check for ✓ (passed) or ✗ (failed)

### View Test Artifacts

After workflow completes:

1. Scroll to bottom of workflow run page
2. Under "Artifacts" section, download:
   - **cypress-screenshots** (failure screenshots)
   - **cypress-videos** (test recordings)
   - **cucumber-reports** (HTML test report)

## Step 7: Branch Protection Rules (Optional)

To require tests to pass before merging:

1. Go to **Settings** tab
2. Click **Branches** (left sidebar)
3. Add rule for branch `main`
4. Enable **"Require status checks to pass before merging"**
5. Select **"cypress-tests"** workflow
6. Save

## Step 8: Review Test Results

### Workflow Runs Page

Shows all test executions:
- Date and time
- Commit message
- Pass/fail status
- Run duration

### Workflow Details

Click on specific run to see:
- Job logs
- Failed test details
- Error messages
- Console output

### Artifact Downloads

Download and view:

**cucumber-reports**: 
```bash
# Extract and open in browser
unzip cucumber-reports.zip
open cucumber-report.html
```

**cypress-videos**:
```bash
# View test recordings
unzip cypress-videos.zip
# Open .mp4 files in media player
```

**cypress-screenshots**:
```bash
# View failure screenshots
unzip cypress-screenshots.zip
# Open .png files in image viewer
```

## Step 9: Configure Branch Rules (Recommended)

### Protect Main Branch

1. Go to **Settings** → **Branches**
2. Click **Add rule**
3. Branch name pattern: `main`
4. Enable:
   - ✓ Require status checks to pass
   - ✓ Require branches to be up to date
   - ✓ Dismiss stale review approvals
5. Select required status checks: `cypress-tests`
6. Save rules

## Step 10: Set Up Notifications (Optional)

1. Go to **Settings** → **Notifications**
2. Choose notification preferences:
   - Participating
   - Watching
   - Email settings
3. Enable workflow failure notifications

## Common Issues & Solutions

### Workflow Not Running

**Issue**: Workflow file not being recognized
**Solution**:
- Verify `.github/workflows/cypress-tests.yml` exists
- Check file path is exactly `.github/workflows/`
- Ensure YAML syntax is correct
- Commit and push changes

### npm Dependencies Failing

**Issue**: `npm install` fails in workflow
**Solution**:
- Verify `package.json` exists in root
- Check all dependencies are listed
- Run locally: `npm install`
- Commit `package-lock.json`

### Tests Timing Out

**Issue**: Tests exceed 30-minute limit
**Solution**:
- Optimize test suite
- Run tests in parallel (future enhancement)
- Reduce number of test scenarios
- Increase `pageLoadTimeout` in cypress.config.ts

### Artifact Upload Failing

**Issue**: Artifacts not uploading
**Solution**:
- Check test execution directories exist
- Verify paths in workflow YAML
- Check disk space availability
- Review workflow logs for errors

## Workflow Monitoring

### View Workflow Runs

```
GitHub Repo → Actions → Cypress BDD Tests → Workflow Runs
```

Each run shows:
- ✓ Passed / ✗ Failed status
- Date and time executed
- Commit it was triggered from
- Branch name
- Run duration

### Download Artifacts

Artifacts are available for 30 days:
- Use **Download** button on workflow page
- Each artifact is a .zip file
- Extract locally to view results

## Next Steps

1. ✓ Repository created and configured
2. ✓ Initial commit pushed
3. ✓ GitHub Actions workflow verified
4. → Run first workflow test manually
5. → Configure branch protection rules
6. → Set up notifications
7. → Integrate with team workflow

## Repository Links

- **Repository**: `https://github.com/YOUR_USERNAME/cypress-project-2`
- **Actions**: `https://github.com/YOUR_USERNAME/cypress-project-2/actions`
- **Workflow**: `https://github.com/YOUR_USERNAME/cypress-project-2/blob/main/.github/workflows/cypress-tests.yml`

## Team Collaboration

### Pulling Latest Changes

```bash
git pull origin main
npm install
npm run cy:run
```

### Contributing Tests

```bash
# Create feature branch
git checkout -b feature/new-test-scenario

# Make changes and commit
git add .
git commit -m "Add new test scenario for feature X"

# Push to GitHub
git push origin feature/new-test-scenario

# Create Pull Request on GitHub
# Workflow runs automatically
# Merge after tests pass
```

## Troubleshooting Commands

```bash
# Check git status
git status

# View recent commits
git log --oneline -5

# Push changes
git push origin main

# Pull latest changes
git pull origin main

# Check GitHub Actions logs
# (In browser: GitHub → Actions → Click workflow run)
```

## Support

For GitHub Actions documentation: https://docs.github.com/en/actions
For Cypress CI documentation: https://docs.cypress.io/guides/continuous-integration/introduction
