// Test suite for FormComponent
QUnit.module("FormComponent", function (hooks) {
  // This function will be executed before each test case
  hooks.beforeEach(function (assert) {
    // Create a new form element for each test
    this.form = document.createElement("form");
    // Create a new select element for each test and add it to the form
    this.select = document.createElement("select");
    this.select.name = "status";
    this.form.appendChild(this.select);
    // Create a new input element for each test and add it to the form
    this.input = document.createElement("input");
    this.input.type = "number";
    this.input.name = "success";
    this.form.appendChild(this.input);
    // Create a new output div for each test and add it to the form
    this.output = document.createElement("div");
    this.output.className = "output";
    this.output.textContent = "Waiting for form submit..."; // Set initial value
    this.form.appendChild(this.output);

    // Set the form property of the FormComponent instance to the new form element
    this.fc = new FormComponent();
    this.fc.form = this.form;
    // Set the selectStatus property of the FormComponent instance to the new select element
    this.fc.selectStatus = this.select;
    // Set the inputSuccess property of the FormComponent instance to the new input element
    this.fc.inputSuccess = this.input;
    // Set the outputDiv property of the FormComponent instance to the new output div
    this.fc.outputDiv = this.output;

    // Load the status options to initialize the select element
    this.fc.loadStatusOptions();
  });

  // Test case for loadStatusOptions method
  QUnit.test("Test loadStatusOptions", function (assert) {
    // Verify that the select element has options after loading status options
    assert.ok(this.select.children.length > 0, "Select element has options.");
  });

  // Test case for updateSuccessValue method
  QUnit.test("Test updateSuccessValue", function (assert) {
    // Set the select value to 3 (STATUS: "3. Proposal")
    this.select.value = "3";

    // Call the updateSuccessValue method explicitly to update the inputSuccess.value
    this.fc.updateSuccessValue();

    // Check if the inputSuccess.value is updated correctly
    assert.strictEqual(
      this.input.value,
      "50",
      "Input success value is correctly updated."
    );
  });

  // Test case for handleFormSubmit method
  QUnit.test("Test handleFormSubmit", function (assert) {
    // Set the select and input values to 1 (STATUS: "1. Initial Contact")
    this.select.value = "1";
    this.input.value = "0";

    // Trigger form submission manually using the submit() method on the form element
    const event = new Event("submit");
    this.form.dispatchEvent(event);

    // Call the handleFormSubmit method directly to ensure it's executed during form submission
    this.fc.handleFormSubmit(event);

    // Check if the outputDiv textContent is set correctly
    const expectedFormData = JSON.stringify({
      status: 1,
      success: 0,
    });
    assert.strictEqual(
      this.output.textContent,
      expectedFormData,
      "Output text is correct."
    );
  });
});
