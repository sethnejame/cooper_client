describe("User can log in", () => {
  it("user logs in successfully", () => {
    cy.visit("http://localhost:3001");
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("sethnejame@gmail.com");
      cy.get("#password").type("password");
      cy.get("button").click();
    });
    cy.contains("Hello, sethnejame@gmail.com!");
  });

  it("user cant log in with invalid credentials", () => {
    cy.visit("http://localhost:3001");
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("wrongpassword");
      cy.get("button").click();
    });
    cy.contains("Invalid login credentials. Please try again.");
  });
});
