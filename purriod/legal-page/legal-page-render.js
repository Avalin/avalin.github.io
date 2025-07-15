const pageHeader = document.getElementById("page-header");
const effectiveDate = document.getElementById("effective-date");
const nav = document.getElementById("section-nav");
const sectionsContainer = document.getElementById("policy-sections");
const footerText = document.getElementById("footer-text");

pageHeader.textContent = legalPageContent.header;
effectiveDate.textContent = legalPageContent.effectiveDateLabel;
footerText.textContent = legalPageContent.footerText;

legalPageContent.sections.forEach((section) => {
  if (section.navLabel) {
    const navLink = document.createElement("a");
    navLink.href = `#${section.id}`;
    navLink.textContent = section.navLabel;
    nav.appendChild(navLink);
  }

  const card = document.createElement("section");
  card.className = "card";
  card.id = section.id;

  if (section.sectionLabel) {
    const label = document.createElement("span");
    label.className = "section-label";
    label.textContent = section.sectionLabel;
    card.appendChild(label);
  }

  const title = document.createElement("h2");
  title.textContent = section.title;
  card.appendChild(title);

  if (section.paragraphs) {
    section.paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.innerHTML = text;
      card.appendChild(p);
    });
  }

  if (section.list) {
    const ul = document.createElement("ul");

    section.list.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = item;
      ul.appendChild(li);
    });

    card.appendChild(ul);
  }

  sectionsContainer.appendChild(card);
});

if (legalPageContent.contact?.email) {
  const contactBox = document.createElement("section");
  contactBox.className = "contact-box";
  contactBox.id = "contact";

  contactBox.innerHTML = `
    <h2>${legalPageContent.contact.title || "Contact Us"}</h2>
    <p>${legalPageContent.contact.text || "If you have questions or concerns, please contact us at:"}</p>
    <p><a href="mailto:${legalPageContent.contact.email}">${legalPageContent.contact.email}</a></p>
  `;

  sectionsContainer.appendChild(contactBox);
}