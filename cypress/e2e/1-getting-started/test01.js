// Assuming you have already set up Cypress for your project

// Define a function to load test data from a JSON file
const loadTestDataFromJSON = () => {
    cy.fixture('test_data.json').as('testData'); // Load test data and alias it as 'testData'
}

describe('Test Data Loading', () => {
    before(() => {
        // Load the test data once before running the tests
        loadTestDataFromJSON();
        
    });

    it('Should load and use test data', function () {
        // Access the test data using the alias 'testData'
        const testData = this.testData;
        cy.log(testData)
        // Assertion: Ensure test data is loaded
        expect(testData).to.not.be.null;

        // Assertion: Ensure test data has no duplicates
        // const uniqueTestData = Array.from(new Set(testData));
        // expect(testData).to.deep.equal(uniqueTestData);

        // You can use 'testData' for your testing scenarios.
    });

    it('Should access data by a specific key', function () {
        // Access the test data using the alias 'testData'
        const testData = this.testData;

        // Example: Get data by a specific key (e.g., 'test_case_name')
        // const dataByKey = testData.filter(item => item.test_case_name);

        // Assertion: Ensure data is retrieved by the specified key
        // expect(dataByKey.length).to.be.greaterThan(0);
    });
});
