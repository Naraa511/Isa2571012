import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderNotFoundPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    id: "notFound",
    title: t("notFound.title"),
    content: `
      <p>${t("notFound.welcome")}</p>
    `,
  });
}
