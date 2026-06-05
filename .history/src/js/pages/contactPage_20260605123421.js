import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderContactPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    id: "contact",
    title: t("contact.title"),
    content: `
      <p>${t("contact.welcome")}</p>
    `,
  });
}
