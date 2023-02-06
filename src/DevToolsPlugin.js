import { cypressStringifyChromeRecording, stringifyParsedStep } from '@cypress/chrome-recorder';

export class RecorderPlugin {
  async stringify(recording) {
    return await cypressStringifyChromeRecording(JSON.stringify(recording));
  }

  async stringifyStep(step) {
    return await stringifyParsedStep(step);
  }
}

/* eslint-disable no-undef */
chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new RecorderPlugin(),
  /* name=*/ 'Cypress Test',
  /* mediaType=*/ 'application/javascript'
);
