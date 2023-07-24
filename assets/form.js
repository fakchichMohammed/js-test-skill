// Data representing the opportunity status options
const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: "1. Initial Contact",
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: "2. Demonstration",
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: "3. Proposal",
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: "4. Negotiation",
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: "5. Order",
    SUCCESS: 100,
  },
];

// Class representing the Form Component
const FormComponent = class {
  constructor() {
    // DOM elements of the form and output div
    this.form = document.querySelector("form");
    this.selectStatus = this.form.querySelector('select[name="status"]');
    this.inputSuccess = this.form.querySelector('input[name="success"]');
    this.outputDiv = document.querySelector(".output");

    // Event listeners for select change and form submission
    this.selectStatus.addEventListener("change", () =>
      this.updateSuccessValue()
    );
    this.form.addEventListener("submit", (event) =>
      this.handleFormSubmit(event)
    );
  }
  start() {
    // Start modifying the form elements here!
    // You are allowed to add extra methods, properties or change the constructor of this class
  }

  // Method to update the "Success" input value based on the selected status
  updateSuccessValue() {
    // TODO
  }

  // Method to handle form submission
  handleFormSubmit(event) {
    // TODO
  }
};

// Create an instance of FormComponent and start it
const fc = new FormComponent();
fc.start();
