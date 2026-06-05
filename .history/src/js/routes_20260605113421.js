function renderPage(title, text) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="box">
      <h2 class="title is-4">${title}</h2>
      <p>${text}</p>
    </div>
  `;
}

export const routes = {
  "#/overview": () => renderPage("Overview", "Welcome to the overview page."),
  "#/search": () => renderPage("Search", "This is the search page."),
  "#/calculation": () =>
    renderPage("Calculation", "This is the calculation page."),
  "#/books": () => renderPage("Books", "This is the books page."),
  "#/contact": () => renderPage("Contact", "This is the contact page."),
  "#/404": () => renderPage("404", "Page not found."),
};
