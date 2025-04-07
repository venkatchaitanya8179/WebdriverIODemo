const calculatorPage = require('../pageobjects/retirementCal.page');
const testData = require('../data/formData.json');

describe('Securian Retirement Calculator', () => {
    beforeEach(async () => {
        await calculatorPage.open();
    });

    it('should submit form with required fields only', async () => {
        await calculatorPage.fillRequiredFields(testData);
        await calculatorPage.submitForm();
        await expect(calculatorPage.resultsSection).toBeDisplayed();
    });

    it('should toggle Social Security fields based on selection', async () => {
        await calculatorPage.toggleSocialSecurity(false);
        await expect(calculatorPage.socialSecurityOverride).not.toBeDisplayed();

        await calculatorPage.toggleSocialSecurity(true);
        await expect(calculatorPage.socialSecurityOverride).toBeDisplayed();
    });

    it('should submit form with all fields filled', async () => {
        await calculatorPage.fillAllFields(testData);
        await calculatorPage.submitForm();
        await expect(calculatorPage.resultsSection).toBeDisplayed();
    });

    it('should update default calculator values', async () => {
        await calculatorPage.updateDefaultValues(testData);
        await calculatorPage.submitForm();
        await expect(calculatorPage.resultsSection).toBeDisplayed();
    });
});