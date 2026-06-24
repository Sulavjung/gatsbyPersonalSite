const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "../content/blogPost/Images");
const targetDir = path.join(__dirname, "../../static/images");

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;

  fs.mkdirSync(dest, { recursive: true });

  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyRecursive(sourceDir, targetDir);

console.log(`Copied images from ${sourceDir} -> ${targetDir}`);
