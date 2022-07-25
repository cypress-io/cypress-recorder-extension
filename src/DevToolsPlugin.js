import {
  cypressStringifyChromeRecording,
  CypressStringifyExtension,
} from '@cypress/chrome-recorder';

export class RecorderPlugin {
  async stringify(recording) {
    return cypressStringifyChromeRecording(recording);
  }
  async stringifyStep(step) {
    return CypressStringifyExtension.stringifyStep(step);
  }
}

/* eslint-disable no-undef */
chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new RecorderPlugin(),
  /* name=*/ 'Cypress Test',
  /* mediaType=*/ 'application/javascript'
);
