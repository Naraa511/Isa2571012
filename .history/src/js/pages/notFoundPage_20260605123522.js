import { renderPageLayout } from "../layouts/pageLayout.js";
import { t } from "../i18n/i18n.js";
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
