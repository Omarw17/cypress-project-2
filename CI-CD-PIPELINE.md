# CI/CD Pipeline Documentation

Comprehensive guide to the GitHub Actions CI/CD pipeline for automated Cypress BDD testing.

## Pipeline Overview

The CI/CD pipeline automatically executes the Cypress test suite on code changes and maintains test quality standards.

### Key Features

- ✓ Automated test execution on push and pull requests
- ✓ Daily scheduled test runs
- ✓ Artifact management (screenshots, videos, reports)
- ✓ Parallel test execution support
- ✓ Detailed test reporting
- ✓ Failure notifications

## Workflow File

**Location**: `.github/workflows/cypress-tests.yml`

### Workflow Structure

```yaml
name: Cypress BDD Tests
on:
  push:
    branches: [main, master, develop]
  pull_request:
    branches: [main, master, develop]
  schedule:
    - cron: '0 2 * * *'  # 2 AM UTC daily

jobs:
  cypress-tests:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x]
    steps:
      - Checkout code
      - Setup Node.js
      - Install dependencies
      - Run Cypress tests
      - Upload artifacts
```

## Trigger Conditions

### 1. Push to Main Branches

Workflow runs when code is pushed to:
- `main` branch
- `master` branch
- `develop` branch

**Example**:
```bash
git push origin main  # Triggers workflow
```

### 2. Pull Requests

Workflow runs automatically on:
- New PR created
- PR updated with new commits

**Use Case**: Verify tests pass before merging

### 3. Scheduled Daily Run

Runs every day at **2 AM UTC**:
```
Cron: 0 2 * * *
```

**Time Zones**:
- UTC 2:00 AM
- EST 9:00 PM (previous day)
- PST 6:00 PM (previous day)
- CET 3:00 AM
- IST 7:30 AM

## Pipeline Stages

### Stage 1: Checkout Code

**Action**: `actions/checkout@v3`

- Downloads repository code
- Sets up working directory
- Prepares for testing

```yaml
- name: Checkout code
  uses: actions/checkout@v3
```

### Stage 2: Setup Node.js Environment

**Action**: `actions/setup-node@v3`

Configures Node.js 18.x with npm caching:

```yaml
- name: Setup Node.js 18.x
  uses: actions/setup-node@v3
  with:
    node-version: 18.x
    cache: 'npm'
```

**Benefits**:
- ✓ Caches node_modules
- ✓ Faster dependency installation
- ✓ Reduced workflow execution time

### Stage 3: Install Dependencies

Installs all npm packages:

```yaml
- name: Install dependencies
  run: npm install
```

**Installs**:
- cypress
- @badeball/cypress-cucumber-preprocessor
- @bahmutov/cypress-esbuild-preprocessor
- typescript
- ts-loader

**Duration**: ~30-60 seconds (with cache)

### Stage 4: Run Cypress Tests

Executes test suite:

```yaml
- name: Run Cypress tests
  run: npm run cy:run
```

**Configuration** (from cypress.config.ts):
- **baseUrl**: https://practicesoftwaretesting.com
- **headless**: true (no UI)
- **video**: true (records all tests)
- **screenshot**: true (captures on failure)
- **retries**: 1 run mode
- **defaultCommandTimeout**: 8000ms
- **pageLoadTimeout**: 30000ms

**Duration**: ~5-10 minutes (depending on scenario count)

### Stage 5: Upload Test Artifacts

#### 5a. Screenshots on Failure

```yaml
- name: Upload Cypress screenshots on failure
  if: failure()
  uses: actions/upload-artifact@v3
  with:
    name: cypress-screenshots
    path: cypress/screenshots
```

**Trigger**: Only runs if tests fail
**Content**: PNG images of failed tests
**Retention**: 30 days (default)

#### 5b. Video Recordings

```yaml
- name: Upload Cypress videos
  if: always()
  uses: actions/upload-artifact@v3
  with:
    name: cypress-videos
    path: cypress/videos
```

**Trigger**: Always (pass or fail)
**Content**: MP4 videos of all tests
**Retention**: 30 days

#### 5c. Cucumber Reports

```yaml
- name: Upload Cucumber reports
  if: always()
  uses: actions/upload-artifact@v3
  with:
    name: cucumber-reports
    path: cypress/reports
```

