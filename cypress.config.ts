import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

async function setupNodeEvents(on: any, config: any) {
    await addCucumberPreprocessorPlugin(on, config);
    on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
    }));
    return config;
}

export default defineConfig({
    e2e: {
        baseUrl: 'https://practicesoftwaretesting.com',
        specPattern: 'cypress/e2e/**/*.{cy.js,feature}',
        supportFile: 'cypress/support/e2e.js',
        fixturesFolder: 'cypress/fixtures',
        screenshotsFolder: 'cypress/screenshots',
        videosFolder: 'cypress/videos',
        video: true,
        screenshotOnRunFailure: true,
        viewportWidth: 1280,
        viewportHeight: 800,
        defaultCommandTimeout: 8000,
        pageLoadTimeout: 30000,
        retries: { runMode: 1, openMode: 0 },
        env: { cucumberJsonReport: true },
        setupNodeEvents
    }
});
