import fs from "node:fs";

if (fs.existsSync(".output/public")) {
  fs.mkdirSync("dist/client", { recursive: true });
  fs.cpSync(".output/public", "dist/client", { recursive: true });
  fs.cpSync(".output/public", "dist", { recursive: true });
  console.log("Successfully mirrored .output/public to dist/client and dist");
}
