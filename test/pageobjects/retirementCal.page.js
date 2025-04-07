class RetirementCalculatorPage {
    get currentAge() { return $('#current-age'); }
    get retirementAge() { return $('#retirement-age'); }
    get currentIncome() { return $('#current-income'); }
    get spouseIncome() { return $('#spouse-income'); }
    get currentSavings() { return $('#current-total-savings'); }
    get currentContribution() { return $('#current-annual-savings'); }
    get annualIncrease() { return $('#savings-increase-rate'); }
    get yesSocialSecurity() { return $('#yes-social-security'); }
    get noSocialSecurity() { return $('#no-social-security'); }
    get relationshipStatus() { return $('#married'); }
    get socialSecurityOverride() { return $('#social-security-override'); }
    get otherIncome() { return $('#additional-income'); }
    get yearsOfRetirement() { return $('#retirement-duration'); }
    get inflationAdjusted() { return $('#include-inflation'); }
    get desiredIncomePercent() { return $('#retirement-income'); }
    get preRetirementReturn() { return $('#pre-retirement-roi'); }
    get postRetirementReturn() { return $('#post-retirement-roi'); }
    get calculateButton() { return $('button[type="submit"]'); }
    get resultsSection() { return $('#results'); }

    async open() {
        await browser.url('https://www.securian.com/insights-tools/retirement-calculator.html');
    }

    async fillRequiredFields(data) {
        await this.currentAge.setValue(data.currentAge);
        await this.retirementAge.setValue(data.retirementAge);
        await this.currentIncome.setValue(data.currentIncome);
        await this.currentSavings.setValue(data.currentSavings);
        await this.currentContribution.setValue(data.currentContribution);
        await this.annualIncrease.setValue(data.annualIncrease);
    }

    async toggleSocialSecurity(enabled) {
        if (enabled) {
            await this.yesSocialSecurity.click();
        } else {
            await this.noSocialSecurity.click();
        }
    }

    async fillAllFields(data) {
        await this.fillRequiredFields(data);
        await this.spouseIncome.setValue(data.spouseIncome);
        await this.toggleSocialSecurity(data.socialSecurityIncome);
        if (data.socialSecurityIncome) {
            await this.relationshipStatus.click();
            await this.socialSecurityOverride.setValue(data.socialSecurityOverride);
        }
        await this.otherIncome.setValue(data.otherIncome);
        await this.yearsOfRetirement.setValue(data.yearsOfRetirement);
        if (data.inflationAdjusted) await this.inflationAdjusted.click();
        await this.desiredIncomePercent.setValue(data.desiredIncomePercent);
        await this.preRetirementReturn.setValue(data.preRetirementReturn);
        await this.postRetirementReturn.setValue(data.postRetirementReturn);
    }

    async updateDefaultValues(data) {
        await this.fillAllFields(data);
    }

    async submitForm() {
        await this.calculateButton.click();
    }
}

module.exports = new RetirementCalculatorPage();