import { t } from "../i18n/i18n.js";

export function mountFooter(root) {
  const partners = [
    {
      icon: "afaci.png",
      alt: "AFACI",
      url: "https://rda.go.kr/afaci/site/project/view?pageId=02020401&pageName=APPT#submenu02020401",
      text: t("footer.afaci"),
    },
    {
      icon: "muls.png",
      alt: "MULS",
      url: "https://muls.edu.mn",
      text: t("footer.muls"),
    },
    {
      icon: "rda.png",
      alt: "RDA",
      url: "https://www.rda.go.kr/foreign/ten2/",
      text: t("footer.rda"),
    },
    {
      icon: "mfali.png",
      alt: "MOFA",
      url: "https://www.mofa.gov.mn",
      text: t("footer.mfali"),
    },
  ];

  root.innerHTML = `
    <footer class="footer app-footer">
      <div class="container">
        <div class="columns is-multiline is-centered">

          <!-- Team Members -->
          <div class="column is-12-mobile is-6-tablet is-4-desktop">
            <div class="content">
              <h3 class="title is-5">${t("footer.teamMembers")}</h3>
              <ul>
                ${partners
                  .map(
                    (partner) => `
                      <li>
                        <img
                          src="./img/icon/${partner.icon}"
                          alt="${partner.alt}"
                          class="footer-icon"
                        >
                        <a
                          class="custom-link"
                          href="${partner.url}"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ${partner.text}
                        </a>
                      </li>
                    `,
                  )
                  .join("")}
              </ul>
            </div>
          </div>

          <!-- Core Members -->
          <div class="column is-12-mobile is-6-tablet is-4-desktop">
            <div class="content">
              <h3 class="title is-5">${t("footer.coreMembers")}</h3>
              <ul>
                <li>
                  <i class="fas fa-user-tie fa-fw footer-list-icon"></i>
                  ${t("footer.projectInvestigators")}
                </li>
                <li>
                  <i class="fas fa-flask fa-fw footer-list-icon"></i>
                  ${t("footer.researchers")}
                </li>
                <li>
                  <i class="fas fa-users fa-fw footer-list-icon"></i>
                  ${t("footer.others")}
                </li>
                <li>
                  <i class="fas fa-laptop-code fa-fw footer-list-icon"></i>
                  ${t("footer.softwareDeveloper")}
                </li>
              </ul>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="column is-12-mobile is-6-tablet is-4-desktop">
            <div class="content">
              <h3 class="title is-5">${t("footer.contactInformation")}</h3>
              <ul>
                <li>
                  <i class="fas fa-university fa-fw footer-list-icon"></i>
                  ${t("footer.university")}
                </li>
                <li>
                  <i class="fas fa-map-marker-alt fa-fw footer-list-icon"></i>
                  ${t("footer.address")}
                </li>
                <li>
                  <i class="fas fa-phone fa-fw footer-list-icon"></i>
                  ${t("footer.phone")}:
                  <a class="custom-link" href="tel:+97689075531">
                    (+976) 89075531
                  </a>
                </li>
                <li>
                  <i class="fas fa-envelope fa-fw footer-list-icon"></i>
                  ${t("footer.email")}:
                  <a
                    class="custom-link"
                    href="mailto:orgilid@muls.edu.mn"
                  >
                    orgilid@muls.edu.mn
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <hr>

        <div class="has-text-centered">
          <p>
            © ${new Date().getFullYear()}
            ${t("footer.brand") || ""}
            ${t("footer.rightsReserved") || "All Rights Reserved."}
          </p>
        </div>

      </div>
    </footer>
  `;
}