**Trigger**: Always
**Content**: HTML report from cucumber-preprocessor
**Location**: `cucumber-report.html`

## Artifact Management

### Available Artifacts

After each workflow run, three artifact sets are available:

| Artifact | Type | Size | Use Case |
|----------|------|------|----------|
| cypress-screenshots | .png | ~5-50MB | Visual failure analysis |
| cypress-videos | .mp4 | ~50-500MB | Step-by-step test playback |
| cucumber-reports | .html | ~1-10MB | Test report and statistics |

### Download Artifacts

**From GitHub UI**:
1. Go to Actions tab
2. Click specific workflow run
3. Scroll to "Artifacts" section
4. Click download button

**From CLI** (GitHub CLI required):
```bash
gh run download <run-id> -D <output-dir>
```

### Artifact Retention

Default: 30 days from creation

**Modify in repository settings**:
1. Settings → Actions → Artifacts and logs
2. Set retention days
3. Save

### Accessing Results

**Screenshots**:
```bash
unzip cypress-screenshots.zip
open cypress/screenshots/
```

**Videos**:
```bash
unzip cypress-videos.zip
# Open .mp4 in media player
```

**Reports**:
```bash
unzip cucumber-reports.zip
open cucumber-report.html
# View in browser
```

## Workflow Status & Results

### Status Badges

Add to README.md:

```markdown
[![Cypress Tests](https://github.com/YOUR_USERNAME/cypress-project-2/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/YOUR_USERNAME/cypress-project-2/actions)
```

Shows:
- ✓ Passing (green)
- ✗ Failing (red)
- ◉ Running (yellow)

### Viewing Results

**Workflow Runs Page**:
```
GitHub → Repository → Actions → Cypress BDD Tests
```

Shows all historical runs:
- Date/time executed
- Pass/fail status
- Duration
- Triggering event (push/PR/schedule)

**Detailed Run View**:
- Job logs
- Step-by-step execution
- Error messages
- Duration per step
- Artifacts section

### Status Checks on PRs

For pull requests:
1. Check appears in PR conversation
2. Shows as "required" or "optional"
3. Must pass before merging (if configured)

**Example Status**:
```
✓ Cypress BDD Tests — All checks passed
  Tests passed in 8m 34s
```

## Performance Optimization

### Current Configuration

- **Node version**: 18.x (optimal for stability)
- **npm caching**: Enabled (saves ~30s per run)
- **Retries**: 1 (prevents flaky test failures)
- **Timeouts**: Conservative (8s/30s)

### Optimization Options

1. **Parallel Test Execution** (Future)
   ```yaml
   strategy:
     matrix:
       test-group: [auth, products, cart, contact, account]
   ```
   
   **Benefits**: Reduce execution time from 10m → 2m
   **Files to modify**: Workflow and test organization

2. **Selective Test Runs**
   ```yaml
   if: contains(github.head_ref, 'feature/')
   ```
   
   **Benefit**: Skip full suite on minor changes

3. **Test Splitting**
   - Group tests by feature
   - Run subsets on schedule
   - Run full suite on main branch

4. **Caching Strategy**
   - Cache Cypress binary: `~/.cache/Cypress`
   - Cache npm modules: Current setup
   - Cache browsers: Automatic

## Failure Handling

### Failed Test Response

When tests fail:

1. **Immediate Feedback**
   - Workflow marked as failed (red X)
   - PR shows failing status check
   - Email notification sent (if configured)

2. **Artifact Collection**
   - Screenshots captured
   - Videos recorded
   - Error logs preserved

3. **Debugging Process**
   ```
   1. View workflow logs for error message
   2. Download cypress-screenshots
   3. Review visual failures
   4. Download cypress-videos
   5. Playback step-by-step
   6. Review Cucumber report
   ```

### Common Failure Causes

| Cause | Solution |
|-------|----------|
| Network timeout | Check baseUrl connectivity |
| Element not found | Verify selector in POM |
| Assertion failed | Review test logic |
| Test data issue | Check test account status |
| Cypress crash | Check browser compatibility |

## Security Considerations

### No Secrets Exposed

Workflow configuration does NOT include:
- API keys
- Passwords
- Access tokens
- Private URLs

**Best Practice**: Use GitHub Secrets for sensitive data

