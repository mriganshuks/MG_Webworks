const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'mg-webworks-logo.png');

if (!fs.existsSync(inputPath)) {
  console.error("Input logo not found at public/mg-webworks-logo.png");
  process.exit(1);
}

async function generateIcons() {
  try {
    // Basic favicon sizes
    await sharp(inputPath).resize(16, 16).toFile(path.join(__dirname, 'public', 'favicon-16x16.png'));
    await sharp(inputPath).resize(32, 32).toFile(path.join(__dirname, 'public', 'favicon-32x32.png'));
    
    // Apple touch icon (also place in app/ for Next.js app router convention)
    await sharp(inputPath).resize(180, 180).toFile(path.join(__dirname, 'public', 'apple-touch-icon.png'));
    await sharp(inputPath).resize(180, 180).toFile(path.join(__dirname, 'src', 'app', 'apple-icon.png'));
    
    // Android Chrome sizes
    await sharp(inputPath).resize(192, 192).toFile(path.join(__dirname, 'public', 'android-chrome-192x192.png'));
    await sharp(inputPath).resize(512, 512).toFile(path.join(__dirname, 'public', 'android-chrome-512x512.png'));

    // Next.js App Router primary icon
    // Place a high-res version in src/app/icon.png
    await sharp(inputPath).resize(512, 512).toFile(path.join(__dirname, 'src', 'app', 'icon.png'));

    // Generate .ico for legacy browsers
    // Sharp does not directly support .ico, but we can generate a 32x32 png and rename it (browsers support png as .ico often, or we skip .ico and just rely on Next.js icon.png)
    // Actually, we'll just copy public/favicon-32x32.png to public/favicon.ico
    fs.copyFileSync(path.join(__dirname, 'public', 'favicon-32x32.png'), path.join(__dirname, 'public', 'favicon.ico'));

    console.log("Successfully generated all icons.");
  } catch (err) {
    console.error("Error generating icons:", err);
    process.exit(1);
  }
}

generateIcons();
