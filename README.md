# Cypress Chrome Recorder Extension

> 🔖 **Official Cypress Extension for Chrome DevTools Recorder.** <br/>
> This project is maintained by the Cypress Team.

<p align="center">
  <a href="https://cypress.io">
    <img width="140" alt="Cypress Logo" src="https://raw.githubusercontent.com/cypress-io/cypress/develop/npm/cypress-schematic/src/svgs/built-by-cypress.svg" />
    </a>
</p>

<img width="1009" alt="export-as-cypress" src="https://user-images.githubusercontent.com/5917927/185565270-2f3e9b34-4432-46a3-bafb-0cfe2e53377b.png">

---

Add [this Chrome Extension](https://chrome.google.com/webstore/detail/cypress-chrome-recorder/fellcphjglholofndfmmjmheedhomgin) to export DevTools Recordings as Cypress Tests directly from the [DevTools Recorder Panel](https://goo.gle/devtools-recorder).

## Usage

1. [Create a new recording](https://goo.gle/devtools-recorder#record) via the Recorder panel
2. Hover over the [export](https://goo.gle/devtools-recorder-eference/#export-flows) icon
3. Click "Export as a Cypress Test"
4. Save file as {testName}.cy.{ts.js}

## Testing

1. Clone the repo
2. Visit chrome://extensions
3. Enable "Developer mode" via toggle switch in upper right corner
4. Click "Load unpacked" button in upper left corner
5. Select the previously cloned directory

# Export in bulk programmatically
Alternatively, use the [@cypress/chrome-recorder](https://github.com/cypress-io/cypress-chrome-recorder) CLI to export DevTools Recordings as Cypress Tests in bulk programmatically.
