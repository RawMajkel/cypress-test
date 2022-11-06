describe("dome google test", () => {
  beforeEach(() => {
    cy.visit("https://google.com");
  });

  it("accept", () => {
    cy.get("#L2AGLb").click(); // todo
  });

  it("search google", () => {
    cy.get('input[name="q"]').type("cypress testing");
  });
});
