import { renderPageLayout } from "../layouts/pageLayout.js";
import { t } from "../i18n/i18n.js";
export function renderSearchPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    id: "search",
    title: t("search.title"),
    content: `
      <p>${t("search.welcome")}</p>
    `,
  });
}
