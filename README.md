# Screen-Capturing-Extension

Very barebones experiment at trying to use either html2canvas or html-to-image libraries to save an image of an element selection of a webpage.

## Setup

Currently this extension only works as a chrome developer extension.

Steps:

1. Clone this repository
2. In the project root run: `npm install && npm run build`
3. In Google Chrome go to: chrome://extensions/
4. Turn on "Developer mode" in the top right
5. Click on the "Load unpacked" button in the top left and select cloned project folder as the extension directory
6. Find the extension added to your extensions.

## Usage

1. Click on the extension icon in the toolbar
2. Click on the Capture Image button

## Notes

As this was mostly an experiment into how feasible it would be to package the two image downloading libaries mentioned above into a browser extension the specific image download options are commented out in `src.js`. To try them out, uncomment the specific line you want to try, run `npm run build` (or `npm start` to start a server that watches changes to the `src.js` file), and then reload the extension in the chrome extensions page (there is an update button at the top left of the page and a refresh icon next in the extension entry).

Unfortunately, I found that issues related to not loading images and css made this idea quite difficult to pursue at this current point in time.
