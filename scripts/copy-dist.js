import fs from "node:fs";
import path from "node:path";

function copySafe(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    // Avoid recursion / copying destination into itself
    if (entry.name === "client" && src === "dist") continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copySafe(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync(".output/public")) {
  copySafe(".output/public", "dist/client");
  copySafe(".output/public", "dist");
} else if (fs.existsSync("dist")) {
  copySafe("dist", "dist/client");
  copySafe("dist", ".output/public");
}

console.log("Safely mirrored build outputs for Netlify/hosting compatibility.");
