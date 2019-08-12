describe("User can log in", () => {
  it("successfully", () => {
    cy.visit("http://localhost:3001");
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/sign_in",
      response: "fixture:login.json",
      headers: {
        uid: "sethnejame@gmail.com"
      }
    });
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("sethnejame@gmail.com");
      cy.get("#password").type("password");
      cy.get("button").click();
    });
    cy.contains("Hello, sethnejame@gmail.com");
  });

  it("with invalid credentials", () => {
    cy.visit("http://localhost:3001");
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/sign_in",
      status: "401",
      response: {
        errors: ["Invalid login credentials. Please try again."],
        success: false
      }
    });
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("sethnejame@gmail.com");
      cy.get("#password").type("wrongpassword");
      cy.get("button").click();
    });
    cy.contains("Invalid login credentials. Please try again.");
  });
});
