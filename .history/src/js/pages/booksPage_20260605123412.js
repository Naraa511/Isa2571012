import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderBooksPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    id: "books",
    title: t("books.title"),
    content: `
      <p>${t("books.welcome")}</p>
    `,
  });
}
