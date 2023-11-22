
// Define a function to load test data from a JSON file
const readJsonTestData = () => {
  // Load test data and alias it as 'testData'
  cy.fixture('test_data.json').as('testData');
}

describe('Test Data Loading', () => {
  before(() => {
    // Load the test data once before running the tests
    readJsonTestData();
  });

  it('Should load and use test data', function () {
    // Access the test data using the alias 'testData'
    const testData = this.testData;
    cy.log(JSON.stringify(testData))

    // Assertion: Ensure test data is loaded
    expect(testData).to.not.be.null;

    // log all company names without diplicates
    const testCode = this.testData.testData;
    const logCompanyNamesWithoutDuplicates = new Set();

    testCode.forEach(item => {
      logCompanyNamesWithoutDuplicates.add(item.company_name);

    });

    // Convert the Set back to an array if needed
    const logCompanyNamesWithoutDuplicatesArray = Array.from(logCompanyNamesWithoutDuplicates);
    // cy.log(logCompanyNamesWithoutDuplicatesArray.length)
    // Print the unique company names
    logCompanyNamesWithoutDuplicatesArray.forEach(companyName => {
      cy.log(companyName);
      //asserting the value count without duplicates
      expect(logCompanyNamesWithoutDuplicatesArray.length).to.equal(3);
    });

  });


});
