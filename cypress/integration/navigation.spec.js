describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navigate to Tuesday", () => {
    cy.visit("/");
    // cy.contains("day-list__item day-list__item--selected", "Tuesday").click()
    // .should("have.css", "day-list__item--selected");

  });

  it("should highlight Tuesday when selected", () => {

    cy.contains("li", "Tuesday").should("have.css", "background-color", "rgba(0, 0, 0, 0)");
  });
});
