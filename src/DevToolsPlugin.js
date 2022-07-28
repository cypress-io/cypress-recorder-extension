import { cypressStringifyChromeRecording } from '@cypress/chrome-recorder';

export class RecorderPlugin {
  async stringify(recording) {
    return await cypressStringifyChromeRecording(JSON.stringify(recording));
  }

  // TODO: provide exported step transform function
  async stringifyStep(step) {
    return JSON.stringify(step);
  }
}

/* eslint-disable no-undef */
chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new RecorderPlugin(),
  /* name=*/ 'Cypress Test',
  /* mediaType=*/ 'application/javascript'
);