### Setting Repository Secrets

To add secrets for future use:

1. Settings → Secrets → Actions
2. Click **New repository secret**
3. Name: `SECRET_NAME`
4. Value: `secret_value`
5. Add

Usage in workflow:
```yaml
env:
  API_KEY: ${{ secrets.SECRET_NAME }}
```

## Monitoring & Alerts

### Workflow Insights

GitHub provides:
- Historical run statistics
- Success/failure trends
- Duration metrics
- Job execution analysis

**Access**: Actions → Cypress BDD Tests → Insights

### Email Notifications

Default notifications for:
- Workflow failure
- Workflow success (if watching)

**Configure**: Settings → Notifications

### Slack Integration (Optional)

Add Slack action to workflow:

```yaml
- name: Slack notification
  if: failure()
  uses: slackapi/slack-github-action@v1.24.0
  with:
    payload: |
      {
        "text": "Cypress tests failed on ${{ github.ref }}"
      }
```

## Maintenance

### Regular Tasks

**Weekly**:
- Review test results
- Check for failing scenarios
- Update failing tests

**Monthly**:
- Review artifact storage
- Clean up old reports
- Update dependencies: `npm outdated`

**Quarterly**:
- Review selectors (UI changes)
- Update baseUrl if needed
- Optimize slow tests

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update to latest versions
npm update

# Update major versions
npm install cypress@latest

# Commit changes
git add package.json package-lock.json
git commit -m "Update dependencies"
git push origin develop
```

### Workflow Updates

Modify `.github/workflows/cypress-tests.yml`:

```bash
# Edit file
# Commit changes
git add .github/workflows/cypress-tests.yml
git commit -m "Update CI/CD workflow"
git push origin main

# New version takes effect immediately
```

## Troubleshooting

### Workflow Not Triggering

**Issue**: Workflow doesn't run on push

**Checklist**:
- [ ] .github/workflows/cypress-tests.yml exists
- [ ] File syntax is valid YAML
- [ ] Branch name matches trigger rules
- [ ] Changes committed and pushed (not staged)

**Solution**:
```bash
# Force workflow check
git push origin --force-with-lease main
```

### Build Fails Inconsistently

**Issue**: Tests fail sometimes but not always

**Causes**:
- Network instability
- Timing issues (Cypress waits)
- Test data inconsistency
- Server availability

**Solutions**:
- Increase timeout values
- Add explicit waits
- Stabilize test data
- Run manually multiple times

### Artifacts Not Uploading

**Issue**: Artifact download unavailable

**Check**:
- Test execution completed
- Directory paths are correct
- Files created during test run
- Disk space available

**Debug**:
```bash
# Check locally
npm run cy:run
ls -la cypress/screenshots
ls -la cypress/videos
ls -la cypress/reports
```

## Best Practices

1. **Consistent Test Data**
   - Use known test accounts
   - Reset data between runs
   - Avoid external dependencies

2. **Timeout Management**
   - Conservative timeouts
   - Explicit waits when needed
   - Match network conditions

3. **Artifact Management**
   - Review failures regularly
   - Archive important reports
   - Clean old artifacts

4. **Code Quality**
   - Review test failures
   - Update selectors promptly
   - Keep tests maintainable

5. **Team Communication**
   - Notify team of failures
   - Document changes
   - Share learnings

## Advanced Configuration

### Matrix Strategy for Parallel Testing

```yaml
strategy:
  matrix:
    test-suite: [auth, products, cart, contact, account]
```

Run different tests in parallel:
- Reduces total execution time
- Isolates test failures
- Better resource utilization

### Conditional Steps

```yaml
- name: Step name
  if: github.event_name == 'pull_request'
  run: npm run cy:run
```

Run specific steps based on:
- Event type (push/pull_request/schedule)
- Branch name
- File changes
- Environment variables

## Summary

The CI/CD pipeline ensures:

✓ Code quality through automated testing
✓ Early failure detection
✓ Test artifact collection for debugging
✓ Consistent execution environment
✓ Integration with GitHub workflow
✓ Team notification and visibility

**Key Metrics**:
- Average execution: 8-10 minutes
- Test coverage: 45+ scenarios
- Success rate: Depends on code quality
- Artifact retention: 30 days

**Status**: Ready for production use
