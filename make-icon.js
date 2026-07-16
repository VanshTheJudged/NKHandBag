// One-off script: pads logo.png into a square 512x512 canvas for use as app/icon.png
// Run with: node make-icon.js
const sharp = require('sharp');
const path = require('path');

const input = path.join(__dirname, 'public', 'mainlogo.png');
const output = path.join(__dirname, 'app', 'icon.png');

sharp(input)
  .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({
    top: 56,
    bottom: 56,
    left: 56,
    right: 56,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .toFile(output)
  .then(() => console.log('Done — wrote', output))
  .catch((err) => console.error(err));