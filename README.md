# MedAtlas

**Find the right device for your health**

MedAtlas is an educational directory intended to make medical-device knowledge easier to explore. Visitors can start from a health area, search by a familiar concern or device name, and open a plain-language guide to learn what a device does and how it is generally used.

## What the site includes

- A responsive blue-themed homepage introducing the library and linking to health areas.
- A separate device library with guides grouped into 15 health areas. The current catalog contains 100 device guides.
- Search, category filters, featured or A–Z sorting, grid and list views, and device-guide pop-ups.
- Guide sections for a device overview, general-use information, brand examples, representative product imagery, model comparisons, and learning resources where available.
- A light/night theme toggle. The selected theme is stored in browser `localStorage`.
- An About Us page introducing founder and developer Ankush Kumar, plus a contact form.

## Pages and main files

| File | Purpose |
| --- | --- |
| `index.html` | Homepage, hero, health-area links, and project principles |
| `device-library.html` | Searchable and filterable device catalog page |
| `about.html` | Founder information and contact form |
| `app.js` | Health-area and device data, model examples, product imagery, guide content, and library interactions |
| `styles.css` | Shared layout, responsive styling, and light/night themes |
| `theme.js` | Theme toggle and browser preference storage |
| `about.css`, `about.js` | About-page styling and contact-form client-side validation |
| `assets/` | Logo favicon, founder photo, and homepage/category artwork |

## Run locally

MedAtlas is a static site; there is no build step or package installation.

1. Open a terminal in the project root.
2. Start a local static server with Python:

   ```powershell
   py -m http.server 8000
   ```

3. Visit [http://localhost:8000](http://localhost:8000).

Stop the server with `Ctrl+C` in the terminal.

## Updating the device library

Device and health-area content is maintained in `app.js`. The original device entries are in the `devices` array; additional catalog entries are in `additionalDevices`. Brand model examples and comparison points are defined in `comparisonProfiles` and `comparisonFeatures`. Representative device photos are mapped in `devicePhotos` and `researchedDevicePhotos`.

When adding or editing an entry, keep its device ID consistent across the data maps, add an illustration mapping where appropriate, and use model-specific sources where available. Some product images are representative of a device type rather than the exact model shown in a brand card. Prices and availability can change; entries without a verifiable public listing are labeled as quote-based. Confirm exact specifications, local availability, and regulatory status against the manufacturer and local labeling.

## Contact form and privacy

The About Us form submits to FormSubmit at `durdentyler168@gmail.com`. It collects name, age, sex, nationality, a Gmail address, phone number, and message. The form includes required-field and Gmail-format checks in the browser and a honeypot field. FormSubmit is an external service, so its delivery, spam controls, and data-handling terms apply. First-time FormSubmit delivery may require activating the recipient address through its confirmation email.

Do not enter medical records or other sensitive health information in the contact form. Client-side validation is a usability check and can be bypassed; it is not a substitute for server-side validation or a dedicated backend if the form’s security or data-handling requirements change.

## Medical information note

MedAtlas is for general education. It is not a diagnostic tool, product endorsement, or substitute for advice from a qualified healthcare professional. Device use, indications, specifications, availability, and regulation vary by model and country. Follow the manufacturer’s instructions and guidance from the care team.

The site links to public medical-device references including the World Health Organization, the U.S. Food and Drug Administration, and the European Medical Device Nomenclature. Device and product details should be reviewed against current manufacturer information before publication or use.
