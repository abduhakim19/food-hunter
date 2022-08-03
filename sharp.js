const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/assets/images/');
const destination = path.resolve(__dirname, 'src/public/assets/images/');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    sharp(`${target}/${image}`)
      .resize(680)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-mobile.jpg`));

    sharp(`${target}/${image}`)
      .resize(1110)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-tablet.jpg`));

    sharp(`${target}/${image}`)
      .resize(1300)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-desktop.jpg`));

    sharp(`${target}/${image}`)
      .resize(1800)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-xl.jpg`));
  });
