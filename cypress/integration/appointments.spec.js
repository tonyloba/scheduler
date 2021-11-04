describe("Appointments", () => {
  beforeEach(() => {
    cy.request("GET", "api/debug/reset")
    
    cy.visit("/");
    cy.contains("Monday");
   });

   ///  CREATE  ///

  it("should book an interview", () => {
    // Clicks on the "Add" button for empty appointment
    cy.get("[alt='Add']")
    .first()
    .click()
  
    // After click, enter name into input field
    cy.get("[data-testid=student-name-input").type("Lydia Miller-Jones");

    // Choose an interviewer
    cy.get("[alt='Sylvia Palmer']")
    .click()

    // Click the save button
    cy.contains("Save")
    .click()

    // Confirm booked appointment
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

////  EDIT  ///////

  it("should edit an interview", () => {
    // Clicks on the "Edit" button in first appointment
    cy.get("[alt='Edit']")
    .first()
    .click({ force: true })
    
    // After click, enter name into input field
    cy.get("[data-testid=student-name-input")
    .clear()
    .type("Kendall Rowe");

    // // Choose an interviewer
    cy.get("[alt='Tori Malcolm']")
    .click()

    // // Click the save button
    cy.contains("Save")
    .click()

    // // Confirm booked appointment
    cy.contains(".appointment__card--show", "Kendall Rowe");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });


///// CANCEL   //////

  it("should cancel an interview", () => {
    // Clicks on  "Delete" button 
    cy.get("[alt='Delete']")
    .first()
    .click({ force: true })

    // // Click  confirm button
    cy.contains(".button--danger", "Confirm")
    .click()

    // // Confirm deleting 
    cy.contains("DELETING").should("exist");

    // Confirm deleting appointment been gone
    cy.contains("DELETING").should("not.exist");


    // Confirm appointment has been removed
    cy.contains(".appointment__card--show", "Archie Cohen")
    .should("not.exist");
  });
});